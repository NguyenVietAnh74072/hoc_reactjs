import React from 'react'
import SanPhamTheoDanhMuc from "./SanPhamTheoDanhMuc";
import hosting from '../../../host/hosting'

function HienThiCacDanhMucSanPham() {
      // Giỏ hàng

  const [GioHang, SetGioHang] = React.useState([]);

  // Giỏ hàng
  const [DanhMuc, SetDanhMuc] = React.useState(
    window.localStorage.getItem("DanhMuc") === null
      ? []
      : JSON.parse(window.localStorage.getItem("DanhMuc"))
  );

  // const getData = async ()=>{
  //   const response = await fetch(hosting.LoaiHang+`/true`)
  //   const JsonData = await response.json()
  //   window.localStorage.setItem('DanhMuc',JSON.stringify(JsonData))
  //   SetDanhMuc(JsonData)
  // }
  React.useEffect(() => {
    try {
        SetDanhMuc(JSON.parse(window.localStorage.getItem("DanhMuc")));
        SetGioHang(
            window.localStorage.getItem("GioHang") === null
            ? []
            : JSON.parse(window.localStorage.getItem("GioHang"))
        );
        const giohang = JSON.parse(window.localStorage.getItem("GioHang"));
        let tong_tien = 0;
    
        giohang.map((x) => {
            tong_tien = tong_tien + parseInt(x.so_luong) * parseInt(x.gia_ban_le);
        });
        window.localStorage.setItem("TongTien", tong_tien.toString());
    } catch (error) {
      
    }
  }, []);
    return (
        <React.Fragment>
            {DanhMuc.map(x=>(
                <SanPhamTheoDanhMuc x={x}> </SanPhamTheoDanhMuc>
            ))}
        </React.Fragment>
    )
}

export default HienThiCacDanhMucSanPham
