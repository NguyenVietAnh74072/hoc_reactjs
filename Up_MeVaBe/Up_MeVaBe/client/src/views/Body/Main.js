/** @format */

import React from "react";
import TrangChinh from "./Index/TrangChinh";
import GioHang from "./GioHang";
import ThanhToan from "./ThanhToan";
import GioiThieu from "./GioiThieu";
import DanhMuc from "./Index/DanhMuc";
import LienHe from "./LienHe";
import MucYeuThich from "./MucYeuThich";
import DanhMucSanPham from "./DanhMucSanPham";
import SanPham from "./SanPham";
import SuKien from "./SuKien";
import DangNhap from "./DangNhap";
import DangKy from "./DangKy";
function Main({ Tab }) {
  setTimeout(() => {}, 3000);
  React.useEffect(() => {}, []);
  console.log("Main");
  switch (Tab) {
    case "Giới thiệu":
      return (
        <React.Fragment>
          <GioiThieu></GioiThieu>
        </React.Fragment>
      );
    case "Index":
      return (
        <React.Fragment>
          <TrangChinh></TrangChinh>
        </React.Fragment>
      );
    case "Giỏ hàng":
      return (
        <React.Fragment>
          <GioHang></GioHang>
        </React.Fragment>
      );
    case "Thanh toán":
      return (
        <React.Fragment>
          <ThanhToan></ThanhToan>
        </React.Fragment>
      );
    case "Danh mục":
      return (
        <React.Fragment>
          <DanhMucSanPham></DanhMucSanPham>
        </React.Fragment>
      );
    case "Liên hệ":
      return (
        <React.Fragment>
          <LienHe></LienHe>
        </React.Fragment>
      );
    case "Sự kiện":
      return (
        <React.Fragment>
          <SuKien></SuKien>
        </React.Fragment>
      );
    case "Mục yêu thích":
      return (
        <React.Fragment>
          <MucYeuThich></MucYeuThich>
        </React.Fragment>
      );

    case "Sản phẩm":
      return (
        <React.Fragment>
          <SanPham></SanPham>
        </React.Fragment>
      );
    case "Đăng nhập":
      return (
        <React.Fragment>
          <DangNhap></DangNhap>
        </React.Fragment>
      );
    case "Đăng ký":
      return (
        <React.Fragment>
          <DangKy></DangKy>
        </React.Fragment>
      );
  }
}

export default Main;
