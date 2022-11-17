const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required'],
        index: { unique: true }
    },
    path: {
        type: String,
        required: [true, 'A path is required'],
        index: { unique: true }
    },
    show: {
        type: String,
    },
    episodeNumber: {
        type: Number,
    },
    season: {
        type: Number,
    }
});

const Video = mongoose.model('video', VideoSchema);
module.exports = Video;