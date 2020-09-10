const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

// write endpoints in here 

module.exports = server;
