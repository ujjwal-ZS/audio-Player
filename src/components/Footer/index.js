import React, { useContext } from "react";
import { AudioPlayerContext } from "../../../provider/AudioPlayerProvider";
import AudioPlayer from "../AudioPlayer/audioplayer";
export default function Footer() {
  const { showPlayerInBottom, setShowPlayerInBottom, playState, playlist } =
    useContext(AudioPlayerContext);

  return (
    <>
      {showPlayerInBottom && (
        <div className="fixed bottom-0 w-full">
          <AudioPlayer
            playlist={playlist}
            initialState={playState}
            onClose={() => setShowPlayerInBottom(false)}
          />
        </div>
      )}
      <>Hey Footer</>
    </>
  );
}
