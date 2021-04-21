import React from 'react'
import DachSachDonViTinh from '../../components/Body/DanhMuc/DonViTinh/DanhSachDonViTinh'
import ThemDonViTinh from '../../components/Body/DanhMuc/DonViTinh/ThemDonViTinh'
import host from '../../host/host'
function DonViTinh() {
  const [DSDonViTinh,SetDSDonViTinh]= React.useState([])
  const _DuLieuDonViTinhMoi = (e)=>{
      const newData = [...DSDonViTinh]
      newData.push(e[0])
      console.log(e)
      SetDSDonViTinh(newData)
  }
  const _DuLieuSuaMoi = (e)=>{
    console.log(e.ma_dvt)
    const newData = [...DSDonViTinh]
    const dataEdit = newData.findIndex(DT => DT.ma_dvt === e[0].ma_dvt)
      newData.splice(dataEdit,1,e[0])
      SetDSDonViTinh(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    const newData = [...DSDonViTinh]
    const index = newData.findIndex(DT => DT.ma_dvt === e)
    console.log(e)
    newData.splice(index,1)
    SetDSDonViTinh(newData)
  }
  React.useEffect(async ()=>{
      try {
          const response = await fetch (host.DonViTinh)
          const JsonData = await response.json()
          SetDSDonViTinh(JsonData)
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
            <h1>Đơn vị tính</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Danh mục</a></li>
              <li><a href="#">Đơn vị tính</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ThemDonViTinh DuLieuDonViTinhMoi={_DuLieuDonViTinhMoi}></ThemDonViTinh>
<DachSachDonViTinh DSDonViTinh={DSDonViTinh} _DuLieuSuaMoi={_DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DachSachDonViTinh>

        </React.Fragment>
    )
}

export default DonViTinh
