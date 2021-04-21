import React, { useState } from 'react'
import './App.css';
import Login from './pages/DangNhap'
import Main from './pages/Main'
import host from './host/host'
//edit: removed ";" from last "}" because of javascript error

function App() {
  const [KiemTraDangNhap,SetKiemTraDangNhap]= useState(window.localStorage.getItem('dangnhap'))
  const ThucHienDangNhap = async (e)=>{
    try {
      const response = await fetch(host.TaiKhoanNguoiDung+`/${e.TaiKhoan}/${e.MatKhau}`)
      const JsonData = await response.json()
      SetKiemTraDangNhap(JsonData.length > 0)
      window.localStorage.setItem('dulieunguoidung',JSON.stringify(JsonData))
      window.localStorage.setItem('dangnhap',JsonData.length > 0 ? 'true' :'false')
      window.location.href = "./"
    } catch (error) {
      
    }
  }
  // console.log(KiemTraDangNhap)
  if(KiemTraDangNhap=='true')
  {
    return (
      <React.Fragment>
          <Main></Main>
      </React.Fragment>
    )
  }
  return (
      <React.Fragment>
          <Login ThucHienDangNhap={ThucHienDangNhap}></Login>
      </React.Fragment>

  );
}

// Vô hiệu quá nút F12
// document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
export default App;
