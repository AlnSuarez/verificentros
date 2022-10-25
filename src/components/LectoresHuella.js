import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MenuEstatus from "./subcomponents/MenuEstatus";
import MenuSelector from "./subcomponents/MenuSelector";


const rows = [
    {
        id: 1,
        col1: "Fernando López Ramirez",
        col2: "24233423",
        col3: "ISD",
        col4: "activo",
    },
    {
        id: 2,
        col1: "Alan Suárez Santamaría",
        col2: "4234234234",
        col3: "ISD",
        col4: "activo",
    },
    {
        id: 3,
        col1: "Benjamín Gutierrez Padilla",
        col2: "gupabe",
        col3: "ISD",
        col4: "activo",
    },
    {
        id: 4,
        col1: "Isser Kaleb Antonio Vazquez",
        col2: "kebab",
        col3: "ISD",
        col4: "activo",
    },
];

const columns = [
    { field: "col1", headerName: "Serie", width: 300 },
    { field: "col2", headerName: "Plaza", width: 300 },
];

function LectoresHuella() {
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Lectores de Huella
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

                                    <TextField
                                        id="outlined-basic"
                                        label="Serie"
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    
                                    <MenuSelector
                                        textoTitulo={"Plaza"}
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

export default LectoresHuella;
