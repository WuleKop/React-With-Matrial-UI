import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";

const styles = {
  Paper: { padding: 20, marginLeft: 10, marginTop: 10, marginBottom: 10, height: 500, overflow: 'auto' }
};

export default ({ exercises, category, onSelect, 
    exercise: {
        id, 
        title = 'Welcome!', 
        description = 'Please select an exercise from the list on the left.'} }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => 
        !category || category === group ?
        <Fragment key={group}  >
          <Typography variant="h5" style={{textTransform: 'capitalize'}}>{group}</Typography>
          <List component="ul">
              {exercises.map(({id, title}) => 
              <ListItem  key ={id} button>
                  <ListItemText  primary={title} onClick = {() => onSelect(id)}/>
              </ListItem>)}
          </List>
          </Fragment>:null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
          <Typography variant="h3">
              {title}
          </Typography>
          <Typography variant="subtitle1" style={{marginTop: 20}}>
              {description}
          </Typography>
      </Paper>
    </Grid>
  </Grid>
);
