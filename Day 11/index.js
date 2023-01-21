//Get our Elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
//listen for anything that has an data-skip attribute
const ranges = document.querySelectorAll(".player__slider");
const fullScreen = document.querySelector(".fullscreen");

//Build out functions

//Play Button Functionality
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  //OR const method =video.paused ?'play':'pause';
  // video[method]();
}

//Play Button Text
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

//skipping
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
//this. name give the property name we had set volume playbackrate
// and this value...gives the value it needs to be set at.
function handleRangeUpdate() {
  video[this.name] = this.value;
}
//TO handle progress bar based on the change it is called
// when timeUpdate event occurs in video ery time time updates
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

//functio to handle mouse move over the progress bar
//...to set the video at the position the progress is moved
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullScreen() {
 if (!player.fullscreenElement) {
    player.requestFullscreen();
  } else if (document.webkitRequestFullscreen) {
    /* Safari */
    player.webkitRequestFullscreen();
  } else if (player.msRequestFullscreen) {
    /* IE11 */
    player.msRequestFullscreen();
  } 

  /* Close fullscreen */
  fullScreen.onclick = (event) => {
    console.log('clicked');
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if(document.webkitFullscreenElement) {
        player.webkitExitFullscreen();
    }else if(document.msFullscreenElement) {
        player.msExitFullscreen();
    }
    else {
      document.documentElement.requestFullscreen();
    }

  }
}

//enter key
function toggleFullScreen() {
    if (!player.fullscreenElement) {
      player.requestFullscreen();
    } 
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            document.exitFullscreen();
        }
      }, false);
  }

//Hoook up event Listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

//progress movement on normal click
progress.addEventListener("click", scrub);

//Now for dragging of the progress bar....
let mousedown = false;
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
//runs if mouse is down then only
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreen.addEventListener("click", handleFullScreen);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  }, false);