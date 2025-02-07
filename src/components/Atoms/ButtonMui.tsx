import { Button } from "@mui/material";

export interface ButtonMuiProps {
  tittle: string,
  onClick: () => void | void,
}

export default function ButtonMui({ tittle, onClick }: ButtonMuiProps) {
  return (
    <div>
      <button
        className="button"
        onClick={onClick}>{tittle}</button>
    </div>
  );
}
