import React,{useState} from 'react'
import DachSachNganhHang from '../../components/Body/DanhMuc/NganhHang/DanhSachNganhHang'
import ThemNganhHang from '../../components/Body/DanhMuc/NganhHang/ThemNganhHang'
import host from '../../host/host'
function NganhHang() {
  const [DSNganhHang,SetDSNganhHang]= React.useState([])
  const [trang_thai,settrang_thai] = useState(true)
  const _DuLieuNganhHangMoi = (e)=>{
      const newData = [...DSNganhHang]
      newData.push(e[0])
      console.log(e)
      SetDSNganhHang(newData)
  }
  const _DuLieuSuaMoi = (e)=>{
    console.log(e.ma_nganh_hang)
    const newData = [...DSNganhHang]
    const dataEdit = newData.findIndex(DT => DT.ma_nganh_hang === e[0].ma_nganh_hang)
      newData.splice(dataEdit,1,e[0])
      SetDSNganhHang(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    const newData = [...DSNganhHang]
    const index = newData.findIndex(DT => DT.ma_nganh_hang === e)
    console.log(e)
    newData.splice(index,1)
    SetDSNganhHang(newData)
  }
  const _TrangThai = async(e)=>{
    try {
      settrang_thai(e)
      const response = await fetch (host.NganhHangPhanLoaiSuDung+`/${trang_thai}`)
      const JsonData = await response.json()
      SetDSNganhHang(JsonData)
  } catch (error) {
    
  }
  }
  React.useEffect(async ()=>{
      try {
          const response = await fetch (host.NganhHangPhanLoaiSuDung+`/${trang_thai}`)
          const JsonData = await response.json()
          SetDSNganhHang(JsonData)
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
            <h1>Ngành hàng</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Danh mục</a></li>
              <li><a href="#">Ngành hàng</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ThemNganhHang DuLieuNganhHangMoi={_DuLieuNganhHangMoi} trang_thai={trang_thai} TrangThai={_TrangThai}></ThemNganhHang>
<DachSachNganhHang _TrangThai={_TrangThai} DSNganhHang={DSNganhHang} _DuLieuSuaMoi={_DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DachSachNganhHang>

        </React.Fragment>
    )
}

export default NganhHang
