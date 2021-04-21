import React from 'react'
import ThemPhieuThu from '../../components/Body/ThuChi/PhieuThu/ThemPhieuThu'
import DanhSachPhieuThu from '../../components/Body/ThuChi/PhieuThu/DanhSachPhieuThu'
import host from '../../host/host'
function PhieuThu() {
    const [DSPhieuThu,SetDSPhieuThu] = React.useState([])
    const DuLieuPhieuThuMoi = (e)=>{
        const dl = []
        const newData = [...DSPhieuThu]
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
        SetDSPhieuThu(dl)
    }
    const _DuLieuSuaMoi = (e)=>{
      const dl = []
      const newData = [...DSPhieuThu]
      console.log(e[0])
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
        
        SetDSPhieuThu(dl)
    }
    const _DuLieuXoaMoi = (e)=>{
      const dl = []
      const newData = [...DSPhieuThu]
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
      SetDSPhieuThu(dl)
    }
    const NgayLap = async (e)=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.PhieuThuChi+`/0/${e}`)
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
            SetDSPhieuThu(newData)
        } catch (error) {
            
        }
    }
    React.useEffect(async ()=>{
        try {
            const newData = []
            const data = new Date()
            var ngay_tao = data.toJSON().split('T')[0]
            const response = await fetch(host.PhieuThuChi+`/0/${ngay_tao}`)
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
            SetDSPhieuThu(newData)
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
            <h1>Phiếu thu</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Thu chi</a></li>
              <li><a href="#">Phiếu thu</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <ThemPhieuThu DuLieuPhieuThuMoi={DuLieuPhieuThuMoi} NgayLap={NgayLap} ></ThemPhieuThu>
        <DanhSachPhieuThu DSPhieuThu={DSPhieuThu} _DuLieuXoaMoi={_DuLieuXoaMoi} _DuLieuSuaMoi={_DuLieuSuaMoi}></DanhSachPhieuThu>
        </React.Fragment>
    )
}

export default PhieuThu
