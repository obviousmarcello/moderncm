import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <p className="wordmark wordmark--footer">
        modern<span className="wordmark__cm">CM</span>
      </p>
      <p>{t.footer.line}</p>
      <p className="site-footer__small">
        © {new Date().getFullYear()} Modern CM. {t.footer.rights}
      </p>
    </footer>
  );
}
