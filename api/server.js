const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    db("accounts")
    .then(account => {
        res.status(200).json({ data: account })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}) 

server.post("/", (req, res) => {
    db("accounts").insert(req.body)
    .then(newAcc => {
        res.status(200).json({ data: newAcc })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

server.put("/:id", (req, res) => {
    const { id } = req.params
    const newUpdate = req.body

    db("accounts").update(newUpdate).where({ id })
    .then(account => {
        res.status(200).json({ data: account })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

server.delete("/:id", (req, res) => {
    const id = req.params.id

    db("accounts").where({ id }).del()
    .then(numDel => {
        res.status(200).json({ data: numDel })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

module.exports = server;
