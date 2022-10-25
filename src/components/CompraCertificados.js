import React from "react";
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
    { field: "col1", headerName: "Consecutivo", width: 100 },
    { field: "col2", headerName: "Folio Compra", width: 100 },
    { field: "col3", headerName: "Fecha Compra", width: 100 },
    { field: "col4", headerName: "Fecha", width: 100 },
    { field: "col5", headerName: "Tipo de Certificado", width: 100 },
    { field: "col6", headerName: "Folio inicial", width: 100 },
    { field: "col7", headerName: "Folio Final", width: 100 },
    { field: "col8", headerName: "Cantidad", width: 100 },
    { field: "col9", headerName: "Semestre", width: 100 },
    { field: "col10", headerName: "Remanente", width: 100 },
    { field: "col11", headerName: "Usuario", width: 300 },
];

function CompraCertificados() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Compras Certificados
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
                                        textoTitulo={"Tipo de Certificado"}
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
                                        textoTitulo={"Usuario"}
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
                                        textoTitulo={"Semestre de Certificado"}
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
                                        textoTitulo={"Mostrar"}
                                        arregloValores={[
                                            {
                                                nombre: "Todos",
                                                valor: 10,
                                            },
                                            {
                                                nombre: "Con Pendiente de Entrega",
                                                valor: 20,
                                            },
                                            {
                                                nombre: "Sin Pendiente de Entrega",
                                                valor: 30,
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
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Consecutivo"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Folio Compra"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <DatePicker
                                                            title={
                                                                "Fecha Compra"
                                                            }
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <DatePicker
                                                            title={"Fecha"}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Tipo de Certificado"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "todos",
                                                                    valor: 10,
                                                                },
                                                                {
                                                                    nombre: "VERIFICACIÓN",
                                                                    valor: 20,
                                                                },
                                                            ]}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Folio Inicial"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Folio Final"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Cantidad"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Semestre"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Remanente"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        

                                                        <MenuSelector
                                                            textoTitulo={
                                                                "Usuario"
                                                            }
                                                            arregloValores={[
                                                                {
                                                                    nombre: "root",
                                                                    valor: 10,
                                                                },
                                                            ]}
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

export default CompraCertificados;
