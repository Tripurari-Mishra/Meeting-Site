// import React, { useContext, useState } from "react";
// import withAuth from "../utils/withAuth";
// import { useNavigate } from "react-router-dom";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import { AuthContext } from "../contexts/AuthContext";
// import {
//   Button,
//   TextField,
//   Box,
//   Typography,
//   Container,
//   AppBar,
//   Toolbar,
//   Stack,
//   InputAdornment,
//   Grid,
//   IconButton,
// } from "@mui/material";
// import HistoryIcon from "@mui/icons-material/History";
// import LogoutIcon from "@mui/icons-material/Logout";
// import KeyboardIcon from "@mui/icons-material/Keyboard";
// import VideoCallIcon from "@mui/icons-material/VideoCall";

// function HomeComponent() {
//   let navigate = useNavigate();
//   const [meetingCode, setMeetingCode] = useState("");
//   const { addToUserHistory } = useContext(AuthContext);

//   let handleJoinVideoCall = async () => {
//     if (!meetingCode.trim()) return;
//     await addToUserHistory(meetingCode);
//     navigate(`/${meetingCode}`);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#ffffff",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* 1. RESPONSIVE NAVBAR */}
//       <AppBar
//         position="static"
//         color="transparent"
//         elevation={0}
//         sx={{ borderBottom: "1px solid #e0e0e0", px: { xs: 1, md: 2 } }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             padding: "0 !important",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <VideoCallIcon
//               sx={{ color: "#1a73e8", fontSize: { xs: 28, md: 32 } }}
//             />
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#5f6368",
//                 fontWeight: 500,
//                 fontSize: { xs: "1rem", md: "1.25rem" },
//                 letterSpacing: "-0.5px",
//               }}
//             >
//               BUEST Call
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: { xs: 0.5, md: 2 },
//             }}
//           >
//             <Button
//               color="inherit"
//               startIcon={<HistoryIcon />}
//               onClick={() => navigate("/history")}
//               sx={{
//                 color: "#5f6368",
//                 textTransform: "none",
//                 fontSize: { xs: "13px", md: "15px" },
//                 minWidth: "auto",
//               }}
//             >
//               <Box
//                 component="span"
//                 sx={{ display: { xs: "none", sm: "inline" } }}
//               >
//                 History
//               </Box>
//             </Button>

//             <Button
//               variant="outlined"
//               color="error"
//               onClick={() => navigate("/about")}
//               sx={{
//                 textTransform: "none",
//                 borderRadius: "8px",
//                 fontSize: { xs: "12px", md: "14px" },
//                 px: { xs: 1, md: 2 },
//               }}
//             >
//               About
//             </Button>

//             <IconButton
//               color="error"
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 navigate("/auth");
//               }}
//               sx={{ display: { xs: "flex", sm: "none" } }}
//             >
//               <LogoutIcon />
//             </IconButton>

//             <Button
//               variant="outlined"
//               color="error"
//               startIcon={<LogoutIcon />}
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 navigate("/auth");
//               }}
//               sx={{
//                 textTransform: "none",
//                 borderRadius: "8px",
//                 display: { xs: "none", sm: "flex" },
//               }}
//             >
//               Logout
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* 2. HERO SECTION */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           alignItems: "center",
//           py: { xs: 4, md: 0 },
//         }}
//       >
//         <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
//           {/* Left Panel */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{ textAlign: { xs: "center", md: "left" } }}
//           >
//             <Box sx={{ maxWidth: { xs: "100%", md: "500px" }, mx: "auto" }}>
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: 400,
//                   color: "#202124",
//                   mb: 2,
//                   fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3rem" },
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Premium video meetings.
//                 <br />
//                 Now free for everyone.
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 400,
//                   color: "#5f6368",
//                   mb: 4,
//                   fontSize: { xs: "1rem", md: "1.1rem" },
//                   lineHeight: 1.5,
//                 }}
//               >
//                 Providing quality video calls just like quality education.
//                 Connect, collaborate, and celebrate from anywhere.
//               </Typography>

