import { Box, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import bagIcon from "../assets/bag.png";
import pisaa from "../assets/pizzashop.png";
export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1182px",
        margin: "0 auto",
        padding: { xs: "24px 16px 0 16px", md: "40px 20px 0 20px" },
      }}
    >
      <Box component="img"
      src={pisaa}
      >

      </Box>

      <Stack
        direction="row"
        sx={{ display: { xs: "none", md: "flex" }, gap: "48px" }}
      >
        <Typography
          component="a"
          href="#home"
          sx={{
  fontSize: "16px",
  fontWeight: 500,
  color: "#FFFFFF",
  textDecoration: "none",
  ":hover": {
    color: "#FF7A00",
  },
}}
        >
          Home
        </Typography>
        <Typography
          component="a"
          href="#menu"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#FFFFFF",
            textDecoration: "none",
             ":hover": {
    color: "#FF7A00",
  },
          }}
        >
          Menu
        </Typography>
        <Typography
          component="a"
          href="#events"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#FFFFFF",
            textDecoration: "none",
             ":hover": {
    color: "#FF7A00",
  },
          }}
        >
          Events
        </Typography>
        <Typography
          component="a"
          href="#about"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#FFFFFF",
            textDecoration: "none",
             ":hover": {
    color: "#FF7A00",
  },
          }}
        >
          About us
        </Typography>
      </Stack>

      <Stack direction="row" sx={{ alignItems: "center", gap: "16px" }}>
        <Button
          variant="gradient"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            width: "136px",
            height: "44px",
          }}
        >
          Log in
        </Button>

        <Box
          component="img"
          src={bagIcon}
          alt="bag"
          sx={{
            display: "block",
            width: { xs: "34px", md: "44px" },
            height: { xs: "34px", md: "44px" },
          }}
        />

        <MenuIcon
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "30px",
            color: "#FF7A00",
          }}
        />
      </Stack>
    </Stack>
  );
}
