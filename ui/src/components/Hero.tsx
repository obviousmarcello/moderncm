import { useLanguage } from '../i18n/LanguageContext';
import { content, freeSaturdays } from '../i18n/content';

interface Props {
  selectedDate: string;
  onPickDate: (date: string) => void;
}

export function Hero({ selectedDate, onPickDate }: Props) {
  const { lang, t } = useLanguage();
  const other = lang === 'hu' ? 'en' : 'hu';
  const fmt = new Intl.DateTimeFormat(lang === 'hu' ? 'hu-HU' : 'en-GB', { month: 'long', day: 'numeric' });

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <h1 className="hero__greeting" key={lang}>
          <span className="hero__primary">{t.hero.greeting}</span>
          <span className="hero__echo" lang={other} aria-hidden="true">
            {content[other].hero.greeting}
          </span>
        </h1>
        <p className="hero__lead">{t.hero.lead}</p>
        <div className="hero__actions">
          <a className="button" href="#enquire">
            {t.hero.primaryCta}
          </a>
          <a className="button button--ghost" href="#packages">
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>

      <aside className="dates" aria-labelledby="dates-title">
        <h2 id="dates-title" className="dates__title">
          {t.hero.datesTitle}
        </h2>
        <p className="dates__hint">{t.hero.datesHint}</p>
        <ul className="dates__list">
          {freeSaturdays.map((d) => (
            <li key={d}>
              <button
                type="button"
                className="date-chip"
                aria-pressed={selectedDate === d}
                aria-label={`${t.hero.dateAction} ${fmt.format(new Date(d))}`}
                onClick={() => onPickDate(d)}
              >
                {fmt.format(new Date(d))}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
