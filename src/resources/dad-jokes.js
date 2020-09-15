const got = require('got');

const {
    BASIC_HEADERS,
    DAD_JOKES_API_BASE_URL
} = require('./constants');

const getRandomJoke = async () => {
    try {
        const response = await got.get(DAD_JOKES_API_BASE_URL, {
            headers: BASIC_HEADERS
        });

        return response.body;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getRandomJoke
};
