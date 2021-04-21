/** @format */

import React from "react";
import Banner_1 from "./Banner_1";
import DanhMuc from "./DanhMuc";
import DanhMuc_SanPham_1 from "./DanhMuc_SanPham_1";
import Slider from "./Slider";
import Banner_2 from "./Banner_2.js";
import DanhMuc_SanPham_2 from "./DanhMuc_SanPham_2";
import Slider_Logo from "./Slider_Logo";
import SanPhamBanChay from "./SanPhamBanChay";
import SanPhamTheoDanhMuc from "./SanPhamTheoDanhMuc";
function index() {
  return (
    <React.Fragment>
      {/* Slider */}
      <Slider></Slider>
      {/* Các danh mục đang bán tại shop */}
      <DanhMuc></DanhMuc>
      {/* Danh mục đang bán tại shop */}
      <SanPhamTheoDanhMuc tittle='Đồ lót cho bé'></SanPhamTheoDanhMuc>

      <SanPhamTheoDanhMuc tittle='Hộp bột sữa'></SanPhamTheoDanhMuc>

      <SanPhamTheoDanhMuc tittle='Quần áo cho bé nam'></SanPhamTheoDanhMuc>

      <SanPhamTheoDanhMuc tittle='Quần áo cho bé nữ'></SanPhamTheoDanhMuc>
      {/* Banner 1  */}

      {/* Sản phẩm bán chạy */}
      {/* <SanPhamBanChay></SanPhamBanChay> */}

      <Banner_1></Banner_1>
      {/* Danh mục sản phẩm 1 */}
      {/* <DanhMuc_SanPham_1></DanhMuc_SanPham_1> */}

      {/* Danh mục sản phẩm 2 */}
      {/* <DanhMuc_SanPham_2></DanhMuc_SanPham_2> */}

      {/* Slider_Logo */}

      <Slider_Logo></Slider_Logo>
    </React.Fragment>
  );
}

export default index;
