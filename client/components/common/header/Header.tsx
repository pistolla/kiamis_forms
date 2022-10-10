import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import * as authService from '../../../services/authService';

const drawerWidth = 250;

const styles = (theme: any) => ({
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
    classes: any;
};

class Header extends Component<HeaderProps> {


    logOut(e: any) {
        e.preventDefault();
        (this.props as any).actions.logout();
    }

    render() {
        // @ts-expect-error TS(2339): Property 'navDrawerOpen' does not exist on type 'R... Remove this comment to see the full error message
        const {classes, navDrawerOpen, handleToggleDrawer} = this.props;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <AppBar className={classNames(classes.appBar, navDrawerOpen && classes.appBarShift)}>
                    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Toolbar>
                        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <IconButton aria-label="Menu" onClick={handleToggleDrawer}
                                    className={classNames(!navDrawerOpen && classes.menuButton, navDrawerOpen && classes.menuButtonShift)}>
                            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <MenuIcon />
                        </IconButton>
                        {/* @ts-expect-error TS(2769): No overload matches this call. */}
                        <Typography type="title" color="inherit" className={classes.flex}>

                        </Typography>
                        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

// @ts-expect-error TS(2345): Argument of type '(theme: any) => { appBar: { posi... Remove this comment to see the full error message
export default connect(null, mapDispatchToProps)(withStyles(styles)(Header))
