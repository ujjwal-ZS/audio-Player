import React, { useContext } from "react";
import {
  AudioPlayerContext,
  AudioPlayerContextType,
} from "../../../provider/AudioPlayerProvider";
import AudioPlayer, {
  AudioPlayerState,
  PlaylistItem,
} from "../AudioPlayer/audioplayer";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const {
    showPlayerInBottom,
    setShowPlayerInBottom,
    playState,
    playlist,
  }: AudioPlayerContextType = useContext(AudioPlayerContext);

  return (
    <>
      {showPlayerInBottom && (
        <div className="fixed bottom-0 w-full">
          <AudioPlayer
            playlist={playlist as PlaylistItem[]} // Assuming PlaylistItem is the type for playlist items
            initialState={playState as AudioPlayerState} // Assuming AudioPlayerState is the type for playState
            onClose={() => setShowPlayerInBottom(false)}
          />
        </div>
      )}
      <>Hey Footer</>
    </>
  );
};

export default Footer;
