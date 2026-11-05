import { useLanguage } from '../i18n/LanguageContext';

export function RunOfShow() {
  const { t } = useLanguage();
  return (
    <section className="section show" id="show" aria-labelledby="show-title">
      <div className="section__head">
        <h2 id="show-title">{t.show.title}</h2>
        <p>{t.show.intro}</p>
      </div>
      <ol className="timeline">
        {t.show.steps.map((s) => (
          <li key={s.time} className="timeline__step">
            <time className="timeline__time">{s.time}</time>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
