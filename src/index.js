import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Todo from './todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Todo />, 
document.getElementById('root')
);
registerServiceWorker();