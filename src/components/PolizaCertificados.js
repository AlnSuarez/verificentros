import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DatePicker from "./subcomponents/DatePicker";




const rows = [
    {
        id: 1,
        col1: "232343242",
        col2: "Fernando López Ramirez",
    },
    {
        id: 2,
        col1: "232343242",
        col2: "Alan Suárez Santamaría",
    },
    {
        id: 3,
        col1: "232343242",
        col2: "Benjamín Gutierrez Padilla",
    },
    {
        id: 4,
        col1: "232343242",
        col2: "Isser Kaleb Antonio Vazquez",
    },
];

const columns = [
    { field: "col1", headerName: "Número", width: 300 },
    { field: "col2", headerName: "Nombre", width: 300 },
];

function PolizaCertificados() {
    
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Poliza Certificados
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
                                    <DatePicker title={"Fecha inicio"} />
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
                                {/* <Grid item xs={2}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleOpen}
                                    >
                                        Nuevo
                                    </Button>
                                </Grid> */}
                                {/* <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Title>Nuevo Local</Title>

                                        <TextField
                                            id="filled-basic"
                                            label="Nombre"
                                            variant="filled"
                                            style={{ width: "100%" }}
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
                                </Modal> */}
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

export default PolizaCertificados;
