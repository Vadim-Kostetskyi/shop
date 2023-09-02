import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { myPersistStore, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './components/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename="magazin">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={myPersistStore}>
          <App />
          </PersistGate>
      </Provider>
    </React.StrictMode>
   </BrowserRouter>
);

// reportWebVitals();
