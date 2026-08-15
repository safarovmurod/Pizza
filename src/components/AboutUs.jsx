import { Box, Stack, Typography } from "@mui/material";

import aboutPizza from "../assets/about-pizza.png";
import aboutPizzas from "../assets/about-pizzas.png";
import aboutDecor from "../assets/aboutDecor.png";

export default function AboutUs() {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      sx={{
        maxWidth: "1182px",
        margin: "0 auto",
        padding: { xs: "60px 16px 0 16px", md: "100px 20px 0 20px" },
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "400px" } }}>
        <Typography
          sx={{
            marginTop: { xs: "26px", md: "0" },
            fontSize: { xs: "30px", md: "48px" },
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          About us
        </Typography>
        <Typography
          sx={{
            marginTop: { xs: "14px", md: "20px" },
            fontSize: { xs: "12px", md: "14px" },
            lineHeight: "1.7",
            color: "#C9BAB2",
          }}
        >
          In just a couple of years, we have opened 6 outlets in different
          cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we
          plan to develop the network in other major cities of Russia.
        </Typography>
        <Box
          component="img"
          src={aboutPizzas}
          alt=""
          sx={{
            display: "block",
            width: { xs: "100%", md: "360px" },
            marginTop: { xs: "20px", md: "30px" },
          }}
        />
        <Typography
          sx={{
            marginTop: { xs: "20px", md: "30px" },
            fontSize: { xs: "12px", md: "14px" },
            lineHeight: "1.7",
            color: "#C9BAB2",
          }}
        >
          The kitchen of each point is at least: 400–500 sq. m. meters, hundreds
          of employees, smoothly performing work in order to receive / prepare /
          form / deliver customer orders on time.
        </Typography>
      </Box>
      <Box sx={{ position: "relative", width: { xs: "100%", md: "440px" } }}>
        <Box
          component="img"
          src={aboutPizza}
          alt="pizza"
          sx={{ display: "block", width: "100%" }}
        />
        <Box
          component="img"
          src={aboutDecor}
          alt=""
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: "-20px",
            left: "-160px",
            width: "620px",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Stack>
  );
}
