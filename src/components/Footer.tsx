import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import logoImage from '../assets/logluc.png'

const LogoIcon = () => (
    <Box sx={{ width: 24, height: 24, color: 'primary.main', mr: 1.5 }}>
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
        </svg>
    </Box>
)

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                pt: 10,
                pb: 8,
                borderTop: 1,
                borderColor: (theme) => `rgba(212, 115, 17, 0.2)`, // primary/20
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    {/* Brand Column */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box
                                component="img"
                                src={logoImage}
                                alt="Logo Luc Gobet"
                                sx={{
                                    height: 40,
                                    width: 'auto',
                                    mr: 1.5,
                                }}
                            />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 384 }}>
                            Transformer le bois en pièces uniques qui racontent une histoire. Votre projet, notre passion.
                        </Typography>
                    </Grid>

                    {/* Navigation Column */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 2, color: 'text.primary' }}>
                            Navigation
                        </Typography>
                        <Stack spacing={1.5}>
                            {['Accueil', 'Projets', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href="#" // In a real app, use router Link or correct hrefs
                                    underline="none"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '0.875rem',
                                        transition: 'color 0.2s',
                                        '&:hover': { color: 'primary.main' },
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Column */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 2, color: 'text.primary' }}>
                            Contact
                        </Typography>
                        <Stack spacing={1.5}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhoneIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                                <Link
                                    href="tel:+33612345678"
                                    underline="none"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '0.875rem',
                                        '&:hover': { color: 'primary.main' },
                                    }}
                                >
                                    06 12 34 56 78
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                                <Link
                                    href="mailto:contact@menuisier.com"
                                    underline="none"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '0.875rem',
                                        '&:hover': { color: 'primary.main' },
                                    }}
                                >
                                    contact@menuisier.com
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                                    Paris, France
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 5,
                        pt: 3,
                        borderTop: 1,
                        borderColor: (theme) => `rgba(212, 115, 17, 0.2)`,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="caption" color="text.secondary">
                        © 2024 Artisan Menuisier. Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
