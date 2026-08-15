import { Box, Stack, Typography } from "@mui/material";
import Button from "./Button";

export default function Card({ item }) {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: { xs: "calc(50% - 6px)", md: "270px" },
        padding: { xs: "16px 12px", md: "24px 20px" },
        borderRadius: "16px",
        backgroundColor: "#2A1109",
      }}
    >
      <Box
        component="img"
        src={item.img}
        alt={item.name}
        sx={{
          display: "block",
          width: { xs: "100px", md: "130px" },
          margin: "0 auto",
        }}
      />

      <Typography
        sx={{
          marginTop: { xs: "12px", md: "16px" },
          fontSize: { xs: "16px", md: "20px" },
          fontWeight: 700,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {item.name}
      </Typography>

      <Typography
        sx={{
          marginTop: { xs: "8px", md: "12px" },
          fontSize: { xs: "11px", md: "12px" },
          lineHeight: "1.6",
          color: "#B4A49C",
        }}
      >
        {item.filling}
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { xs: "8px", md: "12px" }, marginTop: "16px" }}
      >
        {item.sizes.map((size, index) => (
          <Stack
            key={size}
            sx={{
              width: { xs: "28px", md: "32px" },
              height: { xs: "28px", md: "32px" },
              borderRadius: "50%",
              border: "1px solid #6B4A38",
              background:
                index === 1
                  ? "linear-gradient(90deg, #FF9500 0%, #FF5C00 100%)"
                  : "transparent",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Typography sx={{ fontSize: "12px", color: "#FFFFFF" }}>
              {size}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Button
        variant="outline"
        sx={{
          width: "100%",
          height: { xs: "32px", md: "36px" },
          marginTop: "16px",
          border: "1px solid #FF7A00",
          fontSize: { xs: "11px", md: "13px" },
        }}
      >
        + Ingridients
      </Button>

      <Stack
        direction="row"
        sx={{
          marginTop: { xs: "14px", md: "18px" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          {item.price}
          <Box component="span" sx={{ fontSize: "12px" }}>
            $
          </Box>
        </Typography>

        <Stack direction="row" sx={{ alignItems: "center", gap: "10px" }}>
          <Stack
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "1px solid #8B7B74",
              alignItems: "center",
              justifyContent: "center",
              color: "#8B7B74",
              fontSize: "14px",
              flexShrink: 0,
            }}
          >
            −
          </Stack>

          <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>1</Typography>

          <Stack
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "linear-gradient(90deg, #FF9500 0%, #FF5C00 100%)",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "14px",
              flexShrink: 0,
            }}
          >
            +
          </Stack>
        </Stack>
      </Stack>

      <Button
        variant="gradient"
        sx={{
          width: "100%",
          height: { xs: "34px", md: "40px" },
          marginTop: "16px",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        Order Now
      </Button>
    </Box>
  );
}
