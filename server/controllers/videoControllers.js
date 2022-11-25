const Video = require('../schemas/video');

function getVideos(req, res) {
    Video.find({}, (err, video) => {
        if (err) return res.status(500).send({ err });
        
        return res.status(200).send(video);
    });
};

function getSingleVideo(req, res) {
    const { videoId } = req.params;

    Video.findById(videoId, (err, video) => {
        if (err) return res.status(500).send({ err });
        if (!video) { return res.status(404).send({ message: 'Video not found' }); }

        return res.status(200).send(video);
    });
}

function postVideo(req, res) {
    const video = new Video(req.body);

    console.log(req)

    Video.create(video, (err) => {
        if (err) return res.status(500).send({ message: `Error saving video ${err}.` });

        return res.status(200).send({ message: `${video.name} added successfully.`});
    })
}

function postManyVideo(req, res) {
    const videos = req.body;

    Video.insertMany(req.body, (err) => {
        if (err) return res.status(500).send({ message: `Error saving videos ${err}.`});

        return res.status(200).send({ message: 'videos added successfully.' });
    })
}

function updateVideo(req, res) {
    const newVideo = req.body;
    const { id: videoId } = req.params;
    
    if (!newVideo) {
        return res.status(400).send({ message: 'Missing parameters' });
    }

    console.log(videoId)

    Video.replaceOne({ _id: videoId }, newVideo, (error, docs) => {
        console.log(docs)
        if (error) return res.status(500).send({ error });

        return res.status(200).send({ message: 'Video replaced sucessfully' });
    })
}

module.exports = {
    getVideos,
    getSingleVideo,
    postVideo,
    updateVideo
};