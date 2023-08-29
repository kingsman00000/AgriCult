import React from "react";
import { ReactDOM } from "react";
import Navbar from "./components/Navbar";
import Weather from "./pages/Weather";
import ContactUs from "./pages/ContactUs";
import Demo from "./components/demo";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Err from "./pages/Err";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FeedBack from "./pages/FeedBack";
import LogInS from "./components/seller/login";
import SignUpS from "./components/seller/signup";
import Expert from "./expert/expert";
import LogInB from "./components/buyer/login";
import SignUpB from "./components/buyer/signup";
import Guide from "./pages/Guide";
import Equipment from "./components/service/farmequipment";
import Product from "./components/productdetails/product";
// import Equipment from "./components/service/farmequipment";
import Census from "./components/guide/Census";
import Credit from "./components/guide/Credit";
import Cropsnsfm from "./components/guide/Cropsnsfm";
import Drought from "./components/guide/Drought";
import Investment from "./components/guide/Investment";
import Marketing from "./components/guide/Marketing";
import Noticeboard from "./components/Noticeboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="layout mt-16">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="productpage" element={<ProductPage />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="register" element={<Register />} />
            <Route path="register/seller" element={<SignUpS />} />
            <Route path="/register/buyer" element={<SignUpB />} />
            <Route path="login/seller" element={<LogInS />} />
            <Route path="login/buyer" element={<LogInB />} />
            <Route path="weather" element={<Weather />} />
            <Route path="feedback" element={<FeedBack />} />
            <Route path="notice" element={<Noticeboard />} />

            <Route path="guide" element={<Guide />} />
            <Route path="/guide/marketing" element={<Marketing />} />
            <Route path="/guide/census" element={<Census />} />
            <Route path="/guide/credit" element={<Credit />} />
            <Route path="/guide/cropsnsfm" element={<Cropsnsfm />} />
            <Route path="/guide/drought" element={<Drought />} />
            <Route path="/guide/investment" element={<Investment />} />
            <Route path="expert" element={<Expert />} />
            <Route path="services" element={<Equipment />} />
            {/* <Route path="notice" element={<NoticeBoard />} />  */}

            <Route path="*" element={<Err />} />

            {/* </Route> */}
          </Routes>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
