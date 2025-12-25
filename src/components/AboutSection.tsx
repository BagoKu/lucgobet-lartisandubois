import { Box, Container, Grid, Typography } from '@mui/material'
import accueilImage from '../assets/accueilImage.jpg'

const AboutSection = () => {
    return (
        <Box sx={{ py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src={accueilImage}
                            alt="Portrait de l'artisan"
                            sx={{
                                width: '100%',
                                aspectRatio: '4/5',
                                objectFit: 'cover',
                                borderRadius: 3,
                                display: 'block', // Ensures no bottom margin issues
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: 'text.primary',
                                    fontSize: { xs: '2rem', md: '2.25rem' }, // text-[32px] md:text-4xl
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.033em',
                                }}
                            >
                                A propos de votre menuisier
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.primary',
                                    fontSize: '1rem',
                                    fontWeight: 400,
                                    lineHeight: 1.625, // leading-relaxed
                                }}
                            >
                                Je suis à votre écoute et à votre disposition pour vous garantir un travail de qualité avec de belles finitions. J'interviens essentiellement auprès des particuliers. Je suis à votre disposition pour tout devis et concrétisation de vos projets bois pour l'intérieur et l'extérieur.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutSection
