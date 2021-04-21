import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function XoaLoaiDoiTuong({DuLieuXoa,DuLieuXoaMoi}) {
  const [ma_loai_doi_tuong,Setma_loai_doi_tuong] = React.useState(DuLieuXoa.ma_loai_doi_tuong)

  const OnClickXoaLoaiDoiTuong = async()=>{
      try {
        alert('Xoá loại đối tượng thành công!')
            const response = await fetch(host.LoaiDoiTuong,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_loai_doi_tuong})
            })
            DuLieuXoaMoi(ma_loai_doi_tuong)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_loai_doi_tuong(DuLieuXoa.ma_loai_doi_tuong)
  },[DuLieuXoa.ma_loai_doi_tuong])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-danger'
          data-toggle='modal'
          data-target={`#idxoaloaidoituong${ma_loai_doi_tuong}`}
          style ={{width:'75px'}}>
          Xoá
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idxoaloaidoituong${ma_loai_doi_tuong}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Xoá loại đối tượng ID {ma_loai_doi_tuong} !
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
                data-dismiss="modal" onClick={OnClickXoaLoaiDoiTuong}>
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
export default XoaLoaiDoiTuong
