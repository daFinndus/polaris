const router = require("express").Router();
const {removeDupesFromDB} = require("../functions/database");

/**
 * Route handler for specific database functions.
 * Right now it's only for sorting out duplicates.
 */
router.get("/dupes", async (_, res) => {
    try {
        const duplicates = await removeDupesFromDB();
        res.status(200).json({success: true, duplicates: duplicates});
    } catch (err) {
        res.status(500).send("Failed to remove duplicates.");
        console.error("Error fetching duplicates:", err.stack);
    }
});

module.exports = router;