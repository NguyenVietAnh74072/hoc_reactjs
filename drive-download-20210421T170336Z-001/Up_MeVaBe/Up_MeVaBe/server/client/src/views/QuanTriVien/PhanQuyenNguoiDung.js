/** @format */

import React from "react";
import host from '../../host/host'
import mahoa from '../../assets/js/MaHoa'
const PhanQuyen = [
  "Nhân viên quản trị",
  "Quản trị viên",
  "Quản lý danh mục",
  "Quản lý bán hàng",
  "Quản lý thu chi",
  "Quản lý thống kê",
  "Quản lý công nợ",
];
function PhanQuyenNguoiDung() {
  const [onCheckNhanVienQuanTri, SetonCheckNhanVienQuanTri] = React.useState(
    false
  );
  const [onCheckQuanTriVien, SetonCheckQuanTriVien] = React.useState(false);
  const [onCheckQuanLyDanhMuc, SetonCheckQuanLyDanhMuc] = React.useState(false);
  const [onCheckQuanLyBanHang, SetonCheckQuanLyBanHang] = React.useState(false);
  const [onCheckQuanLyThuChi, SetonCheckQuanLyThuChi] = React.useState(false);
  const [onCheckQuanlyThongKe, SetonCheckQuanlyThongKe] = React.useState(false);
  const [onCheckQuanLyCongNo, SetonCheckQuanLyCongNo] = React.useState(false);
  const [DSPhanQuyen, SetDSPhanQuyen] = React.useState();
  const [nguoi_dung_id,Setnguoi_dung_id] = React.useState('');
  const [DuLieuNguoiDung,SetDuLieuNguoiDung] = React.useState([])
  const [quyen,Setquyen] = React.useState('Nhân viên quản trị')
  const onClickCaiDatPhanQuyen = async ()=>{
    try {
      if(nguoi_dung_id===''){
          alert('Bạn chưa chọn tài khoản !')
      }else{
        var PQ = ''
        if(onCheckNhanVienQuanTri){
          PQ += "Nhân viên quản trị"+"-"
        }
        if(onCheckQuanTriVien){
          PQ += "Quản trị viên"+"-"
        }
        if(onCheckQuanLyDanhMuc){
          PQ += "Quản lý danh mục"+"-"
        }
        if(onCheckQuanLyThuChi){
          PQ += "Quản lý thu chi"+"-"
        }
        if(onCheckQuanLyBanHang){
          PQ += "Quản lý bán hàng"+"-"
        }
        if(onCheckQuanLyThuChi){
          PQ += "Quản lý thu chi"+"-"
        }
        if(onCheckQuanlyThongKe){
          PQ += "Quản lý thống kê"+"-"
        }
        if(onCheckQuanLyCongNo){
          PQ += "Quản lý công nợ"+"-"
        }
        console.log(PQ.substring(0,PQ.length-1))
        PQ = PQ.substring(0,PQ.length-1)
        const response = await fetch(host.PhanQuyenNguoiDung,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify({nguoi_dung_id,quyen,PQ})
          })
        alert('Cài đặt thành công!')
        PQ=''
        window.location.href = './'
        console.log(mahoa.Encrypt_LOOP_3DES(response.json(),'abab',1))
        
      }
    } catch (error) {
      
    }
      
  }
  const TimKiem = (e)=>{
    SetDuLieuNguoiDung(JSON.parse(window.localStorage.getItem('PhanQuyenNguoiDung')))
    const newData = []
    if(e!==''){
      DuLieuNguoiDung.map(x=>{
        if(x.ten_dang_nhap.indexOf(e)>=0){
          newData.push(x)
        }
    })
    SetDuLieuNguoiDung(newData)
    }
    else{
      SetDuLieuNguoiDung(JSON.parse(window.localStorage.getItem('PhanQuyenNguoiDung')))
    }
  }
  const NhanChonTaiKhoan = (e)=>{
    SetDuLieuNguoiDung(JSON.parse(window.localStorage.getItem('PhanQuyenNguoiDung')))
    SetonCheckNhanVienQuanTri(false)
    SetonCheckQuanLyDanhMuc(false)
    SetonCheckQuanTriVien(false)
    SetonCheckQuanLyBanHang(false)
    SetonCheckQuanLyThuChi(false)
    SetonCheckQuanlyThongKe(false)
    SetonCheckQuanLyCongNo(false)
    DuLieuNguoiDung.map(x=>{
      if(x.nguoi_dung_id.toString()===e.toString()){
        Setnguoi_dung_id(x.nguoi_dung_id)
        Setquyen(x.quyen)
        x.danh_sach_quyen.split('-').map(x=>{
          if(x==="Nhân viên quản trị"){SetonCheckNhanVienQuanTri(true)}
          if(x==='Quản lý danh mục'){SetonCheckQuanLyDanhMuc(true)}
          if(x==="Quản trị viên"){SetonCheckQuanTriVien(true)}
          if(x==="Quản lý bán hàng"){SetonCheckQuanLyBanHang(true)}
          if(x==="Quản lý thu chi"){SetonCheckQuanLyThuChi(true)}
          if(x==="Quản lý thống kê"){SetonCheckQuanlyThongKe(true)}
          if(x==="Quản lý công nợ"){SetonCheckQuanLyCongNo(true)}
        })
      }
    })
  }
  React.useEffect(async ()=>{
      try {
          const response = await fetch(host.PhanQuyenNguoiDung)
          const JsonData = await response.json()
          SetDuLieuNguoiDung(JsonData)
          window.localStorage.setItem('PhanQuyenNguoiDung',JSON.stringify(JsonData))
      } catch (error) {
        
      }
  },[])
  return (
    <React.Fragment>
      <div className='breadcrumbs'>
        <div className='breadcrumbs-inner'>
          <div className='row m-0'>
            <div className='col-sm-4'>
              <div className='page-header float-left'>
                <div className='page-title'>
                  <h1>Phân quyền người dùng</h1>
                </div>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='page-header float-right'>
                <div className='page-title'>
                  <ol className='breadcrumb text-right'>
                    <li>
                      <a href='#'>Quản trị viên</a>
                    </li>
                    <li>
                      <a href='#'>Phân quyền người dùng</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='animated fadeIn'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'>Phân quyền</strong>
                </div>
                <div className='card-body'>
                  {/* Credit Card */}
                  <div className='row'>
                    <div className='col'>
                      Tìm kiếm để chọn tài khoản
                      <input className='form-control' onChange={e=>TimKiem(e.target.value)}></input>
                    </div>
                    <div className='col'>
                      Chọn tài khoản
                      <select className='form-control' onChange={e=>NhanChonTaiKhoan(e.target.value)}>
                          <option>{'   '}</option>
                          {DuLieuNguoiDung.map(x=>(<option value={x.nguoi_dung_id}>{x.ten_dang_nhap}</option>))}
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                        Quyền hạn chính
                        <select className='form-control' onChange={e=>Setquyen(e.target.value)}>
                          {PhanQuyen.map(x=>(<option value={x} selected={quyen===x}>{x}</option>))}
                      </select>
                    </div>
                  </div>
                  <div className='row mt-5'>
                    <div className='col' style={{ marginLeft: "3px" }}>
                      <h4>Quyền hạn tài khoản</h4>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <input
                        className='form-check-input ml-2'
                        type='checkbox'
                        checked={onCheckNhanVienQuanTri}
                        onChange={async ()=>SetonCheckNhanVienQuanTri(!onCheckNhanVienQuanTri)}
                        ></input>
                      <label
                        class='form-check-label ml-4' style={{cursor:'pointer'}}
                        for='inlineCheckbox2' onClick={async ()=>SetonCheckNhanVienQuanTri(!onCheckNhanVienQuanTri)}>
                        {"Nhân viên quản trị"}
                      </label>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <input
                        className='form-check-input ml-2'
                        type='checkbox'
                        checked={onCheckQuanTriVien}
                        onChange={async ()=>SetonCheckQuanTriVien(!onCheckQuanTriVien)}
                        ></input>
                      <label
                        class='form-check-label ml-4'
                        style={{cursor:'pointer'}}
                        onClick={async ()=>SetonCheckQuanTriVien(!onCheckQuanTriVien)}
                        for='inlineCheckbox2' >
                        {"Quản trị viên"}
                      </label>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <input
                        className='form-check-input ml-2'
                        type='checkbox'
                        checked={onCheckQuanLyDanhMuc}
                        onChange={async ()=>SetonCheckQuanLyDanhMuc(!onCheckQuanLyDanhMuc)}
                        ></input>
                      <label
                        class='form-check-label ml-4'
                        for='inlineCheckbox2'
                        style={{cursor:'pointer'}}
                        onClick={async ()=>SetonCheckQuanLyDanhMuc(!onCheckQuanLyDanhMuc)}
                        >
                        {"Quản lý danh mục"}
                      </label>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <input
                        className='form-check-input ml-2'
                        type='checkbox'
                        checked={onCheckQuanLyBanHang}
                        onChange={async ()=>SetonCheckQuanLyBanHang(!onCheckQuanLyBanHang)}
                        ></input>
                      <label
                        class='form-check-label ml-4'
                        for='inlineCheckbox2'
                        style={{cursor:'pointer'}}
                        onClick={async ()=>SetonCheckQuanLyBanHang(!onCheckQuanLyBanHang)}
                        >
                        {"Quản lý bán hàng"}
                      </label>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <input
                        className='form-check-input ml-2'
                        type='checkbox'
                        checked={onCheckQuanLyThuChi}
                        onChange={async ()=>SetonCheckQuanLyThuChi(!onCheckQuanLyThuChi)}
                        ></input>
                      <label
                        class='form-check-label ml-4'
                        for='inlineCheckbox2'
                        style={{cursor:'pointer'}}
                        onClick={async ()=>SetonCheckQuanLyThuChi(!onCheckQuanLyThuChi)}
                        >
                        {"Quản lý thu chi"}
                      </label>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <input
                        className='form-check-input ml-2'
                        type='checkbox'
                        checked={onCheckQuanLyCongNo}
                        onChange={async ()=>SetonCheckQuanLyCongNo(!onCheckQuanLyCongNo)}
                        ></input>
                      <label
                        class='form-check-label ml-4'
                        for='inlineCheckbox2'
                        style={{cursor:'pointer'}}
                        onClick={async ()=>SetonCheckQuanLyCongNo(!onCheckQuanLyCongNo)}
                        >
                        {"Quản lý công nợ"}
                      </label>
                    </div>
                  </div>
                  
                  <div className='row mt-2'>
                    <div className='col'>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input ml-2'
                          type='checkbox'
                          checked={onCheckQuanlyThongKe}
                          onChange={async ()=>SetonCheckQuanlyThongKe(!onCheckQuanlyThongKe)}
                          ></input>
                        <label class='form-check-label' for='inlineCheckbox2'
                        style={{cursor:'pointer'}}
                        onClick={async ()=>SetonCheckQuanlyThongKe(!onCheckQuanlyThongKe)}
                        >
                          {"Quản lý thống kê"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col ml-1'>
                      
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col ml-1'>
                    </div>
                    <div className='col ml-2'>
                        <button className="btn btn-primary" onClick={onClickCaiDatPhanQuyen}>Cài đặt phân quyền</button>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* .card */}
            </div>
            {/*/.col*/}
          </div>
        </div>
        {/* .animated */}
      </div>
      {/* .content */}
    </React.Fragment>
  );
}
export default PhanQuyenNguoiDung;
