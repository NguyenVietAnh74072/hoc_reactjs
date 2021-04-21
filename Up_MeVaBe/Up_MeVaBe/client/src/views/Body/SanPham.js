import React from 'react'
import PhanDuoiSanPham from './SanPham/PhanDuoiSanPham'
import PhanTrenSanPham from './SanPham/PhanTrenSanPham'
import SanPhamLienQuanDanhMuc from './SanPham/SanPhamLienQuanDanhMuc'
function SanPham() {
    return (
        <React.Fragment>
            <PhanTrenSanPham></PhanTrenSanPham>
            <PhanDuoiSanPham></PhanDuoiSanPham>

            <SanPhamLienQuanDanhMuc></SanPhamLienQuanDanhMuc>
        </React.Fragment>
    )
}

export default SanPham
