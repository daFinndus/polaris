const axios = require("axios");
const {pushArticlesToDB, pullArticlesFromDB} = require("./database");

require('dotenv').config({path: require('path').resolve(__dirname, '../.env')});

let cachedArticles = [];

/**
 * Updates the articles in the cache and the database by fetching new articles from the NewsAPI.
 * This function might be doing a bit much, but it's only in the backend so the user does not have to wait for anything.
 * @returns {Promise<void>} A promise that resolves when the articles are updated.
 */
const updateArticles = async () => {
    let freshArticles = await fetchArticles();

    // If the cache is empty, fetch articles from the database
    // That is necessary to remove duplicates from the cache
    if (cachedArticles.length === 0) await cacheArticlesFromDB();
    const cachedURLs = new Set(cachedArticles.map(article => article.url));

    freshArticles = verifyArticles(freshArticles, cachedURLs);

    if (freshArticles.length) {
        await addDescription(freshArticles);
        await addImage(freshArticles);
        await pushArticlesToDB(freshArticles);
        await cacheArticlesFromDB();
    }
}

/**
 * Fetches articles from the NewsAPI, pushes them to the database, and updates the cache.
 * @returns {*} A promise that resolves with the fetched articles.
 */
const fetchArticles = async () => {
    const uri = "https://newsapi.org/v2/top-headlines";

    try {
        const response = await axios.get(uri, {
            params: {category: "technology", apiKey: process.env.NEWS_API_KEY}
        });

        return response.data.articles;
    } catch (err) {
        console.error("Error fetching articles:", err.stack);
    }
};

/**
 * Caches the articles from the database in the cache variable.
 * @returns {Promise<void>} A promise that resolves when the cache is updated.
 */
const cacheArticlesFromDB = async () => {
    try {
        const cachedIds = new Set(cachedArticles.map(article => article._id));
        const databaseArticles = await pullArticlesFromDB(undefined, undefined);

        cachedArticles = [
            ...cachedArticles,
            ...verifyArticles(databaseArticles, cachedIds).map(article => ({
                ...article,
                title: sliceTitle(article.title)
            }))
        ];
    } catch (err) {
        console.error("Error pulling articles from the database:", err.stack);
    }
};

/**
 * Returns the cached articles. If the cache is empty, fetches articles from the database.
 * @param {number} [page=1] - The page number to start the cache from.
 * @param {number} [limit=18] - The number of articles to return.
 * @param {string} [query=""] - The query to filter the cached articles by.
 * @returns {Promise<Object[]>} Returns the specified articles and the total amount.
 */
const getCachedArticles = async (page = 1, limit = 18, query = "") => {
    let queried = cachedArticles;
    const queryLowerCase = query.toLowerCase();

    if (query) {
        queried = cachedArticles.filter(article => {
            const title = article.title?.toLowerCase() || "";
            const description = article.description?.toLowerCase() || "";
            const sourceName = article.source?.name?.toLowerCase() || "";

            return title.includes(queryLowerCase) || sourceName.includes(queryLowerCase) || description.includes(queryLowerCase);
        });
    }

    queried.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    return [queried.slice((page - 1) * limit, page * limit), queried.length];
};

/**
 * Filters out duplicate articles by comparing already stored URLs and the new ones.
 * It also removes articles with the URL "https://removed.com".
 * @param articles - The articles to filter.
 * @param url - The url of the articles to filter out.
 * @returns {*} The filtered articles.
 */
const verifyArticles = (articles, url) => {
    return articles.filter(article => !url.has(article.url) && article.url !== "https://removed.com");
};

/**
 * Trims the title by removing everything after and including the dash.
 * @param {string} title - The title to be trimmed.
 * @returns {string} The trimmed title.
 */
const sliceTitle = (title) => {
    const dashIndex = title.lastIndexOf('-');
    return dashIndex !== -1 ? title.substring(0, dashIndex).trim() : title;
};

/**
 * Adds a random image to articles without an image.
 */
const addImage = (articles) => {
    articles.forEach(article => {
        if (!article.urlToImage) article.urlToImage = "https://source.unsplash.com/random";
    });
}

/**
 * This description adds a joke as a description to the articles.
 * @param articles - The articles to add the description to.
 * @returns {Promise<void>} A promise that resolves when the descriptions are added.
 */
const addDescription = (articles) => {
    try {
        articles.forEach(async article => {
            if (!article.description) {
                const response = await axios.get("https://v2.jokeapi.dev/joke/Programming?format=txt&type=single");
                article.description = response?.data;

                console.log("Added a joke to the article:", article.title);
            }
        });
    } catch (err) {
        console.error("Error fetching joke:", err.stack);
    }
}

module.exports = {getCachedArticles, updateArticles};