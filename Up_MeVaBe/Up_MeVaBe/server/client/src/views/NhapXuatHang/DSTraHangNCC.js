import React ,{useState}from 'react'
import DanhSachHoaDonNhap from '../../components/Body/NhapXuatHang/DSHoaDonNhap/DanhSachHoaDonNhap'
import XuLyThongTinHienThi from '../../components/Body/NhapXuatHang/DSHoaDonNhap/XuLyThongTinHienThi'
import host from '../../host/host'
function DSHoaDonNhap() {
    const [DSHoaDonNhap,SetDSHoaDonNhap] = useState([])

    const DuLieuTimKiem= async(e)=>{
      try {
        const newData = []
          const response = await fetch(host.HoaDonNhap+`/0/0/${e.NgayBatDau}/${e.NgayKetThuc}`)
          const JsonData = await response.json()
          JsonData.map(x=>
            newData.push({
                phieu_nhap_id : x.phieu_nhap_id,
                NgayFORMAT : x.NgayFORMAT,
                tong_gia_tri : parseInt(x.tong_gia_tri).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  }),
                ghi_chu : x.ghi_chu
            })
        )
        SetDSHoaDonNhap(newData)
        console.log(newData)
      } catch (error) {
        
      }
    }
    React.useEffect(async ()=>{
        try {
            const response = await fetch(host.HoaDonNhap+`/0`)
            const newData = []
            const JsonData = await response.json()
            JsonData.map(x=>
                newData.push({
                    phieu_nhap_id : x.phieu_nhap_id,
                    NgayFORMAT : x.NgayFORMAT,
                    tong_gia_tri : parseInt(x.tong_gia_tri).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      }),
                    ghi_chu : x.ghi_chu
                })
            )
            // console.log(newData)
            console.log(response)
            SetDSHoaDonNhap(newData)

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
            <h1>Danh sách hoá đơn nhập</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Quản lý nhập xuất hàng</a></li>
              <li><a href="#">Danh sách hoá đơn nhập</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <XuLyThongTinHienThi DuLieuTimKiem={DuLieuTimKiem}></XuLyThongTinHienThi>

        <DanhSachHoaDonNhap DSHoaDonNhap={DSHoaDonNhap}></DanhSachHoaDonNhap>
        </React.Fragment>
    )
}

export default DSHoaDonNhap
