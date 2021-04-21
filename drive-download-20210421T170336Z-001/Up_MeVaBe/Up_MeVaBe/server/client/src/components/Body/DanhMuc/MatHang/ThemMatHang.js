/** @format */

import React, { useState } from "react";
import host from "../../../../host/host";
import fnc from "../../../../assets/js/MaHoa";
import { makeStyles } from "@material-ui/core/styles";
import { storage } from "../../../../firebase";
import { Card, Button } from "@material-ui/core";
import IMAGENONE from "../../../../assets/images/none-img.png";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function ThemLoaiHang({ DuLieuLoaiHangMoi, trang_thai, TrangThai }) {
  const [user, setUser] = React.useState("");
  //
  const [nganh_hang_id, setnganh_hang_id] = useState("");
  const [loai_hang_id, setloai_hang_id] = useState("");
  const [dvt_id, setdvt_id] = useState();
  const [ghi_chu, setghi_chu] = useState("");
  const [DSMatHang, SetDSMatHang] = useState([]);
  const [DSNganhHang, SetDSNganhHang] = useState([]);
  const [DSLoaiHang, setDSLoaiHang] = useState([]);
  const [DSDonViTinh, SetDSDonViTinh] = useState([]);
  const [so_luong_dau_ky, setso_luong_dau_ky] = useState();
  const [so_luong_phat_sinh, setso_luong_phat_sinh] = useState();
  const [gia_goc, setgia_goc] = useState();
  const [gia_thuc_nhap, setgia_thuc_nhap] = useState();
  const [gia_ban_buon, setgia_ban_buon] = useState();
  const [gia_ban_le, setgia_ban_le] = useState();
  const [ten_biet_duoc, setten_biet_duoc] = useState();
  const [hoat_chat, sethoat_chat] = useState();
  const [nha_san_xuat, setnha_san_xuat] = useState();
  const [so_luong_toi_thieu, setso_luong_toi_thieu] = useState();
  const [ten_hang, setten_hang] = useState();
  const [hanh2, sethanh2] = useState();
  const [hanh3, sethanh3] = useState();
  const [hanh4, sethanh4] = useState();
  const [hsd_toi_thieu, sethsd_toi_thieu] = useState();
  const [hsd_muc_xanh, sethsd_muc_xanh] = useState();
  const [hsd_muc_vang, sethsd_muc_vang] = useState();
  const [hsd_muc_do, sethsd_muc_do] = useState();
  //
  /*
UPDATE ảnh
*/
  //khi nhấn cập nhập sẽ _OnCheckUpdateImage false để loại bỏ disabled
  const classes = useStyles();
  // IMAGE USER ADMIN
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [OnCheckUpdateImage, SetOnCheckUpdateImage] = useState();
  const [url, setUrl] = useState("");

  const handChange = (e) => {
    try {
      const file = e.target.files[0];
      setName(e.target.files[0].name);
      if (file) {
        const fileType = file["type"];
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if (validImageTypes.includes(fileType)) {
          setError("");
          setImage(file);
        }
      } else {
        setError("Xin vui lòng chọn ảnh");
      }
    } catch (error) {
      console.error(error);
      console.clear();
    }
  };

  const handleUpdate = () => {
    if (nganh_hang_id === "") {
      alert("Người dùng chưa chọn ngành hàng");
    } else if (loai_hang_id === "") {
      alert("Người dùng chưa chọn loại hàng");
    } else {
      if (image) {
        SetonClickUpdate(false);
        const uploadTask = storage
          .ref(
            `/images/HinhAnhSanPham/${nganh_hang_id}/${loai_hang_id}/${ten_hang}.JPG`
          )
          .put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
            if (progress === 100) {
              // window.location.href ="/btl-kho-anh/ThongTin"
              console.clear();
              storage
                .ref("images")
                .child(
                  `HinhAnhSanPham/${nganh_hang_id}/${loai_hang_id}/${ten_hang}.JPG`.toString()
                )
                .getDownloadURL()
                .then((url) => {
                  setUrl(url);
                  console.clear();
                });
            }
          },
          (error) => {
            setError(error);
            console.clear();
          },
          () => {
            storage
              .ref("images")
              .child(
                `HinhAnhSanPham/${nganh_hang_id}/${loai_hang_id}/${ten_hang}.JPG`
              )
              .getDownloadURL()
              .then((url) => {
                setUrl(url);
                setProgress(0);
                console.log(url);
              });
          }
        );
      } else {
        alert("Người dùng chưa chọn hình ảnh");
      }
    }
  };

  const [onClickUpdate, SetonClickUpdate] = useState(true);
  /*
UPDATE ảnh
*/

  const onClickThemMatHang = async () => {
    try {
      if (url === "") {
        alert("Người dùng chưa chọn hình ảnh sản phẩm");
      } else {
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
        const response = await fetch(host.MatHang, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ten_hang,
            loai_hang_id,
            nguoi_tao,
            ngay_tao,
            dvt_id,
            so_luong_dau_ky,
            so_luong_phat_sinh,
            gia_goc,
            gia_thuc_nhap,
            gia_ban_buon,
            gia_ban_le,
            ten_biet_duoc,
            hoat_chat,
            nha_san_xuat,
            ghi_chu,
            so_luong_toi_thieu,
            trang_thai,
            ghi_chu,
            hsd_toi_thieu,
            hsd_muc_xanh,
            hsd_muc_vang,
            hsd_muc_do,
            url,
            hanh2,
            hanh3,
            hanh4,
          }),
        });
        console.log(fnc.Encrypt_LOOP_3DES(response, "key", 1));
        setnganh_hang_id("");
        setloai_hang_id("");
        setdvt_id("");
        setghi_chu("");
        setso_luong_dau_ky("");
        setgia_goc("");
        setgia_thuc_nhap("");
        setgia_ban_buon("");
        setgia_ban_le("");
        setten_biet_duoc("");
        setnha_san_xuat("");
        setso_luong_toi_thieu("");
        setten_hang("");
        sethsd_toi_thieu("");
        sethsd_muc_xanh("");
        sethsd_muc_vang("");
        sethsd_muc_do("");
        alert("Thêm thành công!");
        TrangThai(trang_thai);
        console.log(await response.json());
        DuLieuLoaiHangMoi(await response.json());
      }
    } catch (error) {}
  };
  const onChangeNganhHang = async (e) => {
    console.log("test");
    setnganh_hang_id(e);
    console.log(e);
    const response = await fetch(host.LoaiHangTheoNganhHang + `/${e}`);
    const JsonData = await response.json();
    setDSLoaiHang(JsonData);
    console.log(DSLoaiHang);
  };
  const GetDonViTinh = async () => {
    try {
      const response2 = await fetch(host.DonViTinh);
      const JsonData2 = await response2.json();
      SetDSDonViTinh(JsonData2);
    } catch (error) {}
  };
  React.useEffect(async () => {
    try {
      GetDonViTinh();
      TrangThai(trang_thai);
      const response = await fetch(
        host.NganhHangPhanLoaiSuDung + `/${trang_thai}`
      );
      const JsonData = await response.json();
      SetDSNganhHang(JsonData);
    } catch (error) {}
  }, [trang_thai]);

  return (
    <React.Fragment>
      <div className='content'>
        <div className='animated fadeIn'>
          <div className='row mt-3'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'>Mặt hàng</strong>
                </div>
                <div className='card-body'>
                  {/* Credit Card */}
                  <div className='row mt-3'>
                    <div className='col'>
                      Ngành hàng
                      <select
                        className='form-control'
                        onChange={(e) => onChangeNganhHang(e.target.value)}>
                        <option>Chọn ngành hàng Ngành hàng</option>
                        {DSNganhHang.map((x, index) => (
                          <option value={x.nganh_hang_id}>
                            {x.ten_nganh_hang}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='col'>
                      Loại hàng
                      <select
                        className='form-control'
                        onChange={(e) => setloai_hang_id(e.target.value)}>
                        <option>Chọn loại hàng</option>
                        {DSLoaiHang.map((x, index) => (
                          <option value={x.loai_hang_id}>
                            {x.ten_loai_hang}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Tên hàng
                      <input
                        className='form-control'
                        value={ten_hang}
                        onChange={(e) => setten_hang(e.target.value)}></input>
                    </div>
                    <div className='col'>
                      Đơn vị tính
                      <select
                        className='form-control'
                        onChange={(e) => setdvt_id(e.target.value)}>
                        <option>Chọn đơn vị tính</option>
                        {DSDonViTinh.map((x, index) => (
                          <option value={x.dvt_id}>{x.ten_dvt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Số lượng đầu kỳ
                      <input
                        className='form-control'
                        value={so_luong_dau_ky}
                        onChange={(e) =>
                          setso_luong_dau_ky(e.target.value)
                        }></input>
                    </div>
                    <div className='col'>
                      Giá thực nhập
                      <input
                        className='form-control'
                        value={gia_thuc_nhap}
                        onChange={(e) =>
                          setgia_thuc_nhap(e.target.value)
                        }></input>
                      <div style={{ color: "green", marginLeft: "13px" }}>
                        {parseInt(gia_thuc_nhap).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Giá bán lẻ
                      <input
                        className='form-control'
                        value={gia_ban_le}
                        onChange={(e) => setgia_ban_le(e.target.value)}></input>
                      <div style={{ color: "green", marginLeft: "13px" }}>
                        {parseInt(gia_ban_le).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                    <div className='col'>
                      Giá bán buôn
                      <input
                        className='form-control'
                        value={gia_ban_buon}
                        onChange={(e) =>
                          setgia_ban_buon(e.target.value)
                        }></input>
                      <div style={{ color: "green", marginLeft: "13px" }}>
                        {parseInt(gia_ban_buon).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Giá CTV
                      <input
                        className='form-control'
                        value={gia_goc}
                        onChange={(e) => setgia_goc(e.target.value)}></input>
                      <div style={{ color: "green", marginLeft: "13px" }}>
                        {parseInt(gia_goc).toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                    </div>
                    <div className='col'>
                      Số ngày báo HSD
                      <div className='row mt-3'>
                        <div className='col'>
                          <input
                            className='form-control'
                            placeholder='HSD cảnh báo tối thiểu'
                            value={hsd_toi_thieu}
                            onChange={(e) =>
                              sethsd_toi_thieu(e.target.value)
                            }></input>
                        </div>
                        <div className='col'>
                          <input
                            className='form-control'
                            placeholder='Mức cảnh báo xanh'
                            value={hsd_muc_xanh}
                            onChange={(e) =>
                              sethsd_muc_xanh(e.target.value)
                            }></input>
                        </div>
                        <div className='col'>
                          <input
                            className='form-control'
                            placeholder='Mức cảnh báo vàng'
                            value={hsd_muc_vang}
                            onChange={(e) =>
                              sethsd_muc_vang(e.target.value)
                            }></input>
                        </div>
                        <div className='col'>
                          <input
                            className='form-control'
                            placeholder='Mức cảnh báo đỏ'
                            value={hsd_muc_do}
                            onChange={(e) =>
                              sethsd_muc_do(e.target.value)
                            }></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Tên hãng
                      <input
                        className='form-control'
                        value={ten_biet_duoc}
                        onChange={(e) =>
                          setten_biet_duoc(e.target.value)
                        }></input>
                    </div>
                    <div className='col'>
                      Thương hiệu
                      <input
                        className='form-control'
                        value={hoat_chat}
                        onChange={(e) => sethoat_chat(e.target.value)}></input>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Nhà cung cấp
                      <input
                        className='form-control'
                        value={nha_san_xuat}
                        onChange={(e) =>
                          setnha_san_xuat(e.target.value)
                        }></input>
                    </div>
                    <div className='col'>
                      Số lượng tối thiểu
                      <input
                        className='form-control'
                        value={so_luong_toi_thieu}
                        onChange={(e) =>
                          setso_luong_toi_thieu(e.target.value)
                        }></input>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Mô tả
                      <input
                        className='form-control'
                        value={ghi_chu}
                        onChange={(e) => setghi_chu(e.target.value)}></input>
                    </div>
                  </div>

                  <div className='row mt-3 mt-4'>
                    <div className='col text-center'>
                      <img
                        alt='...'
                        className='card-img-top'
                        src={url === "" ? IMAGENONE : url}
                        style={{
                          width: "100vh",
                          height: "100vh",
                          zoom: "0.45",
                        }}
                      />
                    </div>
                    <div className='col'>
                      <span>
                        {!OnCheckUpdateImage
                          ? name.length === 0
                            ? "Xin vui lòng chọn ảnh"
                            : name
                          : ""}
                      </span>
                      <input
                        accept='image/*'
                        className={classes.input}
                        id='contained-button-file'
                        multiple
                        type='file'
                        onChange={handChange}
                        disabled={OnCheckUpdateImage}
                      />
                      <label htmlFor='contained-button-file'>
                        <Button
                          className='ml-2'
                          variant='contained'
                          color='primary'
                          component='span'
                          disabled={OnCheckUpdateImage}>
                          {"Chọn ảnh"}
                        </Button>
                      </label>
                      <Button
                        className='ml-3'
                        variant='contained'
                        color='primary'
                        component='span'
                        disabled={OnCheckUpdateImage}
                        onClick={handleUpdate}>
                        {"Upload"}
                      </Button>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      Hình ảnh 2
                      <input
                        className='form-control'
                        onChange={async (e) =>
                          sethanh2(e.target.value)
                        }></input>
                    </div>
                    <div className='col'>
                      Hình ảnh 3
                      <input
                        className='form-control'
                        onChange={async (e) =>
                          sethanh3(e.target.value)
                        }></input>
                    </div>
                    <div className='col'>
                      Hình ảnh 4
                      <input
                        className='form-control'
                        onChange={async (e) =>
                          sethanh4(e.target.value)
                        }></input>
                    </div>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='idradiosudunghang'
                      id='idradiosudunghang'
                      defaultValue='option1'
                      checked={trang_thai ? true : false}
                      onClick={async () => {
                        TrangThai(true);
                      }}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='idradiosudunghang'
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
                      name='idradiokhongsudunghang'
                      id='idradiokhongsudunghang'
                      defaultValue='option1'
                      checked={!trang_thai}
                      onClick={async () => {
                        TrangThai(false);
                      }}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='idradiokhongsudunghang'
                      onClick={async () => {
                        TrangThai(false);
                      }}>
                      Không sử dụng
                    </label>
                  </div>
                  <div className='progress mb-2' style={{ height: "5px" }}>
                    <div
                      className='progress-bar bg-flat-color-1'
                      role='progressbar'
                      style={{ width: progress + "%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='row mt-3 mt-4'>
                    <div className='col'></div>
                    <div className='col'>
                      <button
                        className='btn btn-primary'
                        onClick={onClickThemMatHang}>
                        Thêm mặt hàng
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
