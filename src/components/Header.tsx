import { AppBar, Toolbar, Box, Typography, Button, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logoImage from '../assets/logluc.png'

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
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Box
                component="img"
                src={logoImage}
                alt="Logo Luc Gobet"
                sx={{
                  height: 40,
                  width: 'auto',
                  mr: 1.5,
                  cursor: 'pointer',
                }}
              />
            </RouterLink>
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
              component={RouterLink}
              to="/contact"
              sx={{
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.015em',
                '&:focus': {
                  color: 'white',
                },
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: 'none',
                  color: 'white',
                },
              }}
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