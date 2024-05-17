import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Link, Typography, keyframes } from "@mui/material";
import { useState } from "react";
import PortfolieCard from "./CustomCard";

interface FlexProps {
  flex?: boolean;
  flex3?: boolean;
}

export const isMobile = window.innerWidth <= 500;

const FlexBox = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: ${({ flex, flex3 }) =>
    flex3 && isMobile
      ? 5
      : flex && isMobile
      ? 3
      : flex3 && !isMobile
      ? 3
      : flex && !isMobile
      ? 3
      : 1};
  background-color: black;
  padding: 0;
  margin: 0;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 2;
  overflow: hidden;
  transition: flex 0.5s ease-in-out, height 0.5s ease-in-out;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export default function Index() {
  const [flexBox1, setFlexBox1] = useState(false);
  const [flexBox2, setFlexBox2] = useState(false);
  const [flexBox3, setFlexBox3] = useState(false);

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
      <FlexBox
        flex={flexBox1}
        onMouseOver={() => setFlexBox1(true)}
        onMouseOut={() => setFlexBox1(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <img
            src="https://i.imgur.com/8982cbe.png"
            alt="A text saying Zeroett"
            style={{ width: "300px", height: "100px" }}
          ></img>

          {/* <Link href="/contact" color="inherit" underline="none">
            <Typography variant="h6" color="white">
              Kontakta oss med din idè
            </Typography>
          </Link> */}
        </div>
        {flexBox1 && (
          <Box sx={{ display: "flex", gap: 4, mt: 2 }}>
            <Link href="https://www.instagram.com/zeroettab" target="_blank">
              <InstagramIcon sx={{ color: "white", fontSize: 40 }} />
            </Link>
            <Link href="mailto:zeroettab@gmail.com" target="_blank">
              <MailOutlineIcon sx={{ color: "white", fontSize: 40 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/102941131/admin/feed/posts/?feedType=following"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
            </Link>
          </Box>
        )}
        {flexBox1 && (
          <Typography variant="h6" mt={2} color={"white"} textAlign={"center"}>
            Zeroett AB är ett konsultföretag som utvecklar mjukvarulösningar åt
            dig
          </Typography>
        )}
      </FlexBox>
      <FlexBox
        flex={flexBox2}
        onMouseOver={() => setFlexBox2(true)}
        onMouseOut={() => setFlexBox2(false)}
      >
        <Typography
          variant="h2"
          color={"white"}
          marginBottom={flexBox2 && isMobile ? 4 : 0}
        >
          PORTFOLIO
        </Typography>
        {flexBox2 && (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                animation: `${slideAnimation} 30s linear infinite`,
              }}
            >
              <PortfolieCard
                name="CY Virtual Workplace - Web service"
                url={["https://i.imgur.com/a6wGen3.png"]}
                description="A remote workplace"
              />
              <PortfolieCard
                name="Test Your App - Mobile app"
                url={["https://i.imgur.com/EuK2GBb.jpg"]}
                description="A mobile app for testing new apps"
              />
              <PortfolieCard
                name="Where's the sun? - Mobile app"
                url={["https://i.imgur.com/kW51MSz.jpg"]}
                description="A mobile weather app - spot the sun near you"
              />
              <PortfolieCard
                name="Webshop - online shop"
                url={["https://i.imgur.com/PmbQFoo.png"]}
                description="A webshop and administration service"
              />
              <PortfolieCard
                name="Check your todos - online calendar"
                url={["https://i.imgur.com/V4zBTxl.png"]}
                description="A calendar online with todos"
              />
            </Box>
          </Box>
        )}
      </FlexBox>
      <FlexBox
        flex3={flexBox3}
        onMouseOver={() => setFlexBox3(true)}
        onMouseOut={() => setFlexBox3(false)}
      >
        <Typography variant="h2" color={"white"}>
          OM OSS
        </Typography>
        {flexBox3 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              flex: 1 / 2,
            }}
          >
            <Typography
              variant="body1"
              color="white"
              textAlign="left"
              paddingX={2}
            >
              Vi fokuserar på att skapa starka, smarta och säkra system för våra
              kunder. Vårt team består av två fullstackutvecklare med extra
              kunskap i C#, JAVA, JavaScript, och TypeScript. Vi använder
              ramverk som React, Svelte, Angular, Grails och .NET. för små och
              stora system. Som fullstackutvecklare tar vi hand om alla dina
              mjukvarubehov - från <strong>hemsidor</strong> och{" "}
              <strong>webbshoppar</strong> till{" "}
              <strong>mobilapplikationer </strong>
              samt <strong> funktioner i redan etablerade system.</strong>
            </Typography>
            <Typography
              variant="body1"
              color="white"
              textAlign="left"
              paddingX={2}
              paddingY={2}
            >
              Dela din idé med oss idag!
            </Typography>
            <Typography
              variant="body1"
              color="white"
              textAlign="left"
              paddingX={2}
            >
              Angelina & Elina
            </Typography>
          </Box>
        )}
      </FlexBox>
    </div>
  );
}
