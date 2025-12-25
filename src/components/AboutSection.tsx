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

                                <p>Menuisier depuis 2000 et après avoir travaillé dans diverses menuiserie je me suis mis à mon compte en 2022 dans le perche,afin de proposer mes  propres réalisations aux clients.</p>


                                <p>Je réalise  vos ouvrages en bois que ce soit pour l'intérieur de votre habitation ou à l'extérieur de celle-ci.
                                    Je m'entretiens personnellement avec chacun de mes clients afin de voir leurs besoins, leurs idées et d'étudier leurs demandes.</p>


                                <p>Je vous propose de découvrir sur ce site les différentes ouvrage en bois que ce soit pour l'intérieur de votre habitation ou à l'extérieur de celle-ci
                                    N'y voyez pas là un catalogue mais plutôt une source d'inspiration.
                                    Cela vous donnera peut-être des idées des envies de projet et si vous avez besoin de concrétiser vos souhaits n'hésitez pas à me contacter.</p>                          </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutSection
