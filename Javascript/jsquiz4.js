/* Tjek svar kode */

/* sæt maks svar man kan give til 3 ved at forhindre flere klik */
let answercount = 0;
const maxAnswers = 3;

  function checkanswer(){
    console.log("Answer has been checked");
    if (answercount >= maxAnswers) return;
   
    
/* Definer selectedtarget som et event der er targeted, deefter hentes data-value for at se om svaret er korrekt */
    let selectedElement2 = event.target.closest("[data-value]");

    selectedElement2.style.transition = "all 0.5s ease";

    let AnswerData2 = selectedElement2.getAttribute("data-value");

    if (AnswerData2 === "correct") {

        selectedElement2.style.backgroundColor = "#1eff00";
        
        
  
    } else {
        selectedElement2.style.backgroundColor = "#ff0000";
}


/* Hvis man klikker på et target med en data value lægges +1 til answercount */
selectedElement2.dataset.clicked = "true";
answercount++;


/* Når man har svaret på alle 3, bliver fortsæt kanppen synlig */
if (answercount === 3) {

    document.querySelector("#containerbutton").style.transition = "opacity 0.9s ease";
    document.querySelector("#containerbutton").style.opacity ="100%";
    
} }










// Hvis videoen er preloaded og der er genereret en blobl uel vises den:
const blobUrl = sessionStorage.getItem('Videos/Dotted50v3.mp4');

const mainVideo = document.getElementById('mainvideo');

if (blobUrl) {
  mainVideo.src = blobUrl;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  mainVideo.src = 'Videos/Dotted50v3.mp4';
}

















