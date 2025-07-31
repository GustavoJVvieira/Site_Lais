import { Box, Button, Card, Typography, Stack, Divider } from "@mui/material";
import React from "react";

export default function CafeComAfeto() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#2f2f2f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 1, sm: 2 }, // Padding horizontal para o Box externo
        background: "linear-gradient(135deg, #2f2f2f, #1a1a1a)",
      }}
    >
      {/* O Card principal que conterá todo o conteúdo */}
      <Card
        elevation={6} // Sombra para dar profundidade
        sx={{
          width: "100vw", // Largura total da viewport
          height: "100vh", // Altura total da viewport
          borderRadius: 0, // Removido arredondamento para tela cheia
          p: { xs: 3, sm: 5 }, // Padding interno responsivo
          border: "4px solid #d4a373", // Borda em tom de bronze/dourado
          background: "linear-gradient(135deg, #ffffff, #f9f1e7)", // Fundo do card
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Sombra mais proeminente para o card
        }}
      >
        {/* Introdução */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 2,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "0.75rem", sm: "0.9rem" }, // Ajuste para mobile
          }}
        >
          Um encontro pensado com carinho para reunir quem dedica sua vida a
          cuidar do outro.
        </Typography>

        <Typography
          variant="h5" // Ajustado para h5 para telas menores
          align="center"
          sx={{
            color: "#8b4513",
            fontWeight: "bold",
            mt: 1,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1.6rem", sm: "2.2rem" }, // Ajuste para mobile
            lineHeight: 1.2,
          }}
        >
          Conexões <br />
          Transformadoras:
        </Typography>

        <Typography
          variant="body1" // Ajustado para body1
          align="center"
          sx={{
            color: "#d4a373",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 2,
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1rem", sm: "1.5rem" }, // Ajuste para mobile
            fontWeight: "bold", // Adicionado peso para destaque
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
            fontSize: { xs: "0.75rem", sm: "0.9rem" }, // Ajuste para mobile
          }}
        >
          Em comemoração ao Dia dos Psicólogos, convidamos você para uma manhã
          especial de troca, afeto e conexão entre colegas que transformam
          vidas todos os dias com escuta, empatia e cuidado.
        </Typography>

        <Divider
          sx={{
            mb: 3, // Margem inferior aumentada para separar visualmente
            borderColor: "#d4a373",
            borderWidth: 1,
            width: "70%", // Largura um pouco maior
            mx: "auto",
          }}
        />

        {/* Data e Hora - Layout da imagem original com cores ajustadas */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 3 }} // Espaçamento maior em telas maiores
          sx={{ mb: 3 }} // Margem inferior para separar do próximo bloco
        >
          {/* Esquerda: SÁBADO 09H */}
          <Box sx={{ textAlign: "right", pr: { xs: 1, sm: 2 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "#2f2f2f",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Ajuste para mobile
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
                fontSize: { xs: "1.1rem", sm: "1.4rem" }, // Ajuste para mobile
                fontWeight: "bold",
              }}
            >
              09H
            </Typography>
          </Box>

          {/* Divisor Vertical 1 */}
          <Divider orientation="vertical" flexItem sx={{ borderColor: "#d4a373", borderWidth: 1 }} />

          {/* Centro: 30 (o número maior) */}
          <Box sx={{ px: { xs: 1, sm: 3 } }}> {/* Padding maior para o número */}
            <Typography
              variant="h2"
              color="#2f2f2f"
              fontWeight="bold"
              sx={{ fontFamily: "Georgia, serif", fontSize: { xs: "3rem", sm: "5rem" } }} // Tamanho ainda maior
            >
              30
            </Typography>
          </Box>

          {/* Divisor Vertical 2 */}
          <Divider orientation="vertical" flexItem sx={{ borderColor: "#d4a373", borderWidth: 1 }} />

          {/* Direita: AGOSTO 2025 */}
          <Box sx={{ textAlign: "left", pl: { xs: 1, sm: 2 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "#2f2f2f",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Ajuste para mobile
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
                fontSize: { xs: "1.1rem", sm: "1.4rem" }, // Ajuste para mobile
                fontWeight: "bold",
              }}
            >
              2025
            </Typography>
          </Box>
        </Stack>

        <Divider
          sx={{
            mb: 3, // Margem inferior aumentada
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
            mb: 3, // Margem inferior para separar do botão
            fontFamily: "Georgia, serif",
            fontSize: { xs: "0.75rem", sm: "0.9rem" }, // Ajuste para mobile
          }}
        >
          Vamos celebrar juntos o poder das conexões e do cuidado que
          transforma.
        </Typography>

        {/* Botão */}
        <Box textAlign="center" mb={4}> {/* Margem inferior maior para o botão */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #a27032, #d4a373)",
              ":hover": { background: "linear-gradient(45deg, #7e5827, #b8860b)" },
              borderRadius: 20,
              px: { xs: 3, sm: 5 }, // Padding horizontal responsivo
              py: { xs: 1.2, sm: 1.8 }, // Padding vertical responsivo
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.5rem" }, // Tamanho de fonte responsivo
              textTransform: "uppercase",
              color: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": { transform: "scale(1.05)", transition: "all 0.3s" },
            }}
          >
            Inscrições
          </Button>
        </Box>

        {/* Informações adicionais */}
        <Typography
          variant="body2"
          align="center"
          display="block"
          sx={{
            color: "#8b4513",
            fontWeight: "600",
            lineHeight: 1.6,
            fontSize: { xs: "0.85rem", sm: "1.1rem" }, // Ajuste para mobile
            fontFamily: "Georgia, serif",
            textDecoration: "underline",
          }}
        >
          Café da manhã incluso <br />
          Local: Bim Bom - Café | Bar
        </Typography>
      </Card>
    </Box>
  );
}