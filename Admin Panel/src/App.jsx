import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import { logIn, logOut } from "./services/Action/authAction";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Analytics from "./components/Analytics/Analytics";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import OrdersList from "./components/OrdersList/OrdersList";
import SalesList from "./components/SalesList/SalesList";
import Customers from "./components/Customers/Customers";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import SaleDetails from "./components/SaleDetails/SaleDetails";

function App() {

  const { isLogin } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('jiouser2'));
    if (user) {
      dispatch(logIn(user));
    } else {
      dispatch(logOut());
    }
  }, [dispatch]);

  return (
    <>
      {isLogin === true ?
        <>
          <Sidebar />
          <Header />
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products-list" element={<ProductsList />} />
            <Route path="/products-details" element={<ProductDetails />} />
            <Route path="/orders-list" element={<OrdersList />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/sales-list" element={<SalesList />} />
            <Route path="/sale-details" element={<SaleDetails />} />
            <Route path="/all-customers" element={<Customers />} />
          </Routes>
        </>
        :
        <>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </>}
    </>
  )
}

export default App
