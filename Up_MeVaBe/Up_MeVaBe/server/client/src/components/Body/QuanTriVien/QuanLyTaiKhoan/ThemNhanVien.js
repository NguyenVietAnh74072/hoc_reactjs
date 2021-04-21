/** @format */

import React, { useState } from "react";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/MaHoa'
function ThemNhanVien({ThemNhanVienMoi}) {
  const [ten_nhan_vien, Setten_nhan_vien] = useState('')
  const [dia_chi, Setdia_chi] = useState('')
  const [dien_thoai, Setdien_thoai] = useState('')
  const [ghi_chu, Setghi_chu] = useState('')
  const [DuLieuNhanVien, SetDuLieuNhanVien] = React.useState({
    ten_nhan_vien: ten_nhan_vien,
    dia_chi: dia_chi,
    dien_thoai: dien_thoai,
    ghi_chu: ghi_chu,
    ngay_tao: "",
    nguoi_tao: "",
  });
  const [modal,SetModal] = React.useState('')
  const onClickThemNhanVien = async()=>{
    try {
      if(modal ==='modal'){
        SetModal('')
        Setten_nhan_vien('')
        Setdia_chi('')
        Setdien_thoai('')
        Setghi_chu('')
        alert('Thêm dữ liệu thành công!')
      }else{
        DuLieuNhanVien.ten_nhan_vien= ten_nhan_vien
        DuLieuNhanVien.dia_chi= dia_chi
        DuLieuNhanVien.dien_thoai= dien_thoai
        DuLieuNhanVien.ghi_chu= ghi_chu
        const data = new Date()
        var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
        DuLieuNhanVien.ngay_tao = ngay_gio_hien_tai
        DuLieuNhanVien.nguoi_tao = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
        SetModal('modal')
        const response = await fetch(host.ThemTenNhanVien,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body : JSON.stringify(DuLieuNhanVien)
        })
        console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
        ThemNhanVienMoi(await response.json())
      }
    } catch (error) {
      
    }
      
  }
  React.useEffect(()=>{
    SetDuLieuNhanVien({
      ten_nhan_vien: "",
      dia_chi: "",
      dien_thoai: "",
      ghi_chu: "",
      ngay_tao: "",
      nguoi_tao: "",
    })
  },[])
  return (
    <React.Fragment>
      <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-info'
          data-toggle='modal'
          data-target='#exampleModal'>
          Thêm nhân viên
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Thêm nhân viên
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                Tên nhân viên
                <input
                  className='form-control'
                  type='text'
                  value={ten_nhan_vien}
                  onChange={(e) =>Setten_nhan_vien(e.target.value)
                  }></input>
                Địa chỉ
                <input
                  className='form-control'
                  type='text'
                  value={dia_chi}
                  onChange={(e) =>Setdia_chi(e.target.value)}></input>
                Điện thoại
                <input
                  className='form-control'
                  type='text'
                  value={dien_thoai}
                  onChange={(e) =>Setdien_thoai(e.target.value)}
                ></input>
                Ghi chú
                <input
                  className='form-control'
                  type='text'
                  value={ghi_chu}
                  onChange={(e) =>Setghi_chu(e.target.value)}
                ></input>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss={modal}
                onClick={onClickThemNhanVien}>
                  {modal ==='modal' ? 'Thêm dữ liệu' : 'Lưu'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}




export default ThemNhanVien;
