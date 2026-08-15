import { Box, Stack, Typography } from "@mui/material";
import Button from "./Button";

import pizzaMain from "../assets/pizza-main.png";
import heroDecor from "../assets/heroDecor.png";
import shoura from "../assets/shoura.png";
import video from "../assets/video.png";
import bolt from "../assets/bolt.png";

export default function Fastest() {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      sx={{
        maxWidth: "1182px",
        margin: "0 auto",
        padding: { xs: "24px 16px 0 16px", md: "90px 20px 0 20px" },
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "block" },
          flexDirection: "column",
          width: { xs: "100%", md: "560px" },
          marginTop: { xs: "30px", md: "0" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "34px", md: "64px" },
            lineHeight: "1.15",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          The Fastest
          <br />
          Pizza
          <Box
            component="img"
            src={bolt}
            alt=""
            sx={{
              width: { xs: "24px", md: "44px" },
              margin: { xs: "0 10px", md: "0 18px" },
              verticalAlign: "middle",
            }}
          />
          Delivery
        </Typography>

        <Typography
          sx={{
            order: { xs: 2, md: 0 },
            width: { xs: "100%", md: "350px" },
            marginTop: { xs: "20px", md: "40px" },
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "1.6",
            color: "#E6DDD8",
          }}
        >
          We will deliver juicy pizza for your family in 30 minutes, if the
          courier is late –{" "}
          <Box component="span" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
            pizza is free
          </Box>
          !
        </Typography>

        <Typography
          sx={{
            order: { xs: 4, md: 0 },
            marginTop: { xs: "28px", md: "36px" },
            fontSize: { xs: "14px", md: "16px" },
            color: "#E6DDD8",
          }}
        >
          Cooking process:
        </Typography>

        <Box
          sx={{
            order: { xs: 5, md: 0 },
            position: "relative",
            width: { xs: "185px", md: "230px" },
            marginTop: "16px",
          }}
        >
          <Box
            component="img"
            src={shoura}
            alt="cooking process"
            sx={{ width: "100%", borderRadius: "12px", display: "block" }}
          />
          <Box
            component="img"
            src={video}
            alt="play"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "80px", md: "110px" },
            }}
          />
        </Box>

        <Stack
          direction="row"
          sx={{
            order: { xs: 3, md: 0 },
            width: { xs: "100%", md: "326px" },
            maxWidth: "326px",
            height: { xs: "52px", md: "64px" },
            marginTop: { xs: "26px", md: "48px" },
            borderRadius: "40px",
            border: "1px solid #FF7A00",
            alignItems: "center",
          }}
        >
          <Button
            variant="gradient"
            sx={{
              width: { xs: "50%", md: "190px" },
              height: { xs: "52px", md: "64px" },
              fontSize: { xs: "15px", md: "18px" },
            }}
          >
            To order
          </Button>
          <Button
            variant="outline"
            sx={{
              flex: 1,
              height: { xs: "52px", md: "64px" },
              fontSize: { xs: "15px", md: "18px" },
            }}
          >
            Pizza-Menu
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "390px" },
          marginTop: { xs: "20px", md: "0" },
        }}
      >
        <Box
          component="img"
          src={pizzaMain}
          alt="pizza"
          sx={{ width: "100%", borderRadius: "16px", display: "block" }}
        />
        <Box
          component="img"
          src={heroDecor}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "-20px", md: "-30px" },
            left: { xs: "-12%", md: "-190px" },
            width: { xs: "125%", md: "620px" },
            pointerEvents: "none",
          }}
        />
      </Box>
    </Stack>
  );
}
