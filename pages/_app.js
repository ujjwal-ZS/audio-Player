import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} class="bg-red" />;
}

export default MyApp;
