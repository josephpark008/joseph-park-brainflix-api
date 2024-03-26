const fs = require("node:fs");

const videosPath = "./data/videos.json";

//videoDetails
function getVideos() {
  const file = fs.readFileSync(videosPath);
  const videos = JSON.parse(file);
  return videos;
}
function uploadVideos(video) {
  const videos = getVideos();
  videos.push(video);
  try {
    fs.writeFileSync(videosPath, JSON.stringify(videos));
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getVideos,
  uploadVideos,
};
