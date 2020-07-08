import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReactDOM from 'react-dom';
import { App } from './index';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export let bookShelf = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    pages: 300,
    reads: true,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 600,
    reads: false,
  },
];

const initialValues = {
  title: '',
  author: '',
  pages: '',
  reads: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  pages: Yup.number().required('Required'),
  reads: Yup.boolean().required('Required'),
});

const styles = {
  fab: { position: 'absolute', bottom: 20, right: 20 },
  select: { width: 210 },
  number: { inputProps: { min: 1 } },
  paper: { width: 225, margin: 8, padding: 8, textAlign: 'center' },
};

const MyTextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
      margin='dense'
      fullWidth
    />
  );
};

export const BookDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    bookShelf.push(values);
    checkedItems();
    ReactDOM.render(<App />, document.getElementById('root'));
  };

  return (
    <div>
      <Fab
        color='primary'
        aria-label='add'
        onClick={handleClickOpen}
        style={styles.fab}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, isValid, dirty, touched }) => (
            <Form>
              <DialogContent>
                <h2>Submit a New Book to Library</h2>
                <MyTextField
                  label='Title'
                  name='title'
                  id='title'
                  type='text'
                />
                <MyTextField
                  label='Author'
                  name='author'
                  id='author'
                  type='text'
                />
                <Field
                  as={TextField}
                  label='Pages'
                  name='pages'
                  id='pages'
                  InputProps={styles.number}
                  type='number'
                  margin='dense'
                  fullWidth
                  error={touched.pages && Boolean(errors.pages)}
                  helperText={errors.pages && touched.pages ? errors.pages : ''}
                />
                <Field
                  as={TextField}
                  label='Have you read the book?'
                  name='reads'
                  id='reads'
                  style={styles.select}
                  select
                  margin='dense'
                  fullWidth
                >
                  <MenuItem value={true}>Read</MenuItem>
                  <MenuItem value={false}>Not Read</MenuItem>
                </Field>
              </DialogContent>
              <DialogActions>
                <Button color='primary' onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  color='primary'
                  type='submit'
                  disabled={!isValid || !dirty}
                  onClick={handleClose}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

let checkReadBooks = {};

const checkedItems = () => {
  let i = 0;
  bookShelf.map((book) => {
    checkReadBooks['check' + i] = book.reads;
    i++;
  });
};

export const Book = (items) => {
  checkedItems();
  const [state, setState] = React.useState(checkReadBooks);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
