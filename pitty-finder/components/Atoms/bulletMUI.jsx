import { Paper } from "@mui/material";

export default function BulletCard({ children }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 0.2,
        m: 0.4,
        color: "grayText",
        fontSize: ".8rem",
      }}
    >
      {children}
    </Paper>
  );
}
