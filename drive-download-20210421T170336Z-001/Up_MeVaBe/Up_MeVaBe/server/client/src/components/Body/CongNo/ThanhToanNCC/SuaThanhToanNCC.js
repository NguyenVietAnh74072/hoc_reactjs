import React,{useState} from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function SuaPhieuChi({DuLieuSua,DuLieuSuaMoi,TrangThai}) {
  const [thanh_toan_id, Setthanh_toan_id] = useState(DuLieuSua.thanh_toan_id)
  const [ten_doi_tuong, setten_doi_tuong] = useState(DuLieuSua.ten_doi_tuong)
  const [ghi_chu, setghi_chu] = useState(DuLieuSua.ghi_chu)
  const [noi_dung, setnoi_dung] = useState(DuLieuSua.noi_dung)
  const [so_tien, setso_tien] = useState(DuLieuSua.so_tien)
  const [trang_thai, settrang_thai] = useState(DuLieuSua.trang_thai)
  const [dia_chi, setdia_chi] = useState(DuLieuSua.dia_chi)
  const [dien_thoai, setdien_thoai] = useState(DuLieuSua.dien_thoai)
  const [ma_so_thue, setma_so_thue] = useState(DuLieuSua.ma_so_thue)
  const [ngay_lap, setngay_lap] = useState(DuLieuSua.ngay)
  console.log(DuLieuSua)
  const OnClickSuaPhieuChi = async()=>{
      try {
        // alert('Sửa Thanh toán NCC thành công!')
        const data = new Date()
        var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
        var ngay_sua = ngay_gio_hien_tai
        var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
        var nhan_vien_id = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].nhan_vien_id
        var ngay = ngay_lap
        var loai = '1'
        var thoi_gian = data.toJSON().split('T')[1].split('.')[0]
            const response = await fetch(host.CongNo+`/1`,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({thoi_gian,thanh_toan_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,nguoi_sua,ngay_sua,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,loai})
            })
            DuLieuSuaMoi(await response.json())
            alert('Sửa Thanh toán NCC thành công!')
            // console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            setghi_chu('')
      } catch (error) {
        
      }
  }
  React.useEffect(async ()=>{
    try {
      setten_doi_tuong(DuLieuSua.ten_doi_tuong)
      setghi_chu(DuLieuSua.ghi_chu)
      Setthanh_toan_id(DuLieuSua.thanh_toan_id)
      setnoi_dung(DuLieuSua.noi_dung)
      setso_tien(DuLieuSua.so_tien)
      setdia_chi(DuLieuSua.dia_chi)

      setdien_thoai(DuLieuSua.dien_thoai)
      setma_so_thue(DuLieuSua.ma_so_thue)
      setngay_lap(DuLieuSua.ngay)
    } catch (error) {
      
    }
  },[DuLieuSua.ten_doi_tuong,DuLieuSua.ghi_chu,DuLieuSua.thanh_toan_id,DuLieuSua.ghi_chu,DuLieuSua.noi_dung,DuLieuSua.so_tien,
    DuLieuSua.dia_chi,DuLieuSua.dien_thoai,DuLieuSua.ma_so_thue,DuLieuSua.ngay_lap
  ])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuaPhieuChi${thanh_toan_id}`}
          style ={{width:'75px'}}>
          Sửa
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsuaPhieuChi${thanh_toan_id}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa Thanh toán NCC {thanh_toan_id} !
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
              <div className="row">
              <div className="col">
                Ngày lập
                <input className="form-control" type="date" value={ngay_lap.split('T')[0]} onChange={e=>{setngay_lap(e.target.value)}}></input>
              </div>
              <div className="col"> </div>
            </div>
            <div className="row">
                <div className="col">
                Người nộp tiền
                    <input className="form-control" type="text"
                    value={ten_doi_tuong}
                    onChange={e=>setten_doi_tuong(e.target.value)}
                    ></input>
                </div>
                <div className="col">
                Địa chỉ
                    <input className="form-control" type="text"
                    value={dia_chi}
                    onChange={e=>setdia_chi(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                Điện thoại
                    <input className="form-control" type="text"
                    value={dien_thoai}
                    onChange={e=>setdien_thoai(e.target.value)}
                    ></input>
                </div>
                <div className="col">
                Mã số Chiế
                    <input className="form-control" type="text"
                    value={ma_so_thue}
                    onChange={e=>setma_so_thue(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                Nội dung
                    <input className="form-control" type="text"
                    value={noi_dung}
                    onChange={e=>setnoi_dung(e.target.value)}
                    ></input>
                </div>
                <div className="col">
                Số tiền
                    <input className="form-control" type="text"
                    value={so_tien}
                    onChange={e=>setso_tien(e.target.value)}
                    ></input>
                </div>
            </div>  
            <div className="row">
                <div className="col">
                Ghi chú
                    <input className="form-control" type="text"
                    value={ghi_chu}
                    onChange={e=>setghi_chu(e.target.value)}
                    ></input>
                </div>
            </div>  
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss="modal" onClick={OnClickSuaPhieuChi}>
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
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý Chi chi','Quản lý thống kê','Quản lý công nợ']
export default SuaPhieuChi
