import React from 'react'
import host from '../../host/host'
import ThemDoiTuong from '../../components/Body/DanhMuc/DoiTuong/ThemDoiTuong'
import DachSachDoiTuong from '../../components/Body/DanhMuc/DoiTuong/DanhSachDoiTuong'
function DoiTuong() {
  const [DSDoiTuong,SetDSDoiTuong]= React.useState([])
  const [ChonKieuDoiTuong,SetChonKieuDoiTuong] = React.useState('0')
  const onClickChonKieuDoiTuong= async(e)=>{
    try {
        const response = await fetch (host.DoiTuong+`/${e}`)
        const JsonData = await response.json()
        SetDSDoiTuong(JsonData)
        SetChonKieuDoiTuong(e)
    } catch (error) {
      
    }
  }
  const _DuLieuDoiTuongMoi = (e)=>{
      const newData = [...DSDoiTuong]
      newData.push(e[0])
      console.log(e)
      SetDSDoiTuong(newData)
  }
  const _DuLieuSuaMoi = (e)=>{
    console.log(e.ma_doi_tuong)
    const newData = [...DSDoiTuong]
    const dataEdit = newData.findIndex(DT => DT.ma_doi_tuong === e[0].ma_doi_tuong)
      newData.splice(dataEdit,1,e[0])
      SetDSDoiTuong(newData)
  }
  const _DuLieuXoaMoi = (e)=>{
    const newData = [...DSDoiTuong]
    const index = newData.findIndex(DT => DT.ma_doi_tuong === e)
    console.log(e)
    newData.splice(index,1)
    SetDSDoiTuong(newData)
  }
  React.useEffect(async ()=>{
      try {
          const response = await fetch (host.DoiTuong+`/${ChonKieuDoiTuong}`)
          const JsonData = await response.json()
          SetDSDoiTuong(JsonData)
      } catch (error) {
        
      }
  },[])
  console.log(DSDoiTuong)
    return (
<React.Fragment>
<div className="breadcrumbs">
  <div className="breadcrumbs-inner">
    <div className="row m-0">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Đối tượng</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Danh mục</a></li>
              <li><a href="#">Đối tượng</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ThemDoiTuong DuLieuDoiTuongMoi={_DuLieuDoiTuongMoi} ChonKieuDoiTuong={ChonKieuDoiTuong} onClickChonKieuDoiTuong={onClickChonKieuDoiTuong}></ThemDoiTuong>
<DachSachDoiTuong ChonKieuDoiTuong={ChonKieuDoiTuong} DSDoiTuong={DSDoiTuong} _DuLieuSuaMoi={_DuLieuSuaMoi} _DuLieuXoaMoi={_DuLieuXoaMoi}></DachSachDoiTuong>

        </React.Fragment>
    )
}

export default DoiTuong
