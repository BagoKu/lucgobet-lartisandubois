import { Box, Button, Container, Grid, Typography, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

const ProjectsSection = () => {
  const { projects, loading } = useProjects()
  const recentProjects = projects.slice(0, 3)

  return (
    <Box sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 3, fontSize: '1.75rem', fontWeight: 700, color: 'text.primary', letterSpacing: '-0.015em' }}
        >
          Nos Projets Récents
        </Typography>

        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                  <Skeleton variant="rounded" sx={{ aspectRatio: '4/5', borderRadius: 3 }} />
                  <Skeleton width="60%" sx={{ mt: 1.5 }} />
                  <Skeleton width="40%" />
                </Grid>
              ))
            : recentProjects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.id}>
                  <Link to={`/projets/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box
                      sx={{
                        display: 'flex', flexDirection: 'column', gap: 1.5, cursor: 'pointer',
                        '&:hover .project-image': { transform: 'scale(1.05)' },
                      }}
                    >
                      <Box sx={{ borderRadius: 3, overflow: 'hidden' }}>
                        <Box
                          className="project-image"
                          sx={{
                            width: '100%', aspectRatio: '4/5',
                            backgroundImage: `url("${project.cover_image_url}")`,
                            backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transition: 'transform 0.3s ease-out',
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {project.category}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
        </Grid>

        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" size="large" href="/projects">
            Voir toutes nos réalisations
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ProjectsSection
