import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaDonViTinh({DuLieuXoa,DuLieuXoaMoi}) {
  const [ma_dvt,Setma_dvt] = React.useState(DuLieuXoa.ma_dvt)

  const OnClickXoaDonViTinh = async()=>{
      try {
        alert('Xoá loại đối tượng thành công!')
            const response = await fetch(host.DonViTinh,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_dvt})
            })
            DuLieuXoaMoi(ma_dvt)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_dvt(DuLieuXoa.ma_dvt)
  },[DuLieuXoa.ma_dvt])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoaDonViTinh${ma_dvt}`}
          style ={{width:'75px'}}>
          Xoá
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoaDonViTinh${ma_dvt}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá loại đối tượng ID {ma_dvt} !
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
                data-dismiss="modal" onClick={OnClickXoaDonViTinh}>
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
export default XoaDonViTinh
