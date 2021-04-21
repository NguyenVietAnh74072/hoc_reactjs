/** @format */

import React from "react";
import DashBoard from "./ThongKe/DashBoard";
import PhanQuyenNguoiDung from "./QuanTriVien/PhanQuyenNguoiDung";
import QuanLyTaiKhoan from "./QuanTriVien/QuanLyTaiKhoan";
import ThongTinNguoiDung from "./QuanTriVien/ThongTinNguoiDung";
import QuanLyLuongNhanVien from "./QuanTriVien/QuanLyLuongNhanVien"
import ThietLapLuongNhanVien from './QuanTriVien/ThietLapLuongNhanVien'

import LoaiDoiTuong from "./DanhMuc/LoaiDoiTuong";
import DoiTuong from "./DanhMuc/DoiTuong";
import DonViTinh from "./DanhMuc/DonViTinh";
import LoaiHang from "./DanhMuc/LoaiHang";
import NganhHang from "./DanhMuc/NganhHang";
import MatHang from "./DanhMuc/MatHang";

import QuanLyBanHangPOS from "./QuanLyNghiepVu/QuanLyBanHangPOS";
import TestBarCode from "./QuanLyNghiepVu/testbarcode";
import QuanLyTraHangKH from "./QuanLyNghiepVu/QuanLyTraHangKH";
import DSHoaDonBan from "./QuanLyNghiepVu/DSHoaDonBan";
import DSHoaDonTraHang from "./QuanLyNghiepVu/DSHoaDonTraHang";

import QuanLyNhapHangNCC from "./NhapXuatHang/QuanLyNhapHangNCC";
import DSHoaDonNhap from "./NhapXuatHang/DSHoaDonNhap";
import QuanLyTraHangNCC from "./NhapXuatHang/QuanLyTraHangNCC";
import DSTraHangNCC from './NhapXuatHang/DSTraHangNCC'

import PhieuThu from "./ThuChi/PhieuThu";
import PhieuChi from "./ThuChi/PhieuChi";
import ThanhToanNCC from "./CongNo/ThanhToanNCC";
import ThanhToanKH from "./CongNo/ThanhToanKH";

import ThongKeBanMatHang from "./ThongKeBaoCao/ThongKeBanMatHang";
import ThongKeNhapMatHang from "./ThongKeBaoCao/ThongKeNhapMatHang";
import ThongKeBankingBanHang from "./ThongKeBaoCao/ThongKeBankingBanHang";
import CheckVaoRaNhanVien from "./CheckVaoRaNhanVien";
import ChotLuongNhanVien from "./ThongKeBaoCao/ChotLuongNhanVien";

