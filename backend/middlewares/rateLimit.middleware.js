const express = require('express');
const app = express();

const rateLimitData = {};  // In-memory store to track requests per IP

const customRateLimiter = (limit, windowMs) => {
  return (req, res, next) => {
    const ip = req.ip;
    const currentTime = Date.now();

    if (!rateLimitData[ip]) {
      rateLimitData[ip] = { count: 1, startTime: currentTime };
    } else {
      const timeElapsed = currentTime - rateLimitData[ip].startTime;
      if (timeElapsed > windowMs) {
        // Reset rate limit window
        rateLimitData[ip] = { count: 1, startTime: currentTime };
      } else {
        rateLimitData[ip].count += 1;
      }
    }

    if (rateLimitData[ip].count > limit) {
      return res.status(429).json({ message: 'Too many requests, try again later.' });
    }

    next(); // Proceed to the next middleware or route
  };
};

// Apply custom rate limiter with a limit of 5 requests per 1 minute
module.exports = customRateLimiter;

