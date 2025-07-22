function playHover(src) {
  const audio = new Audio(src);
  audio.volume = 0.6;
  audio.play();
}

function playClick(src) {
  const audio = new Audio(src);
  audio.volume = 0.8;
  audio.play();
}
