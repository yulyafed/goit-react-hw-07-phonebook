import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);