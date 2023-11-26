import Image from "next/image";

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  skipBackward,
  skipForward,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}) => {
  return (
    <div className="flex flex-row mt-4">
      <ImageButton src="/assets/icons/ic_prev.svg" onClick={onPrevClick} />
      <div className="flex items-center" onClick={skipBackward}>
        <ImageButton src="/assets/icons/ic_backward.svg" /> <p>30</p>
      </div>
      <ImageButton
        className="mr-2 ml-2"
        src={
          isPlaying ? "/assets/icons/ic_pause.svg" : "/assets/icons/ic_play.svg"
        }
        onClick={onPlayClick}
      />
      <div className="flex items-center" onClick={skipForward}>
        <p>30</p>
        <ImageButton src="/assets/icons/ic_forward.svg" />
      </div>
      <ImageButton src="/assets/icons/ic_next.svg" onClick={onNextClick} />
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
