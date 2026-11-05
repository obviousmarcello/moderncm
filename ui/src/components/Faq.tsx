import { useLanguage } from '../i18n/LanguageContext';

export function Faq() {
  const { t } = useLanguage();
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">{t.faq.title}</h2>
      <div className="faq__list">
        {t.faq.items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
