
import '@/styles/globals.css';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';


// SEO CODE METATAG 
// Define metadata
const metadata = {
  title: {
    default: "The Hive Media",
    template: "%s | The Hive Media"
  },
  description: "The best blog and news media site with excellent content, best reads, and the writers hub"
};
// SEO CODE METATAG 

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}