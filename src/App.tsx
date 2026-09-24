import { useEffect, useState } from 'react';

/* ── Mobile detection (additive helper — no desktop changes) ── */
const isMobile = () =>
  typeof window !== 'undefined' && window.innerWidth <= 900;

/* Looser line-height for the giant Barlow headlines on small screens */
const getLh = (desktop: number, mobile: number): { lineHeight: number } =>
  isMobile() ? { lineHeight: mobile } : { lineHeight: desktop };

/* ── SVG Icons ── */
const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);

const PlayIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6,3 20,12 6,21"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#1a1a1a"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const VRHeadsetIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"/>
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
    <path d="M7 12h.01M17 12h.01"/>
  </svg>
);

const RobotIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <path d="M8 15h.01M16 15h.01"/>
    <path d="M9 19h6"/>
  </svg>
);

const GamepadIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="12" x2="10" y2="12"/>
    <line x1="8" y1="10" x2="8" y2="14"/>
    <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/>
    <path d="M6 9a6 6 0 0 1 12 0l1 7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/>
  </svg>
);

/* ── Logo ── */
const NeoVisionLogo = ({ dark = false }: { dark?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1" y="1" width="18" height="18" rx="3" stroke={dark ? '#fff' : '#222'} strokeWidth="1.2"/>
      <circle cx="10" cy="10" r="4" stroke={dark ? '#fff' : '#222'} strokeWidth="1.2"/>
      <circle cx="10" cy="10" r="1.5" fill={dark ? '#fff' : '#222'}/>
    </svg>
    <span style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: '13px',
      letterSpacing: '0.06em',
      color: dark ? '#fff' : '#111'
    }}>NeoVision</span>
  </div>
);

/* ── Placeholder avatar circles ── */
const Avatar = ({ bg, ml = 0, emoji = '👤' }: { bg: string; ml?: number; emoji?: string }) => (
  <div style={{
    width: '28px', height: '28px', borderRadius: '50%',
    background: bg, border: '2px solid #eeeae4',
    marginLeft: ml, flexShrink: 0,
    overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '13px'
  }}>
    {emoji}
  </div>
);

