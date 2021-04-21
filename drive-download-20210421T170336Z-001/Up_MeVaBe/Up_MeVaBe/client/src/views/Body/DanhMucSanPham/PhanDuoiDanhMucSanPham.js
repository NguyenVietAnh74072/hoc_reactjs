/** @format */

import React from "react";

function PhanDuoiDanhMucSanPham({ SanPham }) {
  const [DanhMucSanPham, SetDanhMucSanPham] = React.useState([]);

  React.useEffect(() => {
    SetDanhMucSanPham(JSON.parse(window.localStorage.getItem("DanhMuc")));
  }, []);
  // console.log(SanPham)
  const ThemSanPhamThich = (x) => {
    console.log(x);
    const DanhMucSanPhamThich =
      window.localStorage.getItem("DanhMucSanPhamThich") === null
        ? []
        : JSON.parse(window.localStorage.getItem("DanhMucSanPhamThich"));
    alert("Đã thêm vào mục thích!");
    DanhMucSanPhamThich.push(x);
    window.localStorage.setItem(
      "DanhMucSanPhamThich",
      JSON.stringify(DanhMucSanPhamThich)
    );
    window.location.href = "./";
  };
  const ThemGioHang = async (x) => {
    try {
      let check = false;
      alert("Thêm giỏ hàng thành công!");
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
        if (!check) {
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
      let tong_tien = 0;
      GioHang.map((x) => {
        tong_tien += parseInt(x.gia_ban_le) * parseInt(x.so_luong);
      });
      window.localStorage.setItem("TongTien", tong_tien.toString());
      window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
      window.location.href = "./";
    } catch (error) {}
  };
  return (
    <React.Fragment>
      {/* Shop Section Start */}
      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-12'>
              {/*shop toolbar start*/}
              <div className='shop_toolbar_wrapper flex-column flex-md-row pb-10 mb-n4'>
                {/* Shop Top Bar Left start */}
                <div className='shop-top-bar-left mb-4'>
                  <div className='shop_toolbar_btn'>
                    <button
                      data-role='grid_3'
                      type='button'
                      className='btn-grid-3'
                      title='Grid'>
                      <i className='fa fa-th' />
                    </button>
                    <button
                      data-role='grid_list'
                      type='button'
                      className='active btn-list'
                      title='List'>
                      <i className='fa fa-list' />
                    </button>
                  </div>
                  <div className='shop-top-show'>
                    <span>Hiển thị 1–12 trên 39 sản phẩm</span>
                  </div>
                </div>
                {/* Shop Top Bar Left end */}
                {/* Shopt Top Bar Right Start */}
                <div className='shop-top-bar-right mb-4'>
                  <h4 className='title me-2'>Tìm kiếm theo: </h4>
                  <div className='shop-short-by'>
                    <select
                      className='nice-select'
                      aria-label='.form-select-sm example'>
                      <option selected>Tìm kiếm theo Default</option>
                      <option value={1}>Tìm kiếm theo Popularity</option>
                      <option value={2}>Tìm kiếm theo Rated</option>
                      <option value={3}>Tìm kiếm theo Latest</option>
                      <option value={3}>Tìm kiếm theo Price</option>
                      <option value={3}>Tìm kiếm theo Price</option>
                    </select>
                  </div>
                </div>
                {/* Shopt Top Bar Right End */}
              </div>
              {/*shop toolbar end*/}
              {/* Shop Wrapper Start */}
              <div className='row shop_wrapper grid_list'>
                {/* Single Product Start */}
                {SanPham.map((x) => (
                  <div className='col-12 product'>
                    <div className='product-inner'>
                      <div className='thumb'>
                        <a
                          style={{ cursor: "pointer" }}
                          className='image'
                          onClick={async () => {
                            window.localStorage.setItem("Tab", "Sản phẩm");
                            window.localStorage.setItem(
                              "onClickSanPham",
                              JSON.stringify(x)
                            );
                            window.location.href = "/";
                          }}>
                          <img
                            className='first-image'
                            src={x.duong_link}
                            alt='Product'
                          />
                          <img
                            className='second-image fit-image'
                            src={x.duong_link}
                            alt='Product'
                          />
                        </a>
                        <span className='badges'>
                          {/* <span className="sale">-18%</span> */}
                        </span>
                        <div className='actions'>
                          <a
                            style={{ cursor: "pointer" }}
                            className='action wishlist'
                            onClick={async () => {
                              ThemSanPhamThich(x);
                            }}>
                            <i className='pe-7s-like' />
                          </a>
                          {/* <a href="compare.html" className="action compare"><i className="pe-7s-refresh-2" /></a>
                            <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#quick-view"><i className="pe-7s-search" /></a> */}
                        </div>
                        <div className='add-cart-btn'>
                          <button
                            className='btn btn-whited btn-hover-primary text-capitalize add-to-cart'
                            onClick={async () => ThemGioHang(x)}>
                            Thêm giỏ hàng
                          </button>
                        </div>
                      </div>
                      <div className='content'>
                        <h5 className='title'>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={async () => {
                              window.localStorage.setItem("Tab", "Sản phẩm");
                              window.localStorage.setItem(
                                "onClickSanPham",
                                JSON.stringify(x)
                              );
                              window.location.href = "/";
                            }}>
                            {x.ten_hang}
                          </a>
                        </h5>
                        <span className='price'>
                          <span
                            className='new'
                            style={{ cursor: "pointer" }}
                            onClick={async () => {
                              window.localStorage.setItem("Tab", "Sản phẩm");
                              window.localStorage.setItem(
                                "onClickSanPham",
                                JSON.stringify(x)
                              );
                              window.location.href = "/";
                            }}>
                            {x.gia_ban_le.toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>

                          {/* <span className="old">$14.50</span> */}
                        </span>
                        <p>{x.ghi_chu}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Shop Wrapper End */}
              {/*shop toolbar start*/}
              <div className='shop_toolbar_wrapper mt-10 mb-n4'>
                {/* Shop Top Bar Left start */}
                {/* <div className="shop-bottom-bar-left mb-4">
            <div className="shop-short-by">
              <select className="nice-select rounded-0" aria-label=".form-select-sm example">
                <option selected>Show 12 Per Page</option>
                <option value={1}>Show 12 Per Page</option>
                <option value={2}>Show 24 Per Page</option>
                <option value={3}>Show 15 Per Page</option>
                <option value={3}>Show 30 Per Page</option>
              </select>
            </div>
          </div> */}
                {/* Shop Top Bar Left end */}
                {/* Shopt Top Bar Right Start */}
                <div className='shop-top-bar-right mb-4'>
                  <nav>
                    <ul className='pagination'>
                      <li className='page-item disabled'>
                        <a
                          className='page-link rounded-0'
                          href='#'
                          aria-label='Previous'>
                          <span aria-hidden='true'>«</span>
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link active' href='#'>
                          1
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          2
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          3
                        </a>
                      </li>
                      <li className='page-item'>
                        <a
                          className='page-link rounded-0'
                          href='#'
                          aria-label='Next'>
                          <span aria-hidden='true'>»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Shopt Top Bar Right End */}
              </div>
              {/*shop toolbar end*/}
            </div>
            <div className='col-lg-3 col-12'>
              {/* Sidebar Widget Start */}
              <aside className='sidebar_widget mt-10 mt-lg-0'>
                <div className='widget_inner'>
                  <div className='widget-list mb-10'>
                    <h3 className='widget-title mb-6'>Tìm kiếm</h3>
                    <div className='search-box'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Tìm kiếm sản phẩm . . .'
                        aria-label='Search Our Store'
                      />
                      <button
                        className='btn btn-primary btn-hover-secondary'
                        type='button'>
                        <i className='fa fa-search' />
                      </button>
                    </div>
                  </div>

                  <div className='widget-list mb-10'>
                    <h3 className='widget-title mb-6'>Danh mục sản phẩm</h3>
                    <div className='sidebar-body'>
                      <ul className='sidebar-list'>
                        {DanhMucSanPham.map((x) => (
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={async () => {
                                window.localStorage.setItem(
                                  "onClickDanhMuc",
                                  JSON.stringify(x)
                                );
                                window.location.href = "./";
                              }}>
                              {x.ten_loai_hang}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* <div className="widget-list mb-10">
              <h3 className="widget-title mb-6">Tags</h3>
              <div className="sidebar-body">
                <ul className="tags mb-n2">
                  <li><a href="#">Babys Toy</a></li>
                  <li><a href="#">Toy Factory</a></li>
                  <li><a href="#">Toy Fashion</a></li>
                  <li><a href="#">Watch</a></li>
                  <li><a href="#">Handmade</a></li>
                  <li><a href="#">Lather</a></li>
                  <li><a href="#">Fabrics</a></li>
                </ul>
              </div>
            </div> */}

                  <div className='widget-list'>
                    <h3 className='widget-title mb-6'>
                      Sản phẩm liên quan danh mục
                    </h3>
                    <div className='sidebar-body product-list-wrapper mb-n6'>
                      {/* Single Product List Start */}
                      <div className='single-product-list mb-6'>
                        {/* Product List Thumb Start */}
                        <div className='product'>
                          <div className='thumb'>
                            <a href='single-product.html' className='image'>
                              <img
                                className='fit-image first-image'
                                src='assets/images/products/small-product/1.jpg'
                                alt='Product Image'
                              />
                              <img
                                className='fit-image second-image'
                                src='assets/images/products/small-product/10.jpg'
                                alt='Product Image'
                              />
                            </a>
                          </div>
                        </div>
                        {/* Product List Thumb End */}
                        {/* Product List Content Start */}
                        <div className='product-list-content'>
                          <h6 className='product-name'>
                            <a href='single-product.html'>
                              9. Without shortcode product
                            </a>
                          </h6>
                          <span className='price'>
                            <span className='new'>$12.50</span>
                            <span className='old'>$15.85</span>
                          </span>
                        </div>
                        {/* Product List Content End */}
                      </div>
                      {/* Single Product List End */}
                      {/* Single Product List Start */}
                      <div className='single-product-list mb-6'>
                        {/* Product List Thumb Start */}
                        <div className='product'>
                          <div className='thumb'>
                            <a href='single-product.html' className='image'>
                              <img
                                className='fit-image first-image'
                                src='assets/images/products/small-product/2.jpg'
                                alt='Product Image'
                              />
                              <img
                                className='fit-image second-image'
                                src='assets/images/products/small-product/9.jpg'
                                alt='Product Image'
                              />
                            </a>
                          </div>
                        </div>
                        {/* Product List Thumb End */}
                        {/* Product List Content Start */}
                        <div className='product-list-content'>
                          <h6 className='product-name'>
                            <a href='single-product.html'>
                              Variable with soldout product
                            </a>
                          </h6>
                          <span className='price'>
                            <span className='new'>$10.50</span>
                            <span className='old'>$12.85</span>
                          </span>
                        </div>
                        {/* Product List Content End */}
                      </div>
                      {/* Single Product List End */}
                      {/* Single Product List Start */}
                      <div className='single-product-list mb-6'>
                        {/* Product List Thumb Start */}
                        <div className='product'>
                          <div className='thumb'>
                            <a href='single-product.html' className='image'>
                              <img
                                className='fit-image first-image'
                                src='assets/images/products/small-product/3.jpg'
                                alt='Product Image'
                              />
                              <img
                                className='fit-image second-image'
                                src='assets/images/products/small-product/8.jpg'
                                alt='Product Image'
                              />
                            </a>
                          </div>
                        </div>
                        {/* Product List Thumb End */}
                        {/* Product List Content Start */}
                        <div className='product-list-content'>
                          <h6 className='product-name'>
                            <a href='single-product.html'>
                              11. Product with video
                            </a>
                          </h6>
                          <span className='price'>
                            <span className='new'>$22.50</span>
                            <span className='old'>$25.85</span>
                          </span>
                        </div>
                        {/* Product List Content End */}
                      </div>
                      {/* Single Product List End */}
                    </div>
                  </div>
                </div>
              </aside>
              {/* Sidebar Widget End */}
            </div>
          </div>
        </div>
      </div>
      {/* Shop Section End */}
    </React.Fragment>
  );
}

export default PhanDuoiDanhMucSanPham;
