/** @format */

import React from "react";
import hosting from "../../../host/hosting";
function SanPhamTheoDanhMuc({ x }) {
  const [SanPham, SetSanPham] = React.useState([]);
  const getData = async () => {
    try {
      // const onClickDanhMuc = JSON.parse(
      //     window.localStorage.getItem('onClickDanhMuc')
      // )
      console.log(x);
      const response = await fetch(hosting.MatHang + `/true/${x.loai_hang_id}`);

      SetSanPham(await response.json());
    } catch (error) {}
  };
  React.useEffect(async () => {
    getData();
  }, []);
  console.log(SanPham);
  return (
    <React.Fragment>
      {/* Product List Banner Section Start */}
      <div className='section section-padding'>
        <div className='container'>
          <div className='row mb-lg-8 mb-6'>
            {/* Section Title Start */}
            <div className='col-lg col-12'>
              <div
                className='section-title mb-0 text-center'
                data-aos='fade-up'
                data-aos-delay={400}>
                <h2 className='title mb-2'>{x.ten_loai_hang}</h2>
                <p>{x.ghi_chu}</p>
              </div>
            </div>
            {/* Section Title End */}
          </div>
          <div className='row mb-n6'>
            {/* Banner Start */}
            <div className='col-lg-4 col-md-12 col-12 mb-6'>
              <div className='banner' data-aos='fade-up' data-aos-delay={200}>
                <a>
                  <img
                    src={x.link_danh_muc}
                    alt='Banner Image'
                    onClick={async () => {
                      window.localStorage.setItem("Tab", "Danh mục");
                      window.localStorage.setItem(
                        "onClickDanhMuc",
                        JSON.stringify(x)
                      );
                      window.location.href = "./";
                    }}
                  />
                </a>
              </div>
            </div>
            {/* Banner End */}
            {/* Product List Start */}
            <div className='col-lg-4 col-md-6 col-12 mb-12'>
              {/* Product List Wrapper Start */}
              <div
                className='product-list-wrapper'
                data-aos='fade-up'
                data-aos-delay={400}>
                {/* Product List Title Start */}
                <div className='product-list-title mb-5'>
                  <h4 className='title'>Sản phẩm bán chạy</h4>
                </div>
                {/* Product List Title End */}
                {/* Product List Carousel Start */}
                <div className='product-list-carousel'>
                  <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
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
                                Happy Kids With Gift
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "67%" }}
                                />
                              </span>
                              <span className='rating-num'>(4)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$12.50</span>
                              <span className='old'>$15.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
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
                              <a href='single-product.html'>Baby Cat Doll</a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "80%" }}
                                />
                              </span>
                              <span className='rating-num'>(3)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$10.50</span>
                              <span className='old'>$12.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
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
                                Mini Car Toy for Kids
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "50%" }}
                                />
                              </span>
                              <span className='rating-num'>(6)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$22.50</span>
                              <span className='old'>$25.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/4.jpg'
                                  alt='Product Image'
                                />
                                <img
                                  className='fit-image second-image'
                                  src='assets/images/products/small-product/7.jpg'
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
                                Dinosaur Toys for Baby
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "60%" }}
                                />
                              </span>
                              <span className='rating-num'>(5)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$18.50</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/5.jpg'
                                  alt='Product Image'
                                />
                                <img
                                  className='fit-image second-image'
                                  src='assets/images/products/small-product/6.jpg'
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
                                Robotics for Kids{" "}
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "75%" }}
                                />
                              </span>
                              <span className='rating-num'>(9)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$20.50</span>
                              <span className='old'>$22.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                      </div>
                      <div className='swiper-slide'>
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/18.jpg'
                                  alt='Product Image'
                                />
                                <img
                                  className='fit-image second-image'
                                  src='assets/images/products/small-product/17.jpg'
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
                                Happy Kids With Gift
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "67%" }}
                                />
                              </span>
                              <span className='rating-num'>(4)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$13.00</span>
                              <span className='old'>$16.00</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/16.jpg'
                                  alt='Product Image'
                                />
                                <img
                                  className='fit-image second-image'
                                  src='assets/images/products/small-product/15.jpg'
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
                                Mini Car Toy for Kids
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "80%" }}
                                />
                              </span>
                              <span className='rating-num'>(3)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$14.50</span>
                              <span className='old'>$15.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/14.jpg'
                                  alt='Product Image'
                                />
                                <img
                                  className='fit-image second-image'
                                  src='assets/images/products/small-product/13.jpg'
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
                                Baby Rocking Horse
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "50%" }}
                                />
                              </span>
                              <span className='rating-num'>(6)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$26.50</span>
                              <span className='old'>$27.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list mb-4'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/12.jpg'
                                  alt='Product Image'
                                />
                                <img
                                  className='fit-image second-image'
                                  src='assets/images/products/small-product/11.jpg'
                                  alt='Product Image'
                                />
                              </a>
                            </div>
                          </div>
                          {/* Product List Thumb End */}
                          {/* Product List Content Start */}
                          <div className='product-list-content'>
                            <h6 className='product-name'>
                              <a href='single-product.html'>Baby Cat Doll</a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "60%" }}
                                />
                              </span>
                              <span className='rating-num'>(5)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$19.50</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                        {/* Single Product List Start */}
                        <div className='single-product-list'>
                          {/* Product List Thumb Start */}
                          <div className='product'>
                            <div className='thumb'>
                              <a href='single-product.html' className='image'>
                                <img
                                  className='fit-image first-image'
                                  src='assets/images/products/small-product/10.jpg'
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
                                Dinosaur Toys for Baby
                              </a>
                            </h6>
                            <span className='ratings justify-content-start mb-3'>
                              <span className='rating-wrap'>
                                <span
                                  className='star'
                                  style={{ width: "75%" }}
                                />
                              </span>
                              <span className='rating-num'>(9)</span>
                            </span>
                            <span className='price'>
                              <span className='new'>$21.50</span>
                              <span className='old'>$22.85</span>
                            </span>
                          </div>
                          {/* Product List Content End */}
                        </div>
                        {/* Single Product List End */}
                      </div>
                    </div>
                    {/* Swiper Pagination Start */}
                    <div className='swiper-pagination d-none' />
                    {/* Swiper Pagination End */}
                    {/* Next Previous Button Start */}
                    <div className='swiper-product-list-next swiper-button-next'>
                      <i className='pe-7s-angle-right' />
                    </div>
                    <div className='swiper-product-list-prev swiper-button-prev'>
                      <i className='pe-7s-angle-left' />
                    </div>
                    {/* Next Previous Button End */}
                  </div>
                </div>
                {/* Product List Carousel End */}
              </div>
              {/* Product List Wrapper End */}
            </div>
            {/* Product List End */}
            {/* Product List Start */}
            <div className='col-lg-4 col-md-6 col-12 mb-6'>
              {/* Product List Wrapper Start */}
              <div
                className='product-list-wrapper'
                data-aos='fade-up'
                data-aos-delay={600}>
                {/* Product List Title Start */}
                <div className='product-list-title mb-5'>
                  <h4 className='title'>Sản phẩm</h4>
                </div>
                {/* Product List Title End */}
                {/* Product List Carousel Start */}
                <div className='product-list-carousel-2'>
                  <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        {/* Single Product List Start */}
                        {SanPham.map((x) => (
                          <div
                            className='single-product-list mb-4'
                            style={{ cursor: "pointer" }}
                            onClick={async () => alert(JSON.stringify(x))}>
                            <div className='product'>
                              <div className='thumb'>
                                <a
                                  style={{ cursor: "pointer" }}
                                  onClick={async () => {
                                    window.localStorage.setItem(
                                      "Tab",
                                      "Sản phẩm"
                                    );
                                    window.localStorage.setItem(
                                      "onClickSanPham",
                                      JSON.stringify(x)
                                    );
                                    window.location.href = "./";
                                  }}
                                  className='image'>
                                  <img
                                    className='fit-image first-image'
                                    src={x.duong_link}
                                    alt='Product Image'
                                  />
                                  <img
                                    className='fit-image second-image'
                                    src={x.duong_link}
                                    alt='Product Image'
                                  />
                                </a>
                              </div>
                            </div>
                            <div className='product-list-content'>
                              <h6 className='product-name'>
                                <a
                                  style={{ cursor: "pointer" }}
                                  onClick={async () => {
                                    window.localStorage.setItem(
                                      "Tab",
                                      "Sản phẩm"
                                    );
                                    window.localStorage.setItem(
                                      "onClickSanPham",
                                      JSON.stringify(x)
                                    );
                                    window.location.href = "./";
                                  }}>
                                  {x.ten_hang}
                                </a>
                              </h6>
                              {/* <span className='ratings justify-content-start mb-3'>
                                <span className='rating-wrap'>
                                  <span
                                    className='star'
                                    style={{ width: "67%" }}
                                  />
                                </span>
                                <span className='rating-num'>(4)</span>
                              </span> */}
                              <span
                                className='price'
                                style={{ cursor: "pointer" }}
                                onClick={async () => {
                                  window.localStorage.setItem(
                                    "Tab",
                                    "Sản phẩm"
                                  );
                                  window.localStorage.setItem(
                                    "onClickSanPham",
                                    JSON.stringify(x)
                                  );
                                  window.location.href = "./";
                                }}>
                                <span className='new'>
                                  {parseInt(x.gia_ban_le).toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </span>
                                {/* <span className='old'>$16.00</span> */}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Swiper Pagination Start */}
                    <div className='swiper-pagination d-none' />
                    {/* Swiper Pagination End */}
                    {/* Next Previous Button Start */}
                    <div className='swiper-product-list-next swiper-button-next'>
                      <i className='pe-7s-angle-right' />
                    </div>
                    <div className='swiper-product-list-prev swiper-button-prev'>
                      <i className='pe-7s-angle-left' />
                    </div>
                    {/* Next Previous Button End */}
                  </div>
                </div>
                {/* Product List Carousel End */}
              </div>
              {/* Product List Wrapper End */}
            </div>
            {/* Product List End */}
          </div>
        </div>
      </div>
      {/* Product List Banner Section End */}
    </React.Fragment>
  );
}

export default SanPhamTheoDanhMuc;
