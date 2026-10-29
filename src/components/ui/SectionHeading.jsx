export default function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow && (
        <p className="section-kicker">
          <span className="section-kicker-line" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
