const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = `${process.env.YELP_API_KEY}`;

// Chantilly, VA 20151
async function getPlacesForLocation(location) {
    const authStr = `Bearer ${API_KEY}`;
    const host = 'https://api.yelp.com';
    const path = '/v3/businesses/search';
    const queryParams = [
        `?term=${encodeURIComponent('fast food')}`,
        `&location=${encodeURIComponent(location)}`,
        '&radius=1500',
        '&categories=pizza,sandwiches,juicebars,burgers,hotdogs,coffee'
    ];
    const url = `${host}${path}${queryParams.join('')}`;

    const response = await axios.get(url, { 'headers': { 'Authorization':  authStr } });

    const data = response.data;

    if (data.total === 0) {
        const error = new HttpError(
            'Could not find any grub for the specified location.',
            422
        );
        throw error;
    }

    return data;
}

module.exports = getPlacesForLocation;