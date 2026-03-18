import './App.css'

const chapters = [
  {
    id: 'A1',
    name: 'Perimeter bloom',
    title: 'The page has started dreaming back.',
    text: 'I pushed the composition into stranger territory: denser light stacks, a giant sticky chamber, mirrored marquees, and panels that feel less like sections and more like artifacts recovered from an expensive simulation.',
  },
  {
    id: 'B2',
    name: 'Signal fracture',
    title: 'Order keeps almost happening.',
    text: 'Thin system lines try to domesticate the gradients. They fail beautifully. Every block is structured, but it is structured the way a storm is structured.',
  },
  {
    id: 'C3',
    name: 'Glass pressure',
    title: 'Somewhere between UI and hallucination.',
    text: 'It still reads cleanly, but now the page feels more alive: scroll chambers, oversized typography, vector shards, and enough ambient movement to make the whole thing feel vaguely sentient.',
  },
]

const fragments = [
  'luminous debris',
  'tension grid',
  'silent engine',
  'neon fog',
  'structural echo',
  'liquid signal',
  'afterimage logic',
  'velvet static',
]

const archive = [
  'Specimen 04 / behaving like a luxury ad for a machine cult',
  'Specimen 07 / highlights too glossy to be trusted',
  'Specimen 11 / user interface for an imaginary observatory',
  'Specimen 13 / probably illegal in at least one design school',
]

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="ambient ambient-d" />
      <div className="grid-fade" />
      <div className="noise" />
      <div className="vignette" />

      <header className="hero-block">
        <div className="hero-copy">
          <p className="kicker">Chromatic Void / phase two / less reasonable, more alive</p>
          <h1>
            Elegant enough to feel intentional.
            <span>Unhinged enough to matter.</span>
          </h1>
          <p className="hero-text">
            This is no longer just an abstract landing page. It is a long-form visual
            atmosphere: a gallery of impossible interface fragments drifting through a
            neon weather system.
          </p>

          <div className="hero-stats">
            <div>
              <span>Motion field</span>
              <strong>17 layers</strong>
            </div>
            <div>
              <span>Stability</span>
              <strong>questionable</strong>
            </div>
            <div>
              <span>Intent</span>
              <strong>immaculate</strong>
            </div>
          </div>
        </div>

        <div className="hero-construct">
          <div className="construct-ring ring-1" />
          <div className="construct-ring ring-2" />
          <div className="construct-ring ring-3" />
          <div className="construct-core" />
          <div className="construct-beam beam-a" />
          <div className="construct-beam beam-b" />
          <div className="construct-shard shard-a" />
          <div className="construct-shard shard-b" />
          <div className="construct-shard shard-c" />
          <div className="construct-label">
            <span>VOID</span>
            <span>FIELD</span>
            <span>∆</span>
          </div>
        </div>
      </header>

      <section className="marquee-band">
        <div className="marquee-track">
          {[...fragments, ...fragments].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="spec-grid">
        {fragments.map((item, index) => (
          <div className="spec-card" key={item}>
            <span className="spec-index">0{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="sticky-chamber">
        <div className="sticky-copy">
          <p className="story-eyebrow">Scroll chamber</p>
          <h2>The center of the page refuses to stay still.</h2>
          <p>
            On larger screens, this chamber hangs in place while the world moves around
            it. It is less a feature and more a mood: equal parts shrine, dashboard,
            and theatrical lighting rig.
          </p>
        </div>

        <div className="sticky-stage">
          <div className="sticky-orbit orbit-a" />
          <div className="sticky-orbit orbit-b" />
          <div className="sticky-orbit orbit-c" />
          <div className="sticky-panel panel-a">
            <span>phase drift</span>
          </div>
          <div className="sticky-panel panel-b">
            <span>signal bloom</span>
          </div>
          <div className="sticky-panel panel-c">
            <span>luxury static</span>
          </div>
          <div className="sticky-center">
            <div className="center-core" />
            <div className="center-grid" />
          </div>
        </div>
      </section>

      <section className="chapter-stack">
        {chapters.map((chapter, index) => (
          <article className="chapter-card" key={chapter.id}>
            <div className="chapter-meta">
              <span>{chapter.id}</span>
              <span>{chapter.name}</span>
            </div>
            <div className="chapter-body">
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </div>
            <div className={`chapter-visual visual-${index + 1}`}>
              <div className="chapter-grid" />
              <div className="chapter-glow" />
              <div className="chapter-scan" />
            </div>
          </article>
        ))}
      </section>

      <section className="archive-section">
        <div className="archive-header">
          <p className="story-eyebrow">Archive fragments</p>
          <h2>Collected observations from a very unwell design system.</h2>
        </div>
        <div className="archive-list">
          {archive.map((item, index) => (
            <div className="archive-row" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-banner">
        <p>Still a React + Vite site. Just substantially weirder now.</p>
      </section>
    </main>
  )
}

export default App
