import { Box, Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Hero = () => {
    return (
        <Box
            sx={{
                py: { xs: 10, md: 16 },
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        minHeight: 520,
                        p: { xs: 3, md: 6 }, // p-6 md:p-12
                        gap: 3,
                        borderRadius: 3, // rounded-xl (12px = 0.75rem * 16 = 12px, in theme shape is 16 which is close to xl)
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtensqzEhGZjAWmEw86IssvClne1WWLemSaxKbVHWNyEynD_zobxtgkVS4QA65Tj4cxUaGyONcfrd_gTsJiLLhDFCttwsgGmBTV9Q26bUXHnefHoWtHDQ1dvxyaMNdCjMaJLp2eDYQq-v8WmLEOwqZcvlMR_MaieJlEiaMKSla_b9nkDffwkyiajN4naa5XeNpV2V6_US1dTf_Xb6PXANoeWc7gVHuxWMXCE5QLY_G0asspYkd-2HIf243RcuPcRLwoPDZh49nfmA")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '2.25rem', sm: '3rem' }, // text-4xl sm:text-5xl
                                lineHeight: 1.1,
                                letterSpacing: '-0.033em',
                            }}
                        >
                            Luc Gobet, l'artisan du bois
                        </Typography>
                        <Typography
                            variant="h2"
                            component="p"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: { xs: '1rem', sm: '1.125rem' }, // text-base sm:text-lg
                                fontWeight: 400,
                            }}
                        >
                            Je suis à votre écoute et à votre disposition pour vous garantir un travail de qualité avec de belles finitions. J'interviens essentiellement auprès des particuliers. Je suis à votre disposition pour tout devis et concrétisation de vos projets bois pour l'intérieur et l'extérieur.
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to="/projects"
                        size="large"
                        sx={{
                            height: 48,
                            px: 3,
                            fontSize: '1rem',
                            fontWeight: 700,
                            '&:hover': {
                                bgcolor: 'primary.dark',
                                boxShadow: 'none',
                                color: 'white',
                            },
                        }}
                    >
                        Découvrir mes réalisations
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
