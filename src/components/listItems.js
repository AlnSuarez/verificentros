import * as React from "react";
import SimpleAccordion from "./SimpleAccordion";
import ListItemButton from '@mui/material/ListItemButton';



export const mainListItems = (
    <React.Fragment>
        <ListItemButton disableRipple style={{marginLeft: 0}}>
            <SimpleAccordion/>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/* <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton> */}
    </React.Fragment>
);
