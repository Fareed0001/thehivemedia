import '@/styles/globals.css';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import { ThemeProvider } from 'next-themes';


export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
}
