import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const styles = () => ({
  root: {
    padding: '5px 10px',
    marginLeft: 90,
    height: 80,
  },
  number: {
    display: 'block',
    fontSize: 18,
    color: grey[800],
  },
  text: {
    fontSize: 20,
    color: grey[800],
  },
  iconSpan: {
    float: 'left',
    height: 90,
    width: 90,
    textAlign: 'center',
  },
  icon: {
    height: 48,
    width: 48,
    marginTop: 20,
    maxWidth: '100%',
  },
});

type SummaryBoxProps = {
    classes: any;
    Icon?: any;
    title?: string;
    value?: string;
};

const SummaryBox = (props: SummaryBoxProps) => {
  // @ts-expect-error TS(2339): Property 'color' does not exist on type 'SummaryBo... Remove this comment to see the full error message
  const { classes, color, title, value, Icon } = props;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <CardContent>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Grid container justify="space-between">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Grid item>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <span className={classes.iconSpan} style={{ backgroundColor: color }}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Icon className={classes.icon} />
            </span>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className={classes.root}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <span className={classes.text}>{title}</span>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <span className={classes.number}>{value}</span>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// @ts-expect-error TS(2345): Argument of type '() => { root: { padding: string;... Remove this comment to see the full error message
export default withStyles(styles)(SummaryBox);
