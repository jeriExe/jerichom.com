// components.jsx — glass primitives + sections

// Per-page-load cache-buster for local uploads. External URLs are left alone.
const __ASSET_V = "2";
function bust(src) {
  if (!src || /^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  return src + (src.includes('?') ? '&' : '?') + 'v=' + __ASSET_V;
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add('in');io.unobserve(e.target);}});
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Glass = React.forwardRef(function Glass({ className = '', children, onMouseMove, ...rest }, ref) {
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px');
    e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px');
    onMouseMove && onMouseMove(e);
  };
  return (
    <div ref={ref} className={"glass " + className} onMouseMove={handleMove} {...rest}>
      {children}
    </div>);

});

function Topbar({ accent, onNav, active }) {
  const items = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'Contact' }];

  return (
    <Glass className="topbar reveal in">
      <div className="brand">
        <span className="brand-dot" style={{ opacity: "0" }}></span>
        <span></span>
      </div>
      <nav className="nav">
        {items.map((i) =>
        <a key={i.id} href={"#" + i.id} className={active === i.id ? 'active' : ''}
        onClick={(e) => {e.preventDefault();onNav(i.id);}}>{i.label}</a>
        )}
      </nav>
    </Glass>);

}

function Hero() {
  return (
    <Glass className="hero reveal">
      <div>
        <h1 style={{ fontSize: 'clamp(18px, 2.6vw, 30px)', fontWeight: 500, lineHeight: 1.25, letterSpacing: '-.01em' }}>
          Hi, I'm Jericho, a 3rd Year Nanotechnology Engineering student at the University of Waterloo. This site shows my projects, coauthorships, and internship timeline in a more thorough way than a resume allows. Cheers!
        </h1>
      </div>
    </Glass>);

}

function AboutCard() {
  return (
    <Glass className="card about-card reveal">
      <div className="card-eyebrow about-eyebrow"><span className="dot"></span>ABOUT</div>
      <div className="about-body">
        <div className="portrait-wrap">
          <div className="portrait">
            <img src={bust("uploads/portrait.jpg")} alt="Jericho Mordasiewicz" />
          </div>
        </div>
        <div>
          <h2>I like to ship things</h2>
        <p>Materials, hardware, and the Python tooling around them.

        </p>
        <p style={{ fontSize: 12.5, color: 'var(--ink-faint)' }}>SolidWorks, Onshape · Python · SQLite · Thin Film Deposition · Plasma Etch · SEM, XRD, UV-vis · Process Design, Rapid Prototyping, Design of Experiments

          </p>
        </div>
      </div>
    </Glass>);

}

function NowCard() {
  return (
    <Glass className="card now-card reveal">
      <div className="card-eyebrow"><span className="dot"></span>CURRENTLY</div>
      <h2></h2>
      <div>
        {NOW.map((r) =>
        <div className="row" key={r.k}>
            <span className="k">{r.k}</span>
            <span className="v">{r.v}</span>
          </div>
        )}
        <div className="row">
          <span className="k">Reach</span>
          <span className="v"><a href="mailto:jericho@mordasiewicz.com">jericho@mordasiewicz.com</a></span>
        </div>
      </div>
    </Glass>);

}

function ProjectCard({ p, onOpen }) {
  return (
    <Glass className={"project " + p.span} onClick={() => onOpen(p)}>
      {p.img ?
      <img className="project-img" src={bust(p.img)} alt="" loading="lazy" style={p.imgPosition ? { objectPosition: p.imgPosition } : null} /> :

      <div className={"ph " + (p.ph || '')}></div>
      }
      <div className="veil"></div>
      <div className="open" aria-hidden>↗</div>
      <div className="info">
        <div className="tag">{p.status}</div>
        <h4>{p.short || p.title}</h4>
        <p>{p.sub}</p>
      </div>
    </Glass>);

}

function ProjectsSection({ onOpen, layout }) {
  return (
    <section id="projects" className="reveal">
      <Glass className="section-head">
        <h3>Projects and Research <em></em></h3>
      </Glass>
      <div className="projects-grid" style={{ marginTop: 'var(--gap)' }}>
        {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} onOpen={onOpen} />)}
      </div>
    </section>);

}

