import React, { useState ,useRef} from 'react'
import QuanLyLuongNhanVienTheoThang from '../../components/Body/QuanTriVien/QuanLyLuongNhanVien/QuanLyLuongNhanVienTheoThang';
import host from '../../host/host';
const tbody_style = {height:'80em',overflow:'scroll'}
function QuanLyLuongNhanVien() {
    React.useEffect(async()=>{

    },[])
    return (
            <React.Fragment>
<div className="breadcrumbs">
  <div className="breadcrumbs-inner">
    <div className="row m-0">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Quản lý lương nhân viên</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Quản trị viên</a></li>
              <li><a href="#">Quản lý lương nhân viên</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

              <QuanLyLuongNhanVienTheoThang></QuanLyLuongNhanVienTheoThang>
      {/* <QuanLyLuongNhanVienTheoThang></QuanLyLuongNhanVienTheoThang> */}
        </React.Fragment>
    )
}

export default QuanLyLuongNhanVien
