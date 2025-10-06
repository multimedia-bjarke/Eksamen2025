/* Video 1 redirect */



/* Funktionen til redirection */
function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz1.html";
}

/* Funktionen til afspilning af video */
function playvideo(){
    const videox = document.getElementById("Videoplay")
    const evry = document.querySelector("main")

    /* Style ændring for at vise skjult video og gemme baggrund */
    videox.style.display = "block";
    evry.style.display = "none";
    

    /* videox const ændres ved at sætte videoen igang og unmute den, dette går udenom Apple's webkit ristriktion om at man ikke må redirect til en video med lyd.
    derfor afspilles den i samme vindue */
    videox.muted = false;
    videox.play().then(() => {
      console.log("Video is playing with sound.");
    }).catch((err) => {
      console.warn("Playback failed:", err);
    });
    videox.addEventListener("ended", Redirect);
  }




// Hvis videoen er preloaded og der er genereret en blob url vises den:
const blobUrl = sessionStorage.getItem('Videos/Dotted50v3.mp4');

const mainVideo = document.getElementById('mainvideo');

if (blobUrl) {
  mainVideo.src = blobUrl;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  mainVideo.src = 'Videos/Dotted50v3.mp4';
}




// Hvis videoen er preloaded og der er genereret en blobl uel vises den:
const blobUrl2 = sessionStorage.getItem('Videos/Sektion1.mp4');

const PlayVideo1 = document.getElementById('Videoplay');

if (blobUrl) {
  PlayVideo1.src = blobUrl2;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  PlayVideo1.src = 'Videos/Sektion1.mp4';
}





  