// app.jsx — main app + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "iris",
  "glass": "frost",
  "background": "quiet",
  "curvy": "balanced",
  "density": "cozy",
  "grain": false,
  "sheen": true,
  "projectsLayout": "bento",
  "jobsLayout": "timeline"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState('home');
  const [openProject, setOpenProject] = React.useState(null);
  useReveal();

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', t.theme);
    root.setAttribute('data-accent', t.accent);
    root.setAttribute('data-glass', t.glass);
    root.setAttribute('data-bg', t.background);
    root.setAttribute('data-curvy', t.curvy);
    root.setAttribute('data-density', t.density);
    root.setAttribute('data-grain', t.grain ? 'on' : 'off');
    root.setAttribute('data-sheen', t.sheen ? 'on' : 'off');
    root.setAttribute('data-projects-layout', t.projectsLayout);
    root.setAttribute('data-jobs-layout', t.jobsLayout);
  }, [t]);

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
        <ProjectsSection onOpen={setOpenProject} layout={t.projectsLayout} />
        <JobsSection layout={t.jobsLayout} />
        <Footer />
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={t.theme}
                    options={['dark', 'light']}
                    onChange={(v) => setTweak('theme', v)} />
        <TweakColor label="Accent" value={t.accent}
                    options={[
                      ['#6ad6ff', '#a988ff'],
                      ['#ffba6b', '#ff6ba8'],
                      ['#75f0c0', '#68d4ff'],
                      ['#c89bff', '#ff8db8'],
                      ['#ff8060', '#ffb84d']
                    ]}
                    onChange={(v) => {
                      const map = { '#6ad6ff':'iris','#ffba6b':'amber','#75f0c0':'mint','#c89bff':'violet','#ff8060':'ember' };
                      setTweak('accent', map[v[0]] || 'iris');
                    }} />

        <TweakSection label="Glass" />
        <TweakRadio label="Frost" value={t.glass}
                    options={['thin', 'frost', 'thick']}
                    onChange={(v) => setTweak('glass', v)} />
        <TweakToggle label="Specular sheen on hover" value={t.sheen}
                     onChange={(v) => setTweak('sheen', v)} />
        <TweakRadio label="Corner" value={t.curvy}
                    options={['sharp', 'balanced', 'pillow']}
                    onChange={(v) => setTweak('curvy', v)} />

        <TweakSection label="Backdrop" />
        <TweakSelect label="Style" value={t.background}
                    options={['mesh', 'aurora', 'grid', 'quiet']}
                    onChange={(v) => setTweak('background', v)} />
        <TweakToggle label="Film grain" value={t.grain}
                     onChange={(v) => setTweak('grain', v)} />

        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density}
                    options={['tight', 'cozy', 'airy']}
                    onChange={(v) => setTweak('density', v)} />
        <TweakRadio label="Projects" value={t.projectsLayout}
                    options={['bento', 'grid']}
                    onChange={(v) => setTweak('projectsLayout', v)} />
        <TweakRadio label="Work" value={t.jobsLayout}
                    options={['timeline', 'cards', 'list']}
                    onChange={(v) => setTweak('jobsLayout', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
