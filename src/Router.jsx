import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import AuthBootstrap from './components/Auth/AuthBootstrap.jsx';
import { ROUTES } from './constants/routes.constants.js';
import About from './pages/About';
import CartPage from './pages/Cart/CartPage.jsx';
import Customer_Bar from './pages/Customer/Customer.jsx';
import DashboardCards from './pages/DashboardCards/DashboardCards.jsx';
import Home from './pages/Home/Home.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import Manager_bar from './pages/Manager/Manager.jsx';
import OrderProcess from './pages/OrderProcess/OrderProcess.jsx';
import AddProductPage from './pages/Product/AddProductPage.jsx';
import ProductPage from './pages/Product/ProductPage.jsx';
import ProductListPage from './pages/Products/ProductListPage.jsx';
import SignUpPage from './pages/SignUp/SignUpPage.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import PublicRoute from './routes/PublicRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthBootstrap />,
    children: [
      {
        path: '/',
        element: <App />,
        children: [
          { path: ROUTES.HOME, element: <Home /> },
          { path: ROUTES.ABOUT, element: <About /> },

          { path: ROUTES.PRODUCT_DETAILS, element: <ProductPage /> },
          { path: ROUTES.PRODUCTS, element: <ProductListPage /> },
          { path: ROUTES.MANAGER_PAGE, element: <Manager_bar /> },
          { path: ROUTES.CUSTOMER_PAGE, element: <Customer_Bar /> },
          { path: ROUTES.DASHBOARD_CARDS, element: <DashboardCards /> },

          { path: ROUTES.ORDER_PROCESS, element: <PrivateRoute><OrderProcess /> </PrivateRoute>},
          { path: ROUTES.CART, element: <PrivateRoute><CartPage /> </PrivateRoute>},
          { path: ROUTES.ADD_PRODUCT, element: <PrivateRoute><AddProductPage /></PrivateRoute> },

          { path: ROUTES.LOGIN, element: <PublicRoute><LoginPage /></PublicRoute> },
          { path: ROUTES.REGISTER, element: <PublicRoute><SignUpPage /></PublicRoute> },

        ],
      },
    ],
  },
]);

export { router };
