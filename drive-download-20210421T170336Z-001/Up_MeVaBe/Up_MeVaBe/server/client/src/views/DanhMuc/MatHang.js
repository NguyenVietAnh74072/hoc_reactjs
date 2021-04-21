import React,{useState} from 'react'
import DachSachMatHang from '../../components/Body/DanhMuc/MatHang/DanhSachMatHang'
import ThemMatHang from '../../components/Body/DanhMuc/MatHang/ThemMatHang'
import host from '../../host/host'
function MatHang() {
  const [DSMatHang,SetDSMatHang]= React.useState([])
  const [trang_thai,settrang_thai] = useState(true)
  const _DuLieuMatHangMoi = (e)=>{
      const newData = [...DSMatHang]
      newData.push(e[0])
      console.log(e)
      SetDSMatHang(newData)
  }
  const _DuLieuSuaMoi = (e)=>{
    console.log(e.ma_hang)
    const newData = [...DSMatHang]
    const dataEdit = newData.findIndex(DT => DT.ma_hang === e[0].ma_hang)
      newData.splice(dataEdit,1,e[0])
      SetDSMatHang(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    const newData = [...DSMatHang]
    const index = newData.findIndex(DT => DT.ma_hang === e)
    console.log(e)
    newData.splice(index,1)
    SetDSMatHang(newData)
  }
  const _TrangThai = async(e)=>{
    try {
      settrang_thai(e)
      const response = await fetch (host.MatHang+`/${trang_thai}`)
      const JsonData = await response.json()
      SetDSMatHang(JsonData)
  } catch (error) {
    
  }
  }
  React.useEffect(async ()=>{
      try {
        const response = await fetch (host.MatHang+`/${trang_thai}`)
          const JsonData = await response.json()
          SetDSMatHang(JsonData)
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
            <h1>Mặt hàng</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Danh mục</a></li>
              <li><a href="#">Mặt hàng</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ThemMatHang  DuLieuMatHangMoi={_DuLieuMatHangMoi} TrangThai={_TrangThai} trang_thai={trang_thai}></ThemMatHang>
<DachSachMatHang _TrangThai={_TrangThai} DSMatHang={DSMatHang} _DuLieuSuaMoi={_DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DachSachMatHang>

        </React.Fragment>
    )
}

export default MatHang
