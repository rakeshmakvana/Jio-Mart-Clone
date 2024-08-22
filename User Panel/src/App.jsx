import { Route, Routes } from "react-router-dom"
import AddsBottom from "./components/AddsBottom/AddsBottom"
import AddsTop from "./components/AddsTop/AddsTop"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import SignIn from "./components/SignIn/SignIn"
import Products from "./components/Products/Products"
import Groceries from "./components/Groceries/Groceries"
import Fruits from "./components/Fruits/Fruits"
import Kitchenneeds from "./components/Kitchenneeds/Kitchenneeds"
import Fashion from "./components/Fashion/Fashion"
import Electronics from "./components/Electronics/Electronics"
import Jewellery from "./components/Jewellery/Jewellery"
import Homeimprovement from "./components/Homeimprovement/Homeimprovement"
import Wellness from "./components/Wellness/Wellness"
import AllCategories from "./components/AllCategories/AllCategories"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Cart from "./components/Cart/Cart"

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<><AddsTop /><Products /><AddsBottom /></>} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/kitchen-needs" element={<Kitchenneeds />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/home-improvement" element={<Homeimprovement />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
