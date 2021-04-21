/** @format */

import React from "react";

function Slider() {
  return (
    <React.Fragment>
      {/* Hero/Intro Slider Start */}
      <div className='section'>
        <div className='hero-slider swiper-container'>
          <div className='swiper-wrapper'>
            <div className='hero-slide-item swiper-slide'>
              <div className='hero-slide-bg'>
                <img
                  src='https://sankid.vn/wp-content/uploads/2020/02/81.jpg'
                  alt='Slider Image'
                />
              </div>
              <div className='container'>
                <div className='hero-slide-content'>
                  <h2
                    className='title m-0 text-white'
                    style={{ backgroundColor: "rgba(173,220,197,0.5)" }}>
                    {" "}
                    Ngày mua sắm 1
                  </h2>
                  <p className='text-white'>Ngày &amp; 09-04-2021</p>
                  <a
                    style={{ cursor: "pointer" }}
                    className='btn btn-secondary btn-hover-primary'>
                    Xem sự kiện đang chạy
                  </a>
                </div>
              </div>
            </div>

            <div className='hero-slide-item swiper-slide'>
              <div className='hero-slide-bg'>
                <img
                  src='https://sankid.vn/wp-content/uploads/2020/02/81.jpg'
                  alt='Slider Image'
                />
              </div>
              <div className='container'>
                <div className='hero-slide-content'>
                  <h2
                    className='title m-0 text-white'
                    style={{ backgroundColor: "rgba(173,220,197,0.5)" }}>
                    {" "}
                    Ngày mua sắm 2
                  </h2>
                  <p className='text-white'>Ngày &amp; 09-04-2021</p>
                  <a
                    style={{ cursor: "pointer" }}
                    className='btn btn-secondary btn-hover-primary'>
                    Xem sự kiện đang chạy
                  </a>
                </div>
              </div>
            </div>

            <div className='hero-slide-item swiper-slide'>
              <div className='hero-slide-bg'>
                <img
                  src='https://sankid.vn/wp-content/uploads/2020/02/81.jpg'
                  alt='Slider Image'
                />
              </div>
              <div className='container'>
                <div className='hero-slide-content'>
                  <h2
                    className='title m-0 text-white'
                    style={{ backgroundColor: "rgba(173,220,197,0.5)" }}>
                    {" "}
                    Ngày mua sắm 3
                  </h2>
                  <p className='text-white'>Ngày &amp; 09-04-2021</p>
                  <a
                    style={{ cursor: "pointer" }}
                    className='btn btn-secondary btn-hover-primary'>
                    Xem sự kiện đang chạy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Pagination Start */}
          <div className='swiper-pagination d-md-none' />
          {/* Swiper Pagination End */}
          {/* Swiper Navigation Start */}
          <div className='home-slider-prev swiper-button-prev main-slider-nav d-md-flex d-none'>
            <i className='pe-7s-angle-left' />
          </div>
          <div className='home-slider-next swiper-button-next main-slider-nav d-md-flex d-none'>
            <i className='pe-7s-angle-right' />
          </div>
          {/* Swiper Navigation End */}
        </div>
      </div>
      {/* Hero/Intro Slider End */}
    </React.Fragment>
  );
}

export default Slider;
