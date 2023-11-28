import Footer from "../src/components/Footer";
import { AudioPlayerProvider } from "../provider/AudioPlayerProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AudioPlayerProvider>
      <Component {...pageProps} class="bg-red" />
      <Footer />
    </AudioPlayerProvider>
  );
}

export default MyApp;
