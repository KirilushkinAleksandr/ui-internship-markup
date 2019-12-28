const video = document.getElementsByClassName("video")[0];
const btn = document.getElementsByClassName("header__play-button")[0];

function playVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
