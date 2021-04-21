import React from 'react'
import ThongTin from '../../components/Body/QuanTriVien/ThongTinNguoiDung/ThongTin'

function ThongTinNguoiDung() {
    return (
        // Hello :3
        <React.Fragment>
        <div className="breadcrumbs">
            <div className="breadcrumbs-inner">
                <div className="row m-0">
                <div className="col-sm-4">
                    <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Thông tin người dùng</h1>
                    </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                        <li><a href="#">Quản trị viên</a></li>
                        <li><a href="#">Thông tin người dùng</a></li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <ThongTin></ThongTin>
        </React.Fragment>
    )
}

export default ThongTinNguoiDung
