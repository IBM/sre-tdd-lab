const dadJokes = require('../resources/dad-jokes');

const getJoke = app => {
    app.get('/random-joke', async () => {
        await dadJokes.getRandomJoke();
    });
};

module.exports = {
    getJoke
};
