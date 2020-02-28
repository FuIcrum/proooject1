import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskPage from './components/taskPage'
import Navbar from './components/navbar'
//import Task from './components/taskElement'
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<TaskPage/>, document.getElementById('tasks'));
ReactDOM.render(<Navbar/>, document.getElementById('navbar'))

//ReactDOM.render(<Task/>, document.getElementById('task'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
