import React from 'react';
import classNames from 'classnames';
import styles from './style';
import LeftMenu from 'components/history';
import {AppBar, Toolbar, Typography, IconButton, withStyles, InputAdornment, TextField} from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import SearchIcon from '@material-ui/icons/Search';

class PersistentDrawer extends React.Component {
	state = {
		open: false,
	};

	toggleDrawer = () => this.setState(prevState => ({ open: !prevState.open }));

	render() {
		const { classes } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.appFrame}>
				<AppBar className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							onClick={this.toggleDrawer}
							className={classNames(classes.menuButton, open && classes.hide)}>
							<HistoryIcon />
						</IconButton>
						<Typography variant="title" color="inherit" noWrap>
							QR Music Generator
			  			</Typography>
					</Toolbar>
				</AppBar>

				<LeftMenu open={open} onClose={this.toggleDrawer} />

				<div className={classNames(classes.content, { [classes.contentShift]: open })}>
					<div className={classes.drawerHeader} />
					<Typography component='div' className={classes.container}>
						<TextField
							placeholder="Type to search for album or artist"
							fullWidth={true}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start" children={<SearchIcon />} />
								)
							}} />
					</Typography>
				</div>

			</div>
		);
	}
}

export default withStyles(styles)(PersistentDrawer);
