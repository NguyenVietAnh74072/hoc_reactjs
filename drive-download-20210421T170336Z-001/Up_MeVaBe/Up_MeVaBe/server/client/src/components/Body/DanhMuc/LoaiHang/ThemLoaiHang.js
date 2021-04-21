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
  const [ten_loai_hang, setten_loai_hang] = useState("");
  const [nganh_hang_id, setnganh_hang_id] = useState("1");
  const [ghi_chu, setghi_chu] = useState("");
  const [DSNganhHang, SetDSNganhHang] = useState([]);
  const [loai_hang_id, Setloai_hang_id] = useState([]);
  const [ten_hang, Setten_hang] = useState([]);
  // Loại hàng
  const classes = useStyles();
  // IMAGE USER ADMIN
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [OnCheckUpdateImage, SetOnCheckUpdateImage] = useState();
  const [url, setUrl] = useState("");

  // Loại hàng
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
      //console.clear()
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
          .ref(`/images/HinhAnhDanhMuc/${ten_loai_hang}.JPG`)
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
              //console.clear()
              storage
                .ref("images")
                .child(`/HinhAnhDanhMuc/${ten_loai_hang}.JPG`.toString())
                .getDownloadURL()
                .then((url) => {
                  console.log(url);
                  setUrl(url);
                  //console.clear()
                });
            }
          },
          (error) => {
            setError(error);
            //console.clear()
          },
          () => {
            storage
              .ref("images")
              .child(`/images/HinhAnhDanhMuc/${ten_loai_hang}.JPG`)
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
      const response = await fetch(host.LoaiHang, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nganh_hang_id,
          ten_loai_hang,
          ghi_chu,
          nguoi_tao,
          trang_thai,
          ngay_tao,
          url,
        }),
      });
      console.log(fnc.Encrypt_LOOP_3DES(response, "key", 1));
      alert("Thêm thành công!");
      setten_loai_hang("");
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
  }, []);
  return (
    <React.Fragment>
      <div className='content'>
        <div className='animated fadeIn'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'>Loại hàng</strong>
                </div>
                <div className='card-body'>
                  {/* Credit Card */}
                  <div className='row'>
                    <div className='col'>
                      Ngành hàng
                      <select
                        className='form-control'
                        onChange={(e) => setnganh_hang_id(e.target.value)}>
                        <option>Chọn ngành hàng Ngành hàng</option>
                        {DSNganhHang.map((x) => (
                          <option value={x.nganh_hang_id}>
                            {x.ten_nganh_hang}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='col'>
                      {/* Ghi chú
                    <input className="form-control" type="text"
                    value={tien_bao_cong_no}
                    onChange={e=>settien_bao_cong_no(e.target.value)}
                    ></input> */}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      Tên loại hàng
                      <input
                        className='form-control'
                        type='text'
                        value={ten_loai_hang}
                        onChange={(e) =>
                          setten_loai_hang(e.target.value)
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
                  <div className='row mt-4'>
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
                  <div className='row mt-4'>
                    <div className='col'></div>
                    <div className='col'>
                      <button
                        className='btn btn-primary'
                        onClick={onClickThemLoaiHang}>
                        Thêm loại hàng
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
