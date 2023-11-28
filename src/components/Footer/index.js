import React, { useContext } from "react";
import playlist from "../../playlist/playlist";
import { AudioPlayerContext } from "../../../provider/AudioPlayerProvider";
import AudioPlayer from "../audioplayer";
export default function Footer() {
  const { showPlayerInBottom, setShowPlayerInBottom } =
    useContext(AudioPlayerContext);

  return (
    <>
      {showPlayerInBottom && (
        <div className="fixed bottom-0 w-full">
          <AudioPlayer
            playlist={playlist}
            onClose={() => setShowPlayerInBottom(false)}
          />
        </div>
      )}
      <>Hey Footer</>
    </>
  );
}
