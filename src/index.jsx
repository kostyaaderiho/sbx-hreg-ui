import React from 'react';
import ReactDOM from 'react-dom';

import { store } from '~/redux/store';

import { App } from './App';

// const App = () => <div>Hi</div>;

ReactDOM.render(<App store={store} />, document.getElementById('root'));
