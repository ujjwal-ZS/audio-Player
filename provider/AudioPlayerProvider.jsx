import React, { createContext, useState } from "react";

export const AudioPlayerContext = createContext(null);

export const AudioPlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [showPlayerInBottom, setShowPlayerInBottom] = useState();

  return (
    <AudioPlayerContext.Provider
      value={{
        showPlayerInBottom,
        setShowPlayerInBottom,
        playlist,
        setPlaylist,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};
