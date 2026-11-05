import { useLanguage } from '../i18n/LanguageContext';

export function Reviews() {
  const { t } = useLanguage();
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <h2 id="reviews-title">{t.reviews.title}</h2>
      <div className="reviews__list">
        {t.reviews.items.map((r) => (
          <figure key={r.who} className="review">
            <blockquote>
              <p>{r.quote}</p>
            </blockquote>
            <figcaption>
              <strong>{r.who}</strong>
              <span>{r.where}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
