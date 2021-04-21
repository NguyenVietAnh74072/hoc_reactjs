import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaPhieuThu({DuLieuXoa,DuLieuXoaMoi}) {
  const [thu_chi_id,Setthu_chi_id] = React.useState(DuLieuXoa.thu_chi_id)

  const OnClickXoaPhieuThu = async()=>{
      try {
        alert('Xoá phiếu thu thành công!')
            const response = await fetch(host.PhieuThuChi,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({thu_chi_id})
            })
            DuLieuXoaMoi(thu_chi_id)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setthu_chi_id(DuLieuXoa.thu_chi_id)
  },[DuLieuXoa.thu_chi_id])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoaPhieuThu${thu_chi_id}`}
          style ={{width:'75px'}}>
          Xoá
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoaPhieuThu${thu_chi_id}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá phiếu thu ID {thu_chi_id} !
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
                data-dismiss="modal" onClick={OnClickXoaPhieuThu}>
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
export default XoaPhieuThu
