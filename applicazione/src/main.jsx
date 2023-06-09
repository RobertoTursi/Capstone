import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store/reducer'
import { AuthProvider } from './context/AuthProvider';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}><AuthProvider><PersistGate persistor={persistor}><App /></PersistGate></AuthProvider></Provider>
)
