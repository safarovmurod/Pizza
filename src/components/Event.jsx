import { Box, Stack, Typography } from "@mui/material";
import Button from "./Button";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";
import event7 from "../assets/event7.png";
import decor from "../assets/decor.png";

function EventCard({ img, title, span, spanXs }) {
  return (
    <Stack
      sx={{
        gridColumn: { xs: `span ${spanXs}`, md: `span ${span}` },
        height: { xs: "140px", md: "185px" },
        padding: { xs: "0 14px 14px 14px", md: "0 20px 20px 20px" },
        borderRadius: "12px",
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 100%), url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", md: "160px" },
          fontSize: { xs: "13px", md: "18px" },
          lineHeight: "1.2",
          fontWeight: 600,
          color: "#FFFFFF",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      <Button
        variant="gradient"
        sx={{
          width: { xs: "100%", md: "180px" },
          height: { xs: "28px", md: "34px" },
          marginTop: { xs: "10px", md: "14px" },
          fontSize: { xs: "11px", md: "13px" },
        }}
      >
        More
      </Button>
    </Stack>
  );
}

export default function Event() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1182px",
        margin: "0 auto",
        padding: { xs: "60px 16px 0 16px", md: "100px 20px 0 20px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(6, 1fr)" },
          gap: { xs: "12px", md: "20px" },
        }}
      >
        <EventCard img={event1} title="How we cooking" span={2} spanXs={1} />
        <EventCard img={event2} title="Our blog" span={2} spanXs={1} />

        <Box
          sx={{
            order: { xs: -1, md: 0 },
            gridColumn: { xs: "span 2", md: "span 2" },
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Events
          </Typography>
          <Typography
            sx={{
              marginTop: { xs: "10px", md: "14px" },
              fontSize: { xs: "12px", md: "14px" },
              lineHeight: "1.6",
              color: "#B4A49C",
            }}
          >
            There are regular events in our pizzeria that will allow you to eat
            delicious food for a lower price!
          </Typography>
        </Box>
        <EventCard
          img={event3}
          title="Two pizza for 1 price"
          span={3}
          spanXs={2}
        />
        <EventCard img={event4} title="Kitchen tour" span={3} spanXs={2} />
        <EventCard
          img={event5}
          title="Free coffee for 3 pizza"
          span={2}
          spanXs={1}
        />
        <EventCard img={event6} title="Our instagram" span={2} spanXs={1} />
        <EventCard
          img={event7}
          title="Where are you choose us?"
          span={2}
          spanXs={2}
        />
      </Box>
      <Box
        component="img"
        src={decor}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "100px",
          left: "-40px",
          width: "100%",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
