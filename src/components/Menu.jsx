import { Box, Stack, Typography } from "@mui/material";
import Button from "./Button";
import Card from "./Card";
import { pizzaList } from "../data/data";
import banner from "../assets/banner.png";

const filterList = ["Show All", "Meat", "Vegetarian", "Sea products", "Mushroom"];

export default function Menu() {
  return (
    <Box
      sx={{
        maxWidth: "1182px",
        margin: "0 auto",
        padding: { xs: "60px 16px 0 16px", md: "100px 20px 0 20px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "48px" },
          fontWeight: 800,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        Menu
      </Typography>

      <Stack
        direction="row"
        sx={{
          marginTop: { xs: "24px", md: "40px" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "10px", md: "0" },
        }}
      >
        {filterList.map((filter, index) => (
          <Button
            key={filter}
            variant={index === 0 ? "gradient" : "outline"}
            sx={{
              width: { xs: "auto", md: "160px" },
              height: { xs: "34px", md: "42px" },
              padding: { xs: "0 18px", md: "0" },
              fontSize: { xs: "12px", md: "14px" },
              color: "#FFFFFF",
            }}
          >
            {filter}
          </Button>
        ))}
      </Stack>

      <Stack
        direction="row"
        sx={{
          marginTop: { xs: "24px", md: "40px" },
          gap: { xs: "12px", md: "24px" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {pizzaList.slice(0, 4).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Stack>

      <Box sx={{ position: "relative", marginTop: { xs: "24px", md: "40px" } }}>
        <Box
          component="img"
          src={banner}
          alt="most popular pizza"
          sx={{ display: "block", width: "100%", borderRadius: "16px" }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            fontSize: { xs: "16px", md: "32px" },
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          MOST POPULAR PIZZA
        </Typography>
      </Box>

      <Stack
        direction="row"
        sx={{
          marginTop: { xs: "24px", md: "40px" },
          gap: { xs: "12px", md: "24px" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {pizzaList.slice(4).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Stack>
    </Box>
  );
}
