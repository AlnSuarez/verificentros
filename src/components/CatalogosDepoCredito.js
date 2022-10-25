import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Title from "./Title";
import MenuEstatus from "./subcomponents/MenuEstatus";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
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

const rows = [
    {
        id: 1,
        col1: "22132445665",
        col2: "Fernando López Ramirez",
        col3: "ISD",
        col4: "activo",
    },
    {
        id: 2,
        col1: "22132445665",
        col2: "Alan Suárez Santamaría",
        col3: "ISD",
        col4: "activo",
    },
    {
        id: 3,
        col1: "22132445665",
        col2: "Benjamín Gutierrez Padilla",
        col3: "ISD",
        col4: "activo",
    },
    {
        id: 4,
        col1: "22132445665",
        col2: "Isser Kaleb Antonio Vazquez",
        col3: "ISD",
        col4: "activo",
    },
];

const columns = [
    { field: "col1", headerName: "Números", width: 300 },
    { field: "col2", headerName: "Nombres", width: 300 },
    { field: "col3", headerName: "Tipo", width: 300 },
    { field: "col4", headerName: "Estatus", width: 300 },
];

function CatalogosDepoCredito() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Catalogo Depositantes de crédito
                        </Typography>
                    </Grid>
                    {/* Bloque de Nombre */}
                    <Grid item xs={12} md={4}>
                        <Paper
                            sx={{
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                height: 200,
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Title>Nombre</Title>
                                    <TextField
                                        id="filled-basic"
                                        label="Nombre"
                                        variant="filled"
                                        style={{ width: "100%" }}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Title>Estatus</Title>
                                    <MenuSelector
                                        textoTitulo={"Estatus"}
                                        arregloValores={[
                                            { nombre: "activos", valor: 10 },
                                            { nombre: "inactivos", valor: 20 },
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
                            </Grid>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Title>Nuevo Depositante de Crédito</Title>

                                    <TextField
                                        id="filled-basic"
                                        label="Nombre"
                                        variant="filled"
                                        style={{ width: "100%" }}
                                    />
                                    <MenuSelector
                                        textoTitulo={"Estatus"}
                                        arregloValores={[
                                            { nombre: "activos", valor: 10 },
                                            { nombre: "inactivos", valor: 20 },
                                        ]}
                                    />
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleClose}
                                        style={{ marginTop: 10 }}
                                    >
                                        Agregar
                                    </Button>
                                </Box>
                            </Modal>
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

export default CatalogosDepoCredito;
