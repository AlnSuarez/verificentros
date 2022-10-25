import * as React from 'react';
import Title from "./Title";
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

export default function CatalogoTabla({rows, columns}) {
  
  
  return (
    <div style={{ height: 450, width: '100%' }}>
      <Title>Registros</Title>
      <DataGrid rows={rows} columns={columns} mb={3} localeText={esES.components.MuiDataGrid.defaultProps.localeText}  components={{ Toolbar: GridToolbar }} />
    </div>
  );
}