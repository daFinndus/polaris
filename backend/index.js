const cors = require('cors');
const axios = require('axios');
const express = require('express');

const {dupes} = require("./routes/database");
const {fetchArticles, getCachedArticles} = require("./routes/news");

require('dotenv').config({path: __dirname + '/.env'});

const app = express();
const port = process.env.PORT;

/**
 * Middleware to enable CORS with specified origins and methods.
 */
app.use(cors({
    origin: ["http://localhost:3000", process.env.LOCAL_IP, process.env.PUBLIC_IP, process.env.VERCEL_URL],
    methods: ["GET"],
}));

/**
 * Route handler for the root path.
 * Responds with a 404 status and a message indicating the page does not exist.
 */
app.get('/', (_, res) => res.status(404).send('Sorry, this page does not exist! Nice for you being here though.'));

/**
 * Route handler for the /backend path.
 * Responds with a message indicating the backend is running.
 */
app.get('/backend', (_, res) => res.send('Hello from backend!'));

/**
 * Route handler for specific database functions.
 * Right now it's only for sorting out duplicates.
 */
app.get("/database/dupes", async (_, res) => {
    try {
        const duplicates = await dupes();
        res.status(200).json({success: true, duplicates: duplicates});
    } catch (err) {
        res.status(500).send("Failed to fetch duplicates.");
        console.log("Error fetching duplicates:", err.message);
    }
});

/**
 * Route handler for fetching articles with pagination.
 * Responds with the articles and pagination information or an error message.
 */
app.get('/api/articles', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 18;
    const query = req.query.query || "";

    console.log("Received parameters: page is", page, "and limit is", limit, "and query is", query || "empty");

    try {
        const [articles, total] = await getCachedArticles(page, limit, query);

        console.log("Total is", total)

        console.log("Successfully gave", articles.length, "articles to the client.");

        res.status(200).json({
            success: true,
            total: total,
            articles: articles,
            query: query,
            pagination: {page: page, limit: limit}
        });
    } catch (err) {
        res.status(500).send("Failed to fetch articles.");
        console.log("Error fetching articles:", err.message);
    }
});

/**
 * Checks if the port is defined in the environment variables.
 * If not, logs an error and exits the process.
 * Otherwise, starts the server on the specified port.
 */
if (!port) {
    console.error('No port in environment variables found.');
    process.exit(1);
} else {
    app.listen(port, () => console.log(`Server running from port: ${port}\n`));
}

/**
 * This function reloads the backend on render.
 * It does that by pinging the backend every 5 minutes.
 * This is to avoid renders spin down issue.
 */
const reload = () => {
    const url = process.env.RENDER_URL;
    console.log("Reloading website on:", url);

    axios.get(url + '/backend')
        .then(response => console.log(`Reloaded at ${new Date().toISOString()}: Status ${response.status}`))
        .catch(error => console.error(`Error reloading at ${new Date().toISOString()}:`, error.message));
};

// Set intervals for reloading the backend and fetching articles
setInterval(reload, 1000 * 60 * 5);
setInterval(fetchArticles, 1000 * 60 * 60);

// Call fetch articles on startup to populate the cache
// noinspection JSIgnoredPromiseFromCall
fetchArticles();