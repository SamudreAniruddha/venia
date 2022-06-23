import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.scss'
import './style/aem-grid-12.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from './state/store.state'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);
