import { useState } from 'react'
import { Box, Container, Grid, Typography, Pagination, Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'

const categories = ['Tous', 'Cuisines', 'Meubles sur mesure', 'Dressing', 'Aménagements extérieurs', 'Rénovation']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [page, setPage] = useState(1)

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    setPage(1) // Reset to page 1 when filtering
  }

  const filteredProjects = activeCategory === 'Tous'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory)

  // In a real app we'd slice filteredProjects based on page size.
  // For this mock, we'll just show all filtered results or a subset if list is huge.
  // The design shows 9 items (3x3), which matches our mock data length perfectly.

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Nos Réalisations
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.125rem',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Découvrez la qualité et la passion de notre savoir-faire à travers nos projets.
          </Typography>
        </Box>

        {/* Filters */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
            mb: 8,
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
              sx={{
                bgcolor: activeCategory === category ? 'primary.main' : 'background.paper',
                color: activeCategory === category ? 'white' : 'text.primary',
                fontWeight: 600,
                fontSize: '0.9375rem',
                height: 40,
                px: 2,
                borderRadius: '9999px', // Pill shape
                border: 'none',
                boxShadow: activeCategory === category ? 'none' : '0 1px 2px rgba(0,0,0,0.05)',
                '&:hover': {
                  bgcolor: activeCategory === category ? 'primary.dark' : 'rgba(0,0,0,0.05)',
                },
              }}
            />
          ))}
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Link to={`/projets/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    cursor: 'pointer',
                    group: 'true',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 4, // More rounded as per new design
                      overflow: 'hidden',
                      width: '100%',
                      aspectRatio: '4/3', // Landscape-ish aspect ratio from design
                      bgcolor: 'grey.100',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url("${project.coverImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.125rem', mb: 0.5 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      {project.category}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={8} // Mock page count
            page={page}
            onChange={(_, p) => setPage(p)}
            shape="rounded"
            color="primary"
            sx={{
              '& .MuiPaginationItem-root': {
                fontWeight: 600,
                fontSize: '1rem',
              },
              '& .Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Projects