import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaTaiKhoan({DuLieuXoa,DuLieuXoaMoi}) {
  const [nguoi_dung_id,Setnguoi_dung_id] = React.useState(DuLieuXoa.nguoi_dung_id)
  const OnClickXoaTaiKhoan = async()=>{
      try {
            alert('Xoá tài khoản thành công!')
            console.log(DuLieuXoa.nguoi_dung_id)
            DuLieuXoaMoi(DuLieuXoa.nguoi_dung_id)
            const response = await fetch(host.XoaTaiKhoan,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({nguoi_dung_id})
            })
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setnguoi_dung_id(DuLieuXoa.nguoi_dung_id)
  },[DuLieuXoa.nguoi_dung_id])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoanguoidung${nguoi_dung_id}`}
          style ={{width:'75px'}}>
          Xoá {nguoi_dung_id}
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoanguoidung${nguoi_dung_id}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá tài khoản ID {nguoi_dung_id} !
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
                  Bạn muốn xoá ID {nguoi_dung_id} ?
              </div>
              
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-danger'
                data-dismiss="modal" onClick={OnClickXoaTaiKhoan}>
                  Xoá
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
export default XoaTaiKhoan
