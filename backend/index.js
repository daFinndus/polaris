const fs = require("fs");
const https = require("https");
const express = require("express");

const {checkKeys} = require("./functions/keys.js");

require("dotenv").config({path: require("path").resolve(__dirname, "../.env")});

checkKeys();

const port = parseInt(process.env.PORT, 10);
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

const backendRoutes = require("./routes/backend");

/**
 * Route handler for the root path.
 * Responds with a 404 status and a message indicating the page does not exist.
 */
app.get("/", (_, res) => res
    .status(404)
    .send("Sorry, this page does not exist! Nice for you being here though."));

app.use("/backend", backendRoutes);

// Run the server on https if certificates are available, otherwise run on http.
if (port === 443) https.createServer(options, app).listen(port, () => console.log(`Server running on port ${port} with SSL enabled.`));
else app.listen(port, () => console.log(`Server running on port ${port} without SSL.`));