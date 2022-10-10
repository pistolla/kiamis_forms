import { Grid } from '@material-ui/core';
import { cyan, orange, pink, purple } from '@material-ui/core/colors';
import { AddShoppingCart, Assessment, Face, ThumbUp } from '@material-ui/icons';
import React from 'react';
import Product from './Product';
import SummaryBox from './SummaryBox';




const products = [
  { id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.' },
  { id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System' },
  { id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G ' },
  { id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop' },
];

const Dashboard = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h2 style={{ paddingBottom: '15px' }}>Dashboard</h2>

      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Grid container spacing={4} style={{ marginBottom: '15px' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SummaryBox Icon={AddShoppingCart} color={pink[600]} title="Total Profit" value="1500k" />
        </Grid>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SummaryBox Icon={ThumbUp} color={cyan[600]} title="Likes" value="4231" />
        </Grid>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SummaryBox Icon={Assessment} color={purple[600]} title="Sales" value="460" />
        </Grid>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SummaryBox Icon={Face} color={orange[600]} title="New Members" value="248" />
        </Grid>
      </Grid>

      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Grid container spacing={24} style={{ marginBottom: '15px' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Grid item xs>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Product data={products} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
