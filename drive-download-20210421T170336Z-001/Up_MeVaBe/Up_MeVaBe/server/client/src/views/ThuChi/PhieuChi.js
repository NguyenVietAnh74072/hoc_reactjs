import React from 'react'
import ThemPhieuChi from '../../components/Body/ThuChi/PhieuChi/ThemPhieuChi'
import DanhSachPhieuChi from '../../components/Body/ThuChi/PhieuChi/DanhSachPhieuChi'
import host from '../../host/host'
function PhieuChi() {
    const [DSPhieuChi,SetDSPhieuChi] = React.useState([])
    const DuLieuPhieuChiMoi = (e)=>{
        const dl = []
        const newData = [...DSPhieuChi]
        newData.push(e[0])
        newData.map(x=>dl.push({
            NgayText : x.NgayText,
            thu_chi_id : x.thu_chi_id,
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
        SetDSPhieuChi(dl)
    }
    const _DuLieuSuaMoi = (e)=>{
      const dl = []
      const newData = [...DSPhieuChi]
      const dataEdit = newData.findIndex(DT => DT.thu_chi_id === e[0].thu_chi_id)
      newData.splice(dataEdit,1,e[0])
      newData.map(x=>dl.push({
        NgayText : x.NgayText,
        thu_chi_id : x.thu_chi_id,
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
        
        SetDSPhieuChi(dl)
    }
    const _DuLieuXoaMoi = (e)=>{
      const dl = []
      const newData = [...DSPhieuChi]
      const index = newData.findIndex(DT => DT.thu_chi_id === e)
      newData.splice(index,1)
      newData.map(x=>dl.push({
        NgayText : x.NgayText,
        thu_chi_id : x.thu_chi_id,
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
      SetDSPhieuChi(dl)
    }
    const NgayLap = async (e)=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.PhieuThuChi+`/1/${e}`)
            const JsonData = await response.json()
            JsonData.map(x=>newData.push({
                NgayText : x.NgayText,
                thu_chi_id : x.thu_chi_id,
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
            SetDSPhieuChi(newData)
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.PhieuThuChi+`/1/${ngay_tao}`)
            const JsonData = await response.json()
            JsonData.map(x=>newData.push({
                NgayText : x.NgayText,
                thu_chi_id : x.thu_chi_id,
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
            SetDSPhieuChi(newData)
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
            <h1>Phiếu chi</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Thu chi</a></li>
              <li><a href="#">Phiếu chi</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <ThemPhieuChi DuLieuPhieuChiMoi={DuLieuPhieuChiMoi} NgayLap={NgayLap} ></ThemPhieuChi>
        <DanhSachPhieuChi DSPhieuChi={DSPhieuChi} _DuLieuXoaMoi={_DuLieuXoaMoi} _DuLieuSuaMoi={_DuLieuSuaMoi}></DanhSachPhieuChi>
        </React.Fragment>
    )
}

export default PhieuChi
