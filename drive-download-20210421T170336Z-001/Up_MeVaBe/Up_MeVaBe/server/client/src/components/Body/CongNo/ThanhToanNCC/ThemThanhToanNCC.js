import React ,{useState}from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/MaHoa'

function ThemThanhToanNCC({DuLieuThanhToanNCCMoi,NgayLap}) {
    const [ten_doi_tuong, setten_doi_tuong] = useState('')
    const [ghi_chu, setghi_chu] = useState('')
    const [noi_dung, setnoi_dung] = useState('')
    const [so_tien, setso_tien] = useState('')
    const [trang_thai, settrang_thai] = useState('')
    const [dia_chi, setdia_chi] = useState('')
    const [dien_thoai, setdien_thoai] = useState('')
    const [ma_so_thue, setma_so_thue] = useState('')
    const [ngay_lap, setngay_lap] = useState('')
    const [DSThanhToanNCC,SetDSThanhToanNCC] = useState([])
    const onClickThemThanhToanNCC = async()=>{
        try {
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_tao = ngay_gio_hien_tai
            var nguoi_tao = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            var nhan_vien_id = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].nhan_vien_id
            var ngay = ngay_lap
            var loai = '1'
            var thoi_gian = data.toJSON().split('T')[1].split('.')[0]
            const response = await fetch(host.CongNo+`/1`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify({thoi_gian,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,ngay_tao,nguoi_tao,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,loai})
            })
            console.log(fnc.Encrypt_LOOP_3DES(response,'key',1))
            alert('Thêm thành công!')
            setten_doi_tuong('')
            setghi_chu('')
            DuLieuThanhToanNCCMoi(await response.json())
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
      try {
        const response = await fetch(host.ThanhToanNCC)
        const JsonData = await response.json()
        SetDSThanhToanNCC(JsonData)
        console.log(DSThanhToanNCC)
      } catch (error) {
        
      }
    },[])
    return (
        <React.Fragment>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Thanh toán NCC</strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
            <div className="row">
              <div className="col"> 
                <input className="form-control" type="date" onChange={e=>{NgayLap(e.target.value);setngay_lap(e.target.value)}}></input>
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
                Mã số thuế
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
            <div className="row mt-4">
                <div className="col"></div>
                <div className="col">
                    <button className="btn btn-primary" onClick={onClickThemThanhToanNCC}>Thêm Thanh toán NCC</button>
                </div>
            </div>
          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}

        </React.Fragment>
    )
}
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
export default ThemThanhToanNCC
