const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Async func to prompt user to select media stream, pass to our video element, then play
function selectMediaStream() {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia().then(() => {      
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    })
}

button.addEventListener("click", () => {
  // Disable the Button when click on it
  button.disabled = true; // Start Picture in Picture
  videoElement.requestPictureInPicture().then(() => {
    // Reset Button
    button.disabled = false;
  });

});

// Call function On Load
selectMediaStream();