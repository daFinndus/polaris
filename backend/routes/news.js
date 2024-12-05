const axios = require("axios");

const {push, pull, dupes} = require('./database');

let cache = [];
let cacheLastUpdate = 0;

/**
 * This function fetches articles from the NewsAPI.
 * After fetching the articles, it pushes them to the database and updates the cache.
 * @returns {Promise<void>} A promise that resolves when the articles are fetched and pushed.
 */
const fetchArticles = async () => {
    const uri = "https://newsapi.org/v2/top-headlines";

    try {
        let response = await axios.get(uri, {
            params: {
                category: "technology", apiKey: process.env.NEWS_API_KEY
            }
        })

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
 * This function caches the articles in the cache variable.
 * It also updates the cacheLastUpdate variable with the current time.
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
 * This function returns the cache.
 * This is superior to the pull function as it does not need to wait for the database to respond.
 * @param page The page number to start the cache from.
 * @param limit The amount of articles to return.
 * @returns {Promise<*[]>} A promise that resolves with the cache.
 */
const getCachedArticles = async ({page = 1, limit = 18}) => {
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