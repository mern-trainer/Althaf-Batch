import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Providers/CartProvider.jsx';

const root = createRoot(document.getElementById('root'))

root.render(<CartProvider><App /></CartProvider>)
