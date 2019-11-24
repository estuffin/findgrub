const HttpError = require('../models/http-error');
const getPlacesForLocation = require('../util/yelp');

const getGrub = async (req, res, next) => {
    console.log('IP address', req.connection.remoteAddress);
    const location = req.params.locationStr;
    let dat;
    try {
        dat = await getPlacesForLocation(location);
    } catch(error) {
        return next(error);
    }
    res.json(dat);
};

exports.getGrub = getGrub;