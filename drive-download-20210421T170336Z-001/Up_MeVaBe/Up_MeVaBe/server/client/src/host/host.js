// var host = "http://127.0.0.1:3001"
var host = "http://103.127.207.24:3001"
//#region Quản trị viên
var TaiKhoanNguoiDung = host + "/TaiKhoanNguoiDung"
var LayTenNhanVien = host + "/LayTenNhanVien"
var ThemTenNhanVien = host + "/ThemTenNhanVien"
var HienThiTaiKhoan = host + "/HienThiTaiKhoan"
var ThemTaiKhoanNguoiDung = host + "/ThemTaiKhoan"
var SuaTaiKhoan = host + "/SuaTaiKhoan" 
var XoaTaiKhoan = host + "/XoaTaiKhoan"
//#endregion Quản trị viên

//#region DanhMuc
var LoaiDoiTuong = host + "/LoaiDoiTuong"
var DoiTuong = host +"/DoiTuong"
var DonViTinh = host +"/DonViTinh"
var LoaiHang = host +"/LoaiHang"

var LoaiHangTheoMaLoaiHang = host + "/LoaiHangTheoMaLoaiHang"

var NganhHang = host +"/NganhHang"
var NganhHangPhanLoaiSuDung = host +"/NganhHangPhanLoaiSuDung"
var MatHang = host +"/MatHang"
var LoaiHangTheoNganhHang = host + "/LoaiHangTheoNganhHang"
//#endregion
//#region QuanLyNghiepVu
var HoaDonBan = host + "/HoaDonBan"
var HoaDonTraHangKH = host + "/HoaDonTraHangKH"
//#region Phân quyền người dùng 
var PhanQuyenNguoiDung = host + "/PhanQuyenNguoiDung"
//#endregion

var HoaDonNhap = host + "/PhieuNhap"
var HoaDonTraHangNCC = host + "/HoaDonTraHangNCC"

var PhieuThuChi = host + "/PhieuThuChi"
var CongNo = host + "/CongNo"

//#region ThongKe
var SoNhap_Ban = host +"/SoNhap_Ban"


var ThongKeBankingBanHang = host +"/ThongKeBankingBanHang"
var ThietLapCaNhanVien = host + "/ThietLapCaNhanVien"
var HienThiCaNhanVien = host + "/HienThiCaNhanVien"

var CheckRaVaoNhanVien = host + "/CheckRaVaoNhanVien"
var ChotLuongNhanVien = host + "/ChotLuongNhanVien"

var SuaMatHang = host + "/SuaMatHang"

//#endregion
export default {
    TaiKhoanNguoiDung,LayTenNhanVien,ThemTenNhanVien,HienThiTaiKhoan,ThemTaiKhoanNguoiDung,SuaTaiKhoan,XoaTaiKhoan
    ,PhanQuyenNguoiDung,
    LoaiHangTheoNganhHang,
    LoaiDoiTuong,DoiTuong,DonViTinh,LoaiHang,NganhHang,NganhHangPhanLoaiSuDung,MatHang,HoaDonBan,HoaDonTraHangKH,

    HoaDonNhap,HoaDonTraHangNCC,PhieuThuChi,CongNo

    ,SoNhap_Ban,ThongKeBankingBanHang,ChotLuongNhanVien

    ,ThietLapCaNhanVien,HienThiCaNhanVien,CheckRaVaoNhanVien,LoaiHangTheoMaLoaiHang,SuaMatHang
}