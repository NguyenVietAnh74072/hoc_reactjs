import React ,{useState}from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/MaHoa'

function ThemLoaiDoiTuong({DuLieuLoaiDoiTuongMoi}) {
    const [ten_loai_doi_tuong, setten_loai_doi_tuong] = useState('')
    const [tien_bao_cong_no, settien_bao_cong_no] = useState('')
    const [ghi_chu, setghi_chu] = useState('')

    const onClickThemLoaiDoiTuong = async()=>{
        try {
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_tao = ngay_gio_hien_tai
            var nguoi_tao = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.LoaiDoiTuong,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify({ten_loai_doi_tuong,tien_bao_cong_no,ghi_chu,nguoi_tao,ngay_tao})
            })
            console.log(fnc.Encrypt_LOOP_3DES(response,'key',1))
            alert('Thêm thành công!')
            setten_loai_doi_tuong('')
            settien_bao_cong_no('')
            setghi_chu('')
            DuLieuLoaiDoiTuongMoi(await response.json())
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
        
    })
    return (
        <React.Fragment>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Loại đối tượng</strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
            <div className="row">
                <div className="col">
                    Tên đối tượng
                    <input className="form-control" type="text"
                    value={ten_loai_doi_tuong}
                    onChange={e=>setten_loai_doi_tuong(e.target.value)}
                    ></input>
                </div>
                <div className="col">
                    Tiền cảnh báo nợ
                    <input className="form-control" type="text"
                    value={tien_bao_cong_no}
                    onChange={e=>settien_bao_cong_no(e.target.value)}
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
                    <button className="btn btn-primary" onClick={onClickThemLoaiDoiTuong}>Thêm loại đối tượng</button>
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
export default ThemLoaiDoiTuong
