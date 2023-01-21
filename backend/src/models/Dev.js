const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const devSchema = new mongoose.Schema({
    name: String,
    username: String,
    bio: String,
    avatar: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', devSchema);