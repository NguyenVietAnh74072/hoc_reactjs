/** @format */

import React from "react";

function PhanDuoiMucYeuThich() {
  const [DL, setDL] = React.useState([]);

  const getData = async () => {
    const DanhMucSanPhamThich =
      window.localStorage.getItem("DanhMucSanPhamThich") === null
        ? []
        : JSON.parse(window.localStorage.getItem("DanhMucSanPhamThich"));
    setDL(DanhMucSanPhamThich);
  };
  const ThemGioHang = async (x) => {
    try {
      let check = false;
      // console.log("test");
      const GioHang =
        window.localStorage.getItem("GioHang") === null
          ? []
          : JSON.parse(window.localStorage.getItem("GioHang"));

      const DL = [];

      if (GioHang.length > 0) {
        GioHang.map((y) => {
          if (y.hang_id === x.hang_id) {
            check = true;
            y.so_luong = parseInt(y.so_luong + 1);
          } else {
            check = false;
          }
        });
        console.log(!check);
        if (!check) {
        } else {
          // console.log("aababa");
          // GioHang.push({
          //   hang_id: x.hang_id,
          //   ten_hang: x.ten_hang,
          //   gia_ban_le: x.gia_ban_le,
          //   duong_link: x.duong_link,
          //   so_luong: 1,
          // });
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

      window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
      window.location.href = "./";
    } catch (error) {}
  };

  const XoaSanPhamMucYeuThich = async (x) => {
    try {
      console.log(x);
      const DanhMucSanPhamThich =
        window.localStorage.getItem("DanhMucSanPhamThich") === null
          ? []
          : JSON.parse(window.localStorage.getItem("DanhMucSanPhamThich"));

      const DL = [];
      let check = false;
      DanhMucSanPhamThich.map((y) => {
        if (y.hang_id === x.hang_id) {
        } else {
          DL.push(y);
        }
      });

      window.localStorage.setItem("DanhMucSanPhamThich", JSON.stringify(DL));
      setDL(DL);
    } catch (error) {}
  };
  React.useEffect(() => {
    getData();
  }, []);
  console.log(DL);
  return (
    <React.Fragment>
      {/* Wishlist Section Start */}
      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='wishlist-table table-responsive'>
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th className='pro-thumbnail'>Hình ảnh</th>
                      <th className='pro-title'>Tên sản phẩm</th>
                      <th className='pro-price'>Giá</th>
                      <th className='pro-stock'>Trạng thái sản phẩm</th>
                      <th className='pro-cart'>Thêm giỏ hàng</th>
                      <th className='pro-remove'>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DL.map((x) => (
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
                            {x.gia_ban_le.toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </td>
                        <td className='pro-stock'>
                          <span>
                            {x.SoLuongTon >= 0 ? "Còn hàng" : "Hết hàng"}
                          </span>
                        </td>
                        <td className='pro-cart'>
                          <a
                            className='btn btn-primary btn-hover-secondary'
                            onClick={async () => ThemGioHang(x)}
                            style={{ cursor: "pointer" }}>
                            Thêm giỏ hàng
                          </a>
                        </td>
                        <td className='pro-remove'>
                          <a
                            onClick={async () => XoaSanPhamMucYeuThich(x)}
                            style={{ cursor: "pointer" }}>
                            <i className='pe-7s-close' />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wishlist Section End */}
    </React.Fragment>
  );
}

export default PhanDuoiMucYeuThich;
