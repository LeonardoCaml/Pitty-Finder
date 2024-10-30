import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardMui({ image, title, description, onClick }) {
  return (
    <Box width="300px" onClick={onClick}>
      <Card
        sx={{
          width: 220,
          height: 300,
          border: "3px solid",
          boxShadow: "none",
          borderRadius: "15px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt="foto do animal"
            sx={{ border: "3px solid", borderRadius: "15px" }}
          />
          <Typography
            variant="h1"
            component="div"
            sx={{
              width: 190,
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="div"
            sx={{ width: 190 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