//               <Stack
//                 direction={{ xs: "column", sm: "row" }}
//                 spacing={2}
//                 alignItems="center"
//               >
//                 <TextField
//                   value={meetingCode}
//                   onChange={(e) => setMeetingCode(e.target.value)}
//                   placeholder="Enter meeting code"
//                   variant="outlined"
//                   fullWidth
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <KeyboardIcon sx={{ color: "#5f6368" }} />
//                       </InputAdornment>
//                     ),
//                     sx: { borderRadius: "8px", backgroundColor: "#fff" },
//                   }}
//                 />
//                 <Button
//                   onClick={handleJoinVideoCall}
//                   variant="contained"
//                   disabled={!meetingCode.trim()}
//                   // fullWidth={true} // Isko hata kar sx mein handle karenge
//                   sx={{
//                     height: "56px",
//                     px: 6,
//                     borderRadius: "8px",
//                     backgroundColor: "#1a73e8",
//                     textTransform: "none",
//                     fontSize: "16px",
//                     fontWeight: 500,
//                     boxShadow: "none",
//                     "&:hover": { backgroundColor: "#1557b0" },
//                     // YAHAN HAI FIX: Responsive width sx ke andar dali hai
//                     width: { xs: "100%", sm: "auto" },
//                   }}
//                 >
//                   Join
//                 </Button>
//               </Stack>

//               <Box sx={{ mt: 3 }}>
//                 <Typography variant="body2" color="text.secondary">
//                   Learn more about{" "}
//                   <span
//                     onClick={() => navigate("/about")}
//                     style={{
//                       color: "#1a73e8",
//                       textDecoration: "none",
//                       cursor: "pointer",
//                       fontWeight: 600,
//                     }}
//                   >
//                     BUEST Video Call
//                   </span>
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Right Panel - Image */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               order: { xs: -1, md: 1 }, // Mobile pe image pehle dikhegi
//             }}
//           >
//             <Box
//               component="img"
//               src="/logo3.png"
//               alt="Video Call Illustration"
//               sx={{
//                 width: "100%",
//                 maxWidth: { xs: "280px", sm: "400px", md: "500px" },
//                 height: "auto",
//                 borderRadius: "16px",
//                 boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default withAuth(HomeComponent);



