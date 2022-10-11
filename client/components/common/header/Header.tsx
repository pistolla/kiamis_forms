import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authService from '../../../services/authService';


const drawerWidth = 250;

const styles = (theme: any) => createStyles({
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {
        marginLeft: 45
    },

    menuButtonShift: {
        marginLeft: -15
    },

    flex: {
        flex: 1
    }
});

type HeaderProps = {
    title: string;
    classes: any;
    navDrawerOpen?: any;
    handleToggleDrawer?: any;
};

class Header extends Component<HeaderProps> {


    logOut(e: any) {
        e.preventDefault();
        (this.props as any).actions.logout();
    }

    render() {
        const {title, classes, navDrawerOpen, handleToggleDrawer} = this.props;

        return (
            <div>
                <AppBar className={classNames(classes.appBar, navDrawerOpen && classes.appBarShift)}>
                    <Toolbar>
                        <IconButton aria-label="Menu" onClick={handleToggleDrawer}
                                    className={classNames(!navDrawerOpen && classes.menuButton, navDrawerOpen && classes.menuButtonShift)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            {{title}}
                        </Typography>
                        <Button onClick={this.logOut.bind(this)}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});


export default connect(null, mapDispatchToProps)(withStyles(styles)(Header))
