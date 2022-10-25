import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import Button from "@mui/material/Button";
import MenuEstatus from "./subcomponents/MenuEstatus";
import DatePicker from "./subcomponents/DatePicker";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import HorizontalStepper from "./subcomponents/HorizontalStepper";
import MenuSelector from "./subcomponents/MenuSelector";

const rows = [];

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

const columns = [
    { field: "col1", headerName: "Folio", width: 100 },
    { field: "col2", headerName: "Fecha", width: 100 },
    { field: "col3", headerName: "Tipo de Pago", width: 100 },
    { field: "col4", headerName: "Forma de Pago", width: 100 },
    { field: "col5", headerName: "Referencia", width: 100 },
    { field: "col6", headerName: "Cliente", width: 100 },
    { field: "col7", headerName: "Tipo de Verificación", width: 100 },
    { field: "col8", headerName: "Monto", width: 100 },
    { field: "col9", headerName: "Vales", width: 100 },
    { field: "col10", headerName: "Observaciones", width: 100 },
    { field: "col11", headerName: "Usuario", width: 300 },
];

function Pagos() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Pagos
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
                                    <MenuSelector
                                        textoTitulo={"Tipo de pago"}
                                        arregloValores={[
                                            {
                                                nombre: "Credito",
                                                valor: 10,
                                            },
                                            {
                                                nombre: "Pago anticipado",
                                                valor: 20,
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Depositante"}
                                        arregloValores={[
                                            {
                                                nombre: "",
                                                valor: 10,
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Tipo de Verificación"}
                                        arregloValores={[
                                            { nombre: "", valor: 10 },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Usuario"}
                                        arregloValores={[
                                            { nombre: "", valor: 10 },
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
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
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
                                                        <DatePicker
                                                            title={"Fecha"}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Folio"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Tipo de pago"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "Contado",
                                                                    valor: 10,
                                                                },
                                                                {
                                                                    nombre: "Credito",
                                                                    valor: 20,
                                                                },
                                                                {
                                                                    nombre: "Pago anticipado",
                                                                    valor: 30,
                                                                },
                                                                {
                                                                    nombre: "Tarjeta de Credito",
                                                                    valor: 40,
                                                                },
                                                            ]}
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>

                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Forma de pago"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "Contado",
                                                                    valor: 10,
                                                                },
                                                                {
                                                                    nombre: "Credito",
                                                                    valor: 20,
                                                                },
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

                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Referencia"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Cliente"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Tipo de Verificación"
                                                            variant="outlined"
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
                                                            label="Vales"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Observaciones"
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
                                                </Grid>,
                                            ]}
                                        />
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

export default Pagos;
