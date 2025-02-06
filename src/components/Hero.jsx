import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Features from "./Features";
import Works from "./Works";
import Price from "./price";
import Reviews from "./Reviews";
import Footer from "./footer";
import Mobiles from "./Mobiles";
import Motivation from "./Motivation";
import Goals from "./Goals";
import BusinessModel from "./Business-Model";
import MOMENTUM from "./MOMENTUM";
import Wallett from "./Wallett";
import Team from "./Team";
import Landscape from "./Landscape";
import CHALLENGE from "./CHALLENGE";
import Funding from "./Funding";
// import { Download } from "@mui/icons-material"
import { motion } from "framer-motion";
import FundingAsk from "./Funding";
const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section id="home">
      <Box
        sx={{
          minHeight: { xs: "25vh", sm: "30vh", md: "97vh" },
          background: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          overflow: "hidden", // Prevents unwanted line breaks
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: "100%" }} // Ensures full-width centering
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(2rem, 5vw, 4rem)", // Ensures text scales but stays in one line
              fontWeight: "bold",
              lineHeight: 1.2,
              color: "#000",
              whiteSpace: "nowrap", // Prevents wrapping
              overflow: "hidden", // Ensures single-line behavior
              textOverflow: "ellipsis", // Prevents overflow issues
            }}
          >
            <Box
              component="span"
              sx={{
                background: "#0077B3",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
              }}
            >
              {/* xBordr */}
            </Box>
            Tourism Cross-Border Payments Simplified
          </Typography>
        </motion.div>
      </Box>
      </section>
      {/* <Wallet/> */}
      <Mobiles />
      <Features />
      {/* <Wallett/> */}
      {/* <CHALLENGE />  */}
      <Works />
      <Goals />
      {/* <Motivation /> */}
      {/* <BusinessModel/>  */}
      {/* <MOMENTUM/> */}
      {/* <Team/> */}
      {/* <Reviews /> */}
      {/* <Landscape/> */}
      {/* <Funding/> */}
      <Footer />

      {/* <Price /> */}
    </>
  );
};

export default HeroSection;
