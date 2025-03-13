const fs = require("fs");
const https = require("https");
const express = require("express");

const {checkKeys} = require("./functions/keys.js");
const {updateArticles} = require("./functions/news.js");
const {removeDupesFromDB} = require("./functions/database");
const {defaultLimit, strictLimiter} = require("./middleware/limiters");

require("dotenv").config({path: require("path").resolve(__dirname, "../.env")});

checkKeys();

const port = process.env.PORT;
const app = express();

let options = {};

if (port === 443) {
    options = {
        key: fs.readFileSync('/etc/letsencrypt/live/finnlucajensen.ddns.net/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/finnlucajensen.ddns.net/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/finnlucajensen.ddns.net/chain.pem')
    }

    console.log("\nSetup SSL with given certificates.\n");
}

const securityMiddleware = require("./middleware/security");

app.use(securityMiddleware);

const apiRoutes = require("./routes/api");
const backendRoutes = require("./routes/backend");
const databaseRoutes = require("./routes/database");

/**
 * Route handler for the root path.
 * Responds with a 404 status and a message indicating the page does not exist.
 */
app.get("/", (_, res) => res
    .status(404)
    .send("Sorry, this page does not exist! Nice for you being here though."));


app.use("/api", defaultLimit, apiRoutes);
app.use("/database", strictLimiter, databaseRoutes);
app.use("/backend", backendRoutes);

// Run the server on https if certificates are available, otherwise run on http.
if (port === 443) https.createServer(options, app).listen(port, () => console.log(`Server running on port ${port} with SSL enabled.`));
else app.listen(port, () => console.log(`Server running on port ${port} without SSL.`));

// Set intervals for reloading the backend and fetching articles
const scheduleUpdate = () => {
    updateArticles().catch(err => console.error("Error updating articles:", err.stack));
    setTimeout(scheduleUpdate, 1000 * 60 * 60);
};

const scheduleDupesCleanup = () => {
    removeDupesFromDB().catch(err => console.error("Error removing duplicates:", err.stack));
    setTimeout(scheduleDupesCleanup, 1000 * 60 * 90);
};

// Start scheduled tasks
scheduleUpdate();
setTimeout(scheduleDupesCleanup, 1000 * 30);  // Start second task 30s later