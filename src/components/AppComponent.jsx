import { Box } from "@mui/material";
import Header from "./Header";
import Fastest from "./Fastest";
import Menu from "./Menu";
import Event from "./Event";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

export default function AppComponent() {
  return (
    <Box sx={{ backgroundColor: "#1E0D06", overflowX: "hidden" }}>
      <Header />
      <Fastest />
      <Menu />
      <Event />
      <AboutUs />
      <Footer />
    </Box>
  );
}
