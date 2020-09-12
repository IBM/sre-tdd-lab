const randomJokeRoute = require('./random-joke');

const configureRoutes = app => {
    randomJokeRoute.getJoke(app);
};

module.exports = {
    configureRoutes
};
