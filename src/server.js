const express = require('express');
const routes = require('./routes');

const PORT = 3000;

const start = () => {
    const app = express();

    routes.configureRoutes(app);

    app.listen(PORT, () => {
        console.info(`The server is running on port ${PORT}.`);
    });
};

module.exports = {
    start
};
