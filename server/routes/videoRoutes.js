const express = require('express');
const videoController = require('../controllers/videoControllers');

const Router = express.Router();

Router.get('/', videoController.getVideos);
Router.get('/:videoId', videoController.getSingleVideo);

Router.post('/', videoController.postVideo);

Router.put('/:id', videoController.updateVideo);

module.exports = Router;