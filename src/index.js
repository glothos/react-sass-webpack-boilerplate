import React from 'react';
import { render } from 'react-dom';
import './styles/app.scss';
import Router from './router';


render(
  <Router />,
  document.getElementById('app'));
