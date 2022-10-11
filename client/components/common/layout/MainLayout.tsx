import { withStyles, createStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import MiniDrawer from '../drawer/MiniDrawer';
import Footer from '../footer/Footer';
// Import custom components
import Header from '../header/Header';




const styles = (theme: any) => createStyles({
  root: {
    width: '100%',
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
  },

  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  content: {
    width: '100%',
    flexGrow: 1,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  }
});

type MainLayoutProps = {
    classes: any;
    children?: React.ReactElement;
};

const MainLayout = (props: MainLayoutProps) => {
  const { classes, children } = props;
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header title="KIAMIS FORMS" navDrawerOpen={open} handleToggleDrawer={handleToggle} />
        <MiniDrawer navDrawerOpen={open} />
        <main className={classes.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};


export default withStyles(styles)(MainLayout);
