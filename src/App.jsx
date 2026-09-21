import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ArtisanHome from './pages/ArtisanHome';
import ArtisanProfile from './pages/ArtisanProfile';
import MyProducts from './pages/MyProducts';
import AddProduct from './pages/AddProduct';
import AIProcessing from './pages/AIProcessing';
import ProductDraft from './pages/ProductDraft';
import ReviewEditProduct from './pages/ReviewEditProduct';
import ProductPreview from './pages/ProductPreview';
import ProductSuccess from './pages/ProductSuccess';
import ProductManage from './pages/ProductManage';
import ArtisanOrders from './pages/ArtisanOrders';
import OrderDetails from './pages/OrderDetails';
import CustomerHome from './pages/CustomerHome';
import CustomerProduct from './pages/CustomerProduct';
import CustomerCart from './pages/CustomerCart';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerPayment from './pages/CustomerPayment';
import CustomerOrderConfirmation from './pages/CustomerOrderConfirmation';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import CustomerProfile from './pages/CustomerProfile';
import Notifications from './pages/Notifications';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          
          {/* Dynamic auth routes based on role */}
          <Route path="/:role/auth" element={<Login />} />
          <Route path="/:role/signup" element={<CreateAccount />} />
          
          {/* Dashboards */}
          <Route path="/artisan/home" element={<ArtisanHome />} />
          <Route path="/customer/home" element={<CustomerHome />} />
          
          {/* Shared Routes */}
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Artisan Pages */}
          <Route path="/artisan/profile" element={<ArtisanProfile />} />
          
          {/* Artisan Products Flow */}
          <Route path="/artisan/products" element={<MyProducts />} />
          <Route path="/artisan/products/manage/:id" element={<ProductManage />} />
          
          {/* Artisan AI Product Creation Flow */}
          <Route path="/artisan/products/add" element={<AddProduct />} />
          <Route path="/artisan/products/add/ai" element={<AIProcessing />} />
          <Route path="/artisan/products/add/draft" element={<ProductDraft />} />
          <Route path="/artisan/products/add/edit" element={<ReviewEditProduct />} />
          <Route path="/artisan/products/add/preview" element={<ProductPreview />} />
          <Route path="/artisan/products/add/success" element={<ProductSuccess />} />
          
          {/* Artisan Orders Flow */}
          <Route path="/artisan/orders" element={<ArtisanOrders />} />
          <Route path="/artisan/orders/:id" element={<OrderDetails />} />
          
          {/* Placeholders for other artisan routes */}
          <Route path="/artisan/products/add/manual" element={<div style={{ padding: '24px' }}><h2>Manual Add Placeholder</h2></div>} />
          
          {/* Customer Flow */}
          <Route path="/customer/product/:id" element={<CustomerProduct />} />
          <Route path="/customer/cart" element={<CustomerCart />} />
          <Route path="/customer/checkout" element={<CustomerCheckout />} />
          <Route path="/customer/payment" element={<CustomerPayment />} />
          <Route path="/customer/order-confirmation" element={<CustomerOrderConfirmation />} />
          <Route path="/customer/orders" element={<CustomerOrders />} />
          <Route path="/customer/orders/:id" element={<CustomerOrderDetails />} />
          <Route path="/customer/profile" element={<CustomerProfile />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
