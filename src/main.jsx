import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Providers/CartProvider.jsx';
import { TodoProvider } from './Providers/TodoProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <CartProvider>
            <TodoProvider>
                <App />
                <Toaster position='top-right' />
            </TodoProvider>
        </CartProvider>
    </Provider>
)
