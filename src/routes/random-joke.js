const dadJokes = require('../resources/dad-jokes');

const getJoke = app => {
    app.get('/random-joke', async (request, response) => {
        try {
            const jokeResponse = await dadJokes.getRandomJoke();
            response.send(jokeResponse);
        } catch (error) {
            throw new Error(error);
        }
    });
};

module.exports = {
    getJoke
};
