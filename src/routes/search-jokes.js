const {
    SEARCH_JOKE_ENDPOINT
} = require('./endpoints');
const dadJokes = require('../resources/dad-jokes');

const searchJokes = app => {
    app.get(SEARCH_JOKE_ENDPOINT, async (request, response) => {
        try {
            const jokeResponse = await dadJokes.searchJokes();
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
