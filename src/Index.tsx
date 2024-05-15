import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  slideInRight: {
    transition: "transform 0.5s ease-in-out",
    transform: "translateX(0)",
  },
  slideOutRight: {
    transition: "transform 0.5s ease-in-out",
    transform: "translateX(100%)",
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
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: flexBox1 ? 2 : 1,
          backgroundColor: "black",
          padding: 0,
          margin: 0,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
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
          <Typography
            variant="h6"
            color={"white"}
            className={flexBox1 ? classes.slideInRight : classes.slideOutRight}
          >
            Zeroett AB är ett konsultföretag som utvecklar mjukvarulösningar åt
            dig
          </Typography>
        )}
        {flexBox1 && (
          <Typography
            variant="h6"
            color={"white"}
            className={flexBox1 ? classes.slideInRight : classes.slideOutRight}
          >
            Här lägga kontakt till mail, instagram och linkedin
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: flexBox2 ? 2 : 1,
          backgroundColor: "black",
          padding: 0,
          margin: 0,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseOver={() => setFlexBox2(true)}
        onMouseOut={() => setFlexBox2(false)}
      >
        <Typography variant="h2" color={"white"}>
          PORTFOLIO
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: flexBox3 ? 2 : 1,
          backgroundColor: "black",
          padding: 0,
          margin: 0,
          border: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseOver={() => setFlexBox3(true)}
        onMouseOut={() => setFlexBox3(false)}
      >
        <Typography variant="h2" color={"white"}>
          OM OSS
        </Typography>
      </Box>
    </div>
  );
}
