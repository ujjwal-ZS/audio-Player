import AudioPlayer from "../src/components/AudioPlayer/audioplayer";
import playlist from "../src/playlist/playlist";
import { useContext, useRef, useState } from "react";
import { AudioPlayerContext } from "../provider/AudioPlayerProvider";
import { useRouter } from "next/router";

export default function Home() {
  const [show, setShow] = useState(false);
  const audioPlayerRef = useRef(null);
  const { setShowPlayerInBottom, playState } = useContext(AudioPlayerContext);
  const { playbackState } = playState;
  const router = useRouter();
  const onCloseModal = () => {
    setShow(false);
    if (playbackState === "PLAYING") setShowPlayerInBottom(true);
  };
  return (
    <div className="bg-red">
      <div className="text-3xl underline bg-red-500 mb-5">Hello world!</div>
      <button onClick={() => setShow(!show)}>show Modal</button>
      <br />
      <button onClick={() => router.push("/page2")}>Next Page</button>{" "}
      {/* Use router.push */}
      {show && (
        <Modal closeModal={onCloseModal}>
          <AudioPlayer
            playlist={playlist}
            onClose={() => setShow(false)}
            audioPlayerRef={audioPlayerRef}
          />
        </Modal>
      )}
    </div>
  );
}

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="m-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
