import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookIcon from "@mui/icons-material/Book";
import PaidIcon from "@mui/icons-material/Paid";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function SimpleAccordion() {

    return (
        <div>
            <Accordion disableRipple>
                <AccordionSummary
                    disableRipple
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListItemIcon>
                        <BookIcon />
                    </ListItemIcon>
                    <Typography fontSize={12} pt={0.5}>
                        {" "}
                        Catálogos Locales
                    </Typography>
                </AccordionSummary>
                <AccordionDetails disableRipple>
                    <Link to="/CatalogosDepositantes">
                        <ListItemButton disableRipple onClick={()=>{}}>
                            <ListItemText secondary="Catálogo de Depositantes" />
                        </ListItemButton>
                    </Link>
                    <Link to="/CatalogosDepositantes/Credito">
                        <ListItemButton disableRipple>
                            <ListItemText
                                secondary={
                                    <Typography
                                        type="body2"
                                        style={{ fontSize: "10px" }}
                                    >
                                        Catálogo de Depositantes de Crédito
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </Link>
                    <Link to="/CatalogoTecnicos">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Catálogo de Técnicos" />
                        </ListItemButton>
                    </Link>
                    <Link to="/CatalogoLineas">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Catálogos Locales" />
                        </ListItemButton>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <Typography> Ventas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to="/VentaCertificados">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Venta de Certificados" />
                        </ListItemButton>
                    </Link>
                    <Link to="/Pagos">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Pagos" />
                        </ListItemButton>
                    </Link>
                    <Link to="/EntregaCertificados">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Entrega de Certificados" />
                        </ListItemButton>
                    </Link>
                    <Link to="/CancelarCertificados">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Cancelar Certificados" />
                        </ListItemButton>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListItemIcon>
                        <PaidIcon />
                    </ListItemIcon>
                    <Typography> Compras</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to="/CompraCertificados">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Compras de Certificados" />
                        </ListItemButton>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <ListItemIcon>
                        <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <Typography> Administración</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to="/CatalogosUsuarios">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Catálogo de Usuarios" />
                        </ListItemButton>
                    </Link>
                    <Link to="/CatalogoPlazas">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Catálogo de Plazas" />
                        </ListItemButton>
                    </Link>
                    <Link to="/CatalogoPlantillas">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Catálogo de Plantillas" />
                        </ListItemButton>
                    </Link>
                    <Link to="/TipoPlaza">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Tipo de Plaza" />
                        </ListItemButton>
                    </Link>
                    <Link to="/RegistroAcceso">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Registro de Acceso" />
                        </ListItemButton>
                    </Link>
                    <Link to="/LectoresHuella">
                        <ListItemButton disableRipple>
                            <ListItemText secondary="Lectores de Huella" />
                        </ListItemButton>
                    </Link>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
