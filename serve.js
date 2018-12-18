const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));



const port = 3030;

app.listen(port, () => {
    console.log(`The server is on at port ${port}`)
});