/** @format */

import React from "react";
import hosting from "../../host/hosting";
import LichSuDatHang from "./DangNhap/LichSuDatHang";

function DangNhap() {
  const [TaiKhoan, SetTaiKhoan] = React.useState("");
  const [MatKhau, SetMatKhau] = React.useState("");
  const [KiemTraDangNhap, SetKiemTraDangNhap] = React.useState(false);
  const [DLDangNhapLucLac, SetDLDangNhapLucLac] = React.useState([]);
  const onClickDangNhap = async () => {
    const reponse = await fetch(hosting.DangNhapLucLac, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ TaiKhoan, MatKhau }),
    });
    const JsonData = await reponse.json();
    alert(JsonData.message);
    if (JsonData.status === 1) {
      window.localStorage.setItem("DangNhapLucLac", "true");
      window.localStorage.setItem(
        "DLDangNhapLucLac",
        JSON.stringify(JsonData.data)
      );
    } else {
      window.localStorage.setItem("DangNhapLucLac", "false");
    }
    console.log(TaiKhoan + " " + MatKhau);
    window.location.href = "./";
  };

  React.useEffect(() => {
    SetKiemTraDangNhap(
      window.localStorage.getItem("DangNhapLucLac") === "true"
    );
    SetDLDangNhapLucLac(
      JSON.parse(window.localStorage.getItem("DLDangNhapLucLac"))
    );
  }, []);
  console.log(DLDangNhapLucLac);
  const FormHienThiDangNhap = () => {
    try {
      if (KiemTraDangNhap) {
        return (
          <React.Fragment>
            <div className='section section-margin'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 col-md-8 m-auto'>
                    <div className='login-wrapper'>
                      <div className='section-content text-center mb-5'>
                        <h2 className='title mb-2'> Đăng nhập thành công</h2>
                        <p className='desc-content'>
                          {/* Xin vui lòng điền tài khoản có sẵn ở bên dưới. */}
                        </p>
                      </div>
                      <div className='single-input-item mb-3'>
                        <label>
                          Tài khoản người dùng :{" "}
                          {DLDangNhapLucLac.map((x) => x.tai_khoan_khach)}
                        </label>
                      </div>
                      <div className='single-input-item mb-3'>
                        <label>
                          Điểm hiện tại của người dùng :{" "}
                          {DLDangNhapLucLac.map((x) => x.tich_diem)}
                        </label>
                      </div>
                      <div className='single-input-item mb-3'>
                        <label>
                          Email của người dùng :{" "}
                          {DLDangNhapLucLac.map((x) => x.email)}
                        </label>
                      </div>

                      <div className='single-input-item mb-3'>
                        <button
                          className='btn btn btn-dark btn-hover-primary rounded-0'
                          onClick={async () => {
                            window.localStorage.setItem(
                              "DangNhapLucLac",
                              "false"
                            );
                            window.location.href = "./";
                          }}>
                          Thoát
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <LichSuDatHang></LichSuDatHang>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className='section section-margin'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 col-md-8 m-auto'>
                    <div className='login-wrapper'>
                      <div className='section-content text-center mb-5'>
                        <h2 className='title mb-2'> Đăng nhập khách hàng</h2>
                        <p className='desc-content'>
                          Xin vui lòng điền tài khoản có sẵn ở bên dưới.
                        </p>
                      </div>
                      <div className='single-input-item mb-3'>
                        <input
                          type='email'
                          placeholder='Tài khoản'
                          onChange={async (e) => {
                            SetTaiKhoan(e.target.value);
                          }}
                        />
                      </div>
                      <div className='single-input-item mb-3'>
                        <input
                          type='password'
                          placeholder='Mật khẩu'
                          onChange={async (e) => {
                            SetMatKhau(e.target.value);
                          }}
                        />
                      </div>

                      <div className='single-input-item mb-3'>
                        <div className='login-reg-form-meta d-flex align-items-center justify-content-between'>
                          <div className='remember-meta mb-3'>
                            <div className='custom-control custom-checkbox'>
                              <input
                                type='checkbox'
                                className='custom-control-input'
                                id='rememberMe'
                              />
                              <label
                                className='custom-control-label'
                                htmlFor='rememberMe'>
                                Nhớ mật khẩu của tôi ?
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='single-input-item mb-3'>
                        <button
                          className='btn btn btn-dark btn-hover-primary rounded-0'
                          onClick={async () => onClickDangNhap()}>
                          Đăng nhập
                        </button>
                      </div>

                      <div className='lost-password'>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={async () => {
                            window.localStorage.setItem("Tab", "Đăng ký");
                            window.location.href = "./";
                          }}>
                          Tạo tài khoản mới
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
    } catch (error) {}
  };
  return (
    <React.Fragment>
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
                <li className='active'> Đăng nhập</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Breadcrumb Area End */}
      </div>
      {/* Breadcrumb Section End */}

      {FormHienThiDangNhap()}
    </React.Fragment>
  );
}

export default DangNhap;
