/* Kontrol af svar - kode*/

/* Begrænsning på og tæller af antal afgivne svar*/
let answercount = 0;
const maxAnswers = 1;

  function checkanswer(){
    console.log("Answer has been checked");
    if (answercount >= maxAnswers) return; //Gør at funktionen kan køres 1 gang
   

    
    /* Definition af selectedtarget som event. Evtentet bliver targeted, hvor data-value hentes efterfølengende for at se kontrollere om svaret er korrekt */
    let selectedElement2 = event.target.closest("[data-value]"); //closets den data der tættest på det element du klikker på (så det virker selvom man kommer til at clicke på teksten) - det er et h3 tag i elementet som blokerer

    selectedElement2.style.transition = "all 0.5s ease"; //style on transition, så stylingen af knapperne ikke sker med det samme

    let AnswerData2 = selectedElement2.getAttribute("data-value");

    if (AnswerData2 === "correct") {

        selectedElement2.style.backgroundColor = "#1eff00";
        
        
  
    } else {
        selectedElement2.style.backgroundColor = "#ff0000";
    }

    /* Tæller funktion - hvis man klikker på en svarmulighed, tillægges +1 til answercount variablen */
    selectedElement2.dataset.clicked = "true"; // useless kodelinje fra tidligere projekt - EN FEJL!
    answercount++; //lægger +1 oveni answercount
    //++ lægger 1 oveni tælleren

    /* Synliggøreslse af knap fortsæt knap, når answercount har ramt 1 */
    if (answercount === 1) {

        document.querySelector("#containerbutton").style.transition = "opacity 0.9s ease";
        document.querySelector("#containerbutton").style.opacity ="100%";
        //querySelector er en metode henter den første der matcher navnet i dokumentet (til classes men fungererer også til Id'er)
} }












/* Video 1 redirect */

/* Funktionen til redirection */
function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz4.html"; //linker videre til næste html-side
}

/* Funktionen til afspilning af video */
function playvideo(){
    const videox = document.getElementById("Videoplay")
    const evry = document.querySelector("main")

    /* Style ændring for at vise skjult video og gemme baggrund */
    videox.style.display = "block"; //viser video
    evry.style.display = "none"; //skjuler alt andet
    

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

//gå til redirect function (ovenover)



// Hvis videoen er preloaded og der er genereret en blob url vises den: //hvis videoen er gemt i browserhukommelsen
const blobUrl = sessionStorage.getItem('Videos/Dotted50v3.mp4'); //omdannelse af video til binærdata som URL

const mainVideo = document.getElementById('mainvideo');

if (blobUrl) {
  mainVideo.src = blobUrl;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet (lokalt)
  mainVideo.src = 'Videos/Dotted50v3.mp4';
}




// Hvis videoen er preloaded og der er genereret en blobl url vises den:
const blobUrl4 = sessionStorage.getItem('Videos/Sektion4.mp4');

const PlayVideo4 = document.getElementById('Videoplay');

if (blobUrl) {
  PlayVideo4.src = blobUrl4;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  PlayVideo4.src = 'Videos/Sektion4.mp4';
}

