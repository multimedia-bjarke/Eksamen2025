/* Redirection til loading page efter 20 sek */
setTimeout(() => {window.location.href = "index.html"; }, 20000 ) 


// Hvis videoen er preloaded og der er genereret en blobl uel vises den:
const blobUrl = sessionStorage.getItem('Videos/Dotted50v3.mp4');

const mainVideo = document.getElementById('mainvideo');

if (blobUrl) {
  mainVideo.src = blobUrl;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  mainVideo.src = 'Videos/Dotted50v3.mp4';
}

