/** @format */

import React from "react";

function Footer() {
  return (
    <React.Fragment>
      {/* Footer Section Start */}
      <footer className='section footer-section'>
        {/* Footer Top Start */}
        <div className='footer-top bg-primary section-padding'>
          <div className='container'>
            <div className='row mb-n8'>
              <div className='col-12 col-sm-6 col-lg-3 mb-8'>
                <div className='single-footer-widget'>
                  <h1 className='widget-title'>Thông tin</h1>
                  <p className='desc-content' style={{ textAlign: "justify" }}>
                    Cửa hàng Mẹ và Bé là cửa hàng trẻ em trực tuyến hàng đầu tại
                    Việt Nam cung cấp đồ chơi, quần áo và các sản phẩm trẻ em
                    chất lượng cao khác với giá rẻ. LucLac.vn đã mang đến cho
                    khách hàng những lựa chọn tốt nhất về sản phẩm với mức giá
                    cạnh tranh nhất. Và chúng tôi đảm bảo vời các mặt hàng phù
                    hợp với mọi ngân sách. Hãy thuyết phục bản thân và mua từ
                    chúng tôi ngay hôm nay !
                  </p>
                  {/* Soclial Link Start */}
                  <div className='widget-social justify-content-start mb-n2'>
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
                  {/* Social Link End */}
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-3 mb-8'>
                <div className='single-footer-widget'>
                  <h2 className='widget-title'>Liên hệ</h2>
                  <ul className='contact-links'>
                    <li>
                      <i className='pe-7s-home' />{" "}
                      <span>
                        Địa chỉ : Số nhà 10, Ngõ 115 Hồ Sen, Thành phố Hải
                        Phòng, Việt Nam
                      </span>{" "}
                    </li>
                    <li>
                      <i className='pe-7s-mail' />
                      <a href='mailto:info@example.com'> demo@gmail.com</a>
                    </li>
                    <li>
                      <i className='pe-7s-call' />
                      <a href='tel:0366262072'> 0366262072</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-3 mb-8'>
                <div className='single-footer-widget aos-init aos-animate'>
                  <h2 className='widget-title'>Đường dẫn</h2>
                  <ul className='widget-list'>
                    <li>
                      <a href='./'>Trang chủ</a>
                    </li>
                    <li>
                      <a href='contact.html'>Danh mục sản phẩm</a>
                    </li>
                    <li>
                      <a href='contact.html'>Giới thiệu</a>
                    </li>
                    <li>
                      <a href='contact.html'>Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-sm-6 col-lg-3 mb-8'>
                <div className='single-footer-widget'>
                  <h2 className='widget-title'>
                    Đăng ký để nhận thông tin mới nhất
                  </h2>
                  <div className='widget-body'>
                    {/* Newsletter Form Start */}
                    <div className='newsletter-form-wrap pt-1'>
                      <form id='mc-form' className='mc-form'>
                        <input
                          type='email'
                          id='mc-email'
                          className='form-control email-box mb-4'
                          placeholder='demo@example.com'
                          name='EMAIL'
                        />
                        <button
                          id='mc-submit'
                          className='newsletter-btn'
                          type='submit'>
                          Đăng ký
                        </button>
                      </form>
                      {/* mailchimp-alerts Start */}
                      <div className='mailchimp-alerts text-centre'>
                        <div className='mailchimp-submitting' />
                        {/* mailchimp-submitting end */}
                        <div className='mailchimp-success text-success' />
                        {/* mailchimp-success end */}
                        <div className='mailchimp-error text-danger' />
                        {/* mailchimp-error end */}
                      </div>
                      {/* mailchimp-alerts end */}
                    </div>
                    {/* Newsletter Form End */}
                    <p className='desc-content mb-0'>
                      Điền thông tin gmail để được nhận thông tin miễn phí mới
                      nhất
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Top End */}
        {/* Footer Bottom Start */}
        <div className='footer-bottom bg-secondary pt-4 pb-4'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 text-center'>
                <div className='copyright-content'>
                  <p className='mb-0'>
                    © 2021 <strong>Mẹ và bé </strong> Made with{" "}
                    <i className='fa fa-heart text-danger' /> by{" "}
                    <a href='https://Temis.vn/'>Temis.vn.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}
      </footer>
      {/* Footer Section End */}
    </React.Fragment>
  );
}

export default Footer;
