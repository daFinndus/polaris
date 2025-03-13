const cors = require("cors");
const router = require("express").Router();

/**
 * Middleware to enable CORS with specified origins and methods.
 */
router.use(
    cors({
        origin: [
            "http://localhost:3000",
            process.env.FRONTEND_URL,
        ],
        methods: ["GET"],
    })
);

/**
 * Headers to improve security.
 */
router.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Hidden");
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("Permissions-Policy", "geolocation=(), microphone=()");
    next();
});

module.exports = router;