import React from 'react'

const PhanQuyen =[]
const PhanQuyen_ =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']

function Navbar({Tab,_Tab}) {
    const [TabAction,SetTabAction] = React.useState('')
    const [TabMenu,SetTabMenu] = React.useState(_Tab)
    const DuLieuPhanQuyen = JSON.parse(window.localStorage.getItem('dulieunguoidung'))
    PhanQuyen.push(DuLieuPhanQuyen[0].quyen)
    // console.log(DuLieuPhanQuyen)
    try {
      if(DuLieuPhanQuyen[0].danh_sach_quyen.split('-').length >=0){
        // console.log(DuLieuPhanQuyen[0].danh_sach_quyen.split('-'))
        DuLieuPhanQuyen[0].danh_sach_quyen.split('-').map(x=>
          PhanQuyen.push(x)
        )
      }
    } catch (error) {
      
    }
    // console.log(PhanQuyen)
    const [ChucNang,SetChucNang] = React.useState({
        ThongKeTongQuan : false,
        QuanTriVien : false,
        DanhMuc : false,
        QuanLy : false,
        NhapXuatTonKho : false,
        ThuChi : false,
        CongNo : false,
        ThongKeBaoCao : false,
    })
    // ***********************************************************************************
    //#region Phân quyền người dùng
    const PhanQuyenChucNang = ()=>{
      if(PhanQuyen.indexOf('Nhân viên quản trị')>=0){
        SetChucNang({
          ThongKeTongQuan : true,
          QuanTriVien : true,
          DanhMuc : true,
          QuanLy : true,
          NhapXuatTonKho : true,
          ThuChi : true,
          CongNo : true,
          ThongKeBaoCao : true,
        })
      }
      else{
        SetChucNang({
          ThongKeTongQuan : PhanQuyen.indexOf('Nhân viên quản trị')>=0,
          QuanTriVien : PhanQuyen.indexOf('Quản trị viên')>=0,
          DanhMuc : PhanQuyen.indexOf('Quản lý danh mục')>=0,
          QuanLy : PhanQuyen.indexOf('Quản lý bán hàng')>=0,
          NhapXuatTonKho : PhanQuyen.indexOf('Nhân viên quản trị')>=0,
          ThuChi : PhanQuyen.indexOf('Quản lý thu chi')>=0,
          CongNo : PhanQuyen.indexOf('Quản lý công nợ')>=0,
          ThongKeBaoCao : PhanQuyen.indexOf('Quản lý thống kê')>=0,
        })
      }
    }
    //#endregion
    // ***********************************************************************************
    // console.log(PhanQuyen.indexOf('Quản trị viên')>=0)
    React.useEffect(()=>{
      SetTabMenu(_Tab)
      PhanQuyenChucNang()
    },[_Tab])
    return (
  <div>
   <aside id="left-panel" className="left-panel">
  <nav className="navbar navbar-expand-sm navbar-default">
    <div id="main-menu" className="main-menu collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className={TabAction ==='Thống kê tổng quan' ? 'active' :''} hidden={!ChucNang.ThongKeTongQuan}>
          <a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Thống kê tổng quan');SetTabAction('Thống kê tổng quan')}}><i className="menu-icon fa fa-laptop"/>Thống kê tổng quan</a>
        </li>
        <li className={ChucNang.QuanTriVien !=='Thống kê tổng quan' ? 'active' :''} hidden={!ChucNang.QuanTriVien}>
          <a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Check vào ra nhân viên');SetTabAction('Thống kê tổng quan')}}><i className="menu-icon fa fa-laptop"/>Check vào ra nhân viên</a>
        </li>
        <li className={'menu-item-has-children dropdown'}   hidden={!ChucNang.QuanTriVien}>
          <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}> <i className="menu-icon fa fa-cogs" />Quản trị viên</a>
          <ul className="sub-menu children dropdown-menu"> 
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{SetTabAction('Quản trị viên');Tab('Quản lý tài khoản')}}>Quản lý tài khoản</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{SetTabAction('Quản trị viên');Tab('Phân quyền người dùng')}}>Phân quyền người dùng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{SetTabAction('Quản trị viên');Tab('Quản lý lương nhân viên theo tháng')}}>Quản lý lương nhân viên theo tháng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{SetTabAction('Quản trị viên');Tab('Thiết lập lương nhân viên theo tháng')}}>Thiết lập lương nhân viên theo tháng</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children dropdown" hidden={!ChucNang.DanhMuc}>
          <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}> <i className="menu-icon fa fa-align-left" />Danh mục</a>
          <ul className="sub-menu children dropdown-menu"> 
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Loại đối tượng')}}>Loại đối tượng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Đối tượng')}}>Đối tượng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Đơn vị tính')}}>Đơn vị tính</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Loại hàng')}}>Loại hàng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Mặt hàng')}}>Mặt hàng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Ngành hàng')}}>Ngành hàng</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children dropdown" hidden={!ChucNang.QuanLy}>
          <a className="dropdown-toggle" data-toggle="dropdown"  aria-expanded="false"> <i className="menu-icon fa fa-list-alt" />Quản lý bán hàng</a>
          <ul className="sub-menu children dropdown-menu"> 
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Quản lý bán hàng máy pos')}}>Quản lý bán hàng máy pos</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Danh sách hoá đơn bán hàng')}}>Danh sách hoá đơn bán hàng</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Quản lý trả hàng KH')}}>Quản lý trả hàng KH</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Danh sách hoá đơn trả hàng KH')}}>Danh sách hoá đơn trả hàng KH</a></li>
            {/* <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Test bar code')}}>Test bar code</a></li>
            <li><i className="" /><a href="ui-buttons.html">Đối tượng</a></li>
            <li><i className="" /><a href="ui-buttons.html">Loại hàng</a></li>
            <li><i className="" /><a href="ui-buttons.html">Mặt hàng</a></li>
            <li><i className="" /><a href="ui-buttons.html">Ngành hàng</a></li> */}
          </ul>
        </li>
        <li className="menu-item-has-children dropdown" hidden={!ChucNang.NhapXuatTonKho}>
          <a  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-list-alt" />Nhập xuất</a>
          <ul className="sub-menu children dropdown-menu"> 
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Quản lý nhập hàng NCC')}}>Quản lý nhập hàng NCC</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Danh sách hoá đơn nhập')}}>Danh sách hoá đơn nhập</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Quản lý trả hàng NCC')}}>Quản lý trả hàng NCC</a></li>
            <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Danh sách hoá đơn trả hàng NCC')}}>Danh sách hoá đơn trả hàng NCC</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children dropdown" hidden={!ChucNang.ThuChi}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> <i className="menu-icon fa fa-xing-square" />Thu chi</a>
          <ul className="sub-menu children dropdown-menu"> 
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Phiếu thu')}}>Phiếu thu</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Phiếu chi')}}>Phiếu chi</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children dropdown" hidden={!ChucNang.CongNo}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> <i className="menu-icon fa fa-xing" />Công nợ</a>
          <ul className="sub-menu children dropdown-menu"> 
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Thanh toán NCC')}}>Thanh toán NCC</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Công nợ NCC')}}>Công nợ NCC</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Thanh toán KH')}}>Thanh toán KH</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Công nợ KH')}}>Công nợ KH</a></li>
          </ul>
        </li>
        <li className="menu-item-has-children dropdown" hidden={!ChucNang.ThongKeBaoCao}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> <i className="menu-icon fa fa-table" />Thống kê báo cáo</a>
          <ul className="sub-menu children dropdown-menu">
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Thông kê bán mặt hàng')}}>Thống kê bán mặt hàng</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Thông kê nhập mặt hàng')}}>Thống kê nhập mặt hàng</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Thống kê banking bán hàng')}}>Thống kê banking bán hàng</a></li>
          <li><i className="" /><a style={{cursor:'pointer'}} onClick={async ()=>{Tab('Chốt lương nhân viên')}}>Chốt lương nhân viên</a></li>
            {/* <li><i className="fa fa-table" /><a href="tables-data.html">Data Table</a></li> */}
          </ul>
        </li>
      </ul>
    </div>{/* /.navbar-collapse */}
  </nav>
</aside>

        </div>
    )
}

export default Navbar

// ***********************************************************************************