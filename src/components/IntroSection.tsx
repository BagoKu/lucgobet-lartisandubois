import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface IntroSectionProps {
  visible: boolean;
  introRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
}

function IntroSection({ visible, introRef, projectRef }: IntroSectionProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (visible) {
      timer = setTimeout(() => setShowButton(true), 900);
    } else {
      setShowButton(false);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  const handleToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={introRef}
      className={`intro-section scroll-snap-section${visible ? ' intro-animate' : ''}`}
      style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', scrollSnapAlign: 'start', position: 'relative' }}
    >
      <div className="intro-text">
        <Typography variant="h2" color="secondary" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', sm: '2.7rem' }, letterSpacing: 1, mb: 1 }}>
          Intro
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.18rem', sm: '1.25rem' }, mb: 2 }}>
          Menuisier depuis 2000, après avoir travaillé dans diverses menuiseries, je me suis installé à mon compte en 2022 dans le Perche afin de proposer mes propres réalisations à mes clients.
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.18rem', sm: '1.25rem' }, mb: 2 }}>
          Je réalise vos ouvrages en bois, que ce soit pour l'intérieur ou l'extérieur de votre habitation.<br />
          Je m'entretiens personnellement avec chacun de mes clients afin de comprendre leurs besoins, leurs idées et d'étudier leurs demandes.
        </Typography>
        <Typography sx={{ fontSize: { xs: '1.18rem', sm: '1.25rem' } }}>
          Je vous propose de découvrir sur ce site différentes réalisations en bois, pour l'intérieur comme pour l'extérieur de votre habitation.<br />
          N'y voyez pas un catalogue, mais plutôt une source d'inspiration.<br />
          Cela vous donnera peut-être des idées, des envies de projet, et si vous souhaitez concrétiser vos envies, n'hésitez pas à me contacter.
        </Typography>
      </div>
      <button
        className={`intro-bottom-btn${showButton ? ' intro-bottom-btn--visible' : ''}`}
        onClick={handleToProjects}
        type="button"
      >
        <span className="discover-content">
          Ce que je fais
          <KeyboardArrowDownIcon sx={{ fontSize: 36, color: '#b08d57', mt: 1 }} />
        </span>
      </button>
    </div>
  );
}

export default IntroSection; 