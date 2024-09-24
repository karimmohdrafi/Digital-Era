const og = new Audio('OG.mp3');
const cartoonAudio = new Audio('Mawaa Enthaina.mp3');
const forceAudio = new Audio('Fear Song.mp3');
const squeakyAudio = new Audio('Dum Masala.mp3');
const hopeAudio = new Audio('Come Back Indian.mp3');
const janjiAudio = new Audio('Ambikapathy.mp3');
const darshana = new Audio('Darshana.mp3');
const hukum = new Audio('Hukum.mp3');
const humma = new Audio('Humma Humma.mp3')

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: og, audioName: 'OG' },
  { ele: cartoonAudio, audioName: 'Mawaa Enthaina' },
  { ele: forceAudio, audioName: 'Fear Song' },
  { ele: squeakyAudio, audioName: 'Dum Masala' },
  { ele: hopeAudio, audioName: 'Come Back India' },
  { ele: janjiAudio, audioName: 'Ambikapathy' },
  { ele: darshana, audioName: 'Darshana' },
  { ele: hukum, audioName: 'Hukum' },
  { ele: humma, audioName: 'Humma Humma' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}