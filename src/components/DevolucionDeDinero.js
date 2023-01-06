import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./CatalogoTabla";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DatePicker from "./subcomponents/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import HorizontalStepper from "./subcomponents/HorizontalStepper";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import { Typography } from "@mui/material";

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

function DevolucionDeDinero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            Devolucion De Dinero
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Usuario
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
                                                Verificación
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Placa"
                                        variant="outlined"
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
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Monto Venta"
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
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Devolución"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}>
                                                        <TextField
                                                            id="outlined-basic"
                                                            label="Motivo"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>,

                                                <Grid
                                                    container
                                                    spacing={2}
                                                ></Grid>,
                                            ]}
                                        />
                                    </Box>
                                </Modal>
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

export default DevolucionDeDinero;
