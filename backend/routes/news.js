const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config({path: __dirname + '/../.env'});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/?retryWrites=true&w=majority&appName=portfolio`;
const options = {serverApi: {version: '1', strict: true, deprecationErrors: true}};

/**
 * This function tests the connection to the database.
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 */
const test = async () => {
    try {
        await mongoose.connect(uri, options);
        await mongoose.connection.db.admin().command({ping: 1});
        console.log("Successfully pinged the database.");
    } catch (err) {
        console.error("Error connecting to the database:", err.message);
    } finally {
        await mongoose.disconnect();
    }
}

test().catch(console.dir);

module.exports = test;