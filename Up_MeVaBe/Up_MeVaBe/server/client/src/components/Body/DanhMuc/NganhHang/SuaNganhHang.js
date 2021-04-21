import React,{useState} from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function SuaNganhHang({DuLieuSua,DuLieuSuaMoi,TrangThai}) {
  const [ma_nganh_hang,Setma_nganh_hang] = React.useState(DuLieuSua.ma_nganh_hang)
  const [ten_nganh_hang,Setten_nganh_hang] = React.useState(DuLieuSua.ten_nganh_hang)
  const [nganh_hang_id, setnganh_hang_id] = useState(DuLieuSua.nganh_hang_id)
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const [DSNganhHang,SetDSNganhHang] = React.useState([])
  const [trang_thai,Settrang_thai] = React.useState(DuLieuSua.trang_thai)
  const OnClickSuaNganhHang = async()=>{
      try {
        alert('Sửa tài khoản thành công!')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.NganhHang,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({trang_thai,nganh_hang_id,ma_nganh_hang,ten_nganh_hang,ghi_chu,ghi_chu,ten_nganh_hang,nguoi_sua,ngay_sua})
            })
            DuLieuSuaMoi(await response.json())
            TrangThai(trang_thai)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_nganh_hang('')
            Setghi_chu('')
            Setghi_chu('')
      } catch (error) {
        
      }
  }
  React.useEffect(async ()=>{
    try {
      Setma_nganh_hang(DuLieuSua.ma_nganh_hang)
      Setghi_chu(DuLieuSua.ghi_chu)
      Setten_nganh_hang(DuLieuSua.ten_nganh_hang)
      Setghi_chu(DuLieuSua.ghi_chu)
      setnganh_hang_id(DuLieuSua.nganh_hang_id)
      const response = await fetch(host.NganhHang)
      const JsonData = await response.json()
      SetDSNganhHang(JsonData)
      console.log(DSNganhHang)
    } catch (error) {
      
    }
  },[DuLieuSua.ma_nganh_hang,DuLieuSua.ghi_chu,DuLieuSua.ten_nganh_hang,DuLieuSua.ghi_chu,DuLieuSua.nganh_hang_id])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuaNganhHang${ma_nganh_hang}`}
          style ={{width:'75px'}}>
          Sửa
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsuaNganhHang${ma_nganh_hang}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa ngành hàng {ma_nganh_hang} !
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
                Tên ngành hàng
                <input
                  className='form-control'
                  type='text'
                  value={ten_nganh_hang}
                  onChange={e=>Setten_nganh_hang(e.target.value)}
                ></input>
                Ghi chú
                <input className="form-control" value={ghi_chu} onChange={e=>Setghi_chu(e.target.value)}></input>
                Trang thái
                <select className="form-control" onChange={e=>Settrang_thai(e.target.value)}>
                <option value="true" selected={DuLieuSua.trang_thai?'selected' :''}>Sử dụng</option>
                <option value="false" selected={!DuLieuSua.trang_thai?'selected' :''}>Không sử dụng</option>
              </select>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss="modal" onClick={OnClickSuaNganhHang}>
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
export default SuaNganhHang
