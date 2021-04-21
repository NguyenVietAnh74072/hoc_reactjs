import React from 'react'
import DSBanMatHang from '../../components/Body/ThongKe/ThongKeBanMatHang/DSBanMatHang'

function ThongKeBanMatHang() {
    return (
        <React.Fragment>
        <div className='breadcrumbs'>
        <div className='breadcrumbs-inner'>
          <div className='row m-0'>
            <div className='col-sm-4'>
              <div className='page-header float-left'>
                <div className='page-title'>
                  <h1>Thông kê bán mặt hàng</h1>
                </div>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='page-header float-right'>
                <div className='page-title'>
                  <ol className='breadcrumb text-right'>
                    <li>
                      <a href='#'>Thống kê báo cáo</a>
                    </li>
                    <li>
                      <a href='#'>Thông kê bán mặt hàng</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DSBanMatHang></DSBanMatHang>
        </React.Fragment>
    )
}

export default ThongKeBanMatHang
