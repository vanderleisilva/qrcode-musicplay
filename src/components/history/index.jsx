import React from 'react';
import Style from './style';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const History = props => {
    const {classes} = props;
    const data = Array.from({length: 15}).map(() => ([
        <ListItem button>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
    ]));

    return (
        <Drawer variant="persistent" open={props.open} classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.onClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <List>{data}</List>
        </Drawer>
    );
};

export default withStyles(Style)(History);