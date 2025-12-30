import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import logoImage from '../assets/logluc.png'

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
                            <p>Menuiserie Bois et dérivés. Renovation, fabrication, pose.</p>
                            Dressing, placard, cuisine, parquet, terrasse, garde corps, palissade, volets, porte, portail.
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
                                    href="tel:0661397918"
                                    underline="none"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '0.875rem',
                                        '&:hover': { color: 'primary.main' },
                                    }}
                                >
                                    06.61.39.79.18
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                                <Link
                                    href="mailto:lucgobet.lartisandubois@gmail.com"
                                    underline="none"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '0.875rem',
                                        '&:hover': { color: 'primary.main' },
                                    }}
                                >
                                    lucgobet.lartisandubois@gmail.com
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                                    28330 LA BAZOCHE-GOUET
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
                        © 2024 Lucgobet L'Artisan du Bois. Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
