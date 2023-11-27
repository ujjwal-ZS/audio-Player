const trackOne = "songs/track1.mp3";
const trackTwo = "songs/track2.mp3";
const trackThree = "songs/track3.mp3";
const trackFour = "songs/track4.mp3";
const coverArtOne = "/cover-art/1.jpg";
const coverArtTwo = "/cover-art/2.jpg";
const coverArtThree = "/cover-art/3.jpg";
const coverArtFour = "/cover-art/4.jpg";

const playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: "Guitar I",
      artist: "John Doe",
      coverArtSrc: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: "Guitar II",
      artist: "John Doe",
      coverArtSrc: coverArtTwo,
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: "Sunflower",
      artist: "Jane Doe",
      coverArtSrc: coverArtThree,
    },
  },
  {
    audioSrc: trackFour,
    metadata: {
      title: "Flowers",
      artist: "Jane Doe",
      coverArtSrc: coverArtFour,
    },
  },
];

export default playlist;
