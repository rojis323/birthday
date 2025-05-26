const audio = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');

window.addEventListener('DOMContentLoaded', () => {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Autoplay started successfully, hide button if visible
      playBtn.classList.remove('show');
    }).catch(() => {
      // Autoplay blocked, show play button
      playBtn.classList.add('show');
    });
  }
});

playBtn.addEventListener('click', () => {
  audio.play();
  playBtn.classList.remove('show');
});
