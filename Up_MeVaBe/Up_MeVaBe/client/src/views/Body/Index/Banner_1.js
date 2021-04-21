/** @format */

import React from "react";

function Banner_1() {
  return (
    <React.Fragment>
      {/* Banner Section Start */}
      <div className='section section-margin'>
        <div className='container'>
          {/* Banners Start */}
          <div className='row'>
            {/* Banner Start */}
            <div className='col-12'>
              <div
                className='banner'
                data-aos='fade-up'
                data-aos-delay={400}
                style={{ zoom: 0.4 }}>
                <a href='shop.html'>
                  <img
                    src='https://686mart.com/wp-content/uploads/2019/08/1402720257_binhsuaa.jpg'
                    alt='Banner Image'
                  />
                </a>
              </div>
            </div>
            {/* Banner End */}
          </div>
          {/* Banners End */}
        </div>
      </div>
      {/* Banner Section End */}
    </React.Fragment>
  );
}

export default Banner_1;
