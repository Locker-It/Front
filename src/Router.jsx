import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import AuthBootstrap from './components/Auth/AuthBootstrap.jsx';
import { ROUTES } from './constants/routerPaths';
import About from './pages/About';
import CartPage from './pages/Cart/CartPage.jsx';
import Customer_Bar from './pages/Customer/Customer.jsx';
import DashboardCards from './pages/DashboardCards/DashboardCards.jsx';
import Home from './pages/Home/Home.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import Manager_bar from './pages/Manager/Manager.jsx';
import OrderProcess from './pages/OrderProcess/OrderProcess.jsx';
import ProductPage from './pages/Product/ProductPage.jsx';
import ProductListPage from './pages/Products/ProductListPage.jsx';
import SignUpPage from './pages/SignUp/SignUpPage.jsx';

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
          { path: ROUTES.ORDER_PROCESS, element: <OrderProcess /> },
          { path: ROUTES.PRODUCT_DETAILS, element: <ProductPage /> },
          { path: ROUTES.PRODUCTS, element: <ProductListPage /> },
          { path: ROUTES.MANAGER_PAGE, element: <Manager_bar /> },
          { path: ROUTES.CUSTOMER_PAGE, element: <Customer_Bar /> },
          { path: ROUTES.CART, element: <CartPage /> },
          { path: ROUTES.DASHBOARD_CARDS, element: <DashboardCards /> },
          { path: ROUTES.LOGIN, element: <LoginPage /> },
          { path: ROUTES.REGISTER, element: <SignUpPage /> },
        ],
      },
    ],
  },
]);

export { router };
