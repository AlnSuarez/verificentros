import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import Button from "@mui/material/Button";
import DatePicker from "./subcomponents/DatePicker";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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
    { field: "col3", headerName: "Placa", width: 100 },
    { field: "col4", headerName: "Ticket", width: 100 },
    { field: "col5", headerName: "Fecha Ticket", width: 100 },
    { field: "col6", headerName: "Tipo de Certificado", width: 100 },
    { field: "col7", headerName: "Certificado", width: 100 },
    { field: "col8", headerName: "Año de Certificación", width: 100 },
    { field: "col9", headerName: "Modelo", width: 100 },
    { field: "col10", headerName: "Técnico", width: 100 },
    { field: "col11", headerName: "Línea", width: 100 },
    { field: "col12", headerName: "Usuario", width: 300 },
];

function Asistencia() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Asistencia
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
                                    <MenuSelector
                                        textoTitulo={"Plaza"}
                                        arregloValores={[
                                            {
                                                nombre: "Todos",
                                                valor: 10,
                                            },
                                            {
                                                nombre: "VERIFICACIÓN",
                                                valor: 20,
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="No. Personal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Nombre"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MenuSelector
                                        textoTitulo={"Puesto"}
                                        arregloValores={[
                                            {
                                                nombre: "Todos",
                                                valor: 10,
                                            },
                                            {
                                                nombre: "VERIFICACIÓN",
                                                valor: 20,
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
                                {/*  <Grid item xs={2}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleOpen}
                                    >
                                        Nueva Factura
                                    </Button>
                                </Grid> */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <HorizontalStepper
                                            stepsProps={["Paso 1", "Paso 2"]}
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
                                                            label="Folios"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Tipo de Pago"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "Todos",
                                                                    valor: 10,
                                                                },
                                                                {
                                                                    nombre: "VERIFICACIÓN",
                                                                    valor: 20,
                                                                },
                                                            ]}
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Folios"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Observaciones"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,
                                            ]}
                                        />
                                        {/* <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Folio"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <DatePicker title={"Fecha"} />
                                            </Grid>

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

                                            <Grid item xs={4}>
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
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Certificado"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Año de Certificado"
                                                    variant="outlined"
                                                />
                                            </Grid>

                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Modelo"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Técnico"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Línea"
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
                                        </Grid> */}
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

export default Asistencia;
