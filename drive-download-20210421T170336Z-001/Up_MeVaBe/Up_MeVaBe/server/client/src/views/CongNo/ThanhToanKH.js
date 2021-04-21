import React from 'react'
import ThemThanhToanKH from '../../components/Body/CongNo/ThanhToanKH/ThemThanhToanKH'
import DanhSachThanhToanKH from '../../components/Body/CongNo/ThanhToanKH/DanhSachThanhToanKH'
import host from '../../host/host'
function ThanhToanKH() {
    const [DSThanhToanKH,SetDSThanhToanKH] = React.useState([])
    const DuLieuThanhToanKHMoi = (e)=>{
        const dl = []
        const newData = [...DSThanhToanKH]
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
        SetDSThanhToanKH(dl)
    }
    const _DuLieuSuaMoi = (e)=>{
      const dl = []
      const newData = [...DSThanhToanKH]
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
        
        SetDSThanhToanKH(dl)
    }
    const _DuLieuXoaMoi = (e)=>{
      const dl = []
      const newData = [...DSThanhToanKH]
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
      SetDSThanhToanKH(dl)
    }
    const NgayLap = async (e)=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.CongNo+`/0/${e}`)
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
            SetDSThanhToanKH(newData)
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.CongNo+`/0/${ngay_tao}`)
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
            SetDSThanhToanKH(newData)
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
              <li><a href="#">Thanh toán KH</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <ThemThanhToanKH DuLieuThanhToanKHMoi={DuLieuThanhToanKHMoi} NgayLap={NgayLap} ></ThemThanhToanKH>
        <DanhSachThanhToanKH DSThanhToanKH={DSThanhToanKH} _DuLieuXoaMoi={_DuLieuXoaMoi} _DuLieuSuaMoi={_DuLieuSuaMoi}></DanhSachThanhToanKH>
        </React.Fragment>
    )
}

export default ThanhToanKH
