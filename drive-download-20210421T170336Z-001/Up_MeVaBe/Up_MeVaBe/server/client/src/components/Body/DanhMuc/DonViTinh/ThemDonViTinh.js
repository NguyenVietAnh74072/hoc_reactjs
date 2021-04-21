import React ,{useState}from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/MaHoa'

function ThemDonViTinh({DuLieuDonViTinhMoi}) {
    const [ten_dvt, setten_dvt] = useState('')
    const [ghi_chu, setghi_chu] = useState('')

    const onClickThemDonViTinh = async()=>{
        try {
          console.log('tesst')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_tao = ngay_gio_hien_tai
            var nguoi_tao = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.DonViTinh,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify({ten_dvt,ghi_chu,nguoi_tao,ngay_tao})
            })
            console.log(fnc.Encrypt_LOOP_3DES(response,'key',1))
            alert('Thêm thành công!')
            setten_dvt('')
            setghi_chu('')
            DuLieuDonViTinhMoi(await response.json())
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
        
    },[])
    return (
        <React.Fragment>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Đơn vị tính</strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
            <div className="row"> 
                <div className="col">
                    Tên đơn vị tính
                    <input className="form-control" type="text"
                    value={ten_dvt}
                    onChange={e=>setten_dvt(e.target.value)}
                    ></input>
                </div>
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
                    <button className="btn btn-primary" onClick={onClickThemDonViTinh}>Thêm đơn vị tính</button>
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
export default ThemDonViTinh
