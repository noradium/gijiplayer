const $audio = document.querySelector('audio');
const $filename = document.querySelector('.filename');
const $playbackRate = document.querySelector('.playbackRate');

document.addEventListener('dragover', (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'link';
  showDropping();
});

document.addEventListener('dragleave', (event) => {
  hideDropping();
});

document.addEventListener('drop', (event) => {
  event.preventDefault();
  hideDropping();

  const files = event.dataTransfer.files;
  $audio.src = URL.createObjectURL(files[0]);
  $audio.load();
  $filename.textContent = files[0].name;
});

document.addEventListener("keydown", event => {
  console.log('keydown', event.key);
  switch (event.key) {
    case 'ArrowDown':
      $audio.playbackRate -= 0.05;
      $playbackRate.textContent = `x${$audio.playbackRate}`;
      break;
    case 'ArrowUp':
      $audio.playbackRate += 0.05;
      $playbackRate.textContent = `x${$audio.playbackRate}`;
      break;
    case 'ArrowRight':
      $audio.currentTime += 5;
      break;
    case 'ArrowLeft':
      $audio.currentTime -= 5;
      break;
    case ' ':
      $audio.paused ? $audio.play() : $audio.pause();
      break;
  }
});

function showDropping() {
  document.querySelector('.dropOverlay').style.display = 'flex';
}

function hideDropping() {
  document.querySelector('.dropOverlay').style.display = 'none';
}
