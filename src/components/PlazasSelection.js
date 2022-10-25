import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import { useState } from "react";

export default function PlazasSelection() {
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
                {texto}
                {/* Seleccione plaza */}
                <DomainAddIcon />
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
                <MenuItem
                    onClick={(e) => {
                        handleClose();
                        handleTexto(e);
                    }}
                >
                    Alan Suárez Santamaría
                </MenuItem>
                <MenuItem onClick={() => handleClose()}>
                    Benjamín Gutierrez Padilla
                </MenuItem>
                <MenuItem onClick={() => handleClose()}>
                    Kaleb Antonio Vazquez
                </MenuItem>
            </Menu>
        </div>
    );
}
