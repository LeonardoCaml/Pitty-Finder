import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";

type FormSelectMuiProps = {
  formLabel: string;
};

export default function FormSelectMui({ formLabel }: FormSelectMuiProps) {
  return (
    <div>
      <FormControl className="w-full">
        <InputLabel
          sx={{
            color: "gray",
            "&.MuiInputLabel-shrink": {
              color: "gray",
            },
          }}
        >
          {formLabel}
        </InputLabel>
        <Select
          name="option"
          label={formLabel}
          sx={{
            height: 50,
            borderRadius: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              border: 2,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: 2,
            },
          }}
        >
          <MenuItem value="0">
            <em style={{ color: "gray" }}>Sem preferência</em>
          </MenuItem>
          <MenuItem value="1">escolha...</MenuItem>
          <MenuItem value="2">escolha...</MenuItem>
          <MenuItem value="3">escolha...</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