function Body({ Tab }) {
  switch (Tab) {
    case "Check vào ra nhân viên":
      return (
        <React.Fragment>
          <CheckVaoRaNhanVien></CheckVaoRaNhanVien>
        </React.Fragment>
      );
    //#region Quản trị viên
    case "Thống kê tổng quan":
      return (
        <React.Fragment>
          <DashBoard></DashBoard>
        </React.Fragment>
      );
    case "":
      return (
        <React.Fragment>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
    case "Quản lý tài khoản":
      return (
        <React.Fragment>
          <QuanLyTaiKhoan></QuanLyTaiKhoan>
        </React.Fragment>
      );
    case "Phân quyền người dùng":
      return (
        <React.Fragment>
          <PhanQuyenNguoiDung></PhanQuyenNguoiDung>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
    case "Thông tin người dùng":
      return (
        <React.Fragment>
          <ThongTinNguoiDung></ThongTinNguoiDung>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
    case "Quản lý lương nhân viên theo tháng":
      return (
        <React.Fragment>
          <QuanLyLuongNhanVien></QuanLyLuongNhanVien>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );

      case "Thiết lập lương nhân viên theo tháng":
        return (
          <React.Fragment>
            <ThietLapLuongNhanVien></ThietLapLuongNhanVien>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
    //#endregion

    //#region Danh mục
    case "Loại đối tượng":
      return (
        <React.Fragment>
          <LoaiDoiTuong></LoaiDoiTuong>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
    case "Đối tượng":
      return (
        <React.Fragment>
          <DoiTuong></DoiTuong>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
      case "Đơn vị tính":
        return (
          <React.Fragment>
            <DonViTinh></DonViTinh>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
        case "Loại hàng":
          return (
            <React.Fragment>
              <LoaiHang></LoaiHang>
              <div style={{ width: "100%", height: "100vh" }}></div>
            </React.Fragment>
          );
        case "Ngành hàng":
          return (
            <React.Fragment>
              <NganhHang></NganhHang>
              <div style={{ width: "100%", height: "100vh" }}></div>
            </React.Fragment>
          );
        case "Mặt hàng":
          return (
            <React.Fragment>
              <MatHang></MatHang>
              <div style={{ width: "100%", height: "100vh" }}></div>
            </React.Fragment>
          );
    //#endregion

    //#region Quản lý nghiệp vụ   Quản lý bán hàng máy pos
    case "Quản lý bán hàng máy pos":
      return (
        <React.Fragment>
            <QuanLyBanHangPOS></QuanLyBanHangPOS>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
      case "Danh sách hoá đơn bán hàng":
        return (
          <React.Fragment>
              <DSHoaDonBan></DSHoaDonBan>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
      
      case "Quản lý trả hàng KH":
        return (
          <React.Fragment>
              <QuanLyTraHangKH></QuanLyTraHangKH>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
        case "Danh sách hoá đơn trả hàng KH":
          return (
            <React.Fragment>
                <DSHoaDonTraHang></DSHoaDonTraHang>
              <div style={{ width: "100%", height: "100vh" }}></div>
            </React.Fragment>
          );
      case "Test bar code":
        return (
          <React.Fragment>
              <TestBarCode></TestBarCode>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
    //#endregion
  
    //#region Nhập xuất hàng
    case "Quản lý nhập hàng NCC":
      return (
        <React.Fragment>
            <QuanLyNhapHangNCC></QuanLyNhapHangNCC>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
      case "Danh sách hoá đơn nhập":
        return (
          <React.Fragment>
              <DSHoaDonNhap></DSHoaDonNhap>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
        case "Quản lý trả hàng NCC":
          return (
            <React.Fragment>
                <QuanLyTraHangNCC></QuanLyTraHangNCC>
              <div style={{ width: "100%", height: "100vh" }}></div>
            </React.Fragment>
          );

          case "Danh sách hoá đơn trả hàng NCC":
            return (
              <React.Fragment>
                  <DSTraHangNCC></DSTraHangNCC>
                <div style={{ width: "100%", height: "100vh" }}></div>
              </React.Fragment>
            );
    //#endregion


    //#region ThuChi
    case "Phiếu thu":
      return (
        <React.Fragment>
            <PhieuThu></PhieuThu>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
      case "Phiếu chi":
        return (
          <React.Fragment>
              <PhieuChi></PhieuChi>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );

    //#endregion

    // #region CongNo
    case "Thanh toán NCC":
      return (
        <React.Fragment>
            <ThanhToanNCC></ThanhToanNCC>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      );
      case "Thanh toán KH":
        return (
          <React.Fragment>
              <ThanhToanKH></ThanhToanKH>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        );
    // #endregion 


    //#region Thông kê
    case "Thông kê bán mặt hàng":
      return(
        <React.Fragment>
          <ThongKeBanMatHang></ThongKeBanMatHang>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      )

    case "Thông kê nhập mặt hàng":
      return(
        <React.Fragment>
          <ThongKeNhapMatHang></ThongKeNhapMatHang>
          <div style={{ width: "100%", height: "100vh" }}></div>
        </React.Fragment>
      )
      case "Thống kê banking bán hàng":
        return(
          <React.Fragment>
            <ThongKeBankingBanHang></ThongKeBankingBanHang>
            <div style={{ width: "100%", height: "100vh" }}></div>
          </React.Fragment>
        )

      case "Chốt lương nhân viên":
        return (
          <React.Fragment>
            <ChotLuongNhanVien></ChotLuongNhanVien>
          </React.Fragment>
        );
    //#endregion
  }
}

export default Body;
