/** @format */

import React from "react";

function PhanDuoiLienHe() {

  // 
    
  // 
  return (
    <React.Fragment>
      <div>
        {/* Contact Map Start */}
        <div className='section' data-aos='fade-up' data-aos-delay={300}>
          {/* Google Map Area Start */}
          <div className='google-map-area w-100'>
            <iframe
              className='contact-map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10751.408884807934!2d106.66936100674538!3d20.84348537838151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd467bc3c6c3b75ca!2zU2hvcCBN4bq5ICYgQsOp!5e0!3m2!1svi!2s!4v1617972764991!5m2!1svi!2s'
            />
          </div>
          {/* Google Map Area Start */}
        </div>
        {/* Contact Map End */}
        {/* Contact Us Section Start */}
        <div className='section section-margin'>
          <div className='container'>
            <div className='row mb-n10'>
              <div className='col-12 col-lg-6 mb-10 order-2 order-lg-1'>
                {/* Section Title Start */}
                <div
                  className='contact-title pb-3'
                  data-aos='fade-up'
                  data-aos-delay={300}>
                  <h2 className='title'>Liên hệ</h2>
                </div>
                {/* Section Title End */}
                {/* Contact Form Wrapper Start */}
                <div className='contact-form-wrapper contact-form'>
                  <form
                    action='assets/php/Mẹ và bé.php'
                    id='contact-form'
                    method='post'>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='row'>
                          <div
                            className='col-md-6'
                            data-aos='fade-up'
                            data-aos-delay={300}>
                            <div className='input-area mb-4'>
                              <input
                                className='input-item'
                                type='text'
                                placeholder='Họ và tên của bạn *'
                                name='name'
                              />
                            </div>
                          </div>
                          <div
                            className='col-md-6'
                            data-aos='fade-up'
                            data-aos-delay={400}>
                            <div className='input-area mb-4'>
                              <input
                                className='input-item'
                                type='email'
                                placeholder='Email *'
                                name='email'
                              />
                            </div>
                          </div>
                          <div
                            className='col-12'
                            data-aos='fade-up'
                            data-aos-delay={300}>
                            <div className='input-area mb-4'>
                              <input
                                className='input-item'
                                type='text'
                                placeholder='Tiêu đề *'
                                name='subject'
                              />
                            </div>
                          </div>
                          <div
                            className='col-12'
                            data-aos='fade-up'
                            data-aos-delay={400}>
                            <div className='input-area mb-8'>
                              <textarea
                                cols={30}
                                rows={5}
                                className='textarea-item'
                                name='message'
                                placeholder='Tin nhắn'
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div
                            className='col-12'
                            data-aos='fade-up'
                            data-aos-delay={500}>
                            <button
                              type='submit'
                              id='submit'
                              name='submit'
                              className='btn btn-secondary button-hover-primary'>
                              Gửi
                            </button>
                          </div>
                          <p className='col-8 form-message mb-0' />
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className='form-messege' />
                </div>
                {/* Contact Form Wrapper End */}
              </div>
              <div className='col-12 col-lg-6 mb-10 order-1 order-lg-2'>
                {/* Section Title Start */}
                <div
                  className='contact-title pb-3'
                  data-aos='fade-up'
                  data-aos-delay={300}>
                  <h2 className='title'>Liên hệ chúng tôi</h2>
                </div>
                {/* Section Title End */}
                <div className='contact-content'>
                  <p
                    data-aos='fade-up'
                    data-aos-delay={200}
                    style={{ textAlign: "justify" }}>
                    Cửa hàng Mẹ và Bé là cửa hàng trẻ em trực tuyến hàng đầu tại
                    Việt Nam cung cấp đồ chơi, quần áo và các sản phẩm trẻ em
                    chất lượng cao khác với giá rẻ. LucLac.vn đã mang đến cho
                    khách hàng những lựa chọn tốt nhất về sản phẩm với mức giá
                    cạnh tranh nhất. Và chúng tôi đảm bảo vời các mặt hàng phù
                    hợp với mọi ngân sách. Hãy thuyết phục bản thân và mua từ
                    chúng tôi ngay hôm nay !
                  </p>
                  <address className='contact-block'>
                    <ul>
                      <li data-aos='fade-up' data-aos-delay={200}>
                        <i className='fa fa-fax' /> Địa chỉ : Số nhà 10, Ngõ 115
                        Hồ Sen, Thành phố Hải Phòng, Việt Nam
                      </li>
                      <li data-aos='fade-up' data-aos-delay={400}>
                        <i className='fa fa-phone' />{" "}
                        <a href='tel:123-123-456-789'>0366 262 072</a>
                      </li>
                      <li data-aos='fade-up' data-aos-delay={600}>
                        <i className='fa fa-envelope-o' />{" "}
                        <a href='mailto:demo@gmail.com'>demo@gmail.com </a>
                      </li>
                    </ul>
                  </address>
                  <div
                    className='working-time'
                    data-aos='fade-up'
                    data-aos-delay={600}>
                    <h6 className='title'>Thời gian làm việc</h6>
                    <p>Thứ 2 – Thứ 7 : 08:00 – 22:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact us Section End */}
      </div>
    </React.Fragment>
  );
}

export default PhanDuoiLienHe;
