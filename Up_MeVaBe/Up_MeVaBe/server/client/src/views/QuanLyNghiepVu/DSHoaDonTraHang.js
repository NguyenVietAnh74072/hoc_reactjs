import React ,{useState}from 'react'
import DanhSachHoaDonTraHang from '../../components/Body/QuanLy/DSHoaDonTraHang/DanhSachHoaDonTraHang'
import XuLyThongTinHienThi from '../../components/Body/QuanLy/DSHoaDonTraHang/XuLyThongTinHienThi'
import host from '../../host/host'
function DSHoaDonTraHang() {
    const [DSHoaDonTraHang,SetDSHoaDonTraHang] = useState([])

    const DuLieuTimKiem= async(e)=>{
      try {
        const newData = []
          const response = await fetch(host.HoaDonBan+`/0/0/${e.NgayBatDau}/${e.NgayKetThuc}`)
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
        SetDSHoaDonTraHang(newData)
        console.log(newData)
      } catch (error) {
        
      }
    }
    React.useEffect(async ()=>{
        try {
            const response = await fetch(host.HoaDonBan+`/0`)
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
            SetDSHoaDonTraHang(newData)
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

        <DanhSachHoaDonTraHang DSHoaDonTraHang={DSHoaDonTraHang}></DanhSachHoaDonTraHang>
        </React.Fragment>
    )
}

export default DSHoaDonTraHang
