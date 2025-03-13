const router = require("express").Router();
const {getCachedArticles} = require("../functions/news");

/**
 * Route handler for fetching articles with pagination.
 * Responds with the articles and pagination information or an error message.
 */
router.get("/articles", async (req, res) => {
    const page = Math.max(parseInt(req.query.page) || 1, 1);  // Ensure page ≥ 1
    const limit = Math.min(Math.max(parseInt(req.query.limit) || 18, 1), 21);  // Ensure 1 ≤ limit ≤ 100
    const query = req.query.query?.trim() || "";

    console.log("Received parameters: page is", page, "and limit is", limit, "and query is", query || "empty", ".");

    try {
        const [articles, total] = await getCachedArticles(page, limit, query);
        console.log("Successfully gave", articles.length, "articles to the client.");

        res.status(200).json({
            success: true,
            total: total,
            articles: articles,
            query: query,
            pagination: {page: page, limit: limit},
        });
    } catch (err) {
        res.status(500).send("Failed to fetch articles.");
        console.error("Error while trying to send a response for articles:", err.stack);
    }
});

module.exports = router;
