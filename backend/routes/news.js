const axios = require("axios");

const {push, pull} = require('./database');

let cache = [];
const uri = "https://newsapi.org/v2/top-headlines";

/**
 * Fetches articles from the NewsAPI, pushes them to the database, and updates the cache.
 * @returns {Promise<void>} A promise that resolves when the articles are fetched and pushed.
 */
const fetchArticles = async () => {
    try {
        const response = await axios.get(uri, {
            params: {category: "technology", apiKey: process.env.NEWS_API_KEY}
        });

        // If the cache is empty, fetch articles from the database
        // That is necessary to remove duplicates from the cache
        if (cache.length === 0) await cacheArticles();
        const urls = new Set(cache.map(article => article.url).filter(Boolean));

        let articles = response.data.articles;
        articles = filterDuplicates(articles, urls);
        console.log("Fetched", response.data.articles.length, "articles from the NewsAPI and filtered out", response.data.articles.length - articles.length, "duplicate articles.");

        if (articles.length) {
            await push(articles);
            await cacheArticles();
        }

        console.log("Currently", cache.length, "articles in the cache.");
    } catch (err) {
        console.error("Error fetching articles:", err.message);
    }
};

/**
 * Caches the articles from the database in the cache variable.
 * @returns {Promise<void>} A promise that resolves when the cache is updated.
 */
const cacheArticles = async () => {
    const cachedIds = new Set(cache.map(article => article._id));

    try {
        const databaseArticles = await pull(undefined, undefined);
        const newDatabaseArticles = filterDuplicates(databaseArticles, cachedIds);

        console.log("Going to trim titles for", newDatabaseArticles.length, "articles.");
        cache = [...cache, ...newDatabaseArticles.map(article => ({
            ...article,
            title: sliceTitle(article.title)
        }))];

    } catch (err) {
        console.error("Error pulling articles from the database:", err.message);
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
    let queried = cache;

    if (query) {
        queried = cache.filter(article => {
            const title = article.title?.toLowerCase() || "";
            const description = article.description?.toLowerCase() || "";
            const sourceName = article.source?.name?.toLowerCase() || "";

            return title.includes(query.toLowerCase()) || sourceName.includes(query.toLowerCase()) || description.includes(query.toLowerCase());
        });
    }

    queried.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    return [queried.slice((page - 1) * limit, page * limit), queried.length];
};

/**
 * Filters out duplicate articles from the fetched articles.
 * @param articles - The articles to filter.
 * @param url - The url of the articles to filter out.
 * @returns {*} The filtered articles.
 */
const filterDuplicates = (articles, url) => {
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

module.exports = {fetchArticles, cacheArticles, getCachedArticles};