import React ,{useState}from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/MaHoa'

function XuLyThongTinHienThi({DuLieuTimKiem}) {
    const [NgayBatDau,SetNgayBatDau] = useState('')
    const [NgayKetThuc,SetNgayKetThuc] = useState('')
    
    return (
        <React.Fragment>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Thông tin</strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
            <div className="row">
                <div className="col">
                    Ngày bắt đầu
                    <input className="form-control" type="date"
                    onChange={e=>SetNgayBatDau(e.target.value)}
                    ></input>
                </div>
                <div className="col">
                    Kết thúc
                    <input className="form-control" type="date"
                    onChange={e=>SetNgayKetThuc(e.target.value)}
                    ></input>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col"></div>
                <div className="col">
                    <button className="btn btn-primary" onClick={async ()=>{
                      const ngay = {NgayBatDau,NgayKetThuc}
                      DuLieuTimKiem(ngay)}}>Tìm kiếm</button>
                </div>
            </div>
          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}

        </React.Fragment>
    )
}
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
export default XuLyThongTinHienThi
