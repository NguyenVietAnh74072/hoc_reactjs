import React from 'react'
import PhanDuoiGioHang from './GioHang/PhanDuoiGioHang'
import PhanTrenGioHang from './GioHang/PhanTrenGioHang'

function GioHang() {
    return (
        <React.Fragment>
            <PhanTrenGioHang></PhanTrenGioHang>
            <PhanDuoiGioHang></PhanDuoiGioHang>
        </React.Fragment>
    )
}

export default GioHang