import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Stack,
  InputAdornment,
  Grid,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState(""); // Naya state generated code dikhane ke liye
  const { addToUserHistory } = useContext(AuthContext);

  // 1. Join Existing Meeting (Manual Code)
  let handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    await addToUserHistory(meetingCode.trim());
    navigate(`/${meetingCode.trim()}`);
  };

  // 2. Generate New Meeting Code
  let handleGenerateCode = () => {
    const generateStr = () => Math.random().toString(36).substring(2, 6);
    const newCode = `${generateStr()}-${generateStr()}`;
    setGeneratedCode(newCode); // Code generate karke screen par dikhane ke liye set kiya
  };

  // 3. Start Generated Meeting
  let handleStartGeneratedMeeting = async () => {
    await addToUserHistory(generatedCode);
    navigate(`/${generatedCode}`);
  };

  // 4. Copy Code
  let handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Meeting code copied to clipboard!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 1. RESPONSIVE NAVBAR */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #e0e0e0", px: { xs: 1, md: 2 } }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 !important" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VideoCallIcon sx={{ color: "#1a73e8", fontSize: { xs: 28, md: 32 } }} />
            <Typography variant="h6" sx={{ color: "#5f6368", fontWeight: 500, fontSize: { xs: "1rem", md: "1.25rem" }, letterSpacing: "-0.5px" }}>
              BUEST Call
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 2 } }}>
            <Button color="inherit" startIcon={<HistoryIcon />} onClick={() => navigate("/history")} sx={{ color: "#5f6368", textTransform: "none", fontSize: { xs: "13px", md: "15px" }, minWidth: "auto" }}>
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>History</Box>
            </Button>
            <Button variant="outlined" color="error" onClick={() => navigate("/about")} sx={{ textTransform: "none", borderRadius: "8px", fontSize: { xs: "12px", md: "14px" }, px: { xs: 1, md: 2 } }}>
              About
            </Button>
            <IconButton color="error" onClick={() => { localStorage.removeItem("token"); navigate("/auth"); }} sx={{ display: { xs: "flex", sm: "none" } }}>
              <LogoutIcon />
            </IconButton>
            <Button variant="outlined" color="error" startIcon={<LogoutIcon />} onClick={() => { localStorage.removeItem("token"); navigate("/auth"); }} sx={{ textTransform: "none", borderRadius: "8px", display: { xs: "none", sm: "flex" } }}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 2. HERO SECTION */}
      <Container maxWidth="lg" sx={{ flexGrow: 1, display: "flex", alignItems: "center", py: { xs: 4, md: 0 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          
          {/* Left Panel */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box sx={{ maxWidth: { xs: "100%", md: "500px" }, mx: "auto" }}>
              <Typography variant="h3" sx={{ fontWeight: 400, color: "#202124", mb: 2, fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3rem" }, lineHeight: 1.2 }}>
                Premium video meetings.
                <br />
                Now free for everyone.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 400, color: "#5f6368", mb: 4, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.5 }}>
                Providing quality video calls just like quality education. Connect, collaborate, and celebrate from anywhere.
              </Typography>

              {/* 🟢 NEW LAYOUT: UP AND DOWN (STACKED) 🟢 */}
              <Stack spacing={3} sx={{ maxWidth: "450px", mx: { xs: "auto", md: "0" } }}>
                
                {/* Option 1: Generate Link Box */}
                <Paper elevation={0} sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: "12px", bgcolor: "#f8f9fa" }}>
                  <Typography variant="subtitle1" fontWeight={600} mb={1.5} color="#202124">
                    Create a New Meeting
                  </Typography>
                  
                  {!generatedCode ? (
                    <Button variant="contained" fullWidth startIcon={<VideoCallIcon />} onClick={handleGenerateCode} sx={{ bgcolor: "#1a73e8", textTransform: "none", height: "48px", fontSize: "16px", "&:hover": { bgcolor: "#1557b0" } }}>
                      Generate Meeting Code
                    </Button>
                  ) : (
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "#e8f0fe", p: 1.5, borderRadius: "8px", mb: 2 }}>
                        <Typography variant="body1" sx={{ color: "#1a73e8", fontWeight: 500, letterSpacing: "1px" }}>
                          {generatedCode}
                        </Typography>
                        <IconButton size="small" onClick={handleCopyCode} sx={{ color: "#1a73e8" }}>
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Button variant="contained" fullWidth onClick={handleStartGeneratedMeeting} sx={{ bgcolor: "#188038", textTransform: "none", height: "48px", fontSize: "16px", "&:hover": { bgcolor: "#13622b" } }}>
                        Start Meeting Now
                      </Button>
                    </Box>
                  )}
                </Paper>

                <Divider sx={{ color: "#5f6368", fontSize: "14px" }}>OR</Divider>

                {/* Option 2: Join Meeting Box */}
                <Paper elevation={0} sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: "12px" }}>
                  <Typography variant="subtitle1" fontWeight={600} mb={1.5} color="#202124">
                    Join Existing Meeting
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      value={meetingCode}
                      onChange={(e) => setMeetingCode(e.target.value)}
                      placeholder="Enter code (e.g. abcd-efgh)"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeyboardIcon sx={{ color: "#5f6368", fontSize: "20px" }} />
                          </InputAdornment>
                        ),
                        sx: { borderRadius: "8px", bgcolor: "#fff", height: "48px" },
                      }}
                    />
                    <Button variant="contained" disabled={!meetingCode.trim()} onClick={handleJoinVideoCall} sx={{ bgcolor: "#1a73e8", textTransform: "none", px: 3, borderRadius: "8px", boxShadow: "none", "&:hover": { bgcolor: "#1557b0" } }}>
                      Join
                    </Button>
                  </Stack>
                </Paper>

              </Stack>
              {/* 🟢 END OF NEW LAYOUT 🟢 */}

            </Box>
          </Grid>

          {/* Right Panel - Image */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", order: { xs: -1, md: 1 } }}>
            <Box component="img" src="/logo3.png" alt="Video Call Illustration" sx={{ width: "100%", maxWidth: { xs: "280px", sm: "400px", md: "500px" }, height: "auto", borderRadius: "16px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default withAuth(HomeComponent);