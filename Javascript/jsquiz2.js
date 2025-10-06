

/* Tjek svar kode */
  function checkanswer(){
    console.log("Answer has been checked");
    
    
/* Definer selectedElement som et event der er targeted, derefter hentes data-value for at se om svaret er korrekt */
    let selectedElement = event.target;

    let AnswerData = selectedElement.getAttribute("data-value");

    if (AnswerData === "correct") {
        document.getElementById("correctanswertext").innerHTML = " <h2> ✅ Sådan - du svarede rigtigt! </h2> ";
        
  
    } else {
        document.getElementById("correctanswertext").innerHTML = " <h2> ❌ Det er desværre det forkerte svar </h2> ";
    } 
    
    document.querySelector("#containerbutton11").style.transition = "opacity 0.9s ease";
    document.querySelector("#containerbutton11").style.opacity ="100%";
}


/* Video 3 redirect */
function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz3.html";
}

function playvideo(){
    const videox = document.getElementById("Videoplay")
    const evry = document.querySelector("main")

    videox.style.display = "block";
    evry.style.display = "none";
    

    videox.muted = false;
    videox.play().then(() => {
      console.log("Video is playing with sound.");
    }).catch((err) => {
      console.warn("Playback failed:", err);
    });
    videox.addEventListener("ended", Redirect);
  }




// Hvis videoen er preloaded og der er genereret en blobl uel vises den:
const blobUrl = sessionStorage.getItem('Videos/Dotted50v3.mp4');

const mainVideo = document.getElementById('mainvideo');

if (blobUrl) {
  mainVideo.src = blobUrl;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  mainVideo.src = 'Videos/Dotted50v3.mp4';
}




// Hvis videoen er preloaded og der er genereret en blobl uel vises den:
const blobUrl3 = sessionStorage.getItem('Videos/Sektion3.mp4');

const PlayVideo3 = document.getElementById('Videoplay');

if (blobUrl) {
  PlayVideo3.src = blobUrl3;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  PlayVideo3.src = 'Videos/Sektion3.mp4';
}