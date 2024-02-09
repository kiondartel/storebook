import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import BookView from "../pages/BookView";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:bookId" element={<BookView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
