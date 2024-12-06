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
        if (cache.length === 0) {
            await cacheArticles();
        }

        let articles = response.data.articles;
        console.log("Fetched", articles.length, "articles from the NewsAPI.");

        // This snippet is used to remove duplicates from the cache
        if (articles.length > 0) {
            const ids = new Set(cache.map(article => article._id).filter(Boolean));
            articles = filterDuplicates(articles, ids);
            console.log("Filtered out", response.data.articles.length - articles.length, "duplicate articles.");
        }

        if (articles.length > 0) {
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
 * @returns {Promise<Object[]>} A promise that resolves with the cached articles.
 */
const getCachedArticles = async (page = 1, limit = 18) => {
    if (cache.length === 0) {
        console.log("Cache is empty, fetching articles from the database.");

        console.log("Going to trim titles for", cache.length, "articles.");
        cache = await pull(page, limit);

        cache = cache.map(article => ({
            ...article,
            title: sliceTitle(article.title)
        }));

        // Fetch articles asynchronously without blocking the response
        fetchArticles().catch(err => console.error("Error fetching articles:", err.message));

        return cache;
    }

    return cache.slice((page - 1) * limit, page * limit);
};

/**
 * Filters out duplicate articles from the fetched articles.
 * @param articles - The articles to filter.
 * @param ids - The existing article IDs to filter out.
 * @returns {*} The filtered articles.
 */
const filterDuplicates = (articles, ids) => {
    return articles.filter(article => article._id && !ids.has(article._id));
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