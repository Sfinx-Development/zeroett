import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

interface Props {
  name: string;
  url: string[];
  description: string;
}

export default function PortfolieCard({ name, url, description }: Props) {
  const isMobile = window.innerWidth <= 820;

  return (
    <Card
      sx={{
        margin: isMobile ? 2 : 5,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        image={url[0]}
        alt="portfolio"
        sx={{
          height: isMobile ? 100 : 150,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ backgroundColor: "#f8f8f8" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: isMobile ? 14 : 16,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {description}
        </Typography>
        <Container
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        >
          {url.slice(1).map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              image={image}
              alt="logo"
              sx={{
                marginLeft: index > 0 ? 2 : 0,
                width: isMobile ? 120 : 160,
                height: isMobile ? 80 : 100,
                objectFit: "contain",
              }}
            />
          ))}
        </Container>
      </CardContent>
    </Card>
  );
}
