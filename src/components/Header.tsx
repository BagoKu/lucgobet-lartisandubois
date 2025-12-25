import { AppBar, Toolbar, Box, Typography, Button, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logoImage from '../assets/logluc.png'

// Custom Logo SVG from the HTML
const LogoIcon = () => (
  <Box sx={{ width: 24, height: 24, color: 'primary.main', mr: 1.5 }}>
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
    </svg>
  </Box>
)

const Header = () => {
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projects' },
  ]

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: '80px !important' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              component="img"
              src={logoImage}
              alt="Logo Luc Gobet"
              sx={{
                height: 40,
                width: 'auto',
                mr: 1.5,
              }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            <Box component="nav" sx={{ display: 'flex', gap: 4 }}>
              {navLinks.map((link) => (
                <RouterLink
                  key={link.name}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: '#181411', // text-light
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#d47311')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#181411')}
                >
                  {link.name}
                </RouterLink>
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.015em',
              }}
              href="/contact"
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header