/** @format */

import React from "react";

function PhanTrenSuKien() {
  return (
    <React.Fragment>
      {/* Breadcrumb Section Start */}
      <div className='section'>
        {/* Breadcrumb Area Start */}
        <div className='breadcrumb-area bg-primary'>
          <div className='container'>
            <div className='breadcrumb-content'>
              <ul>
                <li>
                  <a href='index.html'>
                    <i className='fa fa-home' />{" "}
                  </a>
                </li>
                <li className='active'> Sự kiện</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Breadcrumb Area End */}
      </div>
      {/* Breadcrumb Section End */}
    </React.Fragment>
  );
}

export default PhanTrenSuKien;
