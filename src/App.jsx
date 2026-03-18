import './App.css'

const sections = [
  {
    id: '01',
    eyebrow: 'Signal bloom',
    title: 'Chromatic Void',
    body:
      'An infinite-scroll meditation on color pressure, orbital drift, and impossible architecture. No product. No pitch. Just a strange little universe trying very hard to look expensive.',
    align: 'left',
  },
  {
    id: '02',
    eyebrow: 'Soft collision',
    title: 'Light behaves like liquid here.',
    body:
      'Gradients smear into metallic fog while thin vectors keep trying to impose order. The tension between those two systems is the whole point.',
    align: 'right',
  },
  {
    id: '03',
    eyebrow: 'Field notes',
    title: 'Designed to reward slow scrolling.',
    body:
      'Layers move at different speeds, glyphs pulse out of phase, and giant radial forms quietly reorganize the page as you descend.',
    align: 'left',
  },
  {
    id: '04',
    eyebrow: 'Terminal dream',
    title: 'Part gallery, part interface, part hallucination.',
    body:
      'React handles the composition. CSS does the heavy visual lifting: blend modes, grain, depth fog, orbit lines, and oversized typography locked into a strict rhythm.',
    align: 'right',
  },
]

const motifs = [
  'afterimage',
  'lattice',
  'pulse',
  'echo',
  'vector',
  'haze',
  'bloom',
  'drift',
]

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="grid-fade" />
      <div className="noise" />

      <header className="hero-block">
        <p className="kicker">Abstract web study / React + CSS / infinite scroll-ish canvas</p>
        <div className="hero-copy">
          <h1>
            A website for a place
            <span>that does not exist.</span>
          </h1>
          <p className="hero-text">
            Scroll down and it keeps unfolding: oversized forms, drifting rings,
            fractured panels, and a color system somewhere between luxury fashion
            campaign and spacecraft dashboard.
          </p>
        </div>

        <div className="hero-orbit">
          <div className="ring ring-outer" />
          <div className="ring ring-middle" />
          <div className="ring ring-inner" />
          <div className="monolith monolith-a" />
          <div className="monolith monolith-b" />
          <div className="core-label">
            <span>VOID</span>
            <span>STUDY</span>
            <span>∞</span>
          </div>
        </div>
      </header>

      <section className="manifest-strip">
        {motifs.map((motif, index) => (
          <div className="motif-chip" key={`${motif}-${index}`}>
            <span>{motif}</span>
          </div>
        ))}
      </section>

      {sections.map((section, index) => (
        <section className={`story-panel ${section.align}`} key={section.id}>
          <div className="story-meta">
            <span className="story-id">{section.id}</span>
            <span className="story-line" />
          </div>

          <article className="story-card">
            <p className="story-eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>

          <div className={`visual-block visual-${index + 1}`}>
            <div className="visual-sheen" />
            <div className="visual-orbit visual-orbit-a" />
            <div className="visual-orbit visual-orbit-b" />
            <div className="visual-bar" />
            <div className="visual-dot-grid" />
          </div>
        </section>
      ))}

      <section className="gallery-band">
        <div className="gallery-copy">
          <p className="story-eyebrow">Infinite descent</p>
          <h2>Every viewport gets a different composition.</h2>
          <p>
            The page is intentionally tall. It behaves more like a visual mixtape
            than a landing page, with repeating structural rules and enough motion
            to feel alive without turning into a theme park.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="tile tile-tall" />
          <div className="tile tile-wide" />
          <div className="tile tile-small" />
          <div className="tile tile-small alt" />
          <div className="tile tile-wide bottom" />
        </div>
      </section>

      <footer className="footer-note">
        <p>Built as a one-page abstract experiment. Scroll, stare, judge harshly.</p>
      </footer>
    </main>
  )
}

export default App
