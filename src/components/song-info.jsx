import Image from "next/image";

const SongInfo = ({ title, artist, coverArtSrc }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image alt="Cover Art" src={coverArtSrc} width={60} height={60} />
      <div className="flex flex-col">
        <span className="text-xs drop-shadow-lg text-primary">{title}</span>
        <span className="text-xs drop-shadow-lg text-primary">{artist}</span>
      </div>
    </div>
  );
};

export default SongInfo;
