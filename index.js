
var element_to_watch = document.querySelectorAll(".watch");
var callback = function (items){
    items.forEach((item => {
        if(item.isIntersecting){
            item.target.classList.add("in-page");
        }else{
            item.target.classList.remove("in-page");
        }
    }));
}

var observer = new IntersectionObserver(callback,{threshold:0.5});
element_to_watch.forEach((element => {
    observer.observe(element);
}));


const balloons = document.querySelectorAll('.palloncino');

// Ascolta l'evento di fine animazione per ciascun palloncino
balloons.forEach((balloon) => {
  balloon.addEventListener('animationend', () => {
    // Aggiungi la classe "d-none" al completamento dell'animazione
    balloon.classList.add('d-none');
  });
});



const audio = document.getElementById('custom-audio');
const playBtn = document.querySelector('.play-btn');
const volumeBtn = document.querySelector('.volume-btn');
const progressBar = document.querySelector('.progress');
const timeDisplay = document.querySelector('.time-display');

let isPlaying = false;

playBtn.addEventListener('click', togglePlay);
volumeBtn.addEventListener('click', toggleMute);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => (isPlaying = false));

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updatePlayButton();
}

function toggleMute() {
  audio.muted = !audio.muted;
  volumeBtn.classList.toggle('muted', audio.muted);
}

function updatePlayButton() {
  playBtn.classList.toggle('playing', isPlaying);
}

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
