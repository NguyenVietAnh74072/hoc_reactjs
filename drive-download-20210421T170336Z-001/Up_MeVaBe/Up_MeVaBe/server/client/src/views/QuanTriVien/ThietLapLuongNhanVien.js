import React, { useState ,useRef} from 'react'
import ThietLapLuongNhanVienTheoThang from '../../components/Body/QuanTriVien/QuanLyLuongNhanVien/ThietLapLuongNhanVienTheoThang';
import host from '../../host/host';
const tbody_style = {height:'80em',overflow:'scroll'}
function QuanLyLuongNhanVien() {
  const [DLLuongNhanVien,SetDLLuongNhanVien] = useState([])
    React.useEffect(async()=>{
          const response = await fetch(host.HienThiCaNhanVien)
          const JsonData = await response.json()
          SetDLLuongNhanVien(JsonData)
          console.log(JsonData)
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

              <ThietLapLuongNhanVienTheoThang DLLuongNhanVien={DLLuongNhanVien}></ThietLapLuongNhanVienTheoThang>

      {/* <ThietLapLuongNhanVienTheoThang></ThietLapLuongNhanVienTheoThang> */}
        </React.Fragment>
    )
}

export default QuanLyLuongNhanVien
