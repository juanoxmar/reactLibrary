import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import { BookDialog } from './bookDialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Book, bookShelf } from './bookDialog';

const NavBar = () => (
  <div>
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h4'>My Library</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export const App = () => (
  <div>
    <NavBar />
    <Book item={bookShelf} />
    <BookDialog item={bookShelf} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
