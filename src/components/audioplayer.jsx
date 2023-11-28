import playlist from "../playlist/playlist";
import Controls from "./controls";
import ProgressBar from "./progressbar";
import SongInfo from "./song-info";
import useAudioPlayer from "../audioplayer/hooks";
import Image from "next/image";

const AudioPlayer = ({ playList = playlist, onClose }) => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
    skipBackward,
    skipForward,
    onChangeSpeed,
  } = useAudioPlayer(playList);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
    currentSpeed,
  } = playerState;

  function setProgress(value) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress() {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  return (
    <div className="w-full">
      <ProgressBar
        rightLabel={formatTime(currentTrackDuration)}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      <div className="grid sm:grid-cols-3 w-full bg-slate-100 p-2">
        <div className="flex justify-center sm:justify-start sm:items-start">
          <SongInfo
            title={currentTrackMetadata?.title}
            artist={currentTrackMetadata?.artist}
            coverArtSrc={currentTrackMetadata?.coverArtSrc}
          />
        </div>

        <div className="flex justify-center sm:items-center">
          <Controls
            shuffle={shuffle}
            repeat={repeat}
            onShuffleClick={toggleShuffle}
            onRepeatClick={toggleRepeat}
            onPrevClick={playPreviousTrack}
            onNextClick={playNextTrack}
            onPlayClick={togglePlayPause}
            skipBackward={skipBackward}
            skipForward={skipForward}
            isPlaying={playbackState === "PLAYING"}
          />
        </div>

        <div className="flex gap-3 items-center justify-center sm:justify-end">
          <div
            className="text-gray-500 text-sm pr-2 cursor-pointer"
            onClick={onChangeSpeed}
          >
            {`Speed ${currentSpeed}`}
          </div>
          <span className="h-9 border-r border-gray-300 mx-2" />
          <div className="mr-2 cursor-pointer" onClick={onClose}>
            <Image
              alt="Cover Art"
              src="/assets/icons/ic_cross.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds) {
  if (timeInSeconds === null) return "";
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, "0");
  const seconds = `${numberOfSeconds}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}
