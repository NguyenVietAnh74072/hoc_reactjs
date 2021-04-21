import React from 'react'

function PhanTrenDanhMucSanPham() {
    const [DuLieu,SetDuLieu] = React.useState(JSON.parse(
        window.localStorage.getItem('onClickDanhMuc')
    ))
    console.log(DuLieu)
    return (
        <React.Fragment>
            {/* Breadcrumb Section Start */}
            <div className="section">
            {/* Breadcrumb Area Start */}
            <div className="breadcrumb-area bg-primary">
                <div className="container">
                <div className="breadcrumb-content">
                    <ul>
                    <li>
                        <a href="index.html"><i className="fa fa-home" /> </a>
                    </li>
                    <li className="active"> {DuLieu.ten_loai_hang}</li>
                    </ul>
                </div>
                </div>
            </div>
            {/* Breadcrumb Area End */}
            </div>
            {/* Breadcrumb Section End */}
            
        </React.Fragment>
    )
}

export default PhanTrenDanhMucSanPham
