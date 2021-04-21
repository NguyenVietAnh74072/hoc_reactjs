/** @format */

import React, { Fragment, useState, useEffect, useRef } from "react";
import IMAGENONE from "../../assets/images/none-img.png";
import QuetMaVach from "../../components/Body/NhapXuatHang/QuanLyNhapHangNCC/QuetMaVach";
import host from "../../host/host";
import LoadDing from "../../assets/Load";
import ThanhToan from "../../components/Body/NhapXuatHang/QuanLyNhapHangNCC/ThanhToan";
function QuanLyNhapHangNCC() {
  // setTimeout(() => {}, 3000);
  const typingTimeoutRef = useRef(null);
  const [Loader, ShowLoader, HideLoader] = LoadDing();

  const [DSMatHang, SetDSMatHang] = useState([]);
  const [page, Setpage] = useState(0);
  const [pageTotal, SetpageTotal] = useState(0);
  const [DSMatHangMotTrang, SetDSMatHangMotTrang] = useState([]);
  const [DSMotDongMoiTrang, SetDSMotDongMoiTrang] = useState([]);

  const [DSLoaiHang, SetDSLoaiHang] = useState([]);
  const [nganh_hang_id, Setnganh_hang_id] = useState("");
  const [loai_hang, Setloai_hang] = useState("");
  const [GioHang, SetGioHang] = useState(
    window.localStorage.getItem("GioHang")
      ? JSON.parse(window.localStorage.getItem("GioHang"))
      : []
  );
  const [TienKhach, SetTienKhach] = useState(0);
  const [DSNganhHang, SetDSNganhHang] = useState([]);
  const [TenTimKiem, SetTenTimKiem] = useState("");
  const HienDSNganhHang = async () => {
    try {
      const response = await fetch(host.NganhHang);
      SetDSNganhHang(await response.json());
    } catch (error) {}
  };
  const HienDSLoaiHang = async () => {
    try {
      if (nganh_hang_id !== "") {
        const response = await fetch(
          host.LoaiHangTheoNganhHang + `/${nganh_hang_id}`
        );
        SetDSLoaiHang(await response.json());
        // console.log(DSLoaiHang)
      }
    } catch (error) {}
  };

  const TinhTongTien = () => {
    const DL = window.localStorage.getItem("GioHang")
      ? JSON.parse(window.localStorage.getItem("GioHang"))
      : [];
    let ThanhTien = 0;
    if (DL.length > 0) {
      DL.map((x) => (ThanhTien += x.gia_thuc_nhap * x.so_luong));
      window.localStorage.setItem("TongTienGioHang", ThanhTien);
    } else {
      window.localStorage.setItem("TongTienGioHang", 0);
    }
  };
  const KhachGuiTien = (e) => {
    window.localStorage.setItem("KhachGuiTien", e);
    SetTienKhach(e);
  };
  TinhTongTien();
  const ThanhDoiSoLuong = (SoLuongThanhDoi, x) => {
    const DL = JSON.parse(window.localStorage.getItem("GioHang"));
    const _GioHang = {
      hang_id: x.hang_id,
      ma_hang: x.ma_hang,
      ten_hang: x.ten_hang,
      gia_thuc_nhap: x.gia_thuc_nhap,
      so_luong: SoLuongThanhDoi,
    };
    const newData = [...DL];
    const dataEdit = newData.findIndex((DT) => DT.ma_hang === x.ma_hang);
    newData.splice(dataEdit, 1, _GioHang);
    SetGioHang(newData);
    window.localStorage.setItem("GioHang", JSON.stringify(newData));
  };
  const onClickXoaSanPham = (e) => {
    alert(e);
    const DL = JSON.parse(window.localStorage.getItem("GioHang"));
    const index = DL.findIndex((DT) => DT.ma_hang === e);
    DL.splice(index, 1);
    SetGioHang(DL);
    window.localStorage.setItem("GioHang", JSON.stringify(DL));
    TinhTongTien();
  };
  const onClickMuaHang = (x) => {
    try {
      const _GioHang = {
        hang_id: x.hang_id,
        ma_hang: x.ma_hang,
        ten_hang: x.ten_hang,
        gia_thuc_nhap: x.gia_thuc_nhap,
        so_luong: 1,
      };
      const ma_hang = x.ma_hang;
      if (GioHang.length > 0) {
        // console.log('a')
        var kt = false;
        GioHang.map((x) => {
          if (x.ma_hang === ma_hang) {
            x.so_luong = parseInt(x.so_luong) + 1;
            kt = true;
          } else {
            kt = false;
          }
        });
        if (kt) {
          console.log("abang");
          window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
          alert(
            "Mã hàng :" +
              x.hang_id +
              "Tên sản phẩm : " +
              x.ten_hang +
              "Giá : " +
              x.gia_thuc_nhap
          );
          console.log(x);
        } else {
          console.log("Thêm mới vẫn có dữ liệu");
          GioHang.push(_GioHang);
          window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
          alert(
            "Mã hàng :" +
              x.hang_id +
              "Tên sản phẩm : " +
              x.ten_hang +
              "Giá : " +
              x.gia_thuc_nhap
          );
          console.log(x);
        }
      } else {
        console.log("Thêm khi rỗng");
        GioHang.push(_GioHang);
        window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
        alert(
          "Mã hàng :" +
            x.hang_id +
            "Tên sản phẩm : " +
            x.ten_hang +
            "Giá : " +
            x.gia_thuc_nhap
        );
        console.log(x);
      }
    } catch (error) {}
  };

  const HienThiDSMotDongTrenMotTrang = (row) => {
    try {
      const nDSMatHang = [];
      for (let i = 0; i < DSMatHang.length; i = i + 15) {
        nDSMatHang[i / 15] = [
          DSMatHang[i],
          DSMatHang[i + 1],
          DSMatHang[i + 2],
          DSMatHang[i + 3],
          DSMatHang[i + 4],
          DSMatHang[i + 5],
          DSMatHang[i + 6],
          DSMatHang[i + 7],
          DSMatHang[i + 8],
          DSMatHang[i + 9],
          DSMatHang[i + 10],
          DSMatHang[i + 11],
          DSMatHang[i + 12],
          DSMatHang[i + 13],
          DSMatHang[i + 14],
        ];
      }

      // SetDSMatHangMotTrang(nDSMatHang)
      const _narr = [];
      for (let i = 0; i < nDSMatHang[page].length; i = i + 5) {
        _narr[i / 5] = [
          nDSMatHang[page][i],
          nDSMatHang[page][i + 1],
          nDSMatHang[page][i + 2],
          nDSMatHang[page][i + 3],
          nDSMatHang[page][i + 4],
        ];
      }
      const newMang = [];
      _narr[row].map((x) =>
        x !== undefined ? newMang.push(x) : newMang.push("")
      );
      // console.log(newMang)
      // SetDSMotDongMoiTrang(_narr)

      return (
        <div className='row'>
          {newMang.map((x) => (
            <div
              className={
                window.innerWidth > 1400
                  ? "col"
                  : window.innerWidth > 1100 && window.innerWidth < 1400
                  ? "col-sm-4"
                  : window.innerWidth < 1100 && window.innerWidth > 1000
                  ? "col-sm-6"
                  : "col-sm-8"
              }>
              <img
                className='card-img-top'
                src={x.duong_link === "" ? IMAGENONE : x.duong_link}
                alt='Card image cap'
                hidden={x === "" ? true : false}
                style={
                  window.innerWidth > 1400
                    ? { width: "200px", height: "200px" }
                    : window.innerWidth > 1100 && window.innerWidth < 1400
                    ? { width: "400px", height: "200px" }
                    : window.innerWidth < 1100 && window.innerWidth > 1000
                    ? { width: "500px", height: "200px" }
                    : window.innerWidth < 1000
                    ? { width: "700px", height: "200px" }
                    : { width: "700px", height: "200px" }
                }
                onClick={async () => {
                  onClickMuaHang(x);
                }}
              />

              <div className='card-body'>
                <div className='row d-flex justify-content-center'>
                  <h5 className='card-title'>
                    {x === "" ? "" : "" + x.ten_hang}
                  </h5>
                </div>
                <div className='row d-flex justify-content-center'>
                  {x === "" ? "" : `Số lượng hiện tại : ` + x.SoLuongTon}
                </div>
                <div className='row d-flex justify-content-center'>
                  {x === ""
                    ? ""
                    : x.gia_thuc_nhap.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                </div>
                <div className='row d-flex justify-content-center'>
                  <button
                    className='btn btn-primary'
                    onClick={async () => {
                      onClickMuaHang(x);
                    }}
                    hidden={x === "" ? true : false}>
                    Nhập hàng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } catch (error) {}
  };
  const TimKiemTheoTenSanPham = (e) => {
    try {
      var dulieu = e;
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(async () => {
        SetTenTimKiem(dulieu);
        // alert(dulieu)
      }, 500);
    } catch (error) {}
  };
  const TimTheoLoaiHang = async (e) => {
    try {
      Setloai_hang(e);
      console.log(e);
      // console.log('a')
      const response = await fetch(host.MatHang + `/true/${e}`);
      const JsonData = await response.json();
      console.log(JsonData);
      SetDSMatHang(JsonData);
      SetpageTotal(Math.ceil(JsonData.length / 15));
      // alert('a')
    } catch (error) {}
  };

  // TimTheoLoaiHang(loai_hang)
  React.useEffect(async () => {
    try {
      SetGioHang(
        window.localStorage.getItem("GioHang")
          ? JSON.parse(window.localStorage.getItem("GioHang"))
          : []
      );
      ShowLoader();
      setTimeout(async () => {
        // console.log('a')
        HienDSNganhHang();
        HienDSLoaiHang();
        if (TenTimKiem === "") {
          const response = await fetch(
            host.MatHang + (loai_hang !== "" ? `/true/${loai_hang}` : `/true`)
          );
          const JsonData = await response.json();
          SetDSMatHang(JsonData);
          SetpageTotal(Math.ceil(JsonData.length / 15));
        } else {
          const response = await fetch(
            host.MatHang +
              (TenTimKiem !== "" ? `/true/1/${TenTimKiem}` : `/true`)
          );
          const JsonData = await response.json();
          SetDSMatHang(JsonData);
          SetpageTotal(Math.ceil(JsonData.length / 15));
        }
        HideLoader();
      }, 2000);
      // console.log(pageTotal)
      //  console.log(nDSMatHang)
      //  console.log(nDSMatHang[10]===undefined)
    } catch (error) {
      HideLoader();
    }
  }, [DSMatHang, loai_hang, nganh_hang_id, TenTimKiem]);
  return (
    <React.Fragment>
      <div className='breadcrumbs' style={{ marginBottom: "20px" }}>
        <div className='breadcrumbs-inner'>
          <div className='row m-0'>
            <div className='col-sm-4'>
              <div className='page-header float-left'>
                <div className='page-title'>
                  <h1>Quản lý nhập hàng NCC</h1>
                </div>
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='page-header float-right'>
                <div className='page-title'>
                  <ol className='breadcrumb text-right'>
                    <li>
                      <a href='#'>Quản lý nhập xuất hàng</a>
                    </li>
                    <li>
                      <a href='#'>Quản lý nhập hàng NCC</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* máy poss */}
      <div className='content'>
        <div className='animated fadeIn'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'></strong>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col sm-6'>
                      Tìm kiếm theo ngành hàng
                      <select
                        className='form-control'
                        onChange={(e) => {
                          Setnganh_hang_id(e.target.value);
                          ShowLoader();
                          setTimeout(() => {
                            HideLoader();
                          }, 2500);
                        }}>
                        {DSNganhHang.map((x) => (
                          <option value={x.nganh_hang_id}>
                            {x.ten_nganh_hang}
                          </option>
                        ))}
                      </select>
                      Tìm kiếm sản phẩm
                      <input
                        className='form-control'
                        onChange={async (e) =>
                          TimKiemTheoTenSanPham(e.target.value)
                        }></input>
                    </div>
                    <div className='col sm-6'>
                      Tìm kiếm theo loại hàng
                      <select
                        className='form-control'
                        onChange={(e) => TimTheoLoaiHang(e.target.value)}>
                        <option>Chọn loại hàng</option>
                        {DSLoaiHang.map((x) => (
                          <option value={x.loai_hang_id}>
                            {x.ten_loai_hang}
                          </option>
                        ))}
                      </select>
                      Tìm kiếm mã vạch<br></br>
                      <QuetMaVach></QuetMaVach>
                    </div>
                  </div>
                  <div class='container mt-5'>
                    {HienThiDSMotDongTrenMotTrang(0)}
                    {HienThiDSMotDongTrenMotTrang(1)}
                    {HienThiDSMotDongTrenMotTrang(2)}
                  </div>
                </div>
              </div>{" "}
              {/* .card */}
            </div>
            {/*/.col*/}
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'>Thông số hàng nhập</strong>
                </div>
                <div className='card-body'>
                  <table class='table'>
                    <thead>
                      <tr>
                        <th class='col-xs-3'>Mã hàng</th>
                        <th class='col-xs-3'>Tên hàng</th>
                        <th class='col-xs-6'>Số lượng</th>
                        <th class='col-xs-6'>Giá tiền</th>
                        <th class='col-xs-6'>Tổng</th>
                        <th class='col-xs-6'></th>
                      </tr>
                    </thead>
                    <tbody className='overflow-auto'>
                      {GioHang.map((x) => (
                        <tr>
                          <td class='col-xs-3'>{x.ma_hang}</td>
                          <td class='col-xs-3'>{x.ten_hang}</td>
                          <td class='col-xs-6'>
                            <input
                              className='form-control'
                              style={{ width: "100px" }}
                              value={x.so_luong}
                              onChange={(e) => {
                                const SoLuongThanhDoi = e.target.value;
                                ThanhDoiSoLuong(SoLuongThanhDoi, x);
                              }}></input>
                          </td>
                          <td class='col-xs-6'>
                            {parseInt(x.gia_thuc_nhap).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                          <td class='col-xs-6'>
                            {parseInt(
                              x.so_luong * x.gia_thuc_nhap
                            ).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                          <td class='col-xs-3'>
                            <button
                              className='btn btn-danger'
                              onClick={async () =>
                                onClickXoaSanPham(x.ma_hang)
                              }>
                              Xoá
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className='row ml-3 mb-5'>
                  <div className='col'>
                    Nhân viên :{" "}
                    {
                      JSON.parse(
                        window.localStorage.getItem("dulieunguoidung")
                      )[0].ten_nhan_vien
                    }
                  </div>
                  <div className='col'>
                    <div className='row'>
                      <div className='col'>Thành tiền </div>
                      <div className='col' style={{ marginRight: "200px" }}>
                        {parseInt(
                          window.localStorage.getItem("TongTienGioHang")
                        ).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row ml-3 mb-5'>
                  <div className='col'></div>
                  <div className='col'>
                    <div className='row' style={{ marginRight: "70px" }}>
                      <div className='col'>Trả tiền NCC </div>
                      <div className='col' style={{ marginRight: "150px" }}>
                        <input
                          className='form-control d-flex'
                          style={{ width: "100px" }}
                          onChange={(e) =>
                            KhachGuiTien(e.target.value)
                          }></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row ml-3 mb-5'>
                  <div className='col'></div>
                  <div className='col'>
                    <div className='row' style={{ marginRight: "70px" }}>
                      <div className='col'>Số dư </div>
                      <div className='col' style={{ marginRight: "150px" }}>
                        {(
                          parseInt(
                            window.localStorage.getItem("KhachGuiTien")
                          ) -
                          parseInt(
                            window.localStorage.getItem("TongTienGioHang")
                          )
                        ).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-5'>
                  <div className='col'></div>
                  <div className='col'>
                    <ThanhToan></ThanhToan>
                    {/* <button className="btn btn-primary">Thanh toán</button> */}
                  </div>
                </div>
              </div>{" "}
              {/* .card */}
            </div>
            {/*/.col*/}
          </div>
        </div>
        {/* .animated */}
      </div>
      {/* .content */}

      {/* máy pos */}
      {Loader}
    </React.Fragment>
  );
}

export default QuanLyNhapHangNCC;
