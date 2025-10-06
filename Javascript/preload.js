
  // Array af alle undersider
  const pages = [
    'index.html',
    'Mainpage.html',
    'Quiz1.html',
    'Quiz2.html',
    'Quiz3.html',
    'Quiz4.html',
    'end.html'
  ];

  // Array af alle video filer
  const videos = [
    'Videos/Dotted50v3.mp4',
    'Videos/Sektion1.mp4',
    'Videos/Sektion2.mp4',
    'Videos/Sektion3.mp4',
    'Videos/Sektion4.mp4',
  ];

  let loadedCount = 0;
  let videoCount = 0;
  const cachedPages = {};
  const cachedVideos = {};

  // Prealoading af HTML undersider
  function preloadPage(url) {
    return fetch(url)
      .then(res => res.text())
      .then(html => {
        cachedPages[url] = html;
        loadedCount++;
        console.log(`Loaded page ${loadedCount} of ${pages.length}: ${url}`);
      });
  }

  // Preload videoerne ved at hente dem ned som blob (binær) URL som ken fremkaldes
  function preloadVideo(url) {
    return fetch(url)
      .then(res => res.blob())
      .then(blob => {
        cachedVideos[url] = URL.createObjectURL(blob); // Her laves blob URL
        videoCount++;
        console.log(`Preloaded video ${videoCount} of ${videos.length}: ${url}`);
      });
  }

  // Indlæs alle sider og derefter viderestil
  Promise.all([
    ...pages.map(preloadPage),
    ...videos.map(preloadVideo)
  ])
  .then(() => {
    console.log('All pages and videos preloaded.');
    window.location.href = 'Mainpage.html';
  })
  .catch(err => {
    console.error('Error during preloading:', err);
    alert('Oplevelsen kunne ikke indlæses.');
  });
