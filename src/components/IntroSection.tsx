import { useEffect, useState } from 'react'
import type { RefObject } from 'react'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useContent } from '../hooks/useContent'

interface IntroSectionProps {
  visible: boolean
  introRef: RefObject<HTMLDivElement>
  projectRef: RefObject<HTMLDivElement>
}

function IntroSection({ visible, introRef, projectRef }: IntroSectionProps) {
  const [showButton, setShowButton] = useState(false)
  const content = useContent()

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (visible) {
      timer = setTimeout(() => setShowButton(true), 900)
    } else {
      setShowButton(false)
    }
    return () => clearTimeout(timer)
  }, [visible])

  const handleToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const paragraphs = (content.intro_text ?? '').split('\n\n').filter(Boolean)

  return (
    <div
      ref={introRef}
      className={`intro-section scroll-snap-section${visible ? ' intro-animate' : ''}`}
      style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', scrollSnapAlign: 'start', position: 'relative' }}
    >
      <div className="intro-text">
        <Typography variant="h2" color="secondary" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', sm: '2.7rem' }, letterSpacing: 1, mb: 1 }}>
          {content.intro_title ?? ''}
        </Typography>
        {paragraphs.map((paragraph, i) => (
          <Typography key={i} sx={{ fontSize: { xs: '1.18rem', sm: '1.25rem' }, mb: 2 }}>
            {paragraph}
          </Typography>
        ))}
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
  )
}

export default IntroSection
