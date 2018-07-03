import React from 'react';
import Container from 'customization';
import Style from './style';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';

const App = props => {
    const { classes } = props;
    const history = e => {};

	return (
		<Container>
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar>
                    <IconButton onClick={history} color="inherit">
                        <HistoryIcon />
                    </IconButton>
					<Typography variant="title" color="inherit" noWrap className={classes.typography}>
						Clipped drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</Container>
	);
};

export default withStyles(Style)(App);