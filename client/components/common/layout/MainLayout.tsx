import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Import custom components
// @ts-expect-error TS(6142): Module '../header/Header' was resolved to '/media/... Remove this comment to see the full error message
import Header from '../header/Header';
// @ts-expect-error TS(6142): Module '../drawer/MiniDrawer' was resolved to '/me... Remove this comment to see the full error message
import MiniDrawer from '../drawer/MiniDrawer';
// @ts-expect-error TS(6142): Module '../footer/Footer' was resolved to '/media/... Remove this comment to see the full error message
import Footer from '../footer/Footer';

const styles = (theme: any) => ({
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={classes.root}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={classes.appFrame}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header navDrawerOpen={open} handleToggleDrawer={handleToggle} />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MiniDrawer navDrawerOpen={open} />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <main className={classes.content}>{children}</main>
      </div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Footer />
    </div>
  );
};

// @ts-expect-error TS(2345): Argument of type '(theme: any) => { root: { width:... Remove this comment to see the full error message
export default withStyles(styles)(MainLayout);
