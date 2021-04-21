import React from 'react'
import hosting from '../../host/hosting'
import PhanDuoiDanhMucSanPham from './DanhMucSanPham/PhanDuoiDanhMucSanPham'
import PhanTrenDanhMucSanPham from './DanhMucSanPham/PhanTrenDanhMucSanPham'

function DanhMucSanPham() {
    const [DuLieuSanPham,SetDuLieuSanPham] = React.useState([])
    const [SanPham,SetSanPham] = React.useState([])
    const getData = async ()=>{
        try {
            const onClickDanhMuc = JSON.parse(
                window.localStorage.getItem('onClickDanhMuc')
            )
            console.log(onClickDanhMuc)
            const response = await fetch(hosting.MatHang+`/true/${onClickDanhMuc.loai_hang_id}`)

            SetSanPham(await response.json())
        } catch (error) {
            
        }
    }
    React.useEffect(()=>{
        getData()
    },[])
    return (
        <React.Fragment>
            <PhanTrenDanhMucSanPham></PhanTrenDanhMucSanPham>
            <PhanDuoiDanhMucSanPham SanPham={SanPham}></PhanDuoiDanhMucSanPham>
        </React.Fragment>
    )
}

export default DanhMucSanPham
