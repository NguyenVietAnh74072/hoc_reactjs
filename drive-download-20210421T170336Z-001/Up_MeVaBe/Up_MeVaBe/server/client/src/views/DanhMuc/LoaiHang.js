import React,{useState} from 'react'
import DachSachLoaiHang from '../../components/Body/DanhMuc/LoaiHang/DanhSachLoaiHang'
import ThemLoaiHang from '../../components/Body/DanhMuc/LoaiHang/ThemLoaiHang'
import host from '../../host/host'
function LoaiHang() {
  const [DSLoaiHang,SetDSLoaiHang]= React.useState([])
  const [trang_thai,settrang_thai] = useState(true)
  const _TrangThai = async(e)=>{
    try {
      settrang_thai(e)
      const response = await fetch (host.LoaiHang+`/${trang_thai}`)
      const JsonData = await response.json()
      SetDSLoaiHang(JsonData)
  } catch (error) {
    
  }
  }
  const _DuLieuLoaiHangMoi = (e)=>{
      const newData = [...DSLoaiHang]
      newData.push(e[0])
      console.log(e)
      SetDSLoaiHang(newData)
  }
  const _DuLieuSuaMoi = (e)=>{
    console.log(e.trang_thai)
    const newData = [...DSLoaiHang]
    const dataEdit = newData.findIndex(DT => DT.ma_loai_hang === e[0].ma_loai_hang)
      newData.splice(dataEdit,1,e[0])
      SetDSLoaiHang(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    const newData = [...DSLoaiHang]
    const index = newData.findIndex(DT => DT.ma_loai_hang === e)
    console.log(e)
    newData.splice(index,1)
    SetDSLoaiHang(newData)
  }
  React.useEffect(async ()=>{
      try {
          const response = await fetch (host.LoaiHang+`/${trang_thai}`)
          const JsonData = await response.json()
          SetDSLoaiHang(JsonData)
      } catch (error) {
        
      }
  },[])
  console.log(DSLoaiHang)
    return (
<React.Fragment>
<div className="breadcrumbs">
  <div className="breadcrumbs-inner">
    <div className="row m-0">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Loại hàng</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Danh mục</a></li>
              <li><a href="#">Loại hàng</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ThemLoaiHang DuLieuLoaiHangMoi={_DuLieuLoaiHangMoi} trang_thai={trang_thai} TrangThai={_TrangThai}></ThemLoaiHang>
<DachSachLoaiHang _TrangThai={_TrangThai} DSLoaiHang={DSLoaiHang} _DuLieuSuaMoi={_DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DachSachLoaiHang>

        </React.Fragment>
    )
}

export default LoaiHang
