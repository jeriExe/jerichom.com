// app.jsx — main app

const SETTINGS = {
  accent: 'iris',
  glass: 'frost',
  background: 'quiet',
  curvy: 'balanced',
  density: 'cozy',
  grain: false,
  sheen: true,
  projectsLayout: 'bento',
  jobsLayout: 'timeline',
};

function App() {
  const [active, setActive] = React.useState('home');
  const [openProject, setOpenProject] = React.useState(null);
  useReveal();

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-accent', SETTINGS.accent);
    root.setAttribute('data-glass', SETTINGS.glass);
    root.setAttribute('data-bg', SETTINGS.background);
    root.setAttribute('data-curvy', SETTINGS.curvy);
    root.setAttribute('data-density', SETTINGS.density);
    root.setAttribute('data-grain', SETTINGS.grain ? 'on' : 'off');
    root.setAttribute('data-sheen', SETTINGS.sheen ? 'on' : 'off');
    root.setAttribute('data-projects-layout', SETTINGS.projectsLayout);
    root.setAttribute('data-jobs-layout', SETTINGS.jobsLayout);
  }, []);

  const onNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <div className="backdrop"></div>
      <div className="grain"></div>

      <div className="shell" id="home">
        <Topbar active={active} onNav={onNav} />
        <Hero />
        <div className="bento-row">
          <AboutCard />
          <NowCard />
        </div>
        <ProjectsSection onOpen={setOpenProject} layout={SETTINGS.projectsLayout} />
        <JobsSection layout={SETTINGS.jobsLayout} />
        <Footer />
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
