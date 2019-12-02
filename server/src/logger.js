const winston = require("winston");
const format = winston.format;

/** @type {winston.LoggerOptions} */
const development = {
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: format.combine(
        format.colorize({ all: true }),
        format.timestamp(),
        format.simple()
      )
    })
  ]
};

/** @type {winston.LoggerOptions} */
const test = {
  transports: [
    new winston.transports.Console({
      level: "error"
    })
  ]
};

/** @type {winston.LoggerOptions} */
const production = {
  transports: [
    new winston.transports.Console({
      level: "info"
    })
  ]
};

function getEnvConfig() {
  const env = process.env.NODE_ENV;
  if (env) {
    const lowercaseEnv = env.toLowerCase();
    switch (lowercaseEnv) {
      case "production":
        return production;
      case "test":
        return test;
      default:
        return development;
    }
  } else {
    return development;
  }
}

const logger = winston.createLogger(getEnvConfig());
module.exports = logger;
