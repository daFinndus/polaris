/**
 * Checks if the necessary keys are set in the environment variables.
 */
const checkKeys = () => {
  const requiredKeys = [
    "PORT",
    "LOCAL_IP",
    "PUBLIC_IP",
    "NEWS_API_KEY",
    "BACKEND_URL",
    "FRONTEND_URL",
    "DB_URL",
    "DB_USER",
    "DB_PASS",
  ];

  const missingKeys = requiredKeys.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    missingKeys.forEach((key) =>
      console.error(`The ${key} environment variable is not set.`)
    );
    process.exit(1);
  }

  console.log("All keys found in .env file.");
};

module.exports = { checkKeys };
