const got = require('got');

const {
    BASIC_HEADERS,
    DAD_JOKES_API_BASE_URL,
    DAD_JOKES_SEARCH_URL
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

const searchJokes = async term => {
    try {
        const options = {
            headers: BASIC_HEADERS
        };

        if (term) {
            options.searchParams = {
                term
            };
        }

        const response = await got.get(DAD_JOKES_SEARCH_URL, options);

        return response.body;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getRandomJoke,
    searchJokes
};
