import bar from '../assets/projets/bar.jpeg'
import terrasse from '../assets/projets/terrasse.jpeg'
import cuisine from '../assets/projets/cuisine.jpeg'
import naruto from '../assets/projets/naruto.jpeg'
import volets from '../assets/projets/volets.jpeg'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

export const PROJECTS = [
  {
    id: 'bar',
    image: bar,
    title: 'Bar sur-mesure',
    description: 'Un bar en bois massif réalisé sur-mesure pour un espace convivial.',
    full: true,
  },
  {
    id: 'terrasse',
    image: terrasse,
    title: 'Terrasse extérieure',
    description: 'Terrasse en bois pour profiter de l’extérieur, résistante et élégante.',
    full: true,
  },
  {
    id: 'cuisine',
    image: cuisine,
    title: 'Cuisine bois & blanc',
    description: 'Cuisine moderne alliant bois naturel et finitions blanches.',
    full: true,
  },
  {
    id: 'naruto',
    image: naruto,
    title: 'Bibliothèque Naruto',
    description: 'Bibliothèque sur-mesure inspirée de l’univers Naruto, parfaite pour les fans de manga.',
    full: true,
  },
  {
    id: 'volets',
    image: volets,
    title: 'Volets en bois',
    description: 'Volets traditionnels en bois, robustes et esthétiques, réalisés sur-mesure.',
    full: true,
  },
]

const CardOverlay = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(44,36,24,0.88)',
  color: '#fff',
  padding: '1.1rem 1.2rem 1.2rem 1.2rem',
  fontSize: '1.02rem',
  opacity: 0,
  transform: 'translateY(30px)',
  transition: 'opacity 0.3s, transform 0.3s',
  pointerEvents: 'none',
  borderBottomLeftRadius: '1.2rem',
  borderBottomRightRadius: '1.2rem',
  zIndex: 3,
  minHeight: 90,
  maxHeight: '45%',
  display: 'flex',
  alignItems: 'flex-end',
  boxSizing: 'border-box',
  width: '100%',
}));

const CardTitle = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  background: 'rgba(44,36,24,0.72)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.15rem',
  padding: '0.8rem 1.2rem 0.7rem 1.2rem',
  borderTopLeftRadius: '1.2rem',
  borderTopRightRadius: '1.2rem',
  zIndex: 2,
  textAlign: 'left',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: '1.2rem',
  boxShadow: theme.shadows[3],
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  transition: 'box-shadow 0.2s, transform 0.2s',
  '&:hover .project-desc': {
    opacity: 1,
    transform: 'translateY(0)'
  },
}));

function ProjectsList() {
  return (
    <Grid container spacing={4} className="project-list-grid">
      {PROJECTS.map(project => (
        <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Link to={`/projets/${project.id}`} className="project-link" style={{ textDecoration: 'none' }}>
            <CardWrapper className="project-card">
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 320, objectFit: 'cover' }}
                  className="project-thumb"
                />
                <CardTitle className="project-title">{project.title}</CardTitle>
                <CardOverlay className="project-desc">{project.description}</CardOverlay>
              </Box>
            </CardWrapper>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectsList 