import React from 'react'
import ThemTaiKhoan from '../../components/Body/QuanTriVien/QuanLyTaiKhoan/ThemTaiKhoan'
import DanhSachTaiKhoan from '../../components/Body/QuanTriVien/QuanLyTaiKhoan/DanhSachTaiKhoan'
import host from '../../host/host'
import fnc from '../../assets/js/function'
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
function QuanLyTaiKhoan() {
  const [DSTaiKhoan,SetDSTaiKhoan]= React.useState([])
  const _DuLieuTaiKhoanMoi = (e)=>{
    const newData = [...DSTaiKhoan]
    console.log(e)
    e.map(x=>newData.push({
      nguoi_dung_id:x.nguoi_dung_id,
      ten_dang_nhap:x.ten_dang_nhap,
      quyen:x.quyen,
      ten_nhan_vien:x.ten_nhan_vien,
      nguoi_tao:x.nguoi_tao,
      ghi_chu:x.ghi_chu,
      ngay_tao:fnc.ChuyenNgay(x.ngay_tao)
    }))
    SetDSTaiKhoan(newData)
  }
  const DuLieuSuaMoi = (e)=>{
    e[0].ngay_tao=fnc.ChuyenNgay(e[0].ngay_tao)
    console.log(e)
    const newData = [...DSTaiKhoan]
    const dataEdit = newData.findIndex(DT => DT.nguoi_dung_id === e.nguoi_dung_id)
      newData.splice(dataEdit,1,e[0])
      SetDSTaiKhoan(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    console.log(e)
    const newData = [...DSTaiKhoan]
    const index = newData.findIndex(DT => DT.nguoi_dung_id === e)
    console.log(index)
    newData.splice(index,1)
    SetDSTaiKhoan(newData)
  }
  React.useEffect(async ()=>{
      const response = await fetch(host.HienThiTaiKhoan)
      const JsonData = await response.json()
      console.log(JsonData)
      const Data = []
      JsonData.map(x=>Data.push(
        {
          nguoi_dung_id:x.nguoi_dung_id,
          ten_dang_nhap:x.ten_dang_nhap,
          quyen:x.quyen,
          ten_nhan_vien:x.ten_nhan_vien,
          nguoi_tao:x.nguoi_tao,
          ghi_chu:x.ghi_chu,
          ngay_tao:fnc.ChuyenNgay(x.ngay_tao)
        })
        )
      SetDSTaiKhoan(Data)
  },[])
    return (
        <React.Fragment>
<div className="breadcrumbs">
  <div className="breadcrumbs-inner">
    <div className="row m-0">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Quản lý tài khoản</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Quản trị viên</a></li>
              <li><a href="#">Quản lý tài khoản</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<ThemTaiKhoan DuLieuTaiKhoanMoi={_DuLieuTaiKhoanMoi} ></ThemTaiKhoan>
<DanhSachTaiKhoan DSTaiKhoan={DSTaiKhoan} _DuLieuSuaMoi={DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DanhSachTaiKhoan>
        </React.Fragment>
    )
}

export default QuanLyTaiKhoan
