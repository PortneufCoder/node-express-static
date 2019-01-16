const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 3030;

app.listen(port, () => {
    console.log(`The server is on at port ${port}`)
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})
