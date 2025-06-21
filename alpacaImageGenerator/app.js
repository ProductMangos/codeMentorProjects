const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const fs = require("fs");

// const alpaca = require("./server/alpaca");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/alpaca/:part", (req, res) => {
    const part = req.params.part;
    
    fs.readdir(`public/assets/alpaca/${part}`, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Unable to read directory" });
        }
        res.json({data});
    })
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})
