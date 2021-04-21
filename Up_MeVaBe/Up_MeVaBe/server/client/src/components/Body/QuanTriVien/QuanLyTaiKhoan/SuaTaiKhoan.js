import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function SuaTaiKhoan({DuLieuSua,DuLieuSuaMoi}) {
  const [nguoi_dung_id,Setnguoi_dung_id] = React.useState(DuLieuSua.nguoi_dung_id)
  const [quyen,Setquyen] = React.useState(DuLieuSua.quyen)
  const [ten_dang_nhap,Setten_dang_nhap] = React.useState(DuLieuSua.ten_dang_nhap)
  const [mat_khau,Setmat_khau] = React.useState('123456')
  const [mat_khau_moi,Setmat_khau_moi] = React.useState('123456')
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const OnClickSuaTaiKhoan = async()=>{
      try {
          if(mat_khau !== mat_khau_moi){
            alert('Bạn nhập mật khẩu mới chưa trùng!')
            alert(mat_khau)
            alert(mat_khau_moi)
          }else{
            alert('Sửa tài khoản thành công!')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.SuaTaiKhoan,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({nguoi_dung_id,ten_dang_nhap,mat_khau,ghi_chu,quyen,nguoi_sua,ngay_sua})
            })
            DuLieuSuaMoi(await response.json())
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_dang_nhap('')
            Setmat_khau('123456')
            Setmat_khau_moi('123456')
            Setghi_chu('')
          }
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setnguoi_dung_id(DuLieuSua.nguoi_dung_id)
    Setten_dang_nhap(DuLieuSua.ten_dang_nhap)
    Setquyen(DuLieuSua.quyen)
    Setghi_chu(DuLieuSua.ghi_chu)
  },[DuLieuSua.nguoi_dung_id,DuLieuSua.ten_dang_nhap,DuLieuSua.quyen,DuLieuSua.ghi_chu])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuanguoidung${nguoi_dung_id}`}
          style ={{width:'75px'}}>
          Sửa {nguoi_dung_id}
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsuanguoidung${nguoi_dung_id}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa tài khoản ID {nguoi_dung_id} !
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
                Tên đăng nhập
                <input
                  className='form-control'
                  type='text'
                  value={ten_dang_nhap}
                  onChange={e=>Setten_dang_nhap(e.target.value)}></input>
                Mật khẩu mới
                <input
                  className='form-control'
                  type='password'
                  value={mat_khau}
                  onChange={e=>Setmat_khau(e.target.value)}
                  ></input>
                Nhập lại mật khẩu mới
                <input
                  className='form-control'
                  type='password'
                  value={mat_khau_moi}
                  onChange={e=>Setmat_khau_moi(e.target.value)}
                ></input>
                Quyền
                <select 
                  className='form-control'
                  value={quyen}
                  onChange={e=>Setquyen(e.target.value)}
                >
                  {PhanQuyen.map(x=>(<option value={x} selected={x===quyen}>{x}</option>))}
                </select>
                Ghi chú
                <input className="form-control" value={ghi_chu} onChange={e=>Setghi_chu(e.target.value)}></input>
              </div>
              
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss="modal" onClick={OnClickSuaTaiKhoan}>
                  Sửa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </React.Fragment>
    )
}
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
export default SuaTaiKhoan
