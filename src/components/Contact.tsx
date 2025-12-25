import { Box, Container, Typography } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import PlaceIcon from '@mui/icons-material/Place'
import BadgeIcon from '@mui/icons-material/Badge'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'

const Contact = () => {
  const contactItems = [
    {
      icon: <BusinessIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Entreprise',
      content: 'Lucgobet.lartisandubois',
    },
    {
      icon: <PlaceIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Adresse',
      content: (
        <>
          2 Rue du Chemin de Fer<br />
          28330 LA BAZOCHE-GOUET
        </>
      ),
    },
    {
      icon: <BadgeIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Identifiants',
      content: (
        <>
          <strong>SIRET :</strong> 91854921300018<br />
          <strong>RM :</strong> 918549213RM28
        </>
      ),
    },
    {
      icon: <PhoneIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Téléphone',
      content: (
        <Box
          component="a"
          href="tel:0661397918"
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          06.61.39.79.18
        </Box>
      ),
    },
    {
      icon: <EmailIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Email',
      content: (
        <Box
          component="a"
          href="mailto:lucgobet.lartisandubois@gmail.com"
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            wordBreak: 'break-word',
            '&:hover': { color: 'primary.main' },
          }}
        >
          lucgobet.lartisandubois@gmail.com
        </Box>
      ),
    },
    {
      icon: <InstagramIcon sx={{ fontSize: '1.5rem' }} />,
      label: 'Instagram',
      content: (
        <Box
          component="a"
          href="https://instagram.com/lucgobet.lartisandubois"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          @lucgobet.lartisandubois
        </Box>
      ),
    },
  ]

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 12 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Contactez-nous
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '48rem',
              mx: 'auto',
            }}
          >
            Vous avez un projet de menuiserie en tête ? Une question sur nos services ?
            Retrouvez ci-dessous toutes les informations pour nous joindre.
          </Typography>
        </Box>

        {/* Contact Info - Centered */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              p: { xs: 4, md: 6 },
              border: '1px solid',
              borderColor: 'divider',
              maxWidth: '600px',
              width: '100%',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                mb: 4,
                pb: 2,
                borderBottom: '2px solid',
                borderColor: 'primary.main',
                display: 'inline-block',
              }}
            >
              Coordonnées
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {contactItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      bgcolor: 'rgba(212, 115, 17, 0.1)',
                      p: 1.5,
                      borderRadius: 2,
                      mr: 2,
                      flexShrink: 0,
                      color: 'primary.main',
                      transition: 'background-color 0.2s',
                      '&:hover': {
                        bgcolor: 'rgba(212, 115, 17, 0.2)',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'text.secondary',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        mb: 0.5,
                        display: 'block',
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.125rem',
                        fontWeight: 500,
                        color: 'text.primary',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact