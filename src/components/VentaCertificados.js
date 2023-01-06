import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import Button from "@mui/material/Button";
import MenuEstatus from "./subcomponents/MenuEstatus";
import DatePicker from "./subcomponents/DatePicker";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import HorizontalStepper from "./subcomponents/HorizontalStepper";
import MenuSelector from "./subcomponents/MenuSelector";

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

const style900 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const rows = [
    {
        id: 1,
        col1: "ASKJELJD",
        col2: "14/09/2022",
        col3: "DSA456",
        col4: "VERIFICACIÓN",
        col5: "Con importe",
        col6: "$200",
        col7: "2",
        col8: "$400",
        col9: "2022",
        col10: "Contado",
        col11: "Benjamín Gutierrez Padilla",
        col12: "Alan Suárez Santamaría",
    },
];

const columns = [
    { field: "col1", headerName: "Ticket", width: 100 },
    { field: "col2", headerName: "Fecha", width: 100 },
    { field: "col3", headerName: "Placa", width: 100 },
    { field: "col4", headerName: "Tipo de Certificado", width: 100 },
    { field: "col5", headerName: "Tipo de Venta", width: 100 },
    { field: "col6", headerName: "Monto", width: 100 },
    { field: "col7", headerName: "Copias", width: 100 },
    { field: "col8", headerName: "Total", width: 100 },
    { field: "col9", headerName: "Año de Certificación", width: 100 },
    { field: "col10", headerName: "Tipo de Pago", width: 100 },
    { field: "col11", headerName: "Depositante", width: 100 },
    { field: "col12", headerName: "Usuario", width: 300 },
];

function VentaCertificados() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [windowWidth, detectWd] = React.useState(false);

    function saveSize(){
        detectWd(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', saveSize);
        return () => {
        window.removeEventListener('resize', saveSize);
        }
    },[])
    

    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Venta Certificados
                        </Typography>
                    </Grid>

                    {/* Bloque de Nombre */}
                    <Grid item xs={12} md={4}>
                        <Paper
                            sx={{
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                height: "fit-content",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <DatePicker title={"Fecha inicio"} />
                                </Grid>
                                <Grid item xs={6}>
                                    <DatePicker title={"Fecha fin"} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ticket"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Placa"
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Tipo de Certificado"}
                                        arregloValores={[
                                            { nombre: "todos", valor: 10 },
                                            {
                                                nombre: "VERIFICACIÓN",
                                                valor: 20,
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Usuario"}
                                        arregloValores={[
                                            { nombre: "root", valor: 10 },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Tipo de venta"}
                                        arregloValores={[
                                            {
                                                nombre: "Con importe",
                                                valor: 10,
                                            },
                                            { nombre: "Cortesía", valor: 20 },
                                            { nombre: "Intento", valor: 30 },
                                            { nombre: "Reposición", valor: 40 },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Tipo de pago"}
                                        arregloValores={[
                                            { nombre: "Contado", valor: 10 },
                                            { nombre: "Credito", valor: 20 },
                                            {
                                                nombre: "Pago anticipado",
                                                valor: 30,
                                            },
                                            {
                                                nombre: "Tarjeta de Credito",
                                                valor: 40,
                                            },
                                            {
                                                nombre: "Tarjeta de Debito",
                                                valor: 50,
                                            },
                                        ]}
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                mt={1}
                                sx={{ justifyContent: "start" }}
                            >
                                <Grid item xs={4} mr={3}>
                                    <Button variant="contained">Buscar</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleOpen}
                                    >
                                        Nuevo
                                    </Button>
                                </Grid>
                                {/* Horizontal Stepper inside a modal */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={windowWidth>=900?style:style900}>
                                        <HorizontalStepper
                                            stepsProps={[
                                                "Paso 1",
                                                "Paso 2",
                                                "Paso 3",
                                                "Paso 4",
                                            ]}
                                            componentsProps={[
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Placa"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Ticket"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <DatePicker
                                                            title={"Fecha Ticket"}
                                                        />
                                                    </Grid>

                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Placa Ticket"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Modelo"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "2023",
                                                                    valor: 10,
                                                                },
                                                                {
                                                                    nombre: "2022",
                                                                    valor: 20,
                                                                },
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="No. Técnico"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    
                                                    
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Nombre"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Linea"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "Linea 1",
                                                                    valor: 10,
                                                                },
                                                                {
                                                                    nombre: "Linea 2",
                                                                    valor: 20,
                                                                },
                                                                {
                                                                    nombre: "Linea 3",
                                                                    valor: 30,
                                                                },
                                                                {
                                                                    nombre: "Linea4",
                                                                    valor: 40,
                                                                },
                                                                
                                                            ]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Certificado"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Tipo de Certificado"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,
                                            ]}
                                        />
                                        {/* <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <DatePicker title={"Fecha"} />
                                            </Grid>

                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Ticket"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Placa"
                                                    variant="outlined"
                                                />
                                            </Grid>

                                            <Grid item xs={4}>
                                                <Typography>
                                                    Tipo de Certificado
                                                </Typography>
                                                <MenuEstatus
                                                    title={
                                                        "Tipo de Certificado"
                                                    }
                                                    listItems={[
                                                        "todos",
                                                        "VERIFICACIÓN",
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography>Usuario</Typography>
                                                <MenuEstatus
                                                    title={"Usuario"}
                                                    listItems={["root"]}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography>
                                                    Tipo de Venta
                                                </Typography>
                                                <MenuEstatus
                                                    title={"Tipo de venta"}
                                                    listItems={[
                                                        "Con importe",
                                                        "Cortesía",
                                                        "Intento",
                                                        "Reposición",
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography>
                                                    Tipo de pago
                                                </Typography>
                                                <MenuEstatus
                                                    title={"tipo de pago"}
                                                    listItems={[
                                                        "Contado",
                                                        "Credito",
                                                        "Pago anticipado",
                                                        "Tarjeta de Credito",
                                                        "Tarjeta de Debito",
                                                    ]}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Monto"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Copias"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Total"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Año de certificado"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Depositante"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Usuario"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            onClick={handleClose}
                                            style={{ marginTop: 10 }}
                                        >
                                            Agregar
                                        </Button> */}
                                    </Box>
                                </Modal>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* Recent Orders */}
                    <Grid item xs={12} md={8}>
                        <Paper
                            sx={{
                                p: 2,
                                pb: 10,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Orders rows={rows} columns={columns} />
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Copyright sx={{ pt: 4 }} /> */}
            </Container>
        </div>
    );
}

export default VentaCertificados;
