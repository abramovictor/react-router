import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.less';

import books from './data/books';
import topics from './data/topics';

import { App } from './App';

ReactDOM.render(<App topics={topics} books={books} />, document.querySelector('#app'));