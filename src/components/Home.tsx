import Hero from './Hero'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import { Box } from '@mui/material'

function Home() {
  return (
    <Box component="main">
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </Box>
  )
}

export default Home