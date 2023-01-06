import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePicker from "./subcomponents/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import { Typography } from "@mui/material";



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

function ValesDePagosAnticipados() {
   

    // Selección de plaza
    const [plaza, setPlaza] = React.useState("");
    const handleChange = (event) => {
        setPlaza(event.target.value);
    };
    return (
        <div>
            <Container maxWidth="false" sx={{ mt: 6, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color="#1976d2" variant="h4">
                            Vales de Pagos Anticipados
                        </Typography>
                    </Grid>
                    {/* Bloque de Nombre */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                height: 500,
                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <DatePicker title={"Fecha inicio"} />
                                </Grid>
                                <Grid item xs={6}>
                                    <DatePicker title={"Fecha fin"} />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Folio"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Usuario"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Depositante
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={plaza}
                                            label="Selecciona una plaza"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>
                                                Todos
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                AGUA DE PUEBLA
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Mostrar
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={plaza}
                                            label="Selecciona una plaza"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>
                                                Todos
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Tipo de Vale
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={plaza}
                                            label="Selecciona una plaza"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>
                                                Todos
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Pago anticipado
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Cortesía
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Estatus
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={plaza}
                                            label="Selecciona una plaza"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>
                                                Todos
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Activos     
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Cancelados
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
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
                    <Grid item xs={12} md={6}>
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

export default ValesDePagosAnticipados;
