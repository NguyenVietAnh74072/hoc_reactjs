import React from 'react'
import DachSachLoaiDoiTuong from '../../components/Body/DanhMuc/LoaiDoiTuong/DanhSachLoaiDoiTuong'
import ThemLoaiDoiTuong from '../../components/Body/DanhMuc/LoaiDoiTuong/ThemLoaiDoiTuong'
import host from '../../host/host'
function LoaiDoiTuong() {
  const [DSLoaiDoiTuong,SetDSLoaiDoiTuong]= React.useState([])
  const _DuLieuLoaiDoiTuongMoi = (e)=>{
      const newData = [...DSLoaiDoiTuong]
      newData.push(e[0])
      console.log(e)
      SetDSLoaiDoiTuong(newData)
  }
  const _DuLieuSuaMoi = (e)=>{
    console.log(e.ma_loai_doi_tuong)
    const newData = [...DSLoaiDoiTuong]
    const dataEdit = newData.findIndex(DT => DT.ma_loai_doi_tuong === e[0].ma_loai_doi_tuong)
      newData.splice(dataEdit,1,e[0])
      SetDSLoaiDoiTuong(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    const newData = [...DSLoaiDoiTuong]
    const index = newData.findIndex(DT => DT.ma_loai_doi_tuong === e)
    console.log(e)
    newData.splice(index,1)
    SetDSLoaiDoiTuong(newData)
  }
  React.useEffect(async ()=>{
      try {
          const response = await fetch (host.LoaiDoiTuong)
          const JsonData = await response.json()
          SetDSLoaiDoiTuong(JsonData)
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
            <h1>Loại đối tượng</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Danh mục</a></li>
              <li><a href="#">Loại đối tượng</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ThemLoaiDoiTuong DuLieuLoaiDoiTuongMoi={_DuLieuLoaiDoiTuongMoi}></ThemLoaiDoiTuong>
<DachSachLoaiDoiTuong DSLoaiDoiTuong={DSLoaiDoiTuong} _DuLieuSuaMoi={_DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DachSachLoaiDoiTuong>

        </React.Fragment>
    )
}

export default LoaiDoiTuong
