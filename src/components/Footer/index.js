import React, { useContext } from "react";
import { AudioPlayerContext } from "../../../provider/AudioPlayerProvider";
import AudioPlayer from "../audioplayer";
export default function Footer() {
  const { showPlayerInBottom, playlist } = useContext(AudioPlayerContext);

  return (
    <>
      {showPlayerInBottom && <AudioPlayer playList={playlist} />}
      <>Hey Footer</>
    </>
  );
}
