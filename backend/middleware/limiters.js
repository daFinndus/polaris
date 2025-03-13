const rateLimit = require("express-rate-limit");

const defaultLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {success: false, error: "Too many requests, please try again later."}
});

const strictLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: {success: false, error: "Too many requests to this endpoint."}
});

module.exports = {defaultLimit, strictLimiter};