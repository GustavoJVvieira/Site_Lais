import { Box, Button, Card, Typography, Stack, Divider, Link } from "@mui/material";
import React from "react";

export default function CafeComAfeto() {
  const handleInscricaoClick = () => {
    window.location.href = "https://form.jotform.com/252247822352657";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#2f2f2f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 1, sm: 2 },
        background: "linear-gradient(135deg, #2f2f2f, #1a1a1a)",
      }}
    >
      <Card
        elevation={6}
        sx={{
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          p: { xs: 3, sm: 5 },
          border: "4px solid #d4a373",
          background: "linear-gradient(135deg, #ffffff, #f9f1e7)",
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 2,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "0.75rem", sm: "0.9rem" },
          }}
        >
          Um encontro pensado com carinho para reunir quem dedica sua vida a
          cuidar do outro.
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#8b4513",
            fontWeight: "bold",
            mt: 1,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1.6rem", sm: "2.2rem" },
            lineHeight: 1.2,
          }}
        >
          Conexões <br />
          Transformadoras:
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#d4a373",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 2,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1rem", sm: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          Um Café com Afeto
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 2,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "0.75rem", sm: "0.9rem" },
          }}
        >
          Em comemoração ao Dia dos Psicólogos, convidamos você para uma manhã
          especial de troca, afeto e conexão entre colegas que transformam
          vidas todos os dias com escuta, empatia e cuidado.
        </Typography>

        <Divider
          sx={{
            mb: 3,
            borderColor: "#d4a373",
            borderWidth: 1,
            width: "70%",
            mx: "auto",
          }}
        />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 3 }}
          sx={{ mb: 3 }}
        >
          <Box sx={{ textAlign: "right", pr: { xs: 1, sm: 2 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "#2f2f2f",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              SÁBADO
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2f2f2f",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "1.1rem", sm: "1.4rem" },
                fontWeight: "bold",
              }}
            >
              09H
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ borderColor: "#d4a373", borderWidth: 1 }} />

          <Box sx={{ px: { xs: 1, sm: 3 } }}>
            <Typography
              variant="h2"
              color="#2f2f2f"
              fontWeight="bold"
              sx={{ fontFamily: "Georgia, serif", fontSize: { xs: "3rem", sm: "5rem" } }}
            >
              30
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ borderColor: "#d4a373", borderWidth: 1 }} />

          <Box sx={{ textAlign: "left", pl: { xs: 1, sm: 2 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "#2f2f2f",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              AGOSTO
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2f2f2f",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "1.1rem", sm: "1.4rem" },
                fontWeight: "bold",
              }}
            >
              2025
            </Typography>
          </Box>
        </Stack>

        <Divider
          sx={{
            mb: 3,
            borderColor: "#d4a373",
            borderWidth: 1,
            width: "70%",
            mx: "auto",
          }}
        />

        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 3,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "0.75rem", sm: "0.9rem" },
          }}
        >
          Vamos celebrar juntos o poder das conexões e do cuidado que
          transforma.
        </Typography>

        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            onClick={handleInscricaoClick}
            sx={{
              background: "linear-gradient(45deg, #a27032, #d4a373)",
              ":hover": { background: "linear-gradient(45deg, #7e5827, #b8860b)" },
              borderRadius: 20,
              px: { xs: 3, sm: 5 },
              py: { xs: 1.2, sm: 1.8 },
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              textTransform: "uppercase",
              color: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": { transform: "scale(1.05)", transition: "all 0.3s" },
            }}
          >
            Inscrições
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          display="block"
          sx={{
            color: "#8b4513",
            fontWeight: "600",
            lineHeight: 1.6,
            fontSize: { xs: "0.85rem", sm: "1.1rem" },
            fontFamily: "Georgia, serif",
            textDecoration: "underline",
          }}
        >
          Café da manhã incluso <br />
          Bar a parte <br />
        </Typography>
        <Typography
          variant="body2"
          align="center"
          display="block"
          sx={{
            color: "#d4a373",
            fontWeight: "800",
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", sm: "1.2rem" },
            fontFamily: "Georgia, serif",
            textDecoration: "underline",
            mt: 1,
          }}
        >
          Convites limitados
        </Typography>
        <Typography
          variant="body2"
          align="center"
          display="block"
          sx={{
            color: "#8b4513",
            fontWeight: "600",
            lineHeight: 1.6,
            fontSize: { xs: "0.85rem", sm: "1.1rem" },
            fontFamily: "Georgia, serif",
            textDecoration: "underline",
          }}
        >
          Local: Bim Bom - Café | Bar
        </Typography>

        {/* Instagram como link clicável */}
        <Link
          href="https://www.instagram.com/conexoes.transformadoras"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            mt: 3,
            display: "block",
            color: "#a27032",
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            fontFamily: "Georgia, serif",
            textAlign: "center",
          }}
        >
          Instagram: @conexoes.transformadoras
        </Link>
      </Card>
    </Box>
  );
}
