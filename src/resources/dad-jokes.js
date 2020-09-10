const got = require('got');

const {DAD_JOKES_API_BASE_URL} = require('./constants');

const getRandomJoke = () => {
    return got.get(DAD_JOKES_API_BASE_URL);
};

module.exports = {
    getRandomJoke
};
