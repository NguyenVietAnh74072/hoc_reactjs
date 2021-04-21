import React ,{useState}from 'react'
import DachSachHoaDonBan from '../../components/Body/QuanLy/DSHoaDonBan/DanhSachHoaDonBan'
import XuLyThongTinHienThi from '../../components/Body/QuanLy/DSHoaDonBan/XuLyThongTinHienThi'
import host from '../../host/host'
function DSHoaDonBan() {
    const [DSHoaDonBan,SetDSHoaDonBan] = useState([])

    const DuLieuTimKiem= async(e)=>{
      try {
        console.log(e)
          const response = await fetch(host.HoaDonBan+`/1/0/${e.NgayBatDau}/${e.NgayKetThuc}`)
          const JsonData = await response.json()
          const newData = []
          JsonData.map(x=>
            newData.push({
                hoa_don_ban_id : x.hoa_don_ban_id,
                NgayFORMAT : x.NgayFORMAT,
                tong_gia_tri : parseInt(x.tong_gia_tri).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  }),
                ghi_chu : x.ghi_chu
            })
        )
          SetDSHoaDonBan(newData)
      } catch (error) {
        
      }
    }
    React.useEffect(async ()=>{
        try {
            const response = await fetch(host.HoaDonBan+`/1`)
            const newData = []
            const JsonData = await response.json()
            JsonData.map(x=>
                newData.push({
                    hoa_don_ban_id : x.hoa_don_ban_id,
                    NgayFORMAT : x.NgayFORMAT,
                    tong_gia_tri : parseInt(x.tong_gia_tri).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      }),
                    ghi_chu : x.ghi_chu
                })
            )
            console.log(newData)
            SetDSHoaDonBan(newData)
        } catch (error) {
            
        }
    },[])
    return (
        <React.Fragment>
            <div className="breadcrumbs">
  <div className="breadcrumbs-inner">
    <div className="row m-0">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Danh sách hoá đơn bán</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Quản lý bán hàng</a></li>
              <li><a href="#">Danh sách hoá đơn bán</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <XuLyThongTinHienThi DuLieuTimKiem={DuLieuTimKiem}></XuLyThongTinHienThi>

        <DachSachHoaDonBan DSHoaDonBan={DSHoaDonBan}></DachSachHoaDonBan>
        </React.Fragment>
    )
}

export default DSHoaDonBan
