import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import classNames from 'classnames';
import React from 'react';

const drawerWidth = 250;

const styles = (theme: any) => createStyles({
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    width: 60,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
  },

  avatar: {
    margin: 10,
  },

  bigAvatar: {
    width: 60,
    height: 60,
  }
});

type MiniDrawerProps = {
    classes: any;
    navDrawerOpen?: boolean;
};

const MiniDrawer = (props: MiniDrawerProps) => {
  let { navDrawerOpen, classes } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
      }}
      open={navDrawerOpen}
    >
      <div className={classes.drawerHeader} />
      <Divider />

      <div className={classes.root}>
        <Avatar
          alt="User"
          src="/img/avatar5.png"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Typography component="p" className={classes.avatar}>
          John Doe
        </Typography>
        <Typography component="span" className={classes.avatar}>
          john.doe@example.com
        </Typography>
      </div>
      <div className="box" style={{ background: '#eee', padding: '8px 16px' }}>
        MAIN NAVIGATION
      </div>

      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalTaxiIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </Drawer>
  );
};


export default withStyles(styles)(MiniDrawer);
