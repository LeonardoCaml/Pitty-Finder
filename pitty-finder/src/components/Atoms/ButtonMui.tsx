import { Button } from "@mui/material";

export interface ButtonMuiProps {
  tittle: string,
  customStyle?: React.CSSProperties,
  onClick: () => void,
}

export default function ButtonMui({ tittle, onClick, customStyle }: ButtonMuiProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        textAlign: "left",
        position: "relative",
        border: 3,
        borderRadius: 2,
        color: "black",
        backgroundColor: "white",
        height: 45,
        width: 120,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 3,
          left: 3,
          width: "100%",
          height: "100%",
          border: 3,
          zIndex: -1,
          borderRadius: 2,
        },
        "&:hover": {
          top: 3,
          left: 3,
          color: "white",
          backgroundColor: "black",
          borderColor: "black",
        },
        "&:hover::before": {
          top: 0,
          left: 0,
          color: "black",
          backgroundColor: "black",
        },
        ...(customStyle ? customStyle : {}),
      }}
    >
      {tittle}
    </Button>
  );
}
