/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import hosting from "../../host/hosting";
import LogoMeVaBe from "../../assets/images/logo_luclac.png";

function Header({ onTab }) {
  // Giỏ hàng

  const [GioHang, SetGioHang] = React.useState([]);

  // Giỏ hàng
  const [DanhMuc, SetDanhMuc] = React.useState(
    window.localStorage.getItem("DanhMuc") === null
      ? []
      : JSON.parse(window.localStorage.getItem("DanhMuc"))
  );

  // const getData = async ()=>{
  //   const response = await fetch(hosting.LoaiHang+`/true`)
  //   const JsonData = await response.json()
  //   window.localStorage.setItem('DanhMuc',JSON.stringify(JsonData))
  //   SetDanhMuc(JsonData)
  // }
  const onClickTab = (e) => {
    onTab(e);
  };

  React.useEffect(() => {
    try {
      setTimeout(() => {}, 3000);
      SetDanhMuc(JSON.parse(window.localStorage.getItem("DanhMuc")));
      SetGioHang(
        window.localStorage.getItem("GioHang") === null
          ? []
          : JSON.parse(window.localStorage.getItem("GioHang"))
      );
      const giohang = JSON.parse(window.localStorage.getItem("GioHang"));
      let tong_tien = 0;

      giohang.map((x) => {
        tong_tien = tong_tien + parseInt(x.so_luong) * parseInt(x.gia_ban_le);
      });
      SetGioHang(giohang);
      window.localStorage.setItem("TongTien", tong_tien.toString());
    } catch (error) {}
  }, []);

  const XoaSanPhamGioHang = async (x) => {
    try {
      console.log(x);
      const GioHang =
        window.localStorage.getItem("GioHang") === null
          ? []
          : JSON.parse(window.localStorage.getItem("GioHang"));

      const DL = [];
      let check = false;
      GioHang.map((y) => {
        if (y.hang_id === x.hang_id) {
        } else {
          DL.push(y);
        }
      });

      window.localStorage.setItem("GioHang", JSON.stringify(DL));
      SetGioHang(DL);
      window.location.href = "./";
    } catch (error) {}
  };
  return (
    <React.Fragment>
      {/* Header Section Start */}
      <div className='header section'>
        {/* Header Top Start */}
        <div className='header-top bg-primary'>
          <div className='container'>
            <div className='row align-items-center'>
              {/* Header Top Message Start */}
              <div className='col-12'>
                <div className='header-top-msg-wrapper text-center'>
                  <p className='header-top-message text-center'>
                    Up to 50% off for <strong>Winter</strong> Collections{" "}
                    <a
                      href='shop.html'
                      className='btn btn-hover-dark btn-secondary'>
                      Shop Now
                    </a>
                  </p>
                  <div className='header-top-close-btn'>
                    <button className='top-close-btn'>
                      <i className='pe-7s-close' />
                    </button>
                  </div>
                </div>
              </div>
              {/* Header Top Message End */}
            </div>
          </div>
        </div>
        {/* Header Top End */}
        {/* Header Bottom Start */}
        <div className='header-bottom'>
          <div className='header-sticky'>
            <div className='container'>
              <div className='row align-items-center position-relative'>
                {/* Header Logo Start */}
                <div className='col-md-6 col-lg-3 col-xl-2 col-6'>
                  <div className='header-logo'>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={async () => onClickTab("Index")}>
                      <img src={LogoMeVaBe} alt='Site Logo' />
                    </a>
                  </div>
                </div>
                {/* Header Logo End */}
                {/* Header Menu Start */}
                <div className='col-lg-6 d-none d-lg-block'>
                  <div className='main-menu'>
                    <ul>
                      <li className='has-children'>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={async () => onClickTab("Index")}>
                          Trang chủ{" "}
                        </a>
                        {/* <ul className="sub-menu">
                    <li><a href="index.html">Home 1</a></li>
                    <li><a href="index-2.html">Home 2</a></li>
                    <li><a href="index-3.html">Home 3</a></li>
                  </ul> */}
                      </li>
                      <li className='has-children position-static'>
                        <a href='#'>
                          Danh mục sản phẩm <i className='fa fa-angle-down' />
                        </a>
                        <ul className='mega-menu row'>
                          <li className='col-3'>
                            <h4 className='mega-menu-title'>Danh mục</h4>
                            <ul className='mb-n2'>
                              {/* <li><a href="shop.html">Shop Grid</a></li> */}
                              {/* <li><a href="shop-left-sidebar.html">Left Sidebar</a></li> */}
                              <li>
                                {DanhMuc.map((x) => (
                                  <a
                                    onClick={async () => {
                                      onClickTab("Danh mục");
                                      alert(JSON.stringify(x));
                                      window.localStorage.setItem(
                                        "onClickDanhMuc",
                                        JSON.stringify(x)
                                      );
                                    }}
                                    style={{ cursor: "pointer" }}>
                                    {x.ten_loai_hang}
                                  </a>
                                ))}
                              </li>
                              {/* <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                        <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a></li>
                        <li><a href="shop-list-right-sidebar.html">List Right Sidebar</a></li> */}
                            </ul>
                          </li>
                          <li className='col-3'>
                            <h4 className='mega-menu-title'>Giỏ hàng</h4>
                            <ul className='mb-n2'>
                              <li>
                                <a href='single-product.html'>Xem giỏ hàng</a>
                              </li>
                            </ul>
                          </li>
                          <li className='col-3'>
                            <h4 className='mega-menu-title'>Thanh toán</h4>
                            <ul className='mb-n2'>
                              <li>
                                <a href='single-product-gallery-left.html'>
                                  Thanh toán hóa đơn giỏ hàng
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='col-3'>
                            <h4 className='mega-menu-title'>Tài khoản</h4>
                            <ul className='mb-n2'>
                              <li>
                                <a href='my-account.html'>Tài khoản của tôi</a>
                              </li>
                              <li>
                                <a
                                  style={{ cursor: "pointer" }}
                                  onClick={async () => {
                                    window.localStorage.setItem(
                                      "Tab",
                                      "Đăng nhập"
                                    );
                                    window.location.href = "./";
                                  }}>
                                  Đăng nhập | Đăng ký
                                </a>
                              </li>
                              <li>
                                <a
                                  style={{ cursor: "pointer" }}
                                  onClick={async () => {
                                    window.localStorage.setItem(
                                      "Tab",
                                      "Mục yêu thích"
                                    );
                                    window.location.href = "./";
                                  }}>
                                  Mục yêu thích
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={async () => onClickTab("Giới thiệu")}>
                          Giới thiệu
                        </a>
                        {/* <ul className="sub-menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="error-404.html">Error 404</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                  </ul> */}
                      </li>

                      {/* <li className='has-children'>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={async () => onClickTab("Sự kiện")}>
                          Sự kiện
                        </a>
                      </li> */}
                      {/* <li className="has-children">
                  <a href="#">Blog <i className="fa fa-angle-down" /></a>
                  <ul className="sub-menu">
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                    <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                  </ul>
                </li> */}
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={async () => onClickTab("Liên hệ")}>
                          Liên hệ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Header Menu End */}
                {/* Header Action Start */}
                <div className='col-md-6 col-lg-3 col-xl-4 col-6 justify-content-end'>
                  <div className='header-actions'>
                    <a
                      href='javascript:void(0)'
                      className='header-action-btn header-action-btn-search d-none d-lg-block'>
                      <i className='pe-7s-search' />
                    </a>
                    <div className='dropdown-user d-none d-lg-block'>
                      <a
                        href='javascript:void(0)'
                        className='header-action-btn'>
                        <i className='pe-7s-user' />
                      </a>
                      <ul className='dropdown-menu-user'>
                        <li>
                          <a
                            className='dropdown-item'
                            style={{ cursor: "pointer" }}
                            onClick={async () => {
                              window.localStorage.setItem("Tab", "Đăng nhập");
                              window.location.href = "./";
                            }}>
                            Đăng nhập
                          </a>
                        </li>
                        <li>
                          <a
                            className='dropdown-item'
                            style={{ cursor: "pointer" }}
                            onClick={async () => {
                              window.localStorage.setItem("Tab", "Đăng ký");
                              window.location.href = "./";
                            }}>
                            Đăng ký
                          </a>
                        </li>
                        {/* <li>
                          <a className='dropdown-item' href='#'>
                            Pound
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            Taka
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={async () => onTab("Mục yêu thích")}
                      className='header-action-btn header-action-btn-wishlist'>
                      <i className='pe-7s-like' />
                    </a>
                    <a
                      href='javascript:void(0)'
                      className='header-action-btn header-action-btn-cart'>
                      <i className='pe-7s-cart' />
                      <span className='header-action-num'>
                        {GioHang.length === null ? "0" : GioHang.length}
                      </span>
                    </a>
                    {/* Mobile Menu Hambarger Action Button Start */}
                    <a className='header-action-btn header-action-btn-menu d-lg-none d-md-block'>
                      <i className='fa fa-bars' />
                    </a>
                    {/* Mobile Menu Hambarger Action Button End */}
                  </div>
                </div>
                {/* Header Action End */}
              </div>
            </div>
          </div>
        </div>
        {/* Header Bottom End */}
        {/* Offcanvas Search Start */}
        <div className='offcanvas-search'>
          <div className='offcanvas-search-inner'>
            {/* Button Close Start */}
            <div className='offcanvas-btn-close'>
              <i className='pe-7s-close' />
            </div>
            {/* Button Close End */}
            {/* Offcanvas Search Form Start */}
            <form className='offcanvas-search-form' action='#'>
              <input
                type='text'
                placeholder='Tìm kiếm sản phẩm . .  .'
                className='offcanvas-search-input'
              />
            </form>
            {/* Offcanvas Search Form End */}
          </div>
        </div>
        {/* Offcanvas Search End */}
        {/* Cart Offcanvas Start */}
        <div className='cart-offcanvas-wrapper'>
          <div className='offcanvas-overlay' />
          {/* Cart Offcanvas Inner Start */}
          <div className='cart-offcanvas-inner'>
            {/* Button Close Start */}
            <div className='offcanvas-btn-close'>
              <i className='pe-7s-close' />
            </div>
            {/* Button Close End */}
            {/* Offcanvas Cart Content Start */}
            <div className='offcanvas-cart-content'>
              {/* Cart Product/Price Start */}
              {/* Single Cart Product Start */}
              {GioHang.map((x) => (
                <div className='cart-product-wrapper mb-4 pb-4 border-bottom'>
                  <div className='single-cart-product'>
                    <div className='cart-product-thumb'>
                      <a href='single-product.html'>
                        <img src={x.duong_link} alt='Cart Product' />
                      </a>
                    </div>
                    <div className='cart-product-content'>
                      <h3 className='title'>
                        <a href='single-product.html'>{x.ten_hang}</a>
                      </h3>

                      <div className='product-quty-price'>
                        <span className='cart-quantity'>
                          {x.so_luong}
                          <strong onClick={async () => XoaSanPhamGioHang(x)}>
                            {" "}
                            ×{" "}
                          </strong>
                        </span>
                        <span className='price'>
                          <span className='new'>
                            {x.gia_ban_le.toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='cart-product-remove'
                    style={{ float: "right", position: "relative" }}>
                    <a
                      onClick={async () => XoaSanPhamGioHang(x)}
                      style={{ cursor: "pointer" }}>
                      <i className='pe-7s-close' />
                    </a>
                  </div>
                </div>
              ))}
              {/* Cart Product/Price End */}
              {/* Cart Product Total Start */}
              <div className='cart-product-total mb-4 pb-4 border-bottom'>
                <span className='value'>Tổng tiền</span>
                <span className='price'>
                  {window.localStorage.getItem("TongTien") === null
                    ? "0 đ"
                    : parseInt(
                        window.localStorage.getItem("TongTien")
                      ).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                </span>
              </div>
              {/* Cart Product Total End */}
              {/* Cart Product Button Start */}
              <div className='cart-product-btn mt-4'>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={async () => onClickTab("Giỏ hàng")}
                  className='btn btn-light btn-hover-primary w-100'>
                  <i className='fa fa-shopping-cart' /> Xem giỏ hàng
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={async () => onClickTab("Thanh toán")}
                  className='btn btn-light btn-hover-primary w-100 mt-4'>
                  <i className='fa fa-share' /> Thanh toán
                </a>
              </div>
              {/* Cart Product Button End */}
            </div>
            {/* Offcanvas Cart Content End */}
          </div>
          {/* Cart Offcanvas Inner End */}
        </div>
        {/* Cart Offcanvas End */}
      </div>
      {/* Header Section End */}
    </React.Fragment>
  );
}

export default Header;
