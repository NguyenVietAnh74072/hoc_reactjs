import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function SuaDonViTinh({DuLieuSua,DuLieuSuaMoi}) {
  const [ma_dvt,Setma_dvt] = React.useState(DuLieuSua.ma_dvt)
  const [ten_dvt,Setten_dvt] = React.useState(DuLieuSua.ten_dvt)
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const OnClickSuaDonViTinh = async()=>{
      try {
        alert('Sửa tài khoản thành công!')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.DonViTinh,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_dvt,ten_dvt,ghi_chu,nguoi_sua,ngay_sua})
            })
            DuLieuSuaMoi(await response.json())
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_dvt('')
            Setghi_chu('')
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_dvt(DuLieuSua.ma_dvt)
    Setten_dvt(DuLieuSua.ten_dvt)
    Setghi_chu(DuLieuSua.ghi_chu)
  },[DuLieuSua.ma_dvt,DuLieuSua.ten_dvt,DuLieuSua.ghi_chu])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuaDonViTinh${ma_dvt}`}
          style ={{width:'75px'}}>
          Sửa
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsuaDonViTinh${ma_dvt}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa loại đối tượng {ma_dvt} !
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
                Tên loại đối tượng
                <input
                  className='form-control'
                  type='text'
                  value={ten_dvt}
                  onChange={e=>Setten_dvt(e.target.value)}
                ></input>
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
                data-dismiss="modal" onClick={OnClickSuaDonViTinh}>
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
export default SuaDonViTinh
