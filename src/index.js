import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.less';

import books from './data/store.json';
import { App } from './App';

ReactDOM.render(<App initialData={books} />, document.querySelector('#app'));