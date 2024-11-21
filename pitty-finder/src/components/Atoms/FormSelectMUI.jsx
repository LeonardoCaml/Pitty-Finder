import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function FormSelectMui({ formLabel }) {
  return (
    <Box>
      <FormControl sx={{ minWidth: 250, width: {xs: '100%', sm: 270} }}>
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
            borderRadius: 3,
            "& .MuiOutlinedInput-notchedOutline": {
              border: 3,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: 3,
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
    </Box>
  );
}
