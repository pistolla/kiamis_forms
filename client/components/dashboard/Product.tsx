import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Wallpaper from '@material-ui/icons/Wallpaper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = () => createStyles({
  root: {
    paddingTop: 0,
  },
  subheader: {
    fontSize: 24,
    backgroundColor: cyan[600],
    color: '#FFFFFF',
  },
  actions: {
    justifyContent: 'flex-end',
  },
});

type ProductProps = {
    classes: any;
    data: any[];
};

const Product = (props: ProductProps) => {
  const { classes } = props;
  const products: any[] = props.data;

  return (
    <Card>
      <CardHeader title="Recent Products" />
      <Divider />
      <CardContent>
        <List>
          {products.map((item, i) => (
            <ListItem divider={i < products.length - 1} key={item.id}>
              <ListItemIcon>
                <Avatar>
                  <Wallpaper />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={item.text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Product);
