const mongoose = require("mongoose");

require("dotenv").config({path: require("path").resolve(__dirname, "../.env")});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/portfolio?retryWrites=true&w=majority`;
const options = {serverApi: {version: "1", strict: true, deprecationErrors: true}};

let connection;

/**
 * Connects to the database.
 * Serves as a singleton to avoid multiple connections.
 * @returns {Promise<mongoose.Mongoose>} A promise that resolves with the connection to the database.
 */
const connectToDB = async () => {
    if (!connection) {
        try {
            connection = mongoose.connect(uri, options);
            console.log(`Successfully connected to the database.`);
        } catch (err) {
            connection = null;
            console.error("Error connecting to the database:", err.stack);
        }
    }

    return connection;
};

/**
 * Connects to the database.
 * Serves as a singleton to avoid multiple connections.
 * @returns {Promise<mongoose.Mongoose>} A promise that resolves with the connection to the database.
 */
const pushArticlesToDB = async (articles) => {
    try {
        const mongoose = await connectToDB();
        await mongoose.connection.db.collection("articles").insertMany(articles);

        console.log("Pushed", articles.length, "articles to the database.");
    } catch (err) {
        console.error("Error pushing articles:", err.stack);
    }
};

/**
 * Pulls articles from the database.
 * If there are given params, it will pull a paginated list of articles.
 * If there are no given params, it will pull all articles.
 * @param {number} [page] - The page to pull from the database.
 * @param {number} [limit] - The number of articles to pull.
 * @returns {Promise<Array<Object>>} A promise that resolves with an array of articles.
 */
const pullArticlesFromDB = async (page, limit) => {
    try {
        const mongoose = await connectToDB();
        const query = mongoose.connection.db
            .collection("articles")
            .find({})
            .sort({_id: -1});

        return page && limit
            ? await query
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray()
            : await query.toArray();
    } catch (err) {
        console.error("Error fetching articles:", err.stack);
    }
};

/**
 * Removes duplicates from the database.
 * Groups the articles by title and counts the number of duplicates.
 * Removes all duplicates except the first one.
 * @returns {Promise<number>} A promise that resolves with the number of duplicates removed.
 */
const removeDupesFromDB = async () => {
    console.log("Going to check for duplicates in the database.");

    try {
        const mongoose = await connectToDB();
        const collection = mongoose.connection.db.collection("articles");

        // Group by title and count the number of duplicates
        const duplicates = await collection
            .aggregate([
                {
                    $group: {
                        _id: "$title",
                        count: {$sum: 1},
                        docs: {$push: "$_id"},
                    },
                },
                {$match: {count: {$gt: 1}}},
            ])
            .toArray();

        const ids = duplicates.flatMap((group) => group.docs.slice(1));

        if (ids.length > 0) {
            const deleted = await collection.deleteMany({_id: {$in: ids}});
            console.log(
                "Successfully removed",
                deleted.deletedCount,
                "duplicates from the database."
            );

            return deleted.deletedCount;
        } else {
            return 0;
        }
    } catch (err) {
        console.error("Error removing duplicates:", err.stack);
    }
};

connectToDB().catch((err) => console.error("Error connecting to the database:", err.stack));

module.exports = {
    connectToDB,
    pushArticlesToDB,
    pullArticlesFromDB,
    removeDupesFromDB,
};
