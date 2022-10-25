import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function MenuSelector({ textoTitulo, arregloValores }) {
    const [tempValue, setTempValue] = React.useState("");
    const handleChange = (event) => {
        setTempValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{textoTitulo}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tempValue}
                label="Selecciona una plaza"
                onChange={handleChange}
            >
                {arregloValores.map((elemento) => (
                    <MenuItem value={elemento.valor}>
                        {elemento.nombre}
                    </MenuItem>
                ))}
                
            </Select>
        </FormControl>
    );
}

export default MenuSelector;
