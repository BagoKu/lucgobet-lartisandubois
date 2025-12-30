import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Button, Breadcrumbs, Accordion, AccordionSummary, AccordionDetails, Grid, Modal, IconButton } from '@mui/material'
import { projectsData } from '../data/projects'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
          onClick={() => setSelectedImage(project.coverImage)}
          sx={{
            width: '100%',
            maxHeight: { xs: '300px', md: '400px' },
            objectFit: 'cover',
            borderRadius: 2,
            mb: 3,
            display: 'block',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.02)',
            },
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
                    onClick={() => setSelectedImage(image)}
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      display: 'block',
                      aspectRatio: '4/3',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column - Description */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'sticky',
                top: 24,
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  mb: 3,
                  pb: 2,
                  borderBottom: '2px solid',
                  borderColor: 'primary.main',
                  display: 'inline-block',
                }}
              >
                À propos du projet
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  mb: 4,
                  whiteSpace: 'pre-line',
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    fontWeight: 700,
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      boxShadow: 'none',
                      color: 'white',

                    },
                  }}
                >
                  Demander un devis
                </Button>
                <Button
                  onClick={() => navigate('/projects')}
                  variant="outlined"
                  fullWidth
                  size="large"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    color: 'text.primary',
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: 'text.primary',
                      color: 'text.primary',
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  Retour aux projets
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Image Modal */}
        <Modal
          open={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
            }}
          >
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{
                position: 'absolute',
                top: -16,
                right: -16,
                bgcolor: 'white',
                '&:hover': {
                  bgcolor: 'grey.200',
                },
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage}
                alt="Full size"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: 2,
                }}
              />
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  )
}

export default ProjectDetail