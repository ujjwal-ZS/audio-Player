import Image from "next/image";

const SongInfo = ({ title, artist, coverArtSrc }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="drop-shadow-lg rounded-sm">
        <Image alt="Cover Art" src={coverArtSrc} width={60} height={60} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs drop-shadow-lg text-primary">{title}</span>
        <span className="text-xs drop-shadow-lg text-primary">{artist}</span>
      </div>
    </div>
  );
};

export default SongInfo;
