const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, ".index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.listen(PORT, () =>  {
    console.log(`App is listening to PORT: ${PORT}`);
})