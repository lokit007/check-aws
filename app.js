const express = require('express');
const app = express();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;

const path = require('path');

app.get("/", (req, res) => {
    res.send({ data: "OK" });
})

app.get("/check", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log('Server run http://%s:%s', host, port)
})