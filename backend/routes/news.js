const axios = require("axios");

const {push, pull} = require('./database');

let cache = [];
let cacheLastUpdate = 0;

/**
 * Fetches articles from the NewsAPI, pushes them to the database, and updates the cache.
 * @returns {Promise<void>} A promise that resolves when the articles are fetched and pushed.
 */
const fetchArticles = async () => {
    const uri = "https://newsapi.org/v2/top-headlines";

    try {
        const response = await axios.get(uri, {
            params: {category: "technology", apiKey: process.env.NEWS_API_KEY}
        });

        await cacheArticles();

        let articles = response.data.articles;
        console.log("Fetched", articles.length, "articles from the NewsAPI.");

        // This snippet is used to remove duplicates from the cache
        if (articles.length > 0) {
            const titles = new Set(cache.map(article => article.title).filter(Boolean));
            articles = articles.filter(article => article.title && !titles.has(article.title));
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
 * Caches the articles in the cache variable and updates the cacheLastUpdate variable with the current time.
 * @returns {Promise<void>} A promise that resolves when the cache is updated.
 */
const cacheArticles = async () => {
    try {
        cache = await pull(undefined, undefined);
        cacheLastUpdate = Date.now();

        console.log("Cache updated at", new Date(cacheLastUpdate).toISOString());
    } catch (err) {
        console.error("Error caching articles:", err.message);
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

        cache = await pull(page, limit);

        // Fetch articles asynchronously without blocking the response
        fetchArticles().catch(err => console.error("Error fetching articles:", err.message));

        return cache;
    }

    return cache.slice((page - 1) * limit, page * limit);
};

module.exports = {fetchArticles, cacheArticles, getCachedArticles};