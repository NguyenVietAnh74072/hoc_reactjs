/** @format */

import React, { useState } from "react";
import host from "../../../../host/host";
import fnc from "../../../../assets/js/MaHoa";

function ThemLoaiHang({ DuLieuLoaiHangMoi, trang_thai, TrangThai }) {
  const [ten_nganh_hang, setten_nganh_hang] = useState("");
  const [nganh_hang_id, setnganh_hang_id] = useState("1");
  const [ghi_chu, setghi_chu] = useState("");
  const [DSNganhHang, SetDSNganhHang] = useState([]);
  const onClickThemLoaiHang = async () => {
    try {
      const data = new Date();
      var ngay_gio_hien_tai =
        data.getFullYear() +
        "-" +
        (data.getMonth() + 1) +
        "-" +
        data.getDate() +
        " " +
        data.getHours() +
        ":" +
        data.getMinutes() +
        ":" +
        data.getSeconds();
      var ngay_tao = ngay_gio_hien_tai;
      var nguoi_tao = JSON.parse(
        window.localStorage.getItem("dulieunguoidung")
      )[0].ten_nhan_vien;
      const response = await fetch(host.NganhHang, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ten_nganh_hang,
          ghi_chu,
          nguoi_tao,
          trang_thai,
          ngay_tao,
        }),
      });
      console.log(fnc.Encrypt_LOOP_3DES(response, "key", 1));
      alert("Thêm thành công!");
      TrangThai(trang_thai);
      setten_nganh_hang("");
      setghi_chu("");
      DuLieuLoaiHangMoi(await response.json());
    } catch (error) {}
  };
  React.useEffect(async () => {
    try {
      TrangThai(trang_thai);
      const response = await fetch(host.NganhHang);
      const JsonData = await response.json();
      SetDSNganhHang(JsonData);
      console.log(DSNganhHang);
    } catch (error) {}
  }, [trang_thai]);
  return (
    <React.Fragment>
      <div className='content'>
        <div className='animated fadeIn'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'>Ngành hàng</strong>
                </div>
                <div className='card-body'>
                  {/* Credit Card */}
                  <div className='row'>
                    <div className='col'>
                      Tên ngành hàng
                      <input
                        className='form-control'
                        type='text'
                        value={ten_nganh_hang}
                        onChange={(e) =>
                          setten_nganh_hang(e.target.value)
                        }></input>
                    </div>
                    <div className='col'>
                      Ghi chú
                      <input
                        className='form-control'
                        type='text'
                        value={ghi_chu}
                        onChange={(e) => setghi_chu(e.target.value)}></input>
                    </div>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='exampleRadios'
                      id='idradiosudung'
                      defaultValue='option1'
                      checked={trang_thai ? true : false}
                      onClick={async () => {
                        TrangThai(true);
                      }}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='idradiosudung'
                      onClick={async () => {
                        TrangThai(true);
                      }}>
                      Sử dụng
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='exampleRadios'
                      id='idradiokhongsudung'
                      defaultValue='option1'
                      checked={!trang_thai}
                      onClick={async () => {
                        TrangThai(false);
                      }}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='idradiokhongsudung'
                      onClick={async () => {
                        TrangThai(false);
                      }}>
                      Không sử dụng
                    </label>
                  </div>

                  <div className='row mt-4'>
                    <div className='col'></div>
                    <div className='col'>
                      <button
                        className='btn btn-primary'
                        onClick={onClickThemLoaiHang}>
                        Thêm Ngành hàng
                      </button>
                    </div>
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
    </React.Fragment>
  );
}
const PhanQuyen = [
  "Nhân viên quản trị",
  "Quản trị viên",
  "Quản lý danh mục",
  "Quản lý bán hàng",
  "Quản lý thu chi",
  "Quản lý thống kê",
  "Quản lý công nợ",
];
export default ThemLoaiHang;
