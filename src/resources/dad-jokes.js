const got = require('got');

const {BASIC_HEADERS, DAD_JOKES_API_BASE_URL} = require('./constants');

const getRandomJoke = () => {
    return got.get(DAD_JOKES_API_BASE_URL, BASIC_HEADERS);
};

module.exports = {
    getRandomJoke
};
