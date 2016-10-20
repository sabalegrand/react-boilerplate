import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';


$(document).foundation();

require('style!css!sass!./styles/app.scss');
ReactDOM.render(
  <p>
    Boilerplate 3 project
  </p>,
  document.getElementById('app')
);
