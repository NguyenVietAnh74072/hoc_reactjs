/** @format */

import React from "react";

function PhanDuoiGioHang() {
  const [GioHang, SetGioHang] = React.useState([]);
  const getData = async () => {
    const GioHang =
      window.localStorage.getItem("GioHang") === null
        ? []
        : JSON.parse(window.localStorage.getItem("GioHang"));

    SetGioHang(GioHang);
  };
  const [TongTien, SetTongTien] = React.useState(
    window.localStorage.getItem("Tongtien") === null
      ? 0
      : window.localStorage.getItem("Tongtien")
  );
  const [TienGiaoHang, SetTienGiaoHang] = React.useState(0);
  //
  const TangGiaTri = async (x) => {
    let check = false;
    console.log("test");
    const GioHang =
      window.localStorage.getItem("GioHang") === null
        ? []
        : JSON.parse(window.localStorage.getItem("GioHang"));

    const DL = [];

    if (GioHang.length > 0) {
      GioHang.map((y) => {
        if (y.hang_id === x.hang_id) {
          check = true;
          y.so_luong = parseInt(y.so_luong) + 1;
        } else {
          check = false;
        }
      });
      if (!check) {
        GioHang.push({
          hang_id: x.hang_id,
          ten_hang: x.ten_hang,
          gia_ban_le: x.gia_ban_le,
          duong_link: x.duong_link,
          so_luong: 1,
        });
      } else {
      }
    } else {
      GioHang.push({
        hang_id: x.hang_id,
        ten_hang: x.ten_hang,
        gia_ban_le: x.gia_ban_le,
        duong_link: x.duong_link,
        so_luong: 1,
      });
    }
    let tong_tien = 0;
    GioHang.map((x) => {
      tong_tien += parseInt(x.gia_ban_le) * parseInt(x.so_luong);
    });
    window.localStorage.setItem("TongTien", tong_tien.toString());
    window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
    SetGioHang(GioHang);
  };
  const GiamGiaTri = async (x) => {
    let check = false;
    console.log("test");
    const GioHang =
      window.localStorage.getItem("GioHang") === null
        ? []
        : JSON.parse(window.localStorage.getItem("GioHang"));

    const DL = [];

    if (GioHang.length > 0) {
      GioHang.map((y) => {
        if (y.hang_id === x.hang_id) {
          check = true;
          y.so_luong = y.so_luong - 1;
        } else {
          check = false;
        }
      });
      if (!check) {
        GioHang.push({
          hang_id: x.hang_id,
          ten_hang: x.ten_hang,
          gia_ban_le: x.gia_ban_le,
          duong_link: x.duong_link,
          so_luong: 1,
        });
      }
    } else {
      GioHang.push({
        hang_id: x.hang_id,
        ten_hang: x.ten_hang,
        gia_ban_le: x.gia_ban_le,
        duong_link: x.duong_link,
        so_luong: 1,
      });
    }
    let tong_tien = 0;
    GioHang.map((x) => {
      tong_tien += parseInt(x.gia_ban_le) * parseInt(x.so_luong);
    });
    window.localStorage.setItem("TongTien", tong_tien.toString());
    window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
    SetGioHang(GioHang);
  };
  const ThayDoiGiaTri = async (giatri, x) => {
    let check = false;
    console.log("test");
    const GioHang =
      window.localStorage.getItem("GioHang") === null
        ? []
        : JSON.parse(window.localStorage.getItem("GioHang"));

    const DL = [];

    if (GioHang.length > 0) {
      GioHang.map((y) => {
        if (y.hang_id === x.hang_id) {
          check = true;
          y.so_luong = giatri;
        } else {
          check = false;
        }
      });
      if (!check) {
        GioHang.push({
          hang_id: x.hang_id,
          ten_hang: x.ten_hang,
          gia_ban_le: x.gia_ban_le,
          duong_link: x.duong_link,
          so_luong: 1,
        });
      }
    } else {
      GioHang.push({
        hang_id: x.hang_id,
        ten_hang: x.ten_hang,
        gia_ban_le: x.gia_ban_le,
        duong_link: x.duong_link,
        so_luong: 1,
      });
    }
    let tong_tien = 0;
    GioHang.map((x) => {
      tong_tien += parseInt(x.gia_ban_le) * parseInt(x.so_luong);
    });
    window.localStorage.setItem("TongTien", tong_tien.toString());
    window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
    SetGioHang(GioHang);
  };
  const XoaSanPhamGioHang = async (x) => {
    let check = false;
    console.log(x);
    const GioHang =
      window.localStorage.getItem("GioHang") === null
        ? []
        : JSON.parse(window.localStorage.getItem("GioHang"));

    const DL = [];

    if (GioHang.length > 0) {
      GioHang.map((y) => {
        if (y.hang_id === x.hang_id) {
          check = true;
        } else {
          DL.push(y);
        }
      });
    }
    let tong_tien = 0;
    DL.map((x) => {
      tong_tien += parseInt(x.gia_ban_le) * parseInt(x.so_luong);
    });
    window.localStorage.setItem("TongTien", tong_tien.toString());
    window.localStorage.setItem("GioHang", JSON.stringify(DL));
    SetGioHang(DL);
  };

  //
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      {/* Shopping Cart Section Start */}
      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Cart Table Start */}
              <div className='cart-table table-responsive'>
                <table className='table table-bordered'>
                  {/* Table Head Start */}
                  <thead>
                    <tr>
                      <th className='pro-thumbnail'>H??nh ???nh</th>
                      <th className='pro-title'>S???n ph???m</th>
                      <th className='pro-price'>Gi??</th>
                      <th className='pro-quantity'>S??? l?????ng</th>
                      <th className='pro-subtotal'>T???ng gi??</th>
                      <th className='pro-remove'>X??a</th>
                    </tr>
                  </thead>
                  {/* Table Head End */}
                  {/* Table Body Start */}
                  <tbody>
                    {GioHang.map((x) => (
                      <tr>
                        <td className='pro-thumbnail'>
                          <a href='#'>
                            <img
                              className='fit-image'
                              src={x.duong_link}
                              alt='Product'
                            />
                          </a>
                        </td>
                        <td className='pro-title'>
                          <a href='#'>{x.ten_hang}</a>
                        </td>
                        <td className='pro-price'>
                          <span>
                            {parseInt(x.gia_ban_le).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </td>
                        <td className='pro-quantity'>
                          <div className='quantity'>
                            <div className='cart-plus-minus'>
                              <input
                                className='cart-plus-minus-box'
                                value={x.so_luong}
                                type='text'
                                onChange={async (e) => {
                                  var giatri = e.target.value;
                                  ThayDoiGiaTri(giatri, x);
                                }}
                              />
                              <div
                                className='dec qtybutton'
                                onClick={async () => {
                                  GiamGiaTri(x);
                                }}>
                                -
                              </div>
                              <div
                                className='inc qtybutton'
                                onClick={async () => {
                                  TangGiaTri(x);
                                }}>
                                +
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='pro-subtotal'>
                          <span>
                            {parseInt(x.so_luong * x.gia_ban_le).toLocaleString(
                              "vi",
                              {
                                style: "currency",
                                currency: "VND",
                              }
                            )}
                          </span>
                        </td>
                        <td className='pro-remove'>
                          <a
                            onClick={async () => XoaSanPhamGioHang(x)}
                            style={{ cursor: "pointer" }}>
                            <i className='pe-7s-close' />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* Table Body End */}
                </table>
              </div>
              {/* Cart Table End */}
              {/* Cart Button Start */}
              <div className='cart-button-section'>
                <a
                  href='#'
                  className='btn btn-primary btn-hover-dark'
                  style={{ color: "white" }}>
                  C???p nh???p gi??? h??ng
                </a>
                <a
                  href='#'
                  className='btn btn-primary btn-hover-dark'
                  style={{ color: "white" }}>
                  Mua h??ng ti???p
                </a>
                <a
                  href='#'
                  className='btn btn-primary btn-hover-dark'
                  style={{ color: "white" }}>
                  Xo?? gi??? h??ng
                </a>
              </div>
              {/* Cart Button End */}
            </div>
          </div>
          <div className='row mt-10 mb-n10'>
            <div className='col-lg-6 mb-10'>
              <div className='delivery-date-wrapper mb-6'>
                <h3 className='title'>Ng??y giao h??ng</h3>
                <div  className='date-input-label'>
                  <label className='date-label' htmlFor='date-link'>
                    Ch???n th???i ??i???m giao h??ng th??ch h???p:
                  </label>
                  <select className="form-control"
                  style={{fontSize:'16px'}}
                      onChange={async (e)=>{
                        window.localStorage.setItem('NgayGiaoHangKhach',e.target.value.toString())
                      }}>
                              <option style={{fontSize:'16px'}} value=" ">Ch???n th???i ??i???m giao h??ng th??ch h???p</option>
                              <option style={{fontSize:'16px'}} value="Giao h??ng trong gi??? h??nh ch??nh">Giao h??ng trong gi??? h??nh ch??nh</option>
                              <option style={{fontSize:'16px'}} value="Giao h??ng bu???i s??ng">Giao h??ng bu???i s??ng</option>
                              <option style={{fontSize:'16px'}} value="Giao h??ng bu???i chi???u">Giao h??ng bu???i chi???u</option>
                  </select>
                </div>
                <span>Ch??ng t??i giao h??ng trong gi??? h??nh ch??nh.</span>
              </div>
              <div className='input-textarea'>
                <h3 className='title border-0 mb-0'>N???i dung c???a kh??ch h??ng</h3>
                <textarea
                  name='text'
                  id='minitextarea'
                  className='input-cupon-textarea'
                  cols={30}
                  rows={6}
                  defaultValue={""}
                  onChange={e=>{
                    window.localStorage.setItem('NoiDungCuaKhach',e.target.value.toString())
                  }}
                />
              </div>
            </div>
            <div className='col-lg-6 mb-10'>
              {/* Cart Calculation Area Start */}
              <div className='cart-calculator-wrapper'>
                {/* Cart Calculate Items Start */}
                <div className='cart-calculate-items'>
                  {/* Cart Calculate Items Title Start */}
                  <h3 className='title'>Ti???n thanh to??n</h3>
                  {/* Cart Calculate Items Title End */}
                  {/* Responsive Table Start */}
                  <div className='table-responsive'>
                    <table className='table'>
                      <tbody>
                        <tr>
                          <td>T???ng ti???n</td>
                          <td>
                            {parseInt(
                              window.localStorage.getItem("TongTien")
                            ).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Ti???n giao h??ng</td>
                          <td>
                            {parseInt(TienGiaoHang).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                        <tr className='total'>
                          <td>Ti???n ph???i thanh to??n</td>
                          <td className='total-amount'>
                            {" "}
                            {(
                              parseInt(
                                window.localStorage.getItem("TongTien")
                              ) + TienGiaoHang
                            ).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Responsive Table End */}
                </div>
                {/* Cart Calculate Items End */}
                {/* Cart Checktout Button Start */}
                <a
                  style={{ color: "white" }}
                  className='btn btn-primary btn-hover-dark mt-6'
                  onClick={async () => {
                    if(window.localStorage.getItem('NgayGiaoHangKhach') === null || window.localStorage.getItem('NgayGiaoHangKhach') === " "){
                      alert('Ch???n th???i ??i???m giao h??ng th??ch h???p')
                    }else{
                      window.localStorage.setItem("Tab", "Thanh to??n");
                      window.location.href = "./";
                    }
                  }}>
                  Thanh to??n
                </a>
                {/* Cart Checktout Button End */}
              </div>
              {/* Cart Calculation Area End */}
            </div>
          </div>
        </div>
      </div>
      {/* Shopping Cart Section End */}
    </React.Fragment>
  );
}

export default PhanDuoiGioHang;
