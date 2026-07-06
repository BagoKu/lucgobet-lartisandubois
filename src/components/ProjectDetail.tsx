import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Box, Container, Typography, Button, Breadcrumbs, Grid,
  Modal, IconButton, Skeleton,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'
import { useProject } from '../hooks/useProject'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { project, loading, notFound } = useProject(Number(id))

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Skeleton width={300} sx={{ mb: 3 }} />
        <Skeleton variant="rounded" height={400} sx={{ mb: 3, borderRadius: 2 }} />
        <Skeleton width="50%" height={48} />
        <Skeleton width="20%" sx={{ mb: 4 }} />
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Grid size={{ xs: 6 }} key={i}>
                  <Skeleton variant="rounded" sx={{ aspectRatio: '4/3', borderRadius: 2 }} height={180} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Skeleton variant="rounded" height={300} sx={{ borderRadius: 2 }} />
          </Grid>
        </Grid>
      </Container>
    )
  }

  if (notFound || !project) {
    return (
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4">Projet non trouvé</Typography>
        <Button onClick={() => navigate('/projects')} sx={{ mt: 2 }}>
          Retourner aux projets
        </Button>
      </Container>
    )
  }

  const galleryImages = project.images?.slice(1).map(img => img.url) ?? []

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ mb: 3, fontSize: '0.875rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projets</Link>
          <Typography color="text.primary" sx={{ fontSize: '0.875rem' }}>{project.title}</Typography>
        </Breadcrumbs>

        <Box
          component="img"
          src={project.cover_image_url}
          alt={project.title}
          onClick={() => setSelectedImage(project.cover_image_url)}
          sx={{
            width: '100%', maxHeight: { xs: '300px', md: '400px' }, objectFit: 'cover',
            borderRadius: 2, mb: 3, display: 'block', cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.02)' },
          }}
        />

        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: 'text.primary', mb: 1 }}
        >
          {project.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', mb: 4 }}>
          {project.category}
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {galleryImages.map((url, index) => (
                <Grid size={{ xs: 6 }} key={index}>
                  <Box
                    component="img"
                    src={url}
                    alt={`${project.title} - Image ${index + 2}`}
                    onClick={() => setSelectedImage(url)}
                    sx={{
                      width: '100%', borderRadius: 2, display: 'block',
                      aspectRatio: '4/3', objectFit: 'cover', cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'sticky', top: 24, bgcolor: 'background.paper',
                borderRadius: 2, p: 4, boxShadow: 3,
                border: '1px solid', borderColor: 'divider',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.5rem', fontWeight: 700, mb: 3, pb: 2,
                  borderBottom: '2px solid', borderColor: 'primary.main', display: 'inline-block',
                }}
              >
                À propos du projet
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem', mb: 4, whiteSpace: 'pre-line' }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button component={Link} to="/contact" variant="contained" color="primary" fullWidth size="large">
                  Demander un devis
                </Button>
                <Button
                  onClick={() => navigate('/projects')} variant="outlined"
                  fullWidth size="large" startIcon={<ArrowBackIcon />}
                >
                  Retour aux projets
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Modal
          open={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
        >
          <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', outline: 'none' }}>
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{ position: 'absolute', top: -16, right: -16, bgcolor: 'white', '&:hover': { bgcolor: 'grey.200' }, zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage}
                alt="Full size"
                sx={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 2 }}
              />
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  )
}

export default ProjectDetail
