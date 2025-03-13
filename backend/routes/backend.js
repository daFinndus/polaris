const router = require("express").Router();

/**
 * Route handler for the /backend path.
 * Responds with a message indicating the backend is running.
 */
router.get("/", (_, res) => res
    .status(200)
    .send("Hello from backend!"));

module.exports = router;