function JobRow({ job, idx, total, layout, expanded, onToggle }) {
  return (
    <div className={"job" + (job.current ? ' current' : '') + (expanded ? ' expanded' : '')}
    onClick={() => onToggle(job.id)}>
      <div className="job-marker">
        <span className="ring">{String(total - idx).padStart(2, '0')}</span>
      </div>
      <div className="job-meta">
        <span className="date">{job.date}</span>
        <span className="company">{job.company}</span>
        <span className="location">{job.location}</span>
        {job.logo && <img className="job-logo" src={bust(job.logo)} alt={job.company + ' logo'} />}
      </div>
      <div className="job-body">
        <h4>{job.role}</h4>
        <div className="role-line">
          {job.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <ul>
          {job.bullets.map((b, i) =>
          <li key={i}>{b}</li>
          )}
        </ul>
      </div>
      {layout === 'list' &&
      <div className="expand-cue">{expanded ? 'COLLAPSE −' : 'EXPAND +'}</div>
      }
    </div>);

}

function JobsSection({ layout }) {
  const [expanded, setExpanded] = React.useState({ [JOBS[0].id]: true });
  const onToggle = (id) => setExpanded((s) => ({ ...s, [id]: !s[id] }));
  return (
    <section id="work" className="reveal">
      <Glass className="section-head">
        <h3>Internships <em></em></h3>
      </Glass>
      <Glass className="timeline" style={{ marginTop: 'var(--gap)' }}>
        <div className="tl-list">
          {JOBS.map((j, i) =>
          <JobRow key={j.id} job={j} idx={i} total={JOBS.length} layout={layout}
          expanded={layout === 'list' ? !!expanded[j.id] : true}
          onToggle={onToggle} />
          )}
        </div>
      </Glass>
    </section>);

}

function Footer() {
  return (
    <Glass className="foot reveal" id="about">
      <div className="copy">© 2026 JERICHO MORDASIEWICZ</div>
      <div className="foot-links">
        {CONTACT.map((c) => <a key={c.label} href={c.href}>{c.label}</a>)}
      </div>
    </Glass>);

}

function ProjectModal({ project, onClose }) {
  const modalRef = React.useRef(null);
  React.useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  React.useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const forward = (e) => {
      const scroller = modalRef.current;
      if (!scroller) return;
      if (scroller.contains(e.target)) return; // already inside, let it scroll natively
      e.preventDefault();
      scroller.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: 'auto' });
    };
    document.addEventListener('wheel', forward, { passive: false });
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('wheel', forward);
    };
  }, [project]);
  React.useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const target = el.parentElement; // .modal
    const onScroll = () => {
      const scrolled = el.scrollTop > 24;
      const atEnd = el.scrollHeight - el.scrollTop - el.clientHeight < 24;
      target.classList.toggle('is-scrolled', scrolled);
      target.classList.toggle('is-at-end', atEnd);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [project]);
  React.useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const grid = el.querySelector('.modal-images');
    if (!grid || [...grid.classList].some((c) => c.startsWith('modal-images--'))) return;
    const figures = grid.querySelectorAll('figure');
    const gap = 12;
    const layout = () => {
      const colTracks = getComputedStyle(grid).gridTemplateColumns
        .split(' ').filter((c) => c && c !== '0px');
      const cols = Math.max(1, colTracks.length);
      const colHeights = new Array(cols).fill(0);
      figures.forEach((f, i) => {
        const media = f.querySelector('img, video');
        const cap = f.querySelector('figcaption');
        const mh = media ? media.getBoundingClientRect().height : 0;
        const ch = cap ? cap.getBoundingClientRect().height : 0;
        const capMt = cap ? parseFloat(getComputedStyle(cap).marginTop) || 0 : 0;
        const h = Math.ceil(mh + ch + capMt);
        const colIdx = i % cols;
        f.style.gridColumnStart = `${colIdx + 1}`;
        f.style.gridRowStart = `${colHeights[colIdx] + 1}`;
        f.style.gridRowEnd = `span ${h + gap}`;
        colHeights[colIdx] += h + gap;
      });
    };
    layout();
    const media = grid.querySelectorAll('img, video');
    const handlers = [];
    media.forEach((m) => {
      if (m.tagName === 'IMG' && !m.complete) {
        m.addEventListener('load', layout);
        handlers.push([m, 'load']);
      } else if (m.tagName === 'VIDEO' && m.readyState < 1) {
        m.addEventListener('loadedmetadata', layout);
        handlers.push([m, 'loadedmetadata']);
      }
    });
    const ro = new ResizeObserver(layout);
    ro.observe(grid);
    return () => {
      handlers.forEach(([m, ev]) => m.removeEventListener(ev, layout));
      ro.disconnect();
    };
  }, [project]);
  if (!project) return null;
  const hasMoreBelow = !!(
  project.paragraphs && project.paragraphs.length ||
  project.note || project.tech || project.results || project.workingOn || project.futureImprovements);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <Glass className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-scroll" ref={modalRef}>
        <div className="meta-row">
          <span className="chip">{project.status}</span>
          <span className="chip">{project.sub}</span>
        </div>
        <h2>{project.title}</h2>
        {project.images && project.images.length > 0 &&
          <div className="modal-images-wrap">
            <div className={"modal-images" + (project.imageLayout ? " modal-images--" + project.imageLayout : "")}>
              {project.images.map((im, i) => {
                const mediaStyle = im.aspect ? { aspectRatio: im.aspect, height: 'auto' } : null;
                return (
                  <figure key={i} className={im.aspect ? 'has-aspect' : ''}>
                    {/\.(mp4|webm|mov)$/i.test(im.src) ?
                      <video src={bust(im.src)} style={mediaStyle} controls playsInline preload="metadata" /> :
                      <img src={bust(im.src)} alt={im.alt} style={mediaStyle} loading="lazy" />}
                    <figcaption>{im.alt}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
          }
        {project.paragraphs && project.paragraphs.map((p, i) =>
          <p key={i} className="modal-p">{p}</p>
          )}
        {project.note && <blockquote className="modal-quote">{project.note}</blockquote>}
        {project.tech &&
          <React.Fragment>
            <h3 className="modal-h3">Used</h3>
            <ul className="modal-list">
              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </React.Fragment>
          }
        {project.results &&
          <React.Fragment>
            <h3 className="modal-h3">Results</h3>
            <ul className="modal-list">
              {project.results.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </React.Fragment>
          }
        {project.workingOn &&
          <React.Fragment>
            <h3 className="modal-h3">Working On</h3>
            <ul className="modal-list">
              {project.workingOn.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </React.Fragment>
          }
        {project.futureImprovements &&
          <React.Fragment>
            <h3 className="modal-h3">Future Improvements</h3>
            <ul className="modal-list">
              {project.futureImprovements.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </React.Fragment>
          }
        </div>
        {hasMoreBelow &&
        <div className="scroll-hint" aria-hidden="true">
            <span className="scroll-hint-label">Continue reading</span>
            <span className="scroll-hint-chev">↓</span>
          </div>
        }
      </Glass>
    </div>);

}

Object.assign(window, {
  useReveal, Glass, Topbar, Hero, AboutCard, NowCard,
  ProjectCard, ProjectsSection, JobRow, JobsSection,
  Footer, ProjectModal
});