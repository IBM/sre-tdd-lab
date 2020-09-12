const express = require('express');

const PORT = 3000;

const start = () => {
    const app = express();

    app.listen(PORT, () => {
        console.info(`The server is running on port ${PORT}.`);
    });
};

module.exports = {
    start
};
