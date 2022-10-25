import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectionComponent({ titulo, listaDeSeleccion, Icon}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [texto, setTexto] = useState("Seleccione Plaza");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTexto = (e) => {
        console.log(e.target.value);
        // setTexto(event.currentTarget.dataset);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "#FFFFFF" }}              
            >
                {Icon}
                {titulo}
                {/* Seleccione plaza */}
                {/* <KeyboardArrowDownIcon /> */}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {listaDeSeleccion.map((elemento) => (
                    <Link to={elemento[1]}>
                        <MenuItem onClick={() => handleClose()}>
                            {elemento[0]}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </div>
    );
}
