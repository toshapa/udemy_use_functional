import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


const cont = document.getElementById('root')
const root = createRoot(cont)
root.render(<App/>)

