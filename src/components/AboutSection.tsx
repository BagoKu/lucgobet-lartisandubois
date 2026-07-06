import { Box, Container, Grid, Typography } from '@mui/material'
import accueilImage from '../assets/accueilImage.jpg'
import { useContent } from '../hooks/useContent'

const AboutSection = () => {
  const content = useContent()
  const paragraphs = (content.about_text ?? '').split('\n\n').filter(Boolean)

  return (
    <Box sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={accueilImage}
              alt="Portrait de l'artisan"
              sx={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 3, display: 'block' }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography
                variant="h2"
                sx={{ color: 'text.primary', fontSize: { xs: '2rem', md: '2.25rem' }, lineHeight: 1.1, letterSpacing: '-0.033em' }}
              >
                A propos de votre menuisier
              </Typography>
              <Box sx={{ color: 'text.primary', fontSize: '1rem', fontWeight: 400, lineHeight: 1.625, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {paragraphs.map((paragraph, i) => (
                  <Typography key={i} variant="body1" sx={{ lineHeight: 1.625 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection
