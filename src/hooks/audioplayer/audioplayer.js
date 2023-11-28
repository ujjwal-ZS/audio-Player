export function createAudioplayer(playlist, onStateChange, initialState) {
  let currentTrackIndex = 0;
  let repeat = false;
  let shuffle = false;
  const playbackHistory = [];
  const audioElement = new Audio();

  const speedOptions = [1, 1.5, 1.75, 2];
  let currentSpeedIndex = 0;

  function emitCurrentPlayerState() {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  }

  function computeCurrentPlayerState() {
    return {
      currentTrackMetadata: getCurrentTrackMetadata(),
      currentTrackDuration: getCurrentTrackDuration(),
      currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
      playbackState: getPlaybackState(),
      repeat,
      shuffle,
      currentTrackIndex,
      currentSpeed: speedOptions[currentSpeedIndex],
    };
  }

  function getCurrentTrackMetadata() {
    if (currentTrackIndex < playlist.length) {
      return playlist[currentTrackIndex].metadata;
    } else {
      return null;
    }
  }

  function getCurrentTrackDuration() {
    return isNaN(audioElement.duration) ? null : audioElement.duration;
  }

  function getCurrentTrackPlaybackPosition() {
    return isNaN(audioElement.currentTime) ? null : audioElement.currentTime;
  }

  function getPlaybackState() {
    return audioElement.paused ? "PAUSED" : "PLAYING";
  }

  function setupAudioElementListeners() {
    audioElement.addEventListener("playing", emitCurrentPlayerState);
    audioElement.addEventListener("pause", emitCurrentPlayerState);
    audioElement.addEventListener("ended", onCurrentTrackEnded);
    audioElement.addEventListener("timeupdate", emitCurrentPlayerState);
    audioElement.addEventListener("loadeddata", emitCurrentPlayerState);
  }

  function removeAudioElementListeners() {
    audioElement.removeEventListener("playing", emitCurrentPlayerState);
    audioElement.removeEventListener("pause", emitCurrentPlayerState);
    audioElement.removeEventListener("ended", onCurrentTrackEnded);
    audioElement.removeEventListener("timeupdate", emitCurrentPlayerState);
    audioElement.removeEventListener("loadeddata", emitCurrentPlayerState);
  }

  function onCurrentTrackEnded() {
    if (repeat) {
      replayCurrentTrack();
    } else {
      playNextTrack();
    }
  }

  function replayCurrentTrack() {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  function loadTrack(index) {
    audioElement.src = playlist[index].audioSrc;
    audioElement.load();
    currentTrackIndex = index;
  }

  function computeNextTrackIndex() {
    return shuffle ? computeRandomTrackIndex() : computeSubsequentTrackIndex();
  }

  function computeSubsequentTrackIndex() {
    return (currentTrackIndex + 1) % playlist.length;
  }

  function computeRandomTrackIndex() {
    if (playlist.length === 1) return 0;
    const index = Math.floor(Math.random() * (playlist.length - 1));
    return index < currentTrackIndex ? index : index + 1;
  }

  function init() {
    if (initialState?.currentTrackIndex) {
      currentTrackIndex = initialState.currentTrackIndex;
      loadTrack(currentTrackIndex);
    } else {
      loadTrack(currentTrackIndex);
    }

    if (initialState?.currentSpeed) {
      currentSpeedIndex = speedOptions.indexOf(initialState.currentSpeed);
      audioElement.playbackRate = speedOptions[currentSpeedIndex];
    }
    if (initialState.repeat !== undefined) {
      repeat = initialState.repeat;
    }
    if (initialState.shuffle !== undefined) {
      shuffle = initialState.shuffle;
    }
    if (initialState.currentTrackMetadata) {
      playlist[currentTrackIndex].metadata = initialState.currentTrackMetadata;
    }
    if (initialState.currentTrackPlaybackPosition !== undefined) {
      audioElement.currentTime = initialState.currentTrackPlaybackPosition;
    }
    if (initialState?.playbackState) {
      initialState?.playbackState === "PLAYING"
        ? audioElement.play()
        : audioElement.pause;
    }
    if (initialState?.playbackState) {
      initialState?.playbackState === "PLAYING"
        ? audioElement.play()
        : audioElement.pause;
    }
    setupAudioElementListeners();
    emitCurrentPlayerState();
  }

  function cleanup() {
    removeAudioElementListeners();
    audioElement.pause();
  }

  function setPlaybackPosition(position) {
    if (isNaN(position)) return;
    audioElement.currentTime = position;
  }

  function toggleShuffle() {
    shuffle = !shuffle;
    emitCurrentPlayerState();
  }

  function toggleRepeat() {
    repeat = !repeat;
    emitCurrentPlayerState();
  }

  function playNextTrack() {
    playbackHistory.push(currentTrackIndex);
    const nextTrackIndex = computeNextTrackIndex();
    loadTrack(nextTrackIndex);
    audioElement.play();
  }

  function playPreviousTrack() {
    if (playbackHistory.length === 0 || audioElement.currentTime > 5) {
      replayCurrentTrack();
    } else {
      const previousTrackIndex = playbackHistory.pop();
      loadTrack(previousTrackIndex);
      audioElement.play();
    }
  }

  function togglePlayPause() {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  function skipForward() {
    const newPosition = audioElement.currentTime + 30;
    if (newPosition < audioElement.duration) {
      audioElement.currentTime = newPosition;
    } else {
      audioElement.currentTime = audioElement.duration;
    }
    emitCurrentPlayerState();
  }

  function skipBackward() {
    const newPosition = audioElement.currentTime - 30;
    if (newPosition > 0) {
      audioElement.currentTime = newPosition;
    } else {
      audioElement.currentTime = 0;
    }
    emitCurrentPlayerState();
  }

  function handleSpeedChange() {
    currentSpeedIndex = (currentSpeedIndex + 1) % speedOptions.length;
    const selectedSpeed = speedOptions[currentSpeedIndex];
    audioElement.playbackRate = selectedSpeed;
    emitCurrentPlayerState();
  }

  init();
  return {
    setPlaybackPosition,
    toggleShuffle,
    toggleRepeat,
    playNextTrack,
    playPreviousTrack,
    skipForward,
    skipBackward,
    togglePlayPause,
    handleSpeedChange,
    cleanup,
  };
}
