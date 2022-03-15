import Footer from '../src/component/Footer';
import Header from '../src/component/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
