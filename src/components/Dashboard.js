import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CatalogosDepositantes from "./CatalogosDepositantes";
import CatalogosDepoCredito from "./CatalogosDepoCredito";
import { Routes, Route, Link } from "react-router-dom";
import CatalogoTecnicos from "./CatalogoTecnicos";
import CatalogoLineas from "./CatalogoLineas";
import VentaCertifidos from "./VentaCertificados";
import Pagos from "./Pagos";
import EntregaCertificados from "./EntregaCertificados";
import CancelarCertificados from "./CancelarCertificados";
import CompraCertificados from "./CompraCertificados";
import CatalogosUsuarios from "./CatalogosUsuarios";
import CatalogoPlazas from "./CatalogoPlazas";
import CatalogoPlantillas from "./CatalogoPlantillas";
import TipoPlaza from "./TipoPlaza";
import RegistroAcceso from "./RegistroAcceso";
import LectoresHuella from "./LectoresHuella";
import SelectionComponent from "./subcomponents/SelectionComponent";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CatalogosBeneficiarios from "./CatalogosBeneficiarios";
import Reembolsos from "./Reembolsos";
import RecibosDeSalida from "./RecibosDeSalida";
import EstadosDeCuentasDeGastos from "./EstadosDeCuentasDeGastos";
import ReportesDeGastos from "./ReporteDeGastos";
import RecibosPorMotivo from "./RecibosPorMotivo";
import DesgloseDeDinero from "./DesgloseDeDinero";
import ReporteDeVentas from "./ReporteDeVentas";
import ValesDePagosAnticipados from "./ValesDePagosAnticipados";
import DevolucionDeDinero from "./DevolucionDeDinero";
import PolizaCertificados from "./PolizaCertificados";
import CatalogoDeClientes from "./CatalogoDeClientes";
import FacturasGeneral from "./FacturasGeneral";
import NotasDeCredito from "./NotasDeCredito";
import CompraDeTimbres from "./CompraDeTimbres";
import CatalogoDePersonal from "./CatalogoDePersonal";
import Asistencia from "./Asistencia";
import AsistenciaPorPeriodo from "./AsistenciaPorPeriodo";
import InformeDeVentas from "./InformeDeVentas";
import InformeDeEntregas from "./InformeDeEntregas";
import ResumenDeIngreso from "./ResumenDeIngreso";
import ReporteDeImportePorFacturar from "./ReporteDeImportePorFacturar";
import ReporteDeCopiasPorFacturar from "./ReporteDeCopiasPorFacturar";
import ReporteDeInventario from "./ReporteDeInventario";

const drawerWidth = 240;

//styles for modal
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const mdTheme = createTheme();

