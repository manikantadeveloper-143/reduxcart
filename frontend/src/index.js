import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import App from './App';
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { Store } from './features/Store';
// import productsReducer,{productsFetch} from './features/ProductSlice'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Provider store={Store}>
        <App/>
      </Provider>
  
  </React.StrictMode>
);

