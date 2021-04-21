import React from 'react'
import QRCode from "react-qr-code";
function ThongTin() {
    const [DLNguoiDung,SetDLNguoiDung] = React.useState(
        window.localStorage.getItem('dulieunguoidung').length > 0 ?
        JSON.parse(window.localStorage.getItem('dulieunguoidung'))
        : []
    )
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
            <div className="row mt-3">
                <div className="col">
                    Tên người dùng
                    <div class="form-group">
                        <select class="form-control" id="sel1" >
                                
                        </select>
                    </div>
                </div>
                <div className="col">
                    Mã QR người dùng
                    <br></br>
                    <QRCode value={DLNguoiDung[0].ma_nhan_vien  } />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    Quyền hạn
                    <input className="form-control" type="text"></input>
                </div>
                <div className="col">
                    Mật khẩu
                    <input className="form-control" type="password" ></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                Quyền hạn chính
                    <div class="form-group">
                        <select class="form-control" id="sel1" >
                        </select>
                    </div>
                </div>
                <div className="col">
                    Xác nhận lại mật khẩu
                    <input className="form-control" type="password"></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Ghi chú
                    <input className="form-control" type="text"  ></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col"></div>
                <div className="col">
                    <div className="row ml-1">
                        <button className="btn btn-primary" >Thêm tài khoản</button>
                    </div>
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

export default ThongTin
