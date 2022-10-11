import { createStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = () => createStyles({
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
    <div className={classes.legal}>
      <div className="copyright">© 2014 - 2022 <a href="https://github.com/pistolla">Josef kamau</a>
      </div>
    </div>
  );
};


export default withStyles(styles)(Footer);
