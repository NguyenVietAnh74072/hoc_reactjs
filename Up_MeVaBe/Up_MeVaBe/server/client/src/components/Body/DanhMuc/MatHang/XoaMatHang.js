import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaMatHang({DuLieuXoa,DuLieuXoaMoi}) {
  const [ma_hang,Setma_hang] = React.useState(DuLieuXoa.ma_hang)

  const OnClickXoaMatHang = async()=>{
      try {
        alert('Xoá loại đối tượng thành công!')
            const response = await fetch(host.MatHang,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_hang})
            })
            DuLieuXoaMoi(ma_hang)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_hang(DuLieuXoa.ma_hang)
  },[DuLieuXoa.ma_hang])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoaMatHang${ma_hang}`}
          style ={{width:'75px'}}>
          Xoá
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoaMatHang${ma_hang}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá ngành hàng ID {ma_hang} !
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
                data-dismiss="modal" onClick={OnClickXoaMatHang}>
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
export default XoaMatHang
