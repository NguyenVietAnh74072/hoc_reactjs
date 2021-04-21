/** @format */

import React from "react";

function Slider_Logo() {
  return (
    <React.Fragment>
      {/* Brand Logo Section Start */}
      <div
        className='section section-margin-bottom'
        style={{ marginTop: "50px" }}>
        <div className='container'>
          <div className='border-top border-bottom'>
            <div className='row'>
              <div className='col-12' data-aos='fade-up' data-aos-delay={600}>
                {/* Brand Logo Wrapper Start */}
                <div className='brand-logo-carousel arrow-outside-container'>
                  <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                      {/* Single Brand Logo Start */}
                      <div className='swiper-slide single-brand-logo'>
                        <a href='#'>
                          <img
                            src='https://dayconkieunhat.vn/wp-content/uploads/2020/07/su-kien-thang-7-cho-me-va-be-01.jpg'
                            alt='Brand Logo'
                          />
                        </a>
                      </div>
                      {/* Single Brand Logo End */}
                      {/* Single Brand Logo Start */}
                      <div className='swiper-slide single-brand-logo'>
                        <a href='#'>
                          <img
                            src='assets/images/brand-logo/2.png'
                            alt='Brand Logo'
                          />
                        </a>
                      </div>
                      {/* Single Brand Logo End */}
                      {/* Single Brand Logo Start */}
                      <div className='swiper-slide single-brand-logo'>
                        <a href>
                          <img
                            src='assets/images/brand-logo/3.png'
                            alt='Brand Logo'
                          />
                        </a>
                      </div>
                      {/* Single Brand Logo End */}
                      {/* Single Brand Logo Start */}
                      <div className='swiper-slide single-brand-logo'>
                        <a href='#'>
                          <img
                            src='assets/images/brand-logo/4.png'
                            alt='Brand Logo'
                          />
                        </a>
                      </div>
                      {/* Single Brand Logo End */}
                      {/* Single Brand Logo Start */}
                      <div className='swiper-slide single-brand-logo'>
                        <a href='#'>
                          <img
                            src='assets/images/brand-logo/5.png'
                            alt='Brand Logo'
                          />
                        </a>
                      </div>
                      {/* Single Brand Logo End */}
                      {/* Single Brand Logo Start */}
                      <div className='swiper-slide single-brand-logo'>
                        <a href='#'>
                          <img
                            src='assets/images/brand-logo/6.png'
                            alt='Brand Logo'
                          />
                        </a>
                      </div>
                      {/* Single Brand Logo End */}
                    </div>
                    {/* Swiper Pagination Start */}
                    <div className='swiper-pagination d-none' />
                    {/* Swiper Pagination End */}
                    {/* Next Previous Button Start */}
                    <div className='swiper-logo-button-next swiper-button-next swiper-nav-button d-none d-md-flex'>
                      <i className='pe-7s-angle-right' />
                    </div>
                    <div className='swiper-logo-button-prev swiper-button-prev swiper-nav-button d-none d-md-flex'>
                      <i className='pe-7s-angle-left' />
                    </div>
                    {/* Next Previous Button End */}
                  </div>
                </div>
                {/* Brand Logo Wrapper End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Logo Section End */}
    </React.Fragment>
  );
}

export default Slider_Logo;