function DashboardContent() {
    //methods to open user menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //methods to open "plazas" modal
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    //set plaza on selector modal
    const [plaza, setPlaza] = React.useState("");
    const handleChange = (event) => {
        setPlaza(event.target.value);
    };

    const [showSideBar, setShowSideBar] = React.useState(false);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar>
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* //user menu */}
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            style={{ color: "white" }}
                        >
                            <AccountCircleIcon className="accountIcon" />
                            Alan Suárez
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open2}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={handleOpenModal}>
                                Seleccionar plaza
                            </MenuItem>

                            <Link to="/SignIn">
                                <MenuItem onClick={handleClose}>
                                    Logout
                                </MenuItem>
                            </Link>
                        </Menu>

                        {/* end of user menu */}

                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Selecciona una plaza
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={plaza}
                                        label="Selecciona una plaza"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>
                                            Alan Suárez Santamaría
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            Fer López Ramírez
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            Kaleb Antonio Vazquez
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Modal>

                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        ></Typography>
                        {/* These are the navbar's selection menus  */}
                        <div className="menusNavBar">
                            <SelectionComponent
                                titulo={"Catálogos locales"}
                                listaDeSeleccion={[
                                    [
                                        "Catálogo de Depositantes",
                                        "/CatalogosDepositantes",
                                    ],
                                    [
                                        "Catálogo de Depositantes de Crédito",
                                        "/CatalogosDepositantes/Credito",
                                    ],
                                    [
                                        "Catálogo de Técnicos",
                                        "/CatalogoTecnicos",
                                    ],
                                    ["Catálogos Locales", "/CatalogoLineas"],
                                ]}
                                Icon={<LibraryBooksIcon sx={{ mr: 1 }} />}
                            />

                            <SelectionComponent
                                titulo={"Gastos"}
                                listaDeSeleccion={[
                                    [
                                        "Catalogos de beneficiarios",
                                        "/CatalogosBeneficiarios",
                                    ],
                                    ["Reembolsos", "/Reembolsos"],
                                    ["Recibos de Salida", "/RecibosDeSalida"],
                                    [
                                        "Estados de Cuentas de Gastos",
                                        "/EstadoDeCuentaDeGastos",
                                    ],
                                    ["Reporte De Gastos", "/ReportesDeGastos"],
                                    ["Recibos Por Motivo", "/RecibosPorMotivo"],
                                ]}
                                Icon={<AttachMoneyIcon sx={{ mr: 1 }} />}
                            />

                            <SelectionComponent
                                titulo={"Ventas"}
                                listaDeSeleccion={[
                                    [
                                        "Venta de Certificados",
                                        "/VentaCertificados",
                                    ],
                                    ["Pagos", "/Pagos"],
                                    [
                                        "Entrega de Certificados",
                                        "/EntregaCertificados",
                                    ],
                                    [
                                        "Cancelar Certificados",
                                        "/CancelarCertificados",
                                    ],
                                    ["Desglose de Dinero", "/DesgloseDeDinero"],
                                    ["Reporte de Ventas", "/ReporteDeVentas"],
                                    [
                                        "Vales de pagos anticipados",
                                        "/ValesDePagosAnticipados",
                                    ],
                                    [
                                        "Devolución de dinero",
                                        "/DevolucionDeDinero",
                                    ],
                                    [
                                        "Poliza Certificados",
                                        "/PolizaCertificados",
                                    ],
                                ]}
                                Icon={<PointOfSaleIcon sx={{ mr: 1 }} />}
                            />

                           
                            <SelectionComponent
                                titulo={"Facturación"}
                                listaDeSeleccion={[
                                    [
                                        "Catálogo de Clientes",
                                        "/CatalogoDeClientes",
                                    ],
                                    ["Facturas General", "/FacturasGeneral"],
                                    ["Notas De Crédito", "/NotasDeCredito"],
                                    ["Compras de Timbres", "/CompraDeTimbres"],
                                ]}
                                Icon={<AttachMoneyIcon sx={{ mr: 1 }} />}
                            />

                            <SelectionComponent
                                titulo={"Compras"}
                                listaDeSeleccion={[
                                    [
                                        "Compras de Certificados",
                                        "/CompraCertificados",
                                    ],
                                ]}
                                Icon={<AttachMoneyIcon sx={{ mr: 1 }} />}
                            />

                            <SelectionComponent
                                titulo={"Personal"}
                                listaDeSeleccion={[
                                    [
                                        "Catálogo de Personal",
                                        "/CatalogoDePersonal",
                                    ],
                                    ["Asistencia", "/Asistencia"],
                                    [
                                        "Asistencia Por Periodo",
                                        "/AsistenciaPorPeriodo",
                                    ],
                                ]}
                                Icon={<AdminPanelSettingsIcon sx={{ mr: 1 }} />}
                            />

                            <SelectionComponent
                                titulo={"Auditoria"}
                                listaDeSeleccion={[
                                    ["Informe de Ventas", "/InformeDeVentas"],
                                    ["Informe de entregas", "/InformeDeEntregas"],
                                    ["Resumen de Ingreso", "/ResumenDeIngreso"],
                                    [
                                        "Reporte de Importe Por Facturar",
                                        "/ReporteDeImportePorFacturar",
                                    ],
                                    [
                                        "Reporte de Copias por Facturar",
                                        "/ReporteDeCopiasPorFacturar",
                                    ],
                                    [
                                        "Reporte De Inventario",
                                        "/ReporteDeInventario",
                                    ],
                                ]}
                                Icon={<AdminPanelSettingsIcon sx={{ mr: 1 }} />}
                            />
                        </div>
                        <div className="hamburguerMenu">
                            <Button
                                style={{ color: "white" }}
                                onClick={() => setShowSideBar(!showSideBar)}
                            >
                                <MenuIcon />
                            </Button>
                        </div>
                        {showSideBar && (
                            <div
                                className="sideBarBackdground"
                                onClick={() => setShowSideBar(!showSideBar)}
                            ></div>
                        )}

                        {showSideBar && (
                            <div className="sideBar">
                                <div className="sideNavBar">
                                    {/* <LibraryBooksIcon /> */}

                                    <SelectionComponent
                                        titulo={"Catálogos locales"}
                                        listaDeSeleccion={[
                                            [
                                                "Catálogo de Depositantes",
                                                "/CatalogosDepositantes",
                                            ],
                                            [
                                                "Catálogo de Depositantes de Crédito",
                                                "/CatalogosDepositantes/Credito",
                                            ],
                                            [
                                                "Catálogo de Técnicos",
                                                "/CatalogoTecnicos",
                                            ],
                                            [
                                                "Catálogos Locales",
                                                "/CatalogoLineas",
                                            ],
                                        ]}
                                        Icon={
                                            <LibraryBooksIcon sx={{ mr: 1 }} />
                                        }
                                    />

                                    <SelectionComponent
                                        titulo={"Ventas"}
                                        listaDeSeleccion={[
                                            [
                                                "Venta de Certificados",
                                                "/VentaCertificados",
                                            ],
                                            ["Pagos", "/Pagos"],
                                            [
                                                "Entrega de Certificados",
                                                "/EntregaCertificados",
                                            ],
                                            [
                                                "Cancelar Certificados",
                                                "/CancelarCertificados",
                                            ],
                                        ]}
                                        Icon={
                                            <PointOfSaleIcon sx={{ mr: 1 }} />
                                        }
                                    />

                                    <SelectionComponent
                                        titulo={"Gastos"}
                                        listaDeSeleccion={[
                                            [
                                                "Compras de Certificados",
                                                "/CompraCertificados",
                                            ],
                                        ]}
                                        Icon={
                                            <AttachMoneyIcon sx={{ mr: 1 }} />
                                        }
                                    />

                                    <SelectionComponent
                                        titulo={"Ventas"}
                                        listaDeSeleccion={[
                                            [
                                                "Venta de Certificados",
                                                "/VentaCertificados",
                                            ],
                                            ["Pagos", "/Pagos"],
                                            [
                                                "Entrega de Certificados",
                                                "/EntregaCertificados",
                                            ],
                                            [
                                                "Cancelar Certificados",
                                                "/CancelarCertificados",
                                            ],
                                            [
                                                "Desglose de Dinero",
                                                "/DesgloseDeDinero",
                                            ],
                                        ]}
                                        Icon={
                                            <PointOfSaleIcon sx={{ mr: 1 }} />
                                        }
                                    />

                                    <SelectionComponent
                                        titulo={"Compras"}
                                        listaDeSeleccion={[
                                            [
                                                "Compras de Certificados",
                                                "/CompraCertificados",
                                            ],
                                        ]}
                                        Icon={
                                            <AttachMoneyIcon sx={{ mr: 1 }} />
                                        }
                                    />

                                    <SelectionComponent
                                        titulo={"Personal"}
                                        listaDeSeleccion={[
                                            [
                                                "Catálogo de Usuarios",
                                                "/CatalogosUsuarios",
                                            ],
                                            [
                                                "Catálogo de Plazas",
                                                "/CatalogoPlazas",
                                            ],
                                            [
                                                "Catálogo de Plantillas",
                                                "/CatalogoPlantillas",
                                            ],
                                            ["Tipo de Plaza", "/TipoPlaza"],
                                            [
                                                "Registro de Acceso",
                                                "/RegistroAcceso",
                                            ],
                                            [
                                                "Lectores de Huella",
                                                "/LectoresHuella",
                                            ],
                                        ]}
                                        Icon={
                                            <AdminPanelSettingsIcon
                                                sx={{ mr: 1 }}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {/* <PlazasSelection />
                        <UserMenuSelect /> */}
                    </Toolbar>
                </AppBar>

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    {/* Contenido que se muestra en el dashboard */}
                    <Routes>
                        <Route
                            path="/CatalogosDepositantes"
                            element={<CatalogosDepositantes />}
                        />
                        <Route
                            path="/CatalogosDepositantes/Credito"
                            element={<CatalogosDepoCredito />}
                        />
                        <Route
                            path="/CatalogoTecnicos"
                            element={<CatalogoTecnicos />}
                        />
                        <Route
                            path="/CatalogoLineas"
                            element={<CatalogoLineas />}
                        />
                        <Route
                            path="/VentaCertificados"
                            element={<VentaCertifidos />}
                        />
                        <Route path="/Pagos" element={<Pagos />} />
                        <Route
                            path="/EntregaCertificados"
                            element={<EntregaCertificados />}
                        />
                        <Route
                            path="/CancelarCertificados"
                            element={<CancelarCertificados />}
                        />
                        <Route
                            path="/CompraCertificados"
                            element={<CompraCertificados />}
                        />
                        <Route
                            path="/CatalogosUsuarios"
                            element={<CatalogosUsuarios />}
                        />
                        <Route
                            path="/CatalogoPlazas"
                            element={<CatalogoPlazas />}
                        />
                        <Route
                            path="/CatalogoPlantillas"
                            element={<CatalogoPlantillas />}
                        />
                        <Route path="/TipoPlaza" element={<TipoPlaza />} />
                        <Route
                            path="/RegistroAcceso"
                            element={<RegistroAcceso />}
                        />
                        <Route
                            path="/LectoresHuella"
                            element={<LectoresHuella />}
                        />
                        <Route
                            path="/CatalogosBeneficiarios"
                            element={<CatalogosBeneficiarios />}
                        />
                        <Route path="/Reembolsos" element={<Reembolsos />} />
                        <Route
                            path="/RecibosDeSalida"
                            element={<RecibosDeSalida />}
                        />
                        <Route
                            path="/EstadoDeCuentaDeGastos"
                            element={<EstadosDeCuentasDeGastos />}
                        />
                        <Route
                            path="/ReportesDeGastos"
                            element={<ReportesDeGastos />}
                        />
                        <Route
                            path="/RecibosPorMotivo"
                            element={<RecibosPorMotivo />}
                        />
                        <Route
                            path="/DesgloseDeDinero"
                            element={<DesgloseDeDinero/>}
                        />
                        <Route
                            path="/ReporteDeVentas"
                            element={<ReporteDeVentas/>}
                        />
                        <Route
                            path="/ValesDePagosAnticipados"
                            element={<ValesDePagosAnticipados/>}
                        />
                        <Route
                            path="/DevolucionDeDinero"
                            element={<DevolucionDeDinero/>}
                        />
                        <Route
                            path="/PolizaCertificados"
                            element={<PolizaCertificados/>}
                        />

                        {/* Parte de Facturación */}

                        <Route
                            path="/CatalogoDeClientes"
                            element={<CatalogoDeClientes/>}
                        />

                        <Route
                            path="/FacturasGeneral"
                            element={<FacturasGeneral/>}
                        />

                        <Route
                            path="/NotasDeCredito"
                            element={<NotasDeCredito/>}
                        />

                        <Route
                            path="/CompraDeTimbres"
                            element={<CompraDeTimbres/>}
                        />

                    

                        

                        {/* Parte de Personal */}

                        <Route
                            path="/CatalogoDePersonal"
                            element={<CatalogoDePersonal/>}
                        />

                        <Route
                            path="/Asistencia"
                            element={<Asistencia/>}
                        />

                        <Route
                            path="/AsistenciaPorPeriodo"
                            element={<AsistenciaPorPeriodo/>}
                        />

                        {/* Parte de Auditoria */}

                        <Route
                            path="/InformeDeVentas"
                            element={<InformeDeVentas/>}
                        />

                        <Route
                            path="/InformeDeEntregas"
                            element={<InformeDeEntregas/>}
                        />

                        <Route
                            path="/ResumenDeIngreso"
                            element={<ResumenDeIngreso/>}
                        />

                        <Route
                            path="/ReporteDeImportePorFacturar"
                            element={<ReporteDeImportePorFacturar/>}
                        />

                        <Route
                            path="/ReporteDeCopiasPorFacturar"
                            element={<ReporteDeCopiasPorFacturar/>}
                        />

                        

                        <Route
                            path="/ReporteDeInventario"
                            element={<ReporteDeInventario/>}
                        />

                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
