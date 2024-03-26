const { v4 } = require("uuid");
const { getVideos } = require("../model/uploadAndVideos");

//Video-details
function getDetails(req, res) {
  const {id} = req.params;
  const videos = getVideos();
  const result = videos.filter((video) => {
    return video.id === id;
  });
  if (result.length === 0) {
    res.status(404).send("video not found");
  } else {
    res.json(result[0]);
  }
}

//Video-list
function getList(req, res) {
  const videos = getVideos();
  const result = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      channel: video.channel,
    };
  });
  res.json(result);
}

module.exports = {
  getDetails,
  getList,
};
