import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LazyLoad from "./LazyLoad";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/footer/Footer";

import Cart from "./components/cart/Cart";
import Account from "./components/account/Account";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import Tours from "./pages/Tours";
import Services from "./pages/Services";
import Admin from "./pages/AdminPage/Admin";
import UsersManage from "./pages/AdminPage/components/UsersManage";
import Domestic from "./components/tours/Domestic";
import International from "./components/tours/International";
import DomesticManage from "./pages/AdminPage/components/DomesticManage";
import InternationalManage from "./pages/AdminPage/components/InternationalManage";
import BookingsManage from "./pages/AdminPage/components/BookingsManage";

const LazyHomePage = LazyLoad(() => import("./pages/HomePage"));
const LazyBlogs = LazyLoad(() => import("./pages/Blogs"));
const LazyTours = LazyLoad(() => import("./pages/Tours"));
const LazyServices = LazyLoad(() => import("./pages/Services"));

function App() {
  return (
    <>
      <Container>
        <NavBar />
      </Container>

      <Routes>
        {/* Lazy load the components  */}

        {/* <Route path="/" element={<LazyHomePage />} />
        <Route path="/blogs" element={<LazyBlogs />} />
        <Route path="/tours" element={<LazyTours />} />
        <Route path="/services" element={<LazyServices />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />

        {/* Admin pages */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UsersManage />} />
        <Route path="/admin/bookings" element={<BookingsManage />} />
        <Route path="/admin/domestic" element={<DomesticManage />} />
        <Route path="/admin/international" element={<InternationalManage />} />
        {/*  */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
