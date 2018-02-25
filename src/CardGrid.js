import * as React from 'react';
import Grid from 'material-ui/Grid';

export const CardGrid = props => {
  return (
    <div>
      <Grid container>{props.children}</Grid>
    </div>
  );
};
