import { useState, useRef, useEffect } from "react";
// import { InitialPlayerState } from "./types";
import { createAudioplayer } from "./audioplayer";

function useAudioPlayer(playlist) {
  const [playerState, setPlayerState] = useState({});
  const playerRef = useRef(null);

  useEffect(() => {
    const newPlayer = createAudioplayer(playlist, setPlayerState);
    playerRef.current = newPlayer;
    return () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  function setPlaybackPosition(position) {
    playerRef.current && playerRef.current.setPlaybackPosition(position);
  }

  function toggleShuffle() {
    playerRef.current && playerRef.current.toggleShuffle();
  }

  function toggleRepeat() {
    playerRef.current && playerRef.current.toggleRepeat();
  }

  function togglePlayPause() {
    playerRef.current && playerRef.current.togglePlayPause();
  }

  function playNextTrack() {
    playerRef.current && playerRef.current.playNextTrack();
  }

  function playPreviousTrack() {
    playerRef.current && playerRef.current.playPreviousTrack();
  }

  function skipForward() {
    playerRef.current && playerRef.current.skipForward();
  }

  function skipBackward() {
    playerRef.current && playerRef.current.skipBackward();
  }

  function onChangeSpeed() {
    playerRef.current && playerRef.current.handleSpeedChange();
  }

  function cleanup() {
    playerRef.current && playerRef.current.cleanup();
  }

  return {
    setPlaybackPosition,
    playerState,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    skipForward,
    skipBackward,
    onChangeSpeed,
    cleanup,
  };
}

export default useAudioPlayer;
