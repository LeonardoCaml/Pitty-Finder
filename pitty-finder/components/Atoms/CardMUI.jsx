import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardMui({ image, title, description, onClick, style }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 200,
        width: 200,
        minheight: 250,
        border: 3,
        boxShadow: "none",
        borderRadius: 4,
        cursor: "pointer",
        ...(style && style),
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...(style && style),
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="foto do animal"
          sx={{ border: 3, borderRadius: 3, height: 150 }}
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
