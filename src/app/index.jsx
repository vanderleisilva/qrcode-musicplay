import React from 'react';
import classNames from 'classnames';
import styles from './style';
import LeftMenu from 'components/history';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HistoryIcon from '@material-ui/icons/History';

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
							Persistent drawer
			  			</Typography>
					</Toolbar>
				</AppBar>

				<LeftMenu open={open} onClose={this.toggleDrawer} />

				<div className={classNames(classes.content, { [classes.contentShift]: open })}>
					<div className={classes.drawerHeader} />
					<Typography className={classes.container}>{'You think water moves fast? You should see ice.'}</Typography>
				</div>

			</div>
		);
	}
}

export default withStyles(styles)(PersistentDrawer);
