import { useLanguage } from '../i18n/LanguageContext';

export function TwoLanguages() {
  const { t } = useLanguage();
  const l = t.languages;
  return (
    <section className="section bilingual" id="languages" aria-labelledby="languages-title">
      <div className="section__head">
        <h2 id="languages-title">{l.title}</h2>
        <p>{l.intro}</p>
      </div>
      <figure className="cue">
        <figcaption>{l.sampleCaption}</figcaption>
        <div className="cue__lines">
          <blockquote lang="hu" className="cue__line">
            <span className="cue__tag">HU</span>
            <p>{l.sampleHu}</p>
          </blockquote>
          <blockquote lang="en" className="cue__line cue__line--en">
            <span className="cue__tag">EN</span>
            <p>{l.sampleEn}</p>
          </blockquote>
        </div>
      </figure>
      <ul className="points">
        {l.points.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
