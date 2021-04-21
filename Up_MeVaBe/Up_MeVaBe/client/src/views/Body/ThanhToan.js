import React from 'react'
import PhanTrenThanhToan from './ThanhToan/PhanTrenThanhToan'
import PhanDuoiThanhToan from './ThanhToan/PhanDuoiThanhToan'
function ThanhToan() {
    return (
        <React.Fragment>
            <PhanTrenThanhToan></PhanTrenThanhToan>
            <PhanDuoiThanhToan></PhanDuoiThanhToan>
        </React.Fragment>
    )
}

export default ThanhToan
