import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import PortfolieCard from "./CustomCard";

const useStyles = makeStyles({
  flexTransition: {
    transition: "flex 0.5s ease-in-out",
  },
});

export default function Index() {
  const [flexBox1, setFlexBox1] = useState(false);
  const [flexBox2, setFlexBox2] = useState(false);
  const [flexBox3, setFlexBox3] = useState(false);
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 2,
        width: "100%",
        backgroundColor: "white",
        padding: 0,
        margin: 0,
        border: "none",
      }}
    >
      <Box
        className={classes.flexTransition}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: flexBox1 ? 3 : 1,
          backgroundColor: "black",
          padding: 0,
          margin: 0,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          transition: "flex 0.5s ease-in-out, height 0.5s ease-in-out",
        }}
        onMouseOver={() => setFlexBox1(true)}
        onMouseOut={() => setFlexBox1(false)}
      >
        <img
          src="https://i.imgur.com/8982cbe.png"
          alt="Girl in a jacket"
          style={{ width: "300px", height: "100px" }}
        ></img>
        {flexBox1 && (
          <Box sx={{ display: "flex", gap: 4 }}>
            <InstagramIcon sx={{ color: "white", fontSize: 40 }} />
            <MailOutlineIcon sx={{ color: "white", fontSize: 40 }} />
            <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
          </Box>
        )}
        {flexBox1 && (
          <Typography variant="h6" color={"white"}>
            Zeroett AB är ett konsultföretag som utvecklar mjukvarulösningar åt
            dig
          </Typography>
        )}
      </Box>
      <Box
        className={classes.flexTransition}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: flexBox2 ? 3 : 1,
          backgroundColor: "black",
          padding: 0,
          margin: 0,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          transition: "flex 0.5s ease-in-out, height 0.5s ease-in-out",
        }}
        onMouseOver={() => setFlexBox2(true)}
        onMouseOut={() => setFlexBox2(false)}
      >
        <Typography variant="h2" color={"white"}>
          PORTFOLIO
        </Typography>
        {flexBox2 && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <PortfolieCard
              name="CY Virtual Workplace"
              url={["https://i.imgur.com/a6wGen3.png"]}
              description="A remote workplace"
            />
            <PortfolieCard
              name="Test Your App"
              url={["https://i.imgur.com/EuK2GBb.jpg"]}
              description="A mobile app for testing new apps"
            />
            <PortfolieCard
              name="Where's the sun?"
              url={["https://i.imgur.com/kW51MSz.jpg"]}
              description="A mobile weather app - spot the sun near you"
            />
          </Box>
        )}
      </Box>
      <Box
        className={classes.flexTransition}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: flexBox3 ? 3 : 1,
          backgroundColor: "black",
          padding: 0,
          margin: 0,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          transition: "flex 0.5s ease-in-out, height 0.5s ease-in-out",
        }}
        onMouseOver={() => setFlexBox3(true)}
        onMouseOut={() => setFlexBox3(false)}
      >
        <Typography variant="h2" color={"white"}>
          OM OSS
        </Typography>
        {flexBox3 && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography color="white">Något om oss här då</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
}
