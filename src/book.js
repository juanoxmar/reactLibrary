import React from 'react';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  paper: { width: 225, margin: 8, padding: 8, textAlign: 'center' },
};

export const Book = (items) => {
  let checkReadBooks = {};

  const checkedItems = () => {
    let i = 0;
    items.item.map((book) => {
      checkReadBooks['check' + i] = book.reads;
      i++;
    });
  };

  checkedItems();
  const [state, setState] = React.useState(checkReadBooks);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  console.log(state);
  return (
    <div className='library'>
      {items.item.map((book, i) => (
        <Paper
          elevation={3}
          style={styles.paper}
          id={book.title}
          key={book.title}
        >
          <h1>{book.title}</h1>
          <h4>{book.author}</h4>
          <h4>{book.pages} Pages</h4>
          <Typography component='div'>
            <Grid component='label' container alignItems='center' spacing={1}>
              <Grid item>Not Read</Grid>
              <Grid item>
                <Switch
                  checked={state['check' + i]}
                  name={'check' + i}
                  color='primary'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>Have Read</Grid>
            </Grid>
          </Typography>
        </Paper>
      ))}
    </div>
  );
};
