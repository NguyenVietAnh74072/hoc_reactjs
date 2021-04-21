import React from 'react'

function PhanTrenGioiThieu() {
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
                    <a href="./"><i className="fa fa-home" /> </a>
                </li>
                <li className="active"> Giới thiệu</li>
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

export default PhanTrenGioiThieu
