import { useState, useRef, useEffect, useContext } from "react";
import { createAudioplayer } from "./audioplayer";

function useAudioPlayer(playlist, initialState = {}, onUpdatingPlayer) {
  const [playerState, setPlayerState] = useState(initialState);
  const playerRef = useRef(null);

  const handlePlayerStateChange = (value) => {
    setPlayerState(value);
    onUpdatingPlayer(value);
  };

  useEffect(() => {
    const newPlayer = createAudioplayer(
      playlist,
      handlePlayerStateChange,
      playerState
    );
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
