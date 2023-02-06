const express = require('express');
const cors = require('cors');

const app = express();
const PORT=process.env.PORT;

const img = require("./src/routes/image/image.js");

app.use(express.json())
app.use(cors())

app.use('/marketia/api/v1',img);

app.listen(PORT, () => console.log('server executing on: ' + PORT + ' port'))
