const express = require('express');
const path = require('path');

const createServer = () => {
  express()
    .use(express.static(path.join(__dirname, 'public')));
};

module.exports = createServer;
