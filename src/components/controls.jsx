import Image from "next/image";

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}) => {
  return (
    <div className="flex flex-row mt-4">
      <ImageButton
        src="/assets/icons/ic_shuffle.svg"
        disabledSrc="/assets/icons/ic_shuffle_disabled.svg"
        onClick={onShuffleClick}
        disabled={!shuffle}
      />
      <ImageButton src="/assets/icons/ic_prev.svg" onClick={onPrevClick} />
      <ImageButton
        className="mr-2 ml-2"
        src={
          isPlaying ? "/assets/icons/ic_pause.svg" : "/assets/icons/ic_play.svg"
        }
        onClick={onPlayClick}
      />
      <ImageButton src="/assets/icons/ic_next.svg" onClick={onNextClick} />
      <ImageButton
        src={
          repeat
            ? "/assets/icons/ic_repeat.svg"
            : "/assets/icons/ic_repeat_disabled.svg"
        }
        onClick={onRepeatClick}
      />
    </div>
  );
};

export default Controls;

const ImageButton = ({ onClick, src, disabledSrc, disabled }) => {
  const buttonSize = 65;
  return (
    <button onClick={onClick} disabled={disabled}>
      <Image
        src={disabled ? disabledSrc : src}
        alt="Icon"
        width={buttonSize}
        height={buttonSize}
        className="drop-shadow-lg"
      />
    </button>
  );
};
