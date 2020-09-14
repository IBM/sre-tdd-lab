const {
    SEARCH_JOKE_ENDPOINT
} = require('./endpoints');
const dadJokes = require('../resources/dad-jokes');

const searchJokes = app => {
    app.get(SEARCH_JOKE_ENDPOINT, async (request, response) => {
        try {
            const queryString = request.query ? request.query.term : null;
            const jokeResponse = await dadJokes.searchJokes(queryString);
            response.send(jokeResponse);
        } catch (error) {
            throw new Error(error);
        }
    });
    console.info(`Configured the ${SEARCH_JOKE_ENDPOINT} route`);
};

module.exports = {
    searchJokes
};
