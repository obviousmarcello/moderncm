import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LanguageProvider } from './i18n/LanguageContext';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <LanguageProvider>
      <a className="skip-link" href="#main">
        Ugrás a tartalomhoz / Skip to content
      </a>
      <Header />
      <main id="main">
        <HomePage />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
