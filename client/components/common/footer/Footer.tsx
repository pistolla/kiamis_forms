import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = () => ({
  legal: {
    backgroundColor: '#fff',
    position: 'static',
    bottom: 0,
    width: '97.6%',
    borderTop: '1px solid #eee',
    padding: '15px',
    overflow: 'hidden',
    textAlign: 'center',
  },
});

type FooterProps = {
    classes: any;
};
const Footer = (props: FooterProps) => {
  const { classes } = props;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={classes.legal}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="copyright">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        © 2016 - 2017 <a href="https://github.com/Bikranshu">Krishna Prasad Timilsina</a>
      </div>
    </div>
  );
};


export default withStyles(styles)(Footer);
