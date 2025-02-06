import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Join Waitlist", id: "waitlist" },
  ];

  const [elevated, setElevated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Add event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Smooth scrolling function
  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(243, 243, 243, 0.8)",
          backdropFilter: "blur(25px)",
          transition: "box-shadow 0.3s ease",
          boxShadow: elevated ? "0px 1px 3px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src={Logo}
                alt="xBordr Logo"
                sx={{
                  height: { xs: 56, sm: 70, md: 93 },
                  width: { xs: 80, sm: 100, md: 137 },
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  color: "#000000",
                  background: "#0077B3",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.1rem",
                }}
              >
                xBordr
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    sx={{
                      color: "text.secondary",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 500,
                      "&:hover": {
                        color: "text.primary",
                        background: "transparent",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "black" }}>
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "70%",
            padding: 2,
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={Logo}
            alt="xBordr Logo"
            sx={{
              height: 80,
              width: "auto",
              mb: 3,
            }}
          />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item.id)}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Hero;
