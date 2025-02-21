const cors = require("cors");
const axios = require("axios");
const express = require("express");
const { checkKeys } = require("./routes/keys.js");
const { removeDupesFromDB } = require("./routes/database");
const { updateArticles, getCachedArticles } = require("./routes/news.js");

require("dotenv").config({ path: require("path").resolve(__dirname, "/.env") });

checkKeys();

const port = process.env.PORT;
const app = express();

/**
 * Middleware to enable CORS with specified origins and methods.
 */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      process.env.LOCAL_IP,
      process.env.PUBLIC_IP,
      process.env.FRONTEND_URL,
    ],
    methods: ["GET"],
  })
);

/**
 * Route handler for the root path.
 * Responds with a 404 status and a message indicating the page does not exist.
 */
app.get("/", (_, res) =>
  res
    .status(404)
    .send("Sorry, this page does not exist! Nice for you being here though.")
);

/**
 * Route handler for the /backend path.
 * Responds with a message indicating the backend is running.
 */
app.get("/backend", (_, res) => res.send("Hello from backend!"));

/**
 * Route handler for specific database functions.
 * Right now it's only for sorting out duplicates.
 */
app.get("/database/dupes", async (_, res) => {
  try {
    const duplicates = await removeDupesFromDB();
    res.status(200).json({ success: true, duplicates: duplicates });
  } catch (err) {
    res.status(500).send("Failed to remove duplicates.");
    console.error("Error fetching duplicates:", err.stack);
  }
});

/**
 * Route handler for fetching articles with pagination.
 * Responds with the articles and pagination information or an error message.
 */
app.get("/api/articles", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 18;
  const query = req.query.query || "";

  console.log(
    "Received parameters: page is",
    page,
    "and limit is",
    limit,
    "and query is",
    query || "empty"
  );

  try {
    const [articles, total] = await getCachedArticles(page, limit, query);

    console.log(
      "Successfully gave",
      articles.length,
      "articles to the client."
    );

    res.status(200).json({
      success: true,
      total: total,
      articles: articles,
      query: query,
      pagination: { page: page, limit: limit },
    });
  } catch (err) {
    res.status(500).send("Failed to fetch articles.");
    console.error(
      "Error while trying to send a response for articles:",
      err.stack
    );
  }
});

/**
 * Necessary to run the server on the specified port.
 */
app.listen(port, () => console.log(`Server running on port: ${port}`));

const reloadURL = process.env.BACKEND_URL;

/**
 * This function reloads the backend on render.
 * It does that by pinging the backend every 5 minutes.
 * This is to avoid renders spin down issue.
 */
const reloadBackend = () => {
  console.log(`Reloading service on ${reloadURL}`);
  const currentDate = new Date();

  axios
    .get(reloadURL + "/backend")
    .then((response) =>
      console.log(
        `Reloaded at ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} on ${currentDate.getDate()}/${
          currentDate.getUTCMonth() + 1
        }: Status ${response.status}`
      )
    )
    .catch((error) =>
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.stack
      )
    );
};

// Set intervals for reloading the backend and fetching articles
setInterval(reloadBackend, 1000 * 60 * 5);
setInterval(updateArticles, 1000 * 60 * 60);
setInterval(removeDupesFromDB, 1000 * 60 * 60);

// Call fetch articles on startup to populate the cache
updateArticles().catch((err) =>
  console.error("Error fetching articles on startup:", err.stack)
);
