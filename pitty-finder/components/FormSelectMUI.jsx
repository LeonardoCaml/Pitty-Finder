import { InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export default function FormSelectMui() {
    return(
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>animal</InputLabel>
                <Select
                label='animal'>
                    <MenuItem>cachorro</MenuItem>
                    <MenuItem>gato</MenuItem>
                    <MenuItem>passaro</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}