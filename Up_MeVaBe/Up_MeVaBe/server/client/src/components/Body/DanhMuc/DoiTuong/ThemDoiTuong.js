/** @format */

import React, { useState } from "react";
import host from "../../../../host/host";
import fnc from "../../../../assets/js/MaHoa";

function ThemDoiTuong({
  DuLieuDoiTuongMoi,
  ChonKieuDoiTuong,
  onClickChonKieuDoiTuong,
}) {
  const [loai_doi_tuong_id, setloai_doi_tuong_id] = useState('1')
  const [ten_doi_tuong, setten_doi_tuong] = useState()
  const [dia_chi, setdia_chi] = useState()
  const [dien_thoai, setdien_thoai] = useState()
  const [ma_so_thue, setma_so_thue] = useState()
  const [no_mua_dau_ky, setno_mua_dau_ky] = useState()
  const [no_ban_dau_ky, setno_ban_dau_ky] = useState()
  const [no_ban, setno_ban] = useState()
  const [no_mua, setno_mua] = useState()
  const [kieu, setkieu] = useState(ChonKieuDoiTuong)
  const [ghi_chu, setghi_chu] = useState()
  const [ngay_sinh, setngay_sinh] = useState()
  const [ngay_bao_cong_no, setngay_bao_cong_no] = useState()
  const [chiet_khau, setchieu_khau] = useState()
  const [vip, setvip] = useState()

  const [DSLoaiDoiTuong,SetDSLoaiDoiTuong] = useState([])
  const onClickThemDoiTuong = async (ChonKieuDoiTuong) => {
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
      console.log({loai_doi_tuong_id,ten_doi_tuong,
        dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_ban_dau_ky,
        kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
        ngay_bao_cong_no,chiet_khau,vip})
      const response = await fetch(host.DoiTuong+`/${kieu}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({loai_doi_tuong_id,ten_doi_tuong,
          dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_ban_dau_ky,
          kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
          ngay_bao_cong_no,chiet_khau,vip}),
      });
      console.log(fnc.Encrypt_LOOP_3DES(response, "key", 1));
      alert("Th??m th??nh c??ng " + (kieu ==='0' ? '?????i t?????ng kh??ch h??ng' : kieu==='1'?'?????i t?????ng NCC' : '?????i t?????ng kh??ch h??ng & NCC'));
      DuLieuDoiTuongMoi(await response.json());
      setloai_doi_tuong_id('1')
      setten_doi_tuong('')
      setdia_chi('')
      setdien_thoai('')
      setma_so_thue('')
      setno_mua_dau_ky('')
      setno_ban_dau_ky('')
      setkieu('')
      setghi_chu('')
      setngay_sinh('')
      setngay_bao_cong_no('')
      setchieu_khau('')
      setvip('')
    } catch (error) {}
  };
  React.useEffect(async () => {
    try {
      setkieu(ChonKieuDoiTuong)
        const response = await fetch(host.LoaiDoiTuong)    
        const JsonData = await response.json()
        SetDSLoaiDoiTuong(JsonData)
      } catch (error) {
      
    }
  },[ChonKieuDoiTuong]);

  const FormThemDoiTuong=(ChonKieuDoiTuong)=>{
      if(ChonKieuDoiTuong=='0'){
          return(
            <React.Fragment>
            <div className='row'>
            <div className='col'>
                      Lo???i ?????i t?????ng
                      <select
                        className='form-control'
                        type='text'
                        onChange={(e) =>
                          setloai_doi_tuong_id(e.target.value)
                        }>
                          {DSLoaiDoiTuong.map(x=>(<option value={x.loai_doi_tuong_id}>{x.ten_loai_doi_tuong}</option>))}
                        </select>
                    </div>
                    <div className='col'>
                      T??n ?????i t?????ng
                      <input
                        className='form-control'
                        type='text'
                        value={ten_doi_tuong}
                        onChange={(e) =>
                          setten_doi_tuong(e.target.value)
                        }></input>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      ?????a ch???
                      <input
                        className='form-control'
                        type='text'
                        value={dia_chi}
                        onChange={(e) =>
                          setdia_chi(e.target.value)
                        }/>
                    </div>
                    <div className='col'>
                      ??i???n tho???i
                      <input
                        className='form-control'
                        type='text'
                        value={dien_thoai}
                        onChange={(e) =>
                          setdien_thoai(e.target.value)
                        }></input>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      M?? s??? thu???
                      <input
                        className='form-control'
                        type='text'
                        value={ma_so_thue}
                        onChange={(e) =>
                          setma_so_thue(e.target.value)
                        }/>
                    </div>
                    <div className='col'>
                      N??? ?????u k??? c???a KH
                      <input
                        className='form-control'
                        type='text'
                        value={no_mua_dau_ky}
                        onChange={(e) =>
                          setno_mua_dau_ky(e.target.value)
                        }></input>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      Ng??y sinh
                      <input
                        className='form-control'
                        type='date'
                        value={ngay_sinh}
                        onChange={(e) =>
                          setngay_sinh(e.target.value)
                        }/>
                    </div>
                    <div className='col'>
                      Ng??y c???nh b??o n???
                      <input
                        className='form-control'
                        type='text'
                        value={ngay_bao_cong_no}
                        onChange={(e) =>
                          setngay_bao_cong_no(e.target.value)
                        }></input>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      Chi???t kh???u
                      <input
                        className='form-control'
                        type='text'
                        value={chiet_khau}
                        onChange={(e) =>
                          setchieu_khau(e.target.value)
                        }/>
                    </div>
                    <div className='col'>
                      Th???
                      <select
                        className='form-control'
                        onChange={(e) =>
                          setvip(e.target.value)
                        }>
                          <option value="">Xin vui l??ng ch???n th???</option>
                          <option value="0">Th?????ng</option>
                          <option value="1">VIP</option>
                        </select>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      Ghi ch??
                      <input
                        className='form-control'
                        type='text'
                        value={ghi_chu}
                        onChange={(e) => setghi_chu(e.target.value)}></input>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='exampleRadios'
                          id='idradiokh'
                          defaultValue='option1'
                          checked={
                            ChonKieuDoiTuong === "0" ? true : false
                          }
                          onClick={async ()=>onClickChonKieuDoiTuong('0')}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='idradiokh'
                          >
                          Kh??ch h??ng
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='exampleRadios'
                          id='idradioncc'
                          defaultValue='option1'
                          checked={
                            ChonKieuDoiTuong === "1" ? true : false
                          }
                          onClick={async ()=>onClickChonKieuDoiTuong('1')}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='idradioncc'
                          >
                          Nh?? cung c???p
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='exampleRadios'
                          id='idradiokhncc'
                          checked={
                            ChonKieuDoiTuong === "1" ? true : false
                          }
                          onClick={async ()=>onClickChonKieuDoiTuong('2')}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='idradiokhncc'
                          >
                          Kh??ch h??ng {"&"} Nh?? cung c???p
                        </label>
                      </div>
                    </div>
                  </div>
            </React.Fragment>
          )
      }
      else if(ChonKieuDoiTuong=='1'){
        return(
          <React.Fragment>
          <div className='row'>
          <div className='col'>
                    Lo???i ?????i t?????ng
                    <select
                      className='form-control'
                      type='text'
                      onChange={(e) =>
                        setloai_doi_tuong_id(e.target.value)
                      }>
                        {DSLoaiDoiTuong.map(x=>(<option value={x.loai_doi_tuong_id}>{x.ten_loai_doi_tuong}</option>))}
                      </select>
                  </div>
                  <div className='col'>
                    T??n ?????i t?????ng
                    <input
                      className='form-control'
                      type='text'
                      value={ten_doi_tuong}
                      onChange={(e) =>
                        setten_doi_tuong(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    ?????a ch???
                    <input
                      className='form-control'
                      type='text'
                      value={dia_chi}
                      onChange={(e) =>
                        setdia_chi(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    ??i???n tho???i
                    <input
                      className='form-control'
                      type='text'
                      value={dien_thoai}
                      onChange={(e) =>
                        setdien_thoai(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    M?? s??? thu???
                    <input
                      className='form-control'
                      type='text'
                      value={ma_so_thue}
                      onChange={(e) =>
                        setma_so_thue(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    N??? ?????u k??? c???a NCC
                    <input
                      className='form-control'
                      type='text'
                      value={no_ban_dau_ky}
                      onChange={(e) =>
                        setno_ban_dau_ky(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Ng??y sinh
                    <input
                      className='form-control'
                      type='date'
                      value={ngay_sinh}
                      onChange={(e) =>
                        setngay_sinh(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    Ng??y c???nh b??o n???
                    <input
                      className='form-control'
                      type='text'
                      value={ngay_bao_cong_no}
                      onChange={(e) =>
                        setngay_bao_cong_no(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Chi???t kh???u
                    <input
                      className='form-control'
                      type='text'
                      value={chiet_khau}
                      onChange={(e) =>
                        setchieu_khau(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    Th???
                    <select
                      className='form-control'
                      onChange={(e) =>
                        setvip(e.target.value)
                      }>
                        <option value="">Xin vui l??ng ch???n th???</option>
                        <option value="0">Th?????ng</option>
                        <option value="1">VIP</option>
                      </select>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Ghi ch??
                    <input
                      className='form-control'
                      type='text'
                      value={ghi_chu}
                      onChange={(e) => setghi_chu(e.target.value)}></input>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='idradiokh'
                        defaultValue='option1'
                        checked={
                          ChonKieuDoiTuong === "0" ? true : false
                        }
                        onClick={async ()=>onClickChonKieuDoiTuong('0')}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='idradiokh'
                        >
                        Kh??ch h??ng
                      </label>
                    </div>
                  
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='idradioncc'
                        defaultValue='option1'
                        checked={
                          ChonKieuDoiTuong === "1" ? true : false
                        }
                        onClick={async ()=>onClickChonKieuDoiTuong('1')}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='idradioncc'
                        >
                        Nh?? cung c???p
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='idradiokhncc'
                        defaultValue='option1'
                        checked={
                          ChonKieuDoiTuong === "2" ? true : false
                        }
                        onClick={async ()=>onClickChonKieuDoiTuong('2')}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='idradiokhncc'
                        >
                        Kh??ch h??ng {"&"} Nh?? cung c???p
                      </label>
                    </div>
                  </div>
                </div>
          </React.Fragment>
        )
      }
      else if(ChonKieuDoiTuong=='2'){
        return(
          <React.Fragment>
          <div className='row'>
          <div className='col'>
                    Lo???i ?????i t?????ng
                    <select
                      className='form-control'
                      type='text'
                      onChange={(e) =>
                        setloai_doi_tuong_id(e.target.value)
                      }>
                        {DSLoaiDoiTuong.map(x=>(<option value={x.loai_doi_tuong_id}>{x.ten_loai_doi_tuong}</option>))}
                      </select>
                  </div>
                  <div className='col'>
                    T??n ?????i t?????ng
                    <input
                      className='form-control'
                      type='text'
                      value={ten_doi_tuong}
                      onChange={(e) =>
                        setten_doi_tuong(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    ?????a ch???
                    <input
                      className='form-control'
                      type='text'
                      value={dia_chi}
                      onChange={(e) =>
                        setdia_chi(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    ??i???n tho???i
                    <input
                      className='form-control'
                      type='text'
                      value={dien_thoai}
                      onChange={(e) =>
                        setdien_thoai(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    M?? s??? thu???
                    <input
                      className='form-control'
                      type='text'
                      value={ma_so_thue}
                      onChange={(e) =>
                        setma_so_thue(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    N??? ?????u k??? c???a KH
                    <input
                      className='form-control'
                      type='text'
                      value={no_mua_dau_ky}
                      onChange={(e) =>
                        setno_mua_dau_ky(e.target.value)
                      }></input>
                  </div>

                </div>
                <div className='row'>
                  <div className='col'>
                    Ng??y sinh
                    <input
                      className='form-control'
                      type='date'
                      value={ngay_sinh}
                      onChange={(e) =>
                        setngay_sinh(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    N??? ?????u k??? c???a NCC
                    <input
                      className='form-control'
                      type='text'
                      value={no_ban_dau_ky}
                      onChange={(e) =>
                        setno_ban_dau_ky(e.target.value)
                      }></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Chi???t kh???u
                    <input
                      className='form-control'
                      type='text'
                      value={chiet_khau}
                      onChange={(e) =>
                        setchieu_khau(e.target.value)
                      }/>
                  </div>
                  <div className='col'>
                    Th???
                    <select
                      className='form-control'
                      onChange={(e) =>
                        setvip(e.target.value)
                      }>
                        <option value="">Xin vui l??ng ch???n th???</option>
                        <option value="0">Th?????ng</option>
                        <option value="1">VIP</option>
                      </select>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    Ghi ch??
                    <input
                      className='form-control'
                      type='text'
                      value={ghi_chu}
                      onChange={(e) => setghi_chu(e.target.value)}></input>
                  </div>
                  <div className='col'>
                    Ng??y c???nh b??o n???
                    <input
                      className='form-control'
                      type='text'
                      value={ngay_bao_cong_no}
                      onChange={(e) =>
                        setngay_bao_cong_no(e.target.value)
                      }></input>
                  </div>
                </div>

                <div className='row mt-2'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='idradiokh'
                        defaultValue='option1'
                        checked={
                          ChonKieuDoiTuong === "0" ? true : false
                        }
                        onClick={async ()=>onClickChonKieuDoiTuong('0')}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='idradiokh'
                        >
                        Kh??ch h??ng
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='idradioncc'
                        defaultValue='option1'
                        checked={
                          ChonKieuDoiTuong === "1" ? true : false
                        }
                        onClick={async ()=>onClickChonKieuDoiTuong('1')}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='idradioncc'
                        >
                        Nh?? cung c???p
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='idradiokhncc'
                        defaultValue='option1'
                        checked={
                          ChonKieuDoiTuong === "2" ? true : false
                        }
                        onClick={async ()=>onClickChonKieuDoiTuong('2')}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='idradiokhncc'
                        >
                        Kh??ch h??ng {"&"} Nh?? cung c???p
                      </label>
                    </div>
                  </div>
                </div>
          </React.Fragment>
        )
      }
  }
  return (
    <React.Fragment>
      <div className='content'>
        <div className='animated fadeIn'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <strong className='card-title'>Lo???i ?????i t?????ng</strong>
                </div>
                <div className='card-body'>
                  {/* Credit Card */}
                  {FormThemDoiTuong(ChonKieuDoiTuong)}
                  <div className='row mt-4'>
                    <div className='col'></div>
                    <div className='col'>
                      <button
                        className='btn btn-primary'
                        onClick={onClickThemDoiTuong}>
                        Th??m ?????i t?????ng
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

export default ThemDoiTuong;
