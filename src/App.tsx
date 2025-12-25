import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Photo from './components/Photo'
import Contact from './components/Contact'
import { Box } from '@mui/material'
import './App.css' // Keep global CSS if needed, but rely on MUI for most

const App = () => {
  return (
    <Box className="app-container" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projets/:id" element={<ProjectDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
