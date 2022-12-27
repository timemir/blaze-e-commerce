module.exports = {
    secret: "blaze-secret-key",
    jwtExpiration: 3600, // 1 hour
    jwtRefreshExpiration: 259200, // 3 days

    /* for test */
    // jwtExpiration: 60,          // 1 minute
    // jwtRefreshExpiration: 120,  // 2 minutes
};
