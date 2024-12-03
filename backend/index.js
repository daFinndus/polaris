const axios = require('axios');
const express = require('express');
const cors = require('cors');

require('dotenv').config({path: __dirname + '/.env'});

const app = express();
const port = process.env.PORT;

const whitelist = [process.env.LOCAL_IP, process.env.PUBLIC_IP, process.env.VERCEL_URL];

app.use(cors({
    origin: whitelist,
    method: "GET",
}));

app.get("/", (req, res) => {
    res.status(404).send("Sorry, this page does not exist!");
});

if (!port) {
    console.error("No port in environment variables found.");
    process.exit(1);
} else {
    app.listen(port, () => {
        console.log(`Server running from port: ${port}\n`);
    });
}

// This function reloads the server to avoid renders spin down issue
function reload() {
    const url = process.env.RENDER_URL || "";
    console.log("Reloading website on:", url);

    axios
        .get(url + "/backend")
        .then((response) => {
            console.log(`Reloaded at ${new Date().toISOString()}: Status ${response.status}`);
        })
        .catch((error) => {
            console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
        });
}

// Ping the backend every 5 minutes to avoid spin down
setInterval(reload, 1000 * 60 * 5);