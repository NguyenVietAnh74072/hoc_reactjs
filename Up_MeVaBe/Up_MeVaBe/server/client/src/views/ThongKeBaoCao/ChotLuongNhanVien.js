import React from 'react'
import DanhSachChotLuongNhanVien from '../../components/Body/ThongKe/ChotLuongNhanVien/DanhSachChotLuongNhanVien'
import host from '../../host/host'
function ChotLuongNhanVien() {
    const [DuLieu,SetDuLieu] = React.useState([])

    React.useEffect(async ()=>{
        try {
            const response = await fetch(host.ChotLuongNhanVien)
            SetDuLieu(await response.json())
        } catch (error) {
            
        }
    },[])
    console.log(DuLieu)
    return (
        <React.Fragment>
            <div className="breadcrumbs">
  <div className="breadcrumbs-inner">
    <div className="row m-0">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Chốt lương nhân viên</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Thống kê báo cáo</a></li>
              <li><a href="#">Chốt lương nhân viên</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title"></strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
            <div className="row">
                <div className="col">
                
                    <input className="form-control" type="text"
                    ></input>
                </div>
                <div className="col">
                
                    <input className="form-control" type="text"
                    ></input>
                </div>
            </div>
                    
            <div className="row mt-4">
                <div className="col"></div>
                <div className="col">
                    <button className="btn btn-primary" ></button>
                </div>
            </div>
          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}

<DanhSachChotLuongNhanVien DSChotLuongNhanVien={DuLieu}></DanhSachChotLuongNhanVien>
        </React.Fragment>
    )
}

export default ChotLuongNhanVien
