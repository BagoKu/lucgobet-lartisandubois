import { useParams, Link, useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Button, Breadcrumbs, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material'
import { projectsData } from '../data/projects'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === Number(id))

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4">Projet non trouvé</Typography>
        <Button onClick={() => navigate('/projects')} sx={{ mt: 2 }}>
          Retourner aux projets
        </Button>
      </Container>
    )
  }

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3, fontSize: '0.875rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Accueil
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            Projets
          </Link>
          <Typography color="text.primary" sx={{ fontSize: '0.875rem' }}>
            {project.title}
          </Typography>
        </Breadcrumbs>

        <Box
          component="img"
          src={project.coverImage}
          alt={project.title}
          sx={{
            width: '100%',
            maxHeight: { xs: '300px', md: '400px' },
            objectFit: 'cover',
            borderRadius: 2,
            mb: 3,
            display: 'block',
          }}
        />

        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 800,
            color: 'text.primary',
            mb: 1,
          }}
        >
          {project.title}
        </Typography>

        {/* Category */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: '1rem',
            mb: 4,
          }}
        >
          {project.category}
        </Typography>

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* Left Column - Images */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Cover Image */}


            {/* Image Gallery */}
            <Grid container spacing={2}>
              {project.images.slice(1).map((image, index) => (
                <Grid size={{ xs: 6 }} key={index}>
                  <Box
                    component="img"
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      display: 'block',
                      aspectRatio: '4/3',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column - Description */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Accordion
              defaultExpanded
              sx={{
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                '&:before': { display: 'none' },
                mb: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '1.125rem',
                }}
              >
                Description du projet
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {project.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ mt: 6, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/projects')}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              px: 3,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                borderColor: 'primary.dark',
                bgcolor: 'rgba(212, 115, 17, 0.04)',
              },
            }}
          >
            Retourner aux projets
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 3,
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Demander un devis pour votre projet
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ProjectDetail