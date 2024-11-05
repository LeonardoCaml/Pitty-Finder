import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardMui({ image, title, description, onClick, style }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 200,
        minheight: 250,
        border: "3px solid",
        boxShadow: "none",
        borderRadius: "15px",
        cursor: "pointer",
        ...(style && style)
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...(style && style)
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="foto do animal"
          sx={{ border: "3px solid", borderRadius: "15px" }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            width: 170,
            fontWeight: "600",
            marginY: 1,
            textWrap: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          component="div"
          sx={{
            width: 170,
            textWrap: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
