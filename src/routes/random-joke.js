const dadJokes = require('../resources/dad-jokes');
const {
    RANDOM_JOKE_ENDPOINT
} = require('./endpoints');

const getJoke = app => {
    app.get(RANDOM_JOKE_ENDPOINT, async (request, response) => {
        try {
            const jokeResponse = await dadJokes.getRandomJoke();
            response.send(jokeResponse);
        } catch (error) {
            throw new Error(error);
        }
    });
    console.info(`Configured the ${RANDOM_JOKE_ENDPOINT} route`);
};

module.exports = {
    getJoke
};
