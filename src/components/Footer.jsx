import { Box, Stack, Typography } from "@mui/material";

import logo from "../assets/pizzashop.png";
import social from "../assets/social.png";

function FooterColumn({ title, links }) {
  return (
    <Box
      sx={{
        width: { xs: "50%", md: "170px" },
        marginBottom: { xs: "28px", md: "0" },
      }}
    >
      <Typography sx={{ fontSize: "15px", fontWeight: 400, color: "#EFE6E1" }}>
        {title}
      </Typography>

      {links.map((link) => (
        <Typography
          key={link}
          component="a"
          href="#"
          sx={{
            display: "block",
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: "1.4",
            color: "#7A665C",
            textDecoration: "none",
          }}
        >
          {link}
        </Typography>
      ))}
    </Box>
  );
}

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#160A05", marginTop: { xs: "60px", md: "0" } }}>
      <Box
        sx={{
          maxWidth: "1182px",
          margin: "0 auto",
          padding: { xs: "40px 16px 30px 16px", md: "70px 20px 45px 20px" },
        }}
      >
        <Stack
          direction="row"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              marginRight: { xs: "0", md: "60px" },
              marginBottom: { xs: "30px", md: "0" },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="pizzashop"
              sx={{ display: "block", width: "110px", height: "20px" }}
            />
          </Box>

          <FooterColumn
            title="Home"
            links={["To Order", "About us", "Events", "Menu"]}
          />
          <FooterColumn
            title="Events"
            links={["3 Pizza 1 Free Coffee", "2 Pizza for 1 Price", "Kitchen Tour"]}
          />
          <FooterColumn
            title="Menu"
            links={["Show All", "Seaproducts", "Vegan", "Meat"]}
          />
          <FooterColumn title="About Us" links={["Our History", "Why We?"]} />
        </Stack>

        <Stack
          direction="row"
          sx={{
            marginTop: { xs: "20px", md: "60px" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "13px", md: "15px" }, color: "#FF7A00" }}
          >
            +7 (937) 333-55-33
          </Typography>

          <Box
            component="img"
            src={social}
            alt=""
            sx={{ display: "block", height: { xs: "18px", md: "20px" } }}
          />
        </Stack>
      </Box>
    </Box>
  );
}
