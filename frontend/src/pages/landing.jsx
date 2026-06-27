import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Grid,
  Stack,
} from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <Box className={styles.mainWrapper}>
      {/* 1. NAVBAR */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={styles.navbar}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Logo Section */}
            <Box className={styles.logoBox} onClick={() => router("/")}>
              <VideoCallIcon
                sx={{ color: "#FF9839", fontSize: { xs: 40, md: 55 } }}
              />
              <Typography variant="h5" component="div">
                <h1 className={styles.brandName}>BUEST</h1>
              </Typography>
            </Box>

            {/* Desktop Buttons */}
            <Box className={styles.navLinksContainer}>
              <Typography
                onClick={() => router("/guest")}
                className={styles.guestLink}
              >
                Join as Guest
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() => router("/auth")}
                  className={styles.loginBtn}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  onClick={() => router("/auth")}
                  className={styles.registerBtn}
                >
                  Register
                </Button>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 2. HERO SECTION */}
      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
      >
        {/* Pehle jaisa balance lane ke liye md={5} aur md={7} kiya hai */}
        <Grid container spacing={2} alignItems="center">
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={5}>
            <Box className={styles.ctaContainer}>
              <Typography variant="h2" className={styles.heroTitle}>
                <span style={{ color: "#FF9839" }}>Connect</span> with
                <br />
                your loved ones
              </Typography>

              <Typography variant="h6" className={styles.heroSubtitle}>
                Distance is just a word. Cover any distance instantly with
                high-quality, secure video calls on Apna Video Call.
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={() => router("/auth")}
                className={styles.getStartedBtn}
              >
                Get Started Free
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Image - Isko md={7} kiya hai taaki image badi dikhe */}
          <Grid item xs={12} md={7} className={styles.heroImageWrapper}>
            <Box
              component="img"
              src="/mobile.png"
              alt="Buest App Mobile View"
              className={styles.heroImage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
