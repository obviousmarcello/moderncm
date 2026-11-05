import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/content';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'hu', label: 'Magyar' },
  { code: 'en', label: 'English' },
];

export function Header() {
  const { lang, t, setLang } = useLanguage();
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Modern CM">
        modern<span className="wordmark__cm">CM</span>
      </a>
      <nav className="site-nav" aria-label={lang === 'hu' ? 'Fő navigáció' : 'Main navigation'}>
        <a href="#show">{t.nav.show}</a>
        <a href="#languages">{t.nav.languages}</a>
        <a href="#packages">{t.nav.packages}</a>
        <a href="#faq">{t.nav.faq}</a>
      </nav>
      <div className="lang-switch" role="group" aria-label={t.switchLabel}>
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            aria-pressed={lang === l.code}
            onClick={() => setLang(l.code)}
          >
            <span aria-hidden="true">{l.code.toUpperCase()}</span>
            <span className="visually-hidden">{l.label}</span>
          </button>
        ))}
      </div>
      <a className="button button--small site-header__cta" href="#enquire">
        {t.nav.contact}
      </a>
    </header>
  );
}
