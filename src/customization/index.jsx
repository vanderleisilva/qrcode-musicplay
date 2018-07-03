import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
	}
});

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		position: 'relative',
		maxWidth: 1220,
		margin: 'auto',
		minHeight: '90vh'
	}
});

const StyleComp = props => <MuiThemeProvider {...props} theme={theme}>
	<div className={props.classes.root}>
		{props.children}
	</div>
</MuiThemeProvider>;

export default withStyles(styles)(StyleComp);