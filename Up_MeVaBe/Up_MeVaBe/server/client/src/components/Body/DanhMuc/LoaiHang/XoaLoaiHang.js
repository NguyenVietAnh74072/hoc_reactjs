import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaLoaiHang({DuLieuXoa,DuLieuXoaMoi}) {
  const [ma_loai_hang,Setma_loai_hang] = React.useState(DuLieuXoa.ma_loai_hang)

  const OnClickXoaLoaiHang = async()=>{
      try {
        alert('Xoá loại đối tượng thành công!')
            const response = await fetch(host.LoaiHang,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_loai_hang})
            })
            DuLieuXoaMoi(ma_loai_hang)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_loai_hang(DuLieuXoa.ma_loai_hang)
  },[DuLieuXoa.ma_loai_hang])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoaLoaiHang${ma_loai_hang}`}
          style ={{width:'75px'}}>
          Xoá
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoaLoaiHang${ma_loai_hang}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá loại hàng ID {ma_loai_hang} !
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
                data-dismiss="modal" onClick={OnClickXoaLoaiHang}>
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
export default XoaLoaiHang
