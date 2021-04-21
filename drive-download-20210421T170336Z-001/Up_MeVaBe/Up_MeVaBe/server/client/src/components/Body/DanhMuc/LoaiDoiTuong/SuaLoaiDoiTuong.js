import React from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function SuaLoaiDoiTuong({DuLieuSua,DuLieuSuaMoi}) {
  const [ma_loai_doi_tuong,Setma_loai_doi_tuong] = React.useState(DuLieuSua.ma_loai_doi_tuong)
  const [ten_loai_doi_tuong,Setten_loai_doi_tuong] = React.useState(DuLieuSua.ten_loai_doi_tuong)
  const [tien_bao_cong_no,Settien_bao_cong_no] = React.useState(DuLieuSua.tien_bao_cong_no)
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const OnClickSuaLoaiDoiTuong = async()=>{
      try {
        alert('Sửa tài khoản thành công!')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.LoaiDoiTuong,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_loai_doi_tuong,ten_loai_doi_tuong,tien_bao_cong_no,ghi_chu,ten_loai_doi_tuong,nguoi_sua,ngay_sua})
            })
            DuLieuSuaMoi(await response.json())
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_loai_doi_tuong('')
            Settien_bao_cong_no('')
            Setghi_chu('')
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_loai_doi_tuong(DuLieuSua.ma_loai_doi_tuong)
    Settien_bao_cong_no(DuLieuSua.tien_bao_cong_no)
    Setten_loai_doi_tuong(DuLieuSua.ten_loai_doi_tuong)
    Setghi_chu(DuLieuSua.ghi_chu)
  },[DuLieuSua.ma_loai_doi_tuong,DuLieuSua.tien_bao_cong_no,DuLieuSua.ten_loai_doi_tuong,DuLieuSua.ghi_chu])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsualoaidoituong${ma_loai_doi_tuong}`}
          style ={{width:'75px'}}>
          Sửa
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsualoaidoituong${ma_loai_doi_tuong}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa loại đối tượng {ma_loai_doi_tuong} !
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
                  value={ten_loai_doi_tuong}
                  onChange={e=>Setten_loai_doi_tuong(e.target.value)}
                ></input>
                Tiền báo công nợ
                <input
                  className='form-control'
                  type='text'
                  value={tien_bao_cong_no}
                  onChange={e=>Settien_bao_cong_no(e.target.value)}
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
                data-dismiss="modal" onClick={OnClickSuaLoaiDoiTuong}>
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
export default SuaLoaiDoiTuong
