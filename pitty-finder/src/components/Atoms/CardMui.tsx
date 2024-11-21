import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

import { useState, useEffect } from "react";

export interface CardMuiProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const CardMui = ({ image, title, description, onClick }: CardMuiProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 200,
        width: 200,
        height: 250,
        border: 3,
        boxShadow: "none",
        borderRadius: 4,
        cursor: "pointer",
      }}
    >
      {isLoading ? (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width={170}
            height={150}
          />
          <Skeleton variant="text" animation="wave" width={170} height={30} />
          <Skeleton variant="text" animation="wave" width={170} height={30} />
        </CardContent>
      ) : (
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
      )}
    </Card>
  );
};

export default CardMui;
