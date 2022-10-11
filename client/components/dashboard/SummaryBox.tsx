import { Card, CardContent, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { withStyles, createStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = () => createStyles({
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
    color?: any;
};

const SummaryBox = (props: SummaryBoxProps) => {
  const { classes, color, title, value, Icon } = props;

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <span className={classes.iconSpan} style={{ backgroundColor: color }}>
              <Icon className={classes.icon} />
            </span>

            <div className={classes.root}>
              <span className={classes.text}>{title}</span>
              <span className={classes.number}>{value}</span>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


export default withStyles(styles)(SummaryBox);
