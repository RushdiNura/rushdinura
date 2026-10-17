import { skillGroups } from '../../data/skills';

export default function Stack() {
  return (
    <section id="stack" className="stack section-band" aria-labelledby="stack-title">
      <div className="shell">
        <header className="section-heading">
          <p className="label">Stack</p>
          <h2 id="stack-title">What I work with</h2>
          <p className="section-intro">Tools from my CV and the projects above. No self-ratings; the projects are the evidence.</p>
        </header>
        <dl className="stack-list">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
