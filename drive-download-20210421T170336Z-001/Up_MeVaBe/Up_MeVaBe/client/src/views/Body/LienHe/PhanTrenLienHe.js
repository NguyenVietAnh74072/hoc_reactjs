/** @format */

import React from "react";

function PhanTrenLienHe() {
  return (
    <React.Fragment>
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
                <li className='active'> Liên hệ</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Breadcrumb Area End */}
      </div>
    </React.Fragment>
  );
}

export default PhanTrenLienHe;
