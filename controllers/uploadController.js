const { v4 } = require("uuid");
const { uploadVideos } = require("../model/uploadAndVideos");

function postVideo(req, res) {
  const { title, description, image } = req.body;
  const isValid = validator(title, description);
  if (!isValid) {
    res.status(400).send("invalid request");
  }
  const newVideo = {
    id: v4(),
    title,
    description,
    channel: "User Name",
    image: image,
    views: 0,
    likes: 0,
    comments: [],
    timestamp: Date.now(),
  };

  const saveVideo = uploadVideos(newVideo);
  if (saveVideo) {
    res.status(201).json(newVideo);
  } else {
    res.send("failed to save");
  }
}
//VALIDATION
function validator(title, descript) {
  if (!title || !descript) {
    return false;
  }
  return true;
}

module.exports = { postVideo };
