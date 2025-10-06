window.addEventListener('DOMContentLoaded', function() {
  // elements
  const illustration = document.querySelector('.Quiz1-illustration');
  const sliderSection = document.querySelector('.slider-section');
  const sliderRail = document.querySelector('.slider-rail');
  const sliderDot = document.querySelector('.slider-dot');
  const bubbleText = document.querySelector('.bubble-text');
  const nextBtn = document.getElementById('nextBtn');

  // prepare initial states
  sliderSection.classList.add('fade', 'hidden');
  illustration.classList.add('fade');
  nextBtn.style.opacity = 0;
  nextBtn.style.pointerEvents = 'none';

  // first fade out illustration
  setTimeout(() => {
    illustration.classList.add('transparent');
    
    // after illustration fades out completely (1s), show the slider
    setTimeout(() => {
      illustration.style.display = 'none';
      sliderSection.classList.remove('hidden');
    }, 1000);
  }, 6000);

  // dragging logic
  let isDragging = false;

  function updatePosition(clientX) {
    const rect = sliderRail.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const pct = x / rect.width * 100;
    sliderDot.style.left = pct + '%';
    bubbleText.textContent = Math.round(pct) + ' %';
  }

  sliderDot.addEventListener('pointerdown', e => {
    e.preventDefault();
    isDragging = true;
    sliderDot.setPointerCapture(e.pointerId);
    sliderDot.classList.add('active');
  });

  sliderDot.addEventListener('pointermove', e => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  sliderDot.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    sliderDot.releasePointerCapture(e.pointerId);
    sliderDot.classList.remove('active');

    // fade in Next button
    nextBtn.style.transition = 'opacity 0.5s ease-in-out';
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = 'auto';
  });

  // also cancel dragging if pointer leaves
  sliderDot.addEventListener('pointercancel', () => {
    isDragging = false;
    sliderDot.classList.remove('active');
  });
});



/*         <!---------------- Content Transitions ---------------->  */
document.addEventListener('DOMContentLoaded', function() {
  const illustrationSection = document.querySelector('.Quiz1-illustration')
  const sliderSection = document.querySelector('.slider-section')
  
  illustrationSection.style.opacity = '1'
  illustrationSection.style.visibility = 'visible'
  
  sliderSection.style.opacity = '0'
  sliderSection.style.visibility = 'hidden'
  sliderSection.style.display = 'none'
  
  illustrationSection.style.transition = 'opacity 1s ease-in-out'
  sliderSection.style.transition = 'opacity 1s ease-in-out'
  
  setTimeout(() => {
    illustrationSection.style.opacity = '0'
    
    setTimeout(() => {
      illustrationSection.style.display = 'none'
      illustrationSection.style.visibility = 'hidden'
      
      sliderSection.style.display = 'block'
      sliderSection.style.visibility = 'visible'
      
      setTimeout(() => {
        sliderSection.style.opacity = '1'
      }, 50)
    }, 1000)
  }, 6000)
})



/* Funktionen til redirection */
function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz2.html";
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
const blobUrl1 = sessionStorage.getItem('Videos/Sektion2.mp4');

const PlayVideo1 = document.getElementById('Videoplay');

if (blobUrl) {
  PlayVideo1.src = blobUrl1;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  PlayVideo1.src = 'Videos/Sektion2.mp4';
}
