import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AudioPlayer from "../src/components/audioplayer";

export default function Home() {
  return (
    <div className="bg-red">
      <div className="text-3xl underline bg-red-500 mb-5">Hello world!</div>
      <AudioPlayer />
    </div>
  );
}
