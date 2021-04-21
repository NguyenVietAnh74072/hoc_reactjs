import React from 'react'
import ThemThanhToanNCC from '../../components/Body/CongNo/ThanhToanNCC/ThemThanhToanNCC'
import DanhSachThanhToanNCC from '../../components/Body/CongNo/ThanhToanNCC/DanhSachThanhToanNCC'
import host from '../../host/host'
function ThanhToanNCC() {
    const [DSThanhToanNCC,SetDSThanhToanNCC] = React.useState([])
    const DuLieuThanhToanNCCMoi = (e)=>{
        const dl = []
        const newData = [...DSThanhToanNCC]
        newData.push(e[0])
        newData.map(x=>dl.push({
            NgayText : x.NgayText,
            thanh_toan_id : x.thanh_toan_id,
            nhan_vien_id : x.nhan_vien_id,
            noi_dung : x.noi_dung,
            so_tien : parseInt(x.so_tien).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              }),
            trang_thai : x.trang_thai,
            kieu : x.kieu,
            ghi_chu : x.ghi_chu,
            ten_doi_tuong : x.ten_doi_tuong,
            dia_chi : x.dia_chi,
            dien_thoai : x.dien_thoai,
            ma_so_thue : x.ma_so_thue,loai: x.loai,khoa_so:x.khoa_so,
            ngay : x.ngay,
        }))
        SetDSThanhToanNCC(dl)
    }
    const _DuLieuSuaMoi = (e)=>{
      const dl = []
      const newData = [...DSThanhToanNCC]
      const dataEdit = newData.findIndex(DT => DT.thanh_toan_id === e[0].thanh_toan_id)
      newData.splice(dataEdit,1,e[0])
      console.log(e[0])
      newData.map(x=>dl.push({
        NgayText : x.NgayText,
        thanh_toan_id : x.thanh_toan_id,
        nhan_vien_id : x.nhan_vien_id,
        noi_dung : x.noi_dung,
        so_tien : parseInt(x.so_tien).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          }),
        trang_thai : x.trang_thai,
        kieu : x.kieu,
        ghi_chu : x.ghi_chu,
        ten_doi_tuong : x.ten_doi_tuong,
        dia_chi : x.dia_chi,
        dien_thoai : x.dien_thoai,
        ma_so_thue : x.ma_so_thue,loai: x.loai,khoa_so:x.khoa_so,
        ngay : x.ngay,
    }))
        
        SetDSThanhToanNCC(dl)
    }
    const _DuLieuXoaMoi = (e)=>{
      const dl = []
      const newData = [...DSThanhToanNCC]
      const index = newData.findIndex(DT => DT.thanh_toan_id === e)
      newData.splice(index,1)
      newData.map(x=>dl.push({
        NgayText : x.NgayText,
        thanh_toan_id : x.thanh_toan_id,
        nhan_vien_id : x.nhan_vien_id,
        noi_dung : x.noi_dung,
        so_tien : parseInt(x.so_tien).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          }),
        trang_thai : x.trang_thai,
        kieu : x.kieu,
        ghi_chu : x.ghi_chu,
        ten_doi_tuong : x.ten_doi_tuong,
        dia_chi : x.dia_chi,
        dien_thoai : x.dien_thoai,
        ma_so_thue : x.ma_so_thue,loai: x.loai,khoa_so:x.khoa_so,
        ngay : x.ngay
    }))
      SetDSThanhToanNCC(dl)
    }
    const NgayLap = async (e)=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.CongNo+`/1/${e}`)
            const JsonData = await response.json()
            JsonData.map(x=>newData.push({
                NgayText : x.NgayText,
                thanh_toan_id : x.thanh_toan_id,
                nhan_vien_id : x.nhan_vien_id,
                noi_dung : x.noi_dung,
                so_tien : parseInt(x.so_tien).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  }),
                trang_thai : x.trang_thai,
                kieu : x.kieu,
                ghi_chu : x.ghi_chu,
                ten_doi_tuong : x.ten_doi_tuong,
                dia_chi : x.dia_chi,
                dien_thoai : x.dien_thoai,
                ma_so_thue : x.ma_so_thue,loai: x.loai,khoa_so:x.khoa_so,
                ngay : x.ngay,
            }))
            SetDSThanhToanNCC(newData)
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.CongNo+`/1/${ngay_tao}`)
            const JsonData = await response.json()
            JsonData.map(x=>newData.push({
                NgayText : x.NgayText,
                thanh_toan_id : x.thanh_toan_id,
                nhan_vien_id : x.nhan_vien_id,
                noi_dung : x.noi_dung,
                so_tien : parseInt(x.so_tien).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  }),
                trang_thai : x.trang_thai,
                kieu : x.kieu,
                ghi_chu : x.ghi_chu,
                ten_doi_tuong : x.ten_doi_tuong,
                dia_chi : x.dia_chi,
                dien_thoai : x.dien_thoai,
                ma_so_thue : x.ma_so_thue,loai: x.loai,khoa_so:x.khoa_so,
                ngay : x.ngay,
            }))
            SetDSThanhToanNCC(newData)
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
            <h1>Công nợ</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Công nợ</a></li>
              <li><a href="#">Thanh toán NCC</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <ThemThanhToanNCC DuLieuThanhToanNCCMoi={DuLieuThanhToanNCCMoi} NgayLap={NgayLap} ></ThemThanhToanNCC>
        <DanhSachThanhToanNCC DSThanhToanNCC={DSThanhToanNCC} _DuLieuXoaMoi={_DuLieuXoaMoi} _DuLieuSuaMoi={_DuLieuSuaMoi}></DanhSachThanhToanNCC>
        </React.Fragment>
    )
}

export default ThanhToanNCC
