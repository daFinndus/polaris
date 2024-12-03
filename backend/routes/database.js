const mongoose = require('mongoose');

require('dotenv').config({path: __dirname + '/../.env'});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/portfolio?retryWrites=true&w=majority`;
const options = {serverApi: {version: '1', strict: true, deprecationErrors: true}};

let connection;

/**
 * This function connects to the database.
 * It serves as a singleton to avoid multiple connections.
 * @returns {Promise<Mongoose>} A promise that resolves with the connection to the database.
 */
const connect = async () => {
    if (!connection) {
        try {
            connection = mongoose.connect(uri, options);
            console.log("Successfully connected to the database.");
        } catch (err) {
            console.error("Error connecting to the database:", err.message);
        }
    }

    return connection;
};

/**
 * This function pushes articles to the database.
 * @param articles An array of articles to push to the
 * @returns {Promise<void>} A promise that resolves when the articles are pushed.
 */
const push = async (articles) => {
    try {
        const mongoose = await connect();
        await mongoose.connection.db.collection('articles').insertMany(articles);

        console.log("Successfully pushed", articles.length, "articles to the database.");
    } catch (err) {
        console.error("Error pushing articles:", err.message);
    }
};

/**
 * This function pulls articles from the database.
 * If there are given params, it will pull a paginated list of articles.
 * @param page The page to pull from the database.
 * @param limit The amount of articles to pull.
 * @returns {Promise<Array>} A promise that resolves with an array of articles.
 */
const pull = async (page, limit) => {
    let articles;

    try {
        const mongoose = await connect();

        if (page && limit) {
            articles = await mongoose.connection.db.collection('articles')
                .find({})
                .sort({_id: -1})
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray();
        } else {
            articles = await mongoose.connection.db.collection('articles')
                .find({})
                .sort({_id: -1})
                .toArray();
        }

        console.log("Successfully pulled", articles.length, "articles from the database.");
        return articles;
    } catch (err) {
        console.error("Error fetching articles:", err.message);
    }
};

/**
 * This function removes duplicates from the database.
 * It does that by grouping the articles by title and counting the number of duplicates.
 * After that, it removes all duplicates except the first one.
 * @returns {Promise<void>} A promise that resolves when the duplicates are removed.
 */
const dupes = async () => {
    console.log("Going to check for duplicates in the database.");

    try {
        const mongoose = await connect();
        const collection = mongoose.connection.db.collection('articles');

        // Group by title and count the number of duplicates
        const duplicates = await collection.aggregate([
            {$group: {_id: "$title", count: {$sum: 1}, docs: {$push: "$_id"}}},
            {$match: {count: {$gt: 1}}}
        ]).toArray();

        const ids = duplicates.flatMap(group => group.docs.slice(1)); // Behalte jeweils das erste Dokument

        if (ids.length > 0) {
            const deleted = await collection.deleteMany({_id: {$in: ids}});
            console.log("Successfully removed", deleted.deletedCount, "duplicates from the database.");
        } else {
            console.log("No duplicates found.");
        }
    } catch (err) {
        console.error("Error removing duplicates:", err.message);
    }
};

module.exports = {push, pull, dupes};