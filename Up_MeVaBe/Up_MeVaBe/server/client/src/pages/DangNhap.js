/** @format */

import React from "react";

function DangNhap({ThucHienDangNhap}) {
  const [TaiKhoanNguoiDung,SetTaiKhoanNguoiDung] = React.useState({
      TaiKhoan :'',
      MatKhau : '',
  })
  const OnClickDangNhap = ()=>{
    ThucHienDangNhap(TaiKhoanNguoiDung)
  }
  return (
    <React.Fragment>
      <div className='sufee-login d-flex align-content-center flex-wrap mt-5'>
        <div className='container'>
          <div className='login-content'>
            <div className='login-logo'>
              <h1>Quản lý bán hàng</h1>
            </div>
            <div className='login-form'>
                <div className='form-group'>
                  <label>Tài khoản</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Xin vui lòng điền tài khoản'
                    onChange = {e=>TaiKhoanNguoiDung.TaiKhoan = e.target.value}
                    onKeyDown = {e=>{if(e.key=="Enter") OnClickDangNhap() }}
                  />
                </div>
                <div className='form-group'>
                  <label>Mật khẩu</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Xin vui lòng điền mật khẩu'
                    onChange = {e=>TaiKhoanNguoiDung.MatKhau = e.target.value}
                    onKeyDown = {e=>{if(e.key=="Enter") OnClickDangNhap()}}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-success btn-flat m-b-30 m-t-30'
                  onClick = {OnClickDangNhap}>
                  Đăng nhập
                </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DangNhap;