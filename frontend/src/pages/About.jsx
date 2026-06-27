import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MemoryIcon from "@mui/icons-material/Memory";
import SpeedIcon from "@mui/icons-material/Speed";

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fafbfc", pb: 10 }}>
      {/* 1. MINIMAL NAVBAR */}
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{ pt: 2, px: { xs: 2, md: 4 } }}
      >
        <Toolbar sx={{ padding: "0 !important" }}>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ ml: 2, color: "#fff", fontWeight: 600 }}
          >
            Back
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 2. HERO GRADIENT BACKGROUND */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)", // Professional Tech Blue Theme
          pt: { xs: 15, md: 20 },
          pb: { xs: 20, md: 25 },
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 800,
            mb: 3,
            fontSize: { xs: "2.5rem", md: "4rem" },
            letterSpacing: "-1px",
          }}
        >
          Engineered for BUEST
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.85)",
            fontWeight: 400,
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          A robust college project showcasing real-time, serverless video
          communication using modern Peer-to-Peer (WebRTC) architecture.
        </Typography>
      </Box>

      {/* 3. OVERLAPPING FEATURE CARDS */}
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: -10, md: -15 }, position: "relative", zIndex: 2 }}
      >
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "24px",
                border: "none",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 30px 50px rgba(0,0,0,0.12)",
                },
                transition: "all 0.4s ease",
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: "center" }}>
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "20px",
                    backgroundColor: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <HubIcon sx={{ fontSize: 36, color: "#3b82f6" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}
                >
                  True P2P Network
                </Typography>
                <Typography sx={{ color: "#64748b", lineHeight: 1.7 }}>
                  No middleman servers. Video and audio data flow directly
                  between browsers using WebRTC mesh topology for zero server
                  bottlenecks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "24px",
                border: "none",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 30px 50px rgba(0,0,0,0.12)",
                },
                transition: "all 0.4s ease",
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: "center" }}>
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "20px",
                    backgroundColor: "#f0fdf4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <SecurityIcon sx={{ fontSize: 36, color: "#22c55e" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}
                >
                  Absolute Privacy
                </Typography>
                <Typography sx={{ color: "#64748b", lineHeight: 1.7 }}>
                  Because the connection is direct, your data is never stored or
                  processed on external media servers. What happens in the room,
                  stays in the room.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "24px",
                border: "none",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 30px 50px rgba(0,0,0,0.12)",
                },
                transition: "all 0.4s ease",
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 }, textAlign: "center" }}>
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "20px",
                    backgroundColor: "#fdf4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <GroupsIcon sx={{ fontSize: 36, color: "#d946ef" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}
                >
                  Small Group Focus
                </Typography>
                <Typography sx={{ color: "#64748b", lineHeight: 1.7 }}>
                  Optimized for quality over quantity. Designed perfectly for
                  tight-knit study groups and college discussions of 4 to 8
                  active participants.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* 4. REALISTIC TECHNICAL STATS */}
      <Container maxWidth="md" sx={{ mt: 15, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, color: "#0f172a", mb: 6 }}
        >
          Technical Specifications
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={4}>
            <MemoryIcon sx={{ fontSize: 48, color: "#cbd5e1", mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#3b82f6" }}>
              100%
            </Typography>
            <Typography sx={{ color: "#64748b", fontWeight: 500, mt: 1 }}>
              Client-Side Processing
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <SpeedIcon sx={{ fontSize: 48, color: "#cbd5e1", mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#22c55e" }}>
              ~0ms
            </Typography>
            <Typography sx={{ color: "#64748b", fontWeight: 500, mt: 1 }}>
              Added Server Latency
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <GroupsIcon sx={{ fontSize: 48, color: "#cbd5e1", mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#d946ef" }}>
              8
            </Typography>
            <Typography sx={{ color: "#64748b", fontWeight: 500, mt: 1 }}>
              Max Optimal Users
            </Typography>
          </Grid>
        </Grid>

        {/* Call To Action */}
        <Box
          sx={{
            mt: 10,
            p: 6,
            backgroundColor: "#fff",
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}
          >
            Test the connection now
          </Typography>
          <Typography sx={{ color: "#64748b", mb: 4 }}>
            Grab a friend, share a room code, and experience WebRTC in action.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/home")}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: "12px",
              background: "linear-gradient(to right, #1e3a8a, #3b82f6)",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1.1rem",
              boxShadow: "0 10px 20px -10px rgba(59, 130, 246, 0.8)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 15px 25px -10px rgba(59, 130, 246, 0.9)",
              },
            }}
          >
            Start Video Call
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