/* ── Logo placeholder ── */
const LogoMark = ({ size = 16, borderColor = '#555' }: { size?: number; borderColor?: string }) => (
  <div style={{
    width: size, height: size,
    border: `1px solid ${borderColor}`,
    borderRadius: '3px',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }}>
    <div style={{ width: size * 0.55, height: size * 0.55, border: `1px solid ${borderColor}`, borderRadius: '1px' }} />
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Digital');
  const [, setVw] = useState(0);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const services = [
    {
      icon: <VRHeadsetIcon />,
      title: 'Reality Development',
      desc: 'Step into the future with our custom VR development services, designed to create immersive digital experiences.',
    },
    {
      icon: <RobotIcon />,
      title: 'Digital Assistants',
      desc: 'Enhance customer engagement and operational efficiency with our AI-driven virtual assistant. These intelligent digital assistants.',
    },
    {
      icon: <GamepadIcon />,
      title: 'Gaming Solutions',
      desc: 'Revolutionize the gaming industry with our next-generation VR game development service.',
    },
  ];

  const testimonials = [
    { name: 'James Riski', text: 'NeoVision completely transformed the way I interact with virtual reality.', color: '#9e8272' },
    { name: 'Samantha Leonardo', text: "Our team has adopted NeoVision's VR collaboration tools.", color: '#7a8f7a' },
    { name: 'Mark Trevor', text: "I've been gaming in VR for years, but NeoVision's technology...", color: '#6f7f90' },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minWidth: '320px' }}>

      {/* ══════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════ */}
      <header style={{ background: '#f0efeb', position: 'sticky', top: 0, zIndex: 100 }}>
        <div id="headerInner" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>
          <div id="headerRow" style={{ display: 'flex', alignItems: 'center', height: '50px', gap: '36px' }}>
            <NeoVisionLogo dark={false} />

            <nav id="mainNav" style={{ display: 'flex', gap: '24px', flex: 1 }}>
              {['Home', 'About', 'Services', 'Contact'].map((link, i) => (
                <a key={link} href="#" style={{
                  color: i === 0 ? '#111' : '#555',
                  textDecoration: 'none',
                  fontSize: '12.5px',
                  fontWeight: i === 0 ? 600 : 400,
                  letterSpacing: '0.01em'
                }}>{link}</a>
              ))}
            </nav>

            {/* Search Bar */}
            <div id="searchWrap" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              border: '1px solid #ccc', borderRadius: '18px',
              padding: '5px 14px', background: 'transparent',
              minWidth: '175px', cursor: 'text'
            }}>
              <span style={{ flex: 1, fontSize: '11.5px', color: '#aaa', lineHeight: 1 }}>I'm looking for...</span>
              <span style={{ color: '#999', display: 'flex' }}><SearchIcon /></span>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{ background: '#eeeae4', position: 'relative', overflow: 'hidden' }}>
        {/* Full-width horizontal accent line at bottom of hero */}
        <div style={{
          position: 'absolute', bottom: '62px', left: 0, right: 0, zIndex: 3,
          height: '1px', background: 'rgba(185,180,170,0.55)'
        }} />
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>
          <div id="heroBox" style={{ display: 'flex', minHeight: '430px', alignItems: 'stretch' }}>

            {/* ── Left ── */}
            <div id="hero-left" style={{ flex: '1', paddingTop: '50px', paddingBottom: '38px', position: 'relative', zIndex: 2 }}>
              {/* Label row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
                <span style={{ fontSize: '9px', color: '#b0a898', letterSpacing: '0.1em', fontWeight: 500 }}>DE</span>
                <span style={{ fontSize: '9px', color: '#b0a898', letterSpacing: '0.16em', fontWeight: 500, textTransform: 'uppercase' }}>FUTURISTIC</span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontFamily: "'Barlow', 'Inter', sans-serif",
                fontSize: 'clamp(46px, 6.2vw, 80px)',
                fontWeight: 900,
                ...getLh(0.92, 0.95),
                color: '#0c0c0c',
                textTransform: 'uppercase',
                letterSpacing: '-0.025em',
                marginBottom: '26px',
                maxWidth: '500px'
              }}>
                NEW DIGITAL<br />UNIVERSE
              </h1>

              {/* CTA Buttons */}
              <div id="hero-ctas" style={{ display: 'flex', gap: '10px', marginBottom: '42px' }}>
                <button style={{
                  background: '#1a1a1a', color: '#fff',
                  border: '1px solid #1a1a1a',
                  borderRadius: '3px', padding: '8px 18px',
                  fontSize: '11.5px', fontWeight: 500,
                  cursor: 'pointer', letterSpacing: '0.02em'
                }}>Get Started</button>
                <button style={{
                  background: 'transparent', color: '#333',
                  border: '1px solid #c0bdb8',
                  borderRadius: '3px', padding: '8px 18px',
                  fontSize: '11.5px', fontWeight: 400,
                  cursor: 'pointer', letterSpacing: '0.02em'
                }}>Contact Us</button>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div>
                  <div style={{ fontSize: '8px', color: '#bbb', letterSpacing: '0.1em', marginBottom: '6px', textTransform: 'uppercase' }}>Trusted by Clients</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      {[
                        { bg: '#c1a078', e: '👩🏽' },
                        { bg: '#9b6f5a', e: '👨🏿' },
                        { bg: '#b09080', e: '👩🏾' },
                        { bg: '#7d6058', e: '👨🏽' }
                      ].map((a, i) => (
                        <Avatar key={i} bg={a.bg} ml={i > 0 ? -9 : 0} emoji={a.e} />
                      ))}
                    </div>
                    <span style={{ fontSize: '11px', color: '#666', fontWeight: 500, marginLeft: '8px' }}>20+</span>
                  </div>
                </div>

                <div style={{ width: '1px', height: '36px', background: '#d5d0c8' }} />

                {/* Rating badge */}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: '#2a2a2a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ddd', fontSize: '11px', fontWeight: 700, letterSpacing: '-0.03em'
                }}>8g</div>
              </div>
            </div>

            {/* ── Right: Hero Image ── */}
            <div id="hero-right" style={{ position: 'relative', width: '470px', flexShrink: 0 }}>
              <img
                className="heroImg"
                src="/images/hero-vr-woman.jpg"
                alt="Woman with VR Headset"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  position: 'absolute',
                  top: 0, right: '-28px',
                  width: 'calc(100% + 28px)', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center'
                }}
              />

              {/* Stat overlay card */}
              <div style={{
                position: 'absolute', bottom: '72px', left: '16px', zIndex: 5,
                background: 'rgba(255,255,255,0.90)',
                backdropFilter: 'blur(8px)',
                borderRadius: '8px',
                padding: '10px 16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)'
              }}>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '24px', fontWeight: 800,
                  color: '#111', lineHeight: 1
                }}>47.2%</div>
                <div style={{ fontSize: '9px', color: '#999', letterSpacing: '0.1em', marginTop: '3px' }}>Reality</div>
              </div>

              {/* Small caption */}
              <div style={{
                position: 'absolute', bottom: '18px', right: '16px',
                maxWidth: '170px', zIndex: 5
              }}>
                <p style={{ fontSize: '8px', color: 'rgba(60,55,50,0.7)', lineHeight: 1.65 }}>
                  In the futuristic realm, users can explore hyper-realistic virtual environments, interact with life-driven avatars.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRANDS BAR
      ══════════════════════════════════════════ */}
      <div style={{ background: '#0f0f0f', borderTop: '1px solid #1c1c1c', borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>
          <div id="brandsRow" style={{ display: 'flex', alignItems: 'center', height: '52px', gap: '40px' }}>
            <div id="brandsLine" style={{ width: '36px', height: '1px', background: '#2a2a2a', flexShrink: 0 }} />
            {[1, 2].map(i => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <LogoMark size={16} borderColor="#3a3a3a" />
                <span style={{ fontSize: '11.5px', color: '#555', letterSpacing: '0.04em' }}>Logolpsum</span>
              </div>
            ))}
            <div id="brandsSpacer" style={{ flex: 1 }} />
            {[3, 4, 5].map(i => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <LogoMark size={16} borderColor="#3a3a3a" />
                <span style={{ fontSize: '11.5px', color: '#555', letterSpacing: '0.04em' }}>Logolpsum</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ABOUT — THE DIGITAL FRONTIER
      ══════════════════════════════════════════ */}
      <section style={{ background: '#0c0c0c', padding: '88px 0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>
          <div id="aboutRow" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start' }}>

            {/* Left — Helmet Image */}
            <div id="aboutImg" style={{ flex: '0 0 360px' }}>
              <div style={{
                borderRadius: '6px',
                overflow: 'hidden',
                height: '400px',
                background: '#1a1a1a'
              }}>
                <img
                  src="/images/vr-helmet-about.jpg"
                  alt="VR Helmet"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center 15%',
                    filter: 'brightness(0.82) contrast(1.05)'
                  }}
                />
              </div>
            </div>

            {/* Right — Text */}
            <div id="aboutText" style={{ flex: 1, paddingTop: '8px' }}>
              <div style={{ fontSize: '9px', color: '#555', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '14px' }}>
                ABOUT US
              </div>

              <h2 style={{
                fontFamily: "'Barlow', Inter, sans-serif",
                fontSize: 'clamp(38px, 4.5vw, 58px)',
                fontWeight: 800,
                ...getLh(0.95, 1.0),
                textTransform: 'uppercase',
                color: '#f0f0f0',
                letterSpacing: '-0.015em',
                marginBottom: '24px'
              }}>
                THE DIGITAL<br />FRONTIER
              </h2>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '22px', flexWrap: 'wrap' }}>
                {['Digital', 'Reality', 'Next'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTab(tag)}
                    style={{
                      padding: '4px 13px', borderRadius: '20px',
                      fontSize: '10.5px', letterSpacing: '0.02em',
                      border: activeTab === tag ? '1px solid #666' : '1px solid #2a2a2a',
                      background: activeTab === tag ? '#2c2c2c' : 'transparent',
                      color: activeTab === tag ? '#ccc' : '#555',
                      cursor: 'pointer', fontFamily: 'Inter, sans-serif'
                    }}
                  >{tag}</button>
                ))}
              </div>

              <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.75, marginBottom: '10px', maxWidth: '360px' }}>
                Step into The Digital Frontier, where the boundaries between reality and true innovation disappear. This is the next era of transformative technology.
              </p>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.75, marginBottom: '32px', maxWidth: '360px' }}>
                These intelligent digital avatars.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button style={{
                  background: '#1e1e1e', color: '#ddd',
                  border: '1px solid #2e2e2e', borderRadius: '3px',
                  padding: '8px 18px', fontSize: '11.5px', fontWeight: 500,
                  cursor: 'pointer', letterSpacing: '0.02em'
                }}>Learn More</button>

                <button style={{
                  background: 'none', color: '#888',
                  border: 'none', fontSize: '11.5px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '9px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    border: '1px solid #333',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#777'
                  }}>
                    <PlayIcon />
                  </span>
                  Watch a Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR SERVICE
      ══════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: '80px 0' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>

          <div id="srvHead" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <h2 style={{
              fontFamily: "'Barlow', Inter, sans-serif",
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800, textTransform: 'uppercase',
              color: '#f0f0f0', letterSpacing: '-0.015em'
            }}>OUR SERVICE</h2>
            <div id="srvArrows" style={{ display: 'flex', gap: '6px' }}>
              {[<ChevronLeft key="l" />, <ChevronRight key="r" />].map((icon, i) => (
                <button key={i} style={{
                  width: '30px', height: '30px',
                  background: '#161616', border: '1px solid #252525',
                  borderRadius: '3px', color: '#777',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}>{icon}</button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div id="srvGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: '#131313', border: '1px solid #1d1d1d',
                borderRadius: '7px', padding: '28px 22px',
                display: 'flex', flexDirection: 'column', gap: '14px'
              }}>
                <div style={{
                  width: '46px', height: '46px',
                  background: '#191919', border: '1px solid #252525',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#888'
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '14.5px', fontWeight: 600, color: '#e0e0e0', letterSpacing: '0.01em', margin: 0 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '11.5px', color: '#5e5e5e', lineHeight: 1.68, margin: 0 }}>
                  {s.desc}
                </p>
                <a href="#" style={{
                  fontSize: '11px', color: '#777',
                  textDecoration: 'underline', marginTop: '4px',
                  letterSpacing: '0.01em'
                }}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIMITLESS POSSIBILITIES
      ══════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: '0 0 80px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>

          <h2 style={{
            fontFamily: "'Barlow', Inter, sans-serif",
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800, textTransform: 'uppercase',
            color: '#f0f0f0', letterSpacing: '-0.015em',
            ...getLh(1.0, 1.06),
            marginBottom: '36px', maxWidth: '560px'
          }}>
            LIMITLESS POSSIBILITIES<br />WITH NEOVISION
          </h2>

          <div id="limitRow" style={{ display: 'flex', gap: '24px', alignItems: 'stretch' }}>

            {/* Category list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px', minWidth: '88px' }}>
              {['Innovation', 'Technology', 'Experience'].map((cat, i) => (
                <span key={cat} style={{
                  fontSize: '11px',
                  color: i === 0 ? '#999' : '#383838',
                  letterSpacing: '0.03em',
                  cursor: 'pointer'
                }}>{cat}</span>
              ))}
            </div>

            {/* Blog image */}
            <div id="limitImg" style={{
              flex: '0 0 250px', borderRadius: '5px', overflow: 'hidden',
              background: '#181818', height: '240px'
            }}>
              <img
                src="/images/vr-helmet-blog.jpg"
                alt="VR Blog"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  filter: 'grayscale(20%) brightness(0.75)'
                }}
              />
            </div>

            {/* Blog card */}
            <div id="limitCard" style={{
              flex: 1, background: '#131313', border: '1px solid #1d1d1d',
              borderRadius: '7px', padding: '22px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              height: '240px', boxSizing: 'border-box'
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Barlow', Inter, sans-serif",
                  fontSize: '17px', fontWeight: 700,
                  color: '#e5e5e5', lineHeight: 1.35,
                  marginBottom: '12px'
                }}>How VR is Transforming Our Digital World</h3>
                <p style={{ fontSize: '11.5px', color: '#5a5a5a', lineHeight: 1.65, marginBottom: '14px' }}>
                  Virtual Reality (VR) is no longer a concept of the future—it's a reality reshaping how we connect, work, and entertain ourselves.
                </p>
                <a href="#" style={{ fontSize: '11px', color: '#777', textDecoration: 'underline' }}>Learn More</a>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '9.5px', color: '#444' }}>14th February 2025</span>
                <span style={{ fontSize: '9.5px', color: '#444' }}>Henry Leonardo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VOICES OF THE FUTURE
      ══════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: '0 0 80px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>
          <div id="voicesRow" style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>

            {/* Left */}
            <div id="voicesLeft" style={{ flex: '0 0 300px' }}>
              <h2 style={{
                fontFamily: "'Barlow', Inter, sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800, textTransform: 'uppercase',
                color: '#f0f0f0', letterSpacing: '-0.015em',
                lineHeight: 1.0, marginBottom: '20px'
              }}>
                VOICES OF THE<br />FUTURE
              </h2>
              <div style={{ width: '36px', height: '2px', background: '#2c2c2c', marginBottom: '22px' }} />
              <p style={{ fontSize: '11.5px', color: '#575757', lineHeight: 1.72 }}>
                Here you'll hear firsthand from users, pioneers, and tech enthusiasts who are shaping the next generation of virtual reality and futuristic technology. Explore their stories and discover how VR is transforming the way we interact with the digital world.
              </p>
            </div>

            {/* Right — Testimonials */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}>
              {/* decorative vertical line */}
              <div style={{
                position: 'absolute', left: '-24px', top: '10px', bottom: '10px',
                width: '1px',
                background: 'linear-gradient(180deg, transparent 0%, #2a2a2a 30%, #2a2a2a 70%, transparent 100%)'
              }} />

              {testimonials.map((t, i) => (
                <div key={i} className="tCard" style={{
                  background: '#131313', border: '1px solid #1d1d1d',
                  borderRadius: '7px', padding: '16px 18px',
                  display: 'flex', gap: '14px', alignItems: 'center'
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '11.5px', color: '#888', lineHeight: 1.55, marginBottom: '7px' }}>
                      {t.text}
                    </p>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#bbb' }}>{t.name}</span>
                  </div>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color} 0%, #1a1a1a 100%)`,
                    flexShrink: 0, border: '1px solid #2a2a2a'
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DIVE INTO THE FUTURE — CTA
      ══════════════════════════════════════════ */}
      <section id="diveOuter" style={{ background: '#0a0a0a', padding: '0 28px 80px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div id="diveBox" style={{
            position: 'relative', borderRadius: '12px',
            overflow: 'hidden', minHeight: '270px'
          }}>
            {/* bg image */}
            <img
              src="/images/dive-future.jpg"
              alt="Dive into the future"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                filter: 'brightness(0.45) grayscale(15%)'
              }}
            />
            {/* gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)'
            }} />

            {/* Content */}
            <div id="diveInner" style={{
              position: 'relative',
              padding: '52px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '270px',
              boxSizing: 'border-box'
            }}>
              <div>
                <h2 style={{
                  fontFamily: "'Barlow', Inter, sans-serif",
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 900, textTransform: 'uppercase',
                  color: '#fff', letterSpacing: '-0.02em',
                  ...getLh(0.95, 1.0),
                  marginBottom: '22px'
                }}>
                  DIVE INTO THE<br />FUTURE
                </h2>
                <button style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff'
                }}>
                  <PlayIcon size={14} />
                </button>
              </div>

              <div style={{ maxWidth: '220px' }}>
                <p style={{ fontSize: '11.5px', color: 'rgba(220,220,220,0.85)', lineHeight: 1.68, marginBottom: '12px' }}>
                  Prepare to immerse yourself in the groundbreaking world of NeoVision. Explore the limitless possibilities of futuristic technology and virtual reality.
                </p>
                <div id="diveTags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['#Reality', '#VR', '#Innovation'].map(t => (
                    <span key={t} style={{ fontSize: '9.5px', color: '#666' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer style={{ background: '#080808', borderTop: '1px solid #181818', paddingTop: '56px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px' }}>

          {/* Grid */}
          <div id="footerGrid" style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 0.8fr 0.9fr 1fr 1.4fr',
            gap: '36px', marginBottom: '44px'
          }}>

            {/* Brand */}
            <div>
              <div style={{ marginBottom: '24px' }}><NeoVisionLogo dark /></div>
              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '7px' }}>Email</div>
                <div style={{ fontSize: '11.5px', color: '#5a5a5a' }}>contact@neovision.com</div>
              </div>
              <div>
                <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '7px' }}>Address</div>
                <div style={{ fontSize: '11.5px', color: '#5a5a5a', lineHeight: 1.65 }}>
                  NeoVision Inc.<br />Frankfurt, Uber<br />Frankfurt Office
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '7px' }}>Phone Number</div>
              <div style={{ fontSize: '11.5px', color: '#5a5a5a' }}>+1 (555) 000-0000</div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '14px' }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {['Home', 'About Us', 'Services', 'Contact'].map(l => (
                  <a key={l} href="#" style={{ fontSize: '11.5px', color: '#5a5a5a', textDecoration: 'none' }}>{l}</a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '14px' }}>Explore</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {['Product Demo', 'Case Studies', 'Tech Reviews', 'Blog', 'Events & Seminars'].map(l => (
                  <a key={l} href="#" style={{ fontSize: '11.5px', color: '#5a5a5a', textDecoration: 'none' }}>{l}</a>
                ))}
              </div>
            </div>

            {/* Newsletter / Tech */}
            <div>
              <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '14px', lineHeight: 1.5 }}>
                FUTURISTIC TECH &<br />VR WEBSITE
              </div>
              <p style={{ fontSize: '11.5px', color: '#5a5a5a', lineHeight: 1.68, marginBottom: '10px' }}>
                Dive into a world where technology and virtual reality converge. Learn how NeoVision is leading the future.
              </p>
              <a href="#" style={{ fontSize: '11px', color: '#666', textDecoration: 'underline' }}>Read More</a>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid #161616',
            paddingTop: '22px', paddingBottom: '28px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'
          }}>
            {/* Bottom logos */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <LogoMark size={13} borderColor="#2e2e2e" />
                  <span style={{ fontSize: '10px', color: '#3a3a3a', letterSpacing: '0.04em' }}>Logolpsum</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {[
                { icon: <YoutubeIcon />, label: 'YouTube' },
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <TwitterIcon />, label: 'Twitter/X' },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label} style={{
                  width: '28px', height: '28px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid #1e1e1e', borderRadius: '4px',
                  color: '#4a4a4a', textDecoration: 'none'
                }}>{icon}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
