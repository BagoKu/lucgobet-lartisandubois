import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 8, px: 2, background: '#f5f3ee' }}>
      <Typography variant="h2" color="secondary" sx={{ fontWeight: 800, fontSize: { xs: '2rem', sm: '2.5rem' }, letterSpacing: 1, mb: 4 }}>
        Contact
      </Typography>
      <Stack spacing={3} sx={{ width: '100%', maxWidth: 420, background: '#fff', borderRadius: 3, boxShadow: '0 4px 32px rgba(44,36,24,0.07)', p: { xs: 3, sm: 4 } }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <BusinessIcon color="primary" />
          <Typography sx={{ fontWeight: 600 }}>Lucgobet.lartisandubois</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <LocationOnIcon color="primary" />
          <Box>
            <Typography>2 Rue du Chemin de Fer</Typography>
            <Typography>28330 LA BAZOCHE-GOUET</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <BadgeIcon color="primary" />
          <Box>
            <Typography>SIRET : 91854921300018</Typography>
            <Typography>RM : 918549213RM28</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <PhoneIcon color="primary" />
          <Typography component="a" href="tel:0661397918" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
            06.61.39.79.18
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <MailIcon color="primary" />
          <Typography component="a" href="mailto:lucgobet.lartisandubois@gmail.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
            lucgobet.lartisandubois@gmail.com
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <InstagramIcon color="action" />
          <Typography component="a" href="https://www.instagram.com/lucgobet.lartisandubois/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
            lucgobet.lartisandubois
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Contact; 