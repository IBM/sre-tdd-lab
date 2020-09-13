const randomJokeRoute = require('./random-joke');
const searchJokesRoute = require('./search-jokes');

const configureRoutes = app => {
    // Note that we imported like this because importing the function directly didn't allow easy mocking. This is where ES Modules might help because they we can do import * as randomJoke.
    randomJokeRoute.getJoke(app);
    searchJokesRoute.searchJokes(app);
};

module.exports = {
    configureRoutes
};
