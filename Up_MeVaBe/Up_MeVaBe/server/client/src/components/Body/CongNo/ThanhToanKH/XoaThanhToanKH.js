import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaPhieuChi({DuLieuXoa,DuLieuXoaMoi}) {
  const [thanh_toan_id,Setthanh_toan_id] = React.useState(DuLieuXoa.thanh_toan_id)

  const OnClickXoaPhieuChi = async()=>{
      try {
        alert('Xoá phiếu Chi thành công!')
            const response = await fetch(host.CongNo,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({thanh_toan_id})
            })
            DuLieuXoaMoi(thanh_toan_id)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setthanh_toan_id(DuLieuXoa.thanh_toan_id)
  },[DuLieuXoa.thanh_toan_id])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoaPhieuChi${thanh_toan_id}`}
          style ={{width:'75px'}}>
          Xoá
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoaPhieuChi${thanh_toan_id}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá phiếu Chi ID {thanh_toan_id} !
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
                    Bạn muốn xoá dữ liệu ?
              </div>
              
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss="modal" onClick={OnClickXoaPhieuChi}>
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
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý Chi chi','Quản lý thống kê','Quản lý công nợ']
export default XoaPhieuChi
