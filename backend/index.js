const axios = require('axios');
const express = require('express');
const cors = require('cors');

const {fetchArticles, getCachedArticles} = require("./routes/news");
const backend = require("./routes/backend");

require('dotenv').config({path: __dirname + '/.env'});

const app = express();
const port = process.env.PORT;

const whitelist = [process.env.LOCAL_IP, process.env.PUBLIC_IP, process.env.VERCEL_URL];

app.use(cors());

app.use("/", backend);
app.get("/", (req, res) => {
    res.status(404).send("Sorry, this page does not exist!");
});

app.get('/articles', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 18;

    try {
        const articles = await getCachedArticles({page, limit});

        console.log("Successfully fetched", articles.length, "articles from the cache.");
        res.status(200).json({
            success: true,
            total: articles.length,
            articles: articles,
            pagination: {page: page, limit: limit}
        });
    } catch (err) {
        res.status(500).send("Failed to fetch articles.");
        console.log("Error fetching articles:", err.message);
    }
});

if (!port) {
    console.error("No port in environment variables found.");
    process.exit(1);
} else {
    app.listen(port, () => {
        console.log(`Server running from port: ${port}\n`);
    });
}

/**
 * This function reloads the backend on render.
 * It does that by pinging the backend every 5 minutes.
 * This is to avoid renders spin down issue.
 */
const reload = () => {
    const url = process.env.RENDER_URL;
    console.log("Reloading website on:", url);

    axios
        .get(url + "/backend")
        .then((response) => {
            console.log(`Reloaded at ${new Date().toISOString()}: Status ${response.status}`);
        })
        .catch((error) => {
            console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
        });
};

setInterval(reload, 1000 * 60 * 5);
setInterval(fetchArticles, 1000 * 60 * 60 * 4);
