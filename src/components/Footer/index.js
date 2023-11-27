import React, { useContext } from "react";
import { AudioPlayerContext } from "../../../provider/AudioPlayerProvider";
import AudioPlayer from "../audioplayer";
export default function Footer() {
  const audioPlayerData = useContext(AudioPlayerContext);
  const { showPlayerInBottom, playlist } = audioPlayerData;
  return (
    <>
      {showPlayerInBottom && <AudioPlayer playList={playlist} />}
      <>Hey Footer</>
    </>
  );
}
