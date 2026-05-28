let isPlaying = false;
let progressPct = 54;
let progressTimer = null;

const tracks = [
  {
    name: 'Heat Waves',
    artist: 'Glass Animals'
  },
  {
    name: 'Blue Night 1999',
    artist: 'Various Artists'
  },
  {
    name: 'My Desi Dream',
    artist: 'Various Artists'
  }
];

let currentTrackIdx = 0;

function togglePlay() {

  isPlaying = !isPlaying;

  const btn = document.getElementById('playBtn');

  if (isPlaying) {
    btn.innerHTML = '⏸';
    startProgress();
  }

  else {
    btn.innerHTML = '▶';
    clearInterval(progressTimer);
  }
}

function startProgress() {

  clearInterval(progressTimer);

  progressTimer = setInterval(() => {

    progressPct += 0.2;

    if (progressPct >= 100) {
      progressPct = 0;
      nextTrack();
    }

    document.getElementById('progressFill')
      .style.width = progressPct + '%';

  }, 100);
}

function loadTrack(idx) {

  currentTrackIdx =
    (idx + tracks.length) % tracks.length;

  const track = tracks[currentTrackIdx];

  document.getElementById('trackName')
    .textContent = track.name;

  document.getElementById('trackArtist')
    .textContent = track.artist;
}

function nextTrack() {
  loadTrack(currentTrackIdx + 1);
}

function prevTrack() {
  loadTrack(currentTrackIdx - 1);
}

function playTrack(name, artist) {

  document.getElementById('trackName')
    .textContent = name;

  document.getElementById('trackArtist')
    .textContent = artist;

  if (!isPlaying) {
    togglePlay();
  }
}

function seekTrack(e) {

  const rect =
    e.currentTarget.getBoundingClientRect();

  progressPct =
    ((e.clientX - rect.left) / rect.width) * 100;

  document.getElementById('progressFill')
    .style.width = progressPct + '%';
}

function filterPill(el) {

  document.querySelectorAll('.pill')
    .forEach(p => p.classList.remove('active'));

  el.classList.add('active');
}

function onSearch() {

  const q =
    document.getElementById('searchInput')
    .value;

  console.log(q);
}

function addPlaylist() {

  const name = prompt('Playlist name:');

  if (!name) return;

  const div = document.createElement('div');

  div.className = 'playlist-item';
  div.textContent = name;

  div.onclick = () => selectPlaylist(div);

  document.getElementById('playlists-list')
    .appendChild(div);
}

function selectPlaylist(el) {

  document.querySelectorAll('.playlist-item')
    .forEach(p => p.classList.remove('active'));

  el.classList.add('active');
}

function goHome() {
  document.getElementById('searchInput').value = '';
}
