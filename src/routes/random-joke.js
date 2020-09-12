const dadJokes = require('../resources/dad-jokes');

const getJoke = app => {
    app.get('/random-joke', async (request, response) => {
        const jokeResponse = await dadJokes.getRandomJoke();
        response.send(jokeResponse);
    });
};

module.exports = {
    getJoke
};
