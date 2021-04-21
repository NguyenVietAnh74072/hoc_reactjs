/** @format */

import React from "react";

function ThanhMeunuMobile({ onTab }) {
  const [DanhMuc, SetDanhMuc] = React.useState(
    window.localStorage.getItem("DanhMuc") === null
      ? []
      : JSON.parse(window.localStorage.getItem("DanhMuc"))
  );
  const [GioHang, SetGioHang] = React.useState([]);
  React.useEffect(() => {
    try {
      SetDanhMuc(JSON.parse(window.localStorage.getItem("DanhMuc")));
      SetGioHang(
        window.localStorage.getItem("GioHang") === null
          ? []
          : JSON.parse(window.localStorage.getItem("GioHang"))
      );
      const giohang = JSON.parse(window.localStorage.getItem("GioHang"));
      let tong_tien = 0;

      giohang.map((x) => {
        tong_tien = tong_tien + parseInt(x.so_luong) * parseInt(x.gia_ban_le);
      });
      window.localStorage.setItem("TongTien", tong_tien.toString());
    } catch (error) {}
  }, []);
  return (
    <React.Fragment>
      {/* Mobile Menu Start */}
      <div className='mobile-menu-wrapper'>
        <div className='offcanvas-overlay' />
        {/* Mobile Menu Inner Start */}
        <div className='mobile-menu-inner'>
          {/* Button Close Start */}
          <div className='offcanvas-btn-close'>
            <i className='pe-7s-close' />
          </div>
          {/* Button Close End */}
          {/* Mobile Menu Inner Wrapper Start */}
          <div className='mobile-menu-inner-wrapper'>
            {/* Mobile Menu Search Box Start */}
            <div className='search-box-offcanvas'>
              <form>
                <input
                  className='search-input-offcanvas'
                  type='text'
                  placeholder='Tìm kiếm sản phẩm ...'
                />
                <button className='search-btn'>
                  <i className='pe-7s-search' />
                </button>
              </form>
            </div>
            {/* Mobile Menu Search Box End */}
            {/* Mobile Menu Start */}
            <div className='mobile-navigation'>
              <nav>
                <ul className='mobile-menu'>
                  <li className='has-children'>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={async () => onTab("Index")}>
                      Trang chủ
                    </a>
                  </li>
                  <li className='has-children'>
                    <a href='#'>
                      Danh mục sản phẩm{" "}
                      <i className='fa fa-angle-down' aria-hidden='true' />
                    </a>
                    <ul className='dropdown'>
                      {DanhMuc.map((x) => (
                        <a
                          onClick={async () => {
                            window.localStorage.setItem(
                              "onClickDanhMuc",
                              JSON.stringify(x)
                            );
                            window.localStorage.setItem("Tab", "Danh mục");
                            onTab("Danh mục");
                          }}
                          style={{ cursor: "pointer" }}>
                          {x.ten_loai_hang}
                        </a>
                      ))}
                    </ul>
                  </li>
                  <li className='has-children'>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={async () => onTab("Giới thiệu")}>
                      Giới thiệu{" "}
                    </a>
                  </li>
                  {/* <li className="has-children">
              <a style={{cursor:'pointer'}} onClick={async ()=>onTab('Sự kiện')}>Sự kiện </a>
            </li> */}

                  <li className='has-children'>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={async () => onTab("Liên hệ")}>
                      Liên hệ{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='mt-auto bottom-0'>
              {/* Contact Links Start */}
              <ul className='contact-links'>
                <li>
                  <i className='fa fa-phone' />
                  <a href='#'> 0366262072</a>
                </li>
                <li>
                  <i className='fa fa-envelope-o' />
                  <a href='#'> demo@gmail.com</a>
                </li>
                <li>
                  <i className='fa fa-clock-o' />{" "}
                  <span>Thứ 2 - Thứ 7 8:00 - 22:30</span>{" "}
                </li>
              </ul>
              {/* Contact Links End */}
              {/* Social Widget Start */}
              <div className='widget-social'>
                <a title='Facebook' href='#'>
                  <i className='fa fa-facebook-f' />
                </a>
                <a title='Twitter' href='#'>
                  <i className='fa fa-twitter' />
                </a>
                <a title='Linkedin' href='#'>
                  <i className='fa fa-linkedin' />
                </a>
                <a title='Youtube' href='#'>
                  <i className='fa fa-youtube' />
                </a>
                <a title='Vimeo' href='#'>
                  <i className='fa fa-vimeo' />
                </a>
              </div>
              {/* Social Widget Ende */}
            </div>
            {/* Contact Links/Social Links End */}
          </div>
          {/* Mobile Menu Inner Wrapper End */}
        </div>
        {/* Mobile Menu Inner End */}
      </div>
      {/* Mobile Menu End */}
    </React.Fragment>
  );
}

export default ThanhMeunuMobile;
