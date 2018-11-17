const compression = require('compression');
const express = require('express');
const path = require('path');

const app = express();

app.use(compression());
app.use(express.static(__dirname + '/../dist/wan-homesite'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/wan-homesite/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening');
});
