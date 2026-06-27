import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";
import { Snackbar, Alert, Fade } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";

// 🚀 NAYA BRANDING: Modern SaaS Gradient Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1", // Vibrant Indigo
      contrastText: "#fff",
    },
    secondary: {
      main: "#ec4899", // Bright Pink
    },
    text: {
      primary: "#0f172a", // Slate 900 (Softer than pure black)
      secondary: "#64748b", // Slate 500
    },
  },
  shape: {
    borderRadius: 16, // Extra rounded for modern feel
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1.05rem",
      letterSpacing: "0.3px",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#f8fafc", // Very light grey-blue background for inputs
            "&:hover fieldset": {
              borderColor: "#818cf8",
            },
          },
        },
      },
    },
  },
});

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    setError("");
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        setUsername("");
        setPassword("");
        setName("");
        setMessage(result);
        setOpen(true);
        setFormState(0);
      }
    } catch (err) {
      let errorMessage = err.response?.data?.message || "Something went wrong!";
      setError(errorMessage);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "#f1f5f9" }}
      >
        <CssBaseline />

        {/* 🎨 LEFT PANEL - PREMIUM MESH GRADIENT */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // Yahan jadoo hai: Ek smooth, modern diagonal gradient
            background:
              "linear-gradient(135deg, #4f46e5 0%, #7e22ce 50%, #db2777 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glassmorphism Card Effect over Gradient */}
          <Box
            sx={{
              maxWidth: 550,
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "40px",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <VideoCallIcon
              sx={{
                fontSize: 90,
                color: "#fff",
                mb: 2,
                filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.3))",
              }}
            />
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, mb: 2, letterSpacing: "-1px" }}
            >
              <span style={{color: "#080cf1"}}>BUEST</span> Video Call
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Experience the next generation of virtual communication. Crystal
              clear, perfectly secure, and beautifully designed.
            </Typography>
          </Box>
        </Grid>

        {/* ✨ RIGHT PANEL - CLEAN WHITE FORM */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            display: "flex",
            alignItems: "center",
            borderTopLeftRadius: { md: "30px" },
            borderBottomLeftRadius: { md: "30px" },
            zIndex: 1, // Thoda upar utha hua feel aayega
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: { xs: 4, md: 8 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Glowy Avatar */}
            <Avatar
              sx={{
                m: 1,
                bgcolor: "#6366f1",
                color: "#fff",
                width: 56,
                height: 56,
                boxShadow: "0 8px 16px rgba(99, 102, 241, 0.4)",
              }}
            >
              <LockOutlinedIcon fontSize="medium" />
            </Avatar>

            <Typography
              component="h1"
              variant="h4"
              sx={{ fontWeight: 800, mb: 4, color: "#0f172a" }}
            >
              {formState === 0 ? "Welcome Back" : "Create Account"}
            </Typography>

            {/* IOS STYLE PILL TOGGLE */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                bgcolor: "#f1f5f9",
                p: 0.8,
                borderRadius: "16px",
                mb: 4,
              }}
            >
              <Button
                fullWidth
                disableElevation
                variant={formState === 0 ? "contained" : "text"}
                onClick={() => {
                  setFormState(0);
                  setError("");
                }}
                sx={{
                  borderRadius: "12px",
                  color: formState === 0 ? "#fff" : "#64748b",
                  py: 1,
                  transition: "all 0.3s ease",
                }}
              >
                Login
              </Button>
              <Button
                fullWidth
                disableElevation
                variant={formState === 1 ? "contained" : "text"}
                onClick={() => {
                  setFormState(1);
                  setError("");
                }}
                sx={{
                  borderRadius: "12px",
                  color: formState === 1 ? "#fff" : "#64748b",
                  py: 1,
                  transition: "all 0.3s ease",
                }}
              >
                Register
              </Button>
            </Box>

            <Box component="form" noValidate sx={{ width: "100%" }}>
              <Fade in={!!error}>
                <Box>
                  {error && (
                    <Alert
                      severity="error"
                      sx={{ mb: 3, borderRadius: "12px", fontWeight: 500 }}
                    >
                      {error}
                    </Alert>
                  )}
                </Box>
              </Fade>

              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* PREMIUM GRADIENT BUTTON */}
              <Button
                type="button"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 5,
                  mb: 2,
                  py: 1.8,
                  borderRadius: "12px",
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.8)",
                  "&:hover": {
                    background: "linear-gradient(to right, #4f46e5, #9333ea)",
                    boxShadow: "0 15px 25px -10px rgba(99, 102, 241, 0.9)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={handleAuth}
                disabled={!username || !password || (formState === 1 && !name)}
              >
                {formState === 0 ? "Sign In Securely" : "Create My Account"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%", borderRadius: "12px", fontWeight: 600 }}
        >
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
