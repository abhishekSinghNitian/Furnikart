const express = require('express');
const app = express();

const customSizeLimiter = (maxSizeInBytes) => {
  return (req, res, next) => {
    let size = 0;

    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > maxSizeInBytes) {
        res.status(413).json({ message: 'Payload too large. Request size limit exceeded.' });
        req.destroy();  // Stop processing further data
      }
    });

    req.on('end', () => {
      next();
    });
  };
};

module.exports = customSizeLimiter;