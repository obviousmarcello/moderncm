import { useLanguage } from '../i18n/LanguageContext';

export function Packages({ onChoose }: { onChoose: (id: string) => void }) {
  const { t } = useLanguage();
  const p = t.packages;
  return (
    <section className="section packages" id="packages" aria-labelledby="packages-title">
      <div className="section__head">
        <h2 id="packages-title">{p.title}</h2>
        <p>{p.intro}</p>
      </div>
      <div className="packages__grid">
        {p.items.map((item) => {
          const featured = item.id === 'bilingual';
          return (
            <article key={item.id} className={`pack${featured ? ' pack--featured' : ''}`}>
              {featured && <p className="pack__flag">{p.recommended}</p>}
              <h3 className="pack__name">{item.name}</h3>
              <p className="pack__price">{item.price}</p>
              <p className="pack__hours">{item.hours}</p>
              <p className="pack__summary">{item.summary}</p>
              <ul className="pack__includes">
                {item.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              <a
                className={`button${featured ? '' : ' button--outline'}`}
                href="#enquire"
                onClick={() => onChoose(item.id)}
              >
                {p.choose}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
