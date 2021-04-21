/** @format */

import React from "react";
import _radomstring from "randomstring";
import hosting from "../../host/hosting";
function DangKy() {
  const [radomstring, Setradomstring] = React.useState(
    _radomstring.generate(8)
  );
  const [capcha, Setcapcha] = React.useState("");
  const [Email, SetEmail] = React.useState("");
  const [SDT, SetSDT] = React.useState("");
  const [DiaChi, SetDiaChi] = React.useState("");
  const [MatKhau, SetMatKhau] = React.useState("");
  const [XacNhanMatKhau, SetXacNhanMatKhau] = React.useState("");
  const [TaiKhoan, SetTaiKhoan] = React.useState("");
  const [TenVaTenDem, SetTenVaTenDem] = React.useState("");
  const [Ho, SetHo] = React.useState("");
  const onClickDangKyTaiKhoan = async () => {
    if (radomstring !== capcha) {
      alert("Xin vui lòng nhập lại đúng captcha!");
    } else if (MatKhau.length < 6 && XacNhanMatKhau.length < 6) {
      alert("Xin vui lòng nhập mật khẩu người dùng (độ dài 6-18)!");
    } else if (MatKhau !== XacNhanMatKhau) {
      alert("Xác nhận mật khẩu không khớp!");
    } else if (Email.indexOf("@gmail.com") <= 0) {
      alert("Người dùng nhập sai email!");
    } else {
      const response = await fetch(hosting.DangKyTaiKhoanLucLac, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TaiKhoan,
          TenVaTenDem,
          DiaChi,
          Ho,
          SDT,
          Email,
          MatKhau,
        }),
      });
      const thong_Bao = await response.json();
      alert(thong_Bao.message);
      window.localStorage.setItem("Tab", "Index");
      console.log("test");
      window.location.href = "./";
    }
  };
  return (
    <React.Fragment>
      <div>
        {/* Header Section Start */}
        <div className='header section'>
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
                  placeholder='Search Product...'
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
                <div className='cart-product-wrapper mb-4 pb-4 border-bottom'>
                  {/* Single Cart Product Start */}
                  <div className='single-cart-product'>
                    <div className='cart-product-thumb'>
                      <a href='single-product.html'>
                        <img
                          src='assets/images/products/small-product/1.jpg'
                          alt='Cart Product'
                        />
                      </a>
                    </div>
                    <div className='cart-product-content'>
                      <h3 className='title'>
                        <a href='single-product.html'>New badge product</a>
                      </h3>
                      <div className='product-quty-price'>
                        <span className='cart-quantity'>
                          3 <strong> × </strong>
                        </span>
                        <span className='price'>
                          <span className='new'>$70.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Single Cart Product End */}
                  {/* Product Remove Start */}
                  <div className='cart-product-remove'>
                    <a href='#'>
                      <i className='pe-7s-close' />
                    </a>
                  </div>
                  {/* Product Remove End */}
                </div>
                {/* Cart Product/Price End */}
                {/* Cart Product/Price Start */}
                <div className='cart-product-wrapper mb-4 pb-4 border-bottom'>
                  {/* Single Cart Product Start */}
                  <div className='single-cart-product'>
                    <div className='cart-product-thumb'>
                      <a href='single-product.html'>
                        <img
                          src='assets/images/products/small-product/2.jpg'
                          alt='Cart Product'
                        />
                      </a>
                    </div>
                    <div className='cart-product-content'>
                      <h3 className='title'>
                        <a href='single-product.html'>Soldout new product</a>
                      </h3>
                      <div className='product-quty-price'>
                        <span className='cart-quantity'>
                          4 <strong> × </strong>
                        </span>
                        <span className='price'>
                          <span className='new'>$80.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Single Cart Product End */}
                  {/* Product Remove Start */}
                  <div className='cart-product-remove'>
                    <a href='#'>
                      <i className='pe-7s-close' />
                    </a>
                  </div>
                  {/* Product Remove End */}
                </div>
                {/* Cart Product/Price End */}
                {/* Cart Product/Price Start */}
                <div className='cart-product-wrapper mb-4 pb-4 border-bottom'>
                  {/* Single Cart Product Start */}
                  <div className='single-cart-product'>
                    <div className='cart-product-thumb'>
                      <a href='single-product.html'>
                        <img
                          src='assets/images/products/small-product/1.jpg'
                          alt='Cart Product'
                        />
                      </a>
                    </div>
                    <div className='cart-product-content'>
                      <h3 className='title'>
                        <a href='single-product.html'>New badge product</a>
                      </h3>
                      <div className='product-quty-price'>
                        <span className='cart-quantity'>
                          2 <strong> × </strong>
                        </span>
                        <span className='price'>
                          <span className='new'>$50.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Single Cart Product End */}
                  {/* Product Remove Start */}
                  <div className='cart-product-remove'>
                    <a href='#'>
                      <i className='pe-7s-close' />
                    </a>
                  </div>
                  {/* Product Remove End */}
                </div>
                {/* Cart Product/Price End */}
                {/* Cart Product Total Start */}
                <div className='cart-product-total mb-4 pb-4 border-bottom'>
                  <span className='value'>Total</span>
                  <span className='price'>220$</span>
                </div>
                {/* Cart Product Total End */}
                {/* Cart Product Button Start */}
                <div className='cart-product-btn mt-4'>
                  <a
                    href='cart.html'
                    className='btn btn-light btn-hover-primary w-100'>
                    <i className='fa fa-shopping-cart' /> View cart
                  </a>
                  <a
                    href='checkout.html'
                    className='btn btn-light btn-hover-primary w-100 mt-4'>
                    <i className='fa fa-share' /> Checkout
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
        {/* Breadcrumb Section Start */}
        <div className='section'>
          {/* Breadcrumb Area Start */}
          <div className='breadcrumb-area bg-primary'>
            <div className='container'>
              <div className='breadcrumb-content'>
                <ul>
                  <li>
                    <a href='index.html'>
                      <i className='fa fa-home' />{" "}
                    </a>
                  </li>
                  <li className='active'> Đăng ký</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Breadcrumb Area End */}
        </div>
        {/* Breadcrumb Section End */}
        {/* Register Section Start */}
        <div className='section section-margin'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-8 m-auto'>
                {/* Register Wrapper Start */}
                <div className='register-wrapper'>
                  {/* Login Title & Content Start */}
                  <div className='section-content text-center mb-5'>
                    <h2 className='title mb-2'>Đăng ký</h2>
                    <p className='desc-content'>
                      Xin vui lòng điền mẫu thông tin bên dưới để đăng ký tài
                      khoản.
                    </p>
                  </div>
                  {/* Login Title & Content End */}
                  {/* Form Action Start */}
                  {/* Input First Name Start */}
                  Họ
                  <div className='single-input-item mb-3'>
                    <input
                      type='text'
                      placeholder='Họ'
                      onChange={async (e) => {
                        SetHo(e.target.value);
                      }}
                    />
                  </div>
                  {/* Input First Name End */}
                  {/* Input Last Name Start */}
                  Tên và tên đệm
                  <div className='single-input-item mb-3'>
                    <input
                      type='text'
                      placeholder='Tên và tên đệm'
                      onChange={async (e) => {
                        SetTenVaTenDem(e.target.value);
                      }}
                    />
                  </div>
                  {/* Input Last Name End */}
                  {/* Input Email Or Username Start */}
                  Tài khoản
                  <div className='single-input-item mb-3'>
                    <input
                      type='email'
                      placeholder='Tài khoản'
                      onChange={async (e) => {
                        SetTaiKhoan(e.target.value);
                      }}
                    />
                  </div>
                  {/* Input Email Or Username End */}
                  {/* Input Password Start */}
                  Mật khẩu
                  <div className='single-input-item mb-3'>
                    <input
                      type='password'
                      placeholder='Mật khẩu'
                      onChange={async (e) => {
                        SetMatKhau(e.target.value);
                      }}
                    />
                  </div>
                  Xác nhận mật khẩu
                  <div className='single-input-item mb-3'>
                    <input
                      type='password'
                      placeholder='Xác nhận mật khẩu'
                      onChange={async (e) => {
                        SetXacNhanMatKhau(e.target.value);
                      }}
                    />
                  </div>
                  Địa chỉ
                  <div className='single-input-item mb-3'>
                    <input
                      type='input'
                      placeholder='Địa chỉ'
                      onChange={async (e) => {
                        SetDiaChi(e.target.value);
                      }}
                    />
                  </div>
                  Số điện thoại
                  <div className='single-input-item mb-3'>
                    <input
                      type='input'
                      placeholder='Số điện thoại'
                      onChange={async (e) => {
                        SetSDT(e.target.value);
                      }}
                    />
                  </div>
                  Email
                  <div className='single-input-item mb-3'>
                    <input
                      type='input'
                      placeholder='Email'
                      onChange={async (e) => {
                        SetEmail(e.target.value);
                      }}
                    />
                  </div>
                  {/* Input Password End */}
                  {/* Checkbox & Subscribe Label Start */}
                  Nhập captcha
                  <div className='row mt-3'>
                    <div className='col'>
                      <div className='single-input-item mb-3'>
                        <input
                          type='input'
                          placeholder='Nhập đúng captcha bên phải'
                          onChange={async (e) => Setcapcha(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col mt-3'>
                      <div>{radomstring}</div>
                    </div>
                  </div>
                  <div className='single-input-item mb-3 mt-3'>
                    <div className='login-reg-form-meta d-flex align-items-center justify-content-between'>
                      <div className='remember-meta mb-3'>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='rememberMe-2'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='rememberMe-2'>
                            Nhận thông báo mới nhất từ trang web
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Checkbox & Subscribe Label End */}
                  {/* Register Button Start */}
                  <div className='single-input-item mb-3 mt-5'>
                    <button
                      className='btn btn btn-dark btn-hover-primary rounded-0'
                      onClick={async () => onClickDangKyTaiKhoan()}>
                      Đăng ký
                    </button>
                  </div>
                  {/* Register Button End */}
                  {/* Form Action End */}
                </div>
                {/* Register Wrapper End */}
              </div>
            </div>
          </div>
        </div>
        {/* Register Section End */}
      </div>
    </React.Fragment>
  );
}

export default DangKy;
