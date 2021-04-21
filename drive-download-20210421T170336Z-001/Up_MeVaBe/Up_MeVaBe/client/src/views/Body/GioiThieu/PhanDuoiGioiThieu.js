/** @format */

import React from "react";
import AnhGioiThieu from "../../../assets/images/27-scaled.jpg";

function PhanDuoiGioiThieu() {
  // const [Load,SetLoad] = React.useState(false)

  return (
    <React.Fragment>
      <div>
        {/* About Section Start */}
        <div className='section section-padding bg-milky'>
          <div className='container'>
            <div className='row align-items-center mb-n6'>
              <div className='col-lg-5 mb-6'>
                {/* About Thumb Start */}
                <div
                  className='about-thumb'
                  data-aos='fade-up'
                  data-aos-delay={200}>
                  <img
                    className='fit-image'
                    src={
                      "https://www.vinamilk.com.vn/sua-bot-vinamilk/wp-content/uploads/2018/12/VNM_CLBMeBe_MO.jpg"
                    }
                    alt='About Image'
                  />
                </div>
                {/* About Thumb End */}
              </div>
              <div className='col-lg-7 mb-6'>
                {/* About Content Start  */}
                <div
                  className='about-content'
                  data-aos='fade-up'
                  data-aos-delay={600}>
                  <h2 className='about-title'>Thông tin về chúng tôi</h2>
                  <p>Đoạn văn bản 1</p>
                  <p>Đoạn văn bản 2</p>
                </div>
                {/* About Content End */}
              </div>
            </div>
          </div>
        </div>
        {/* About Section End */}
        {/* CTA Section Start */}
        <div className='section section-margin'>
          <div className='container'>
            <div className='row'>
              <div className='col-12' data-aos='fade-up' data-aos-delay={200}>
                {/* Section Title Start */}
                <div className='section-title text-center'>
                  <h2 className='title'>Dịch vụ</h2>
                  {/* <p className='sub-title mt-2'>
                    Accumsan vitae pede lacus ut ullamcorper sollicitudin
                    quisque libero
                  </p> */}
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className='row mb-n6'>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4'
                data-aos='fade-up'
                data-aos-delay={200}>
                <div className='single-choose-item text-center mb-6'>
                  <i className='fa fa-globe' />
                  <h4 className='cta-title'>Miễn phí giao dịch</h4>
                  <p>Miễn phí các hoá đơn bán hàng tại tỉnh thành lân cận</p>
                </div>
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4'
                data-aos='fade-up'
                data-aos-delay={400}>
                <div className='single-choose-item text-center mb-6'>
                  <i className='fa fa-plane' />
                  <h4 className='cta-title'>Giao hàng toàn quốc</h4>
                  <p></p>
                </div>
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4'
                data-aos='fade-up'
                data-aos-delay={600}>
                <div className='single-choose-item text-center mb-6'>
                  <i className='fa fa-comments' />
                  <h4 className='cta-title'>Chat</h4>
                  <p>
                    Amadea Shop is a very slick and clean e-commerce template
                    with endless possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section End */}
        {/* Testimonial Section Start */}
        <div className='section testimonial-bg' style={{backgroundImage:`url(${AnhGioiThieu})`,backgroundPosition:'0px 20px'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-12' data-aos='fade-up' data-aos-delay={600}>
                {/* Section Title Start */}
                <div className='section-title text-center'>
                  <h2 className='title text-white'>Thông tin</h2>
                  {/* <p className='sub-title text-white'>What they say</p> */}
                </div>
                {/* Section Title End */}
                {/* Testimonial Carousel Start */}
                <div className='testimonial-carousel'>
                  <div
                    className='swiper-container testimonial-gallery-thumbs' 
                    >
                    {/* <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <img
                          src='https://lavenderstudio.vn/wp-content/uploads/chup-hinh-me-va-be-4-1.jpg'
                          alt='Product Image'
                        />
                      </div>
                      <div className='swiper-slide'>
                        <img
                          src='assets/images/testimonial/thumb-2.png'
                          alt='Product Image'
                        />
                      </div>
                      <div className='swiper-slide'>
                        <img
                          src='assets/images/testimonial/thumb-3.png'
                          alt='Product Image'
                        />
                      </div>
                      <div className='swiper-slide'>
                        <img
                          src='assets/images/testimonial/thumb-4.png'
                          alt='Product Image'
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className='swiper-container testimonial-gallery-top'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        {/* Testimonial Content Start */}
                        <div className='testimonial-content text-center'>
                          <p
                            style={{
                              textAlign: "justify",
                              backgroundColor: "rgba(173,220,197,0.5)",
                            }}>
                            Mẹ Và Bé   – được thành lập năm 2020, là
                            trang web chia sẻ kiến thức nuôi con bằng sữa mẹ,
                            chia sẻ kinh nghiệm cho bà bầu và phụ nữ sau sinh,
                            chia sẻ kinh nghiệm chăm sóc trẻ sơ sinh và nuôi dạy
                            con cái, giúp các ông bố, bà mẹ tự tin hơn khi lần
                            đầu làm bố mẹ. Mẹ Và Bé   cũng giới thiệu
                            và review một số đồ dùng cho mẹ và bé, giúp bạn lựa
                            chọn được những sản phẩm ưng ý và hài lòng nhất.
                          </p>
                          <span className='ratings justify-content-center mb-3'>
                            {/* <span className='rating-wrap text-white'>
                              <span
                                className='star text-warning'
                                style={{ width: "80%" }}
                              />
                            </span> */}
                            {/* <span className='rating-num text-light'>(3)</span> */}
                          </span>
                          {/* <h4 className='testimonial-author'>Anamika lusy</h4> */}
                        </div>
                        {/* Testimonial Content End */}
                      </div>
                      <div className='swiper-slide'>
                        {/* Testimonial Content Start */}
                        <div className='testimonial-content text-center'>
                          <p>
                            Vivamus a lobortis ipsum, vel condimentum magna.
                            Etiam id turpis tortor. Nunc scelerisque, nisi a
                            blandit varius, nunc purus venenatis ligula, sed
                            venenatis orci augue nec sapien. Cum sociis natoque
                          </p>
                          <span className='ratings justify-content-center mb-3'>
                            <span className='rating-wrap text-white'>
                              <span
                                className='star text-warning'
                                style={{ width: "80%" }}
                              />
                            </span>
                            <span className='rating-num text-light'>(3)</span>
                          </span>
                          <h4 className='testimonial-author'>Tinsy Nilom</h4>
                        </div>
                        {/* Testimonial Content End */}
                      </div>
                      <div className='swiper-slide'>
                        {/* Testimonial Content Start */}
                        <div className='testimonial-content text-center'>
                          <p>
                            Vivamus a lobortis ipsum, vel condimentum magna.
                            Etiam id turpis tortor. Nunc scelerisque, nisi a
                            blandit varius, nunc purus venenatis ligula, sed
                            venenatis orci augue nec sapien. Cum sociis natoque
                          </p>
                          <span className='ratings justify-content-center mb-3'>
                            <span className='rating-wrap text-white'>
                              <span
                                className='star text-warning'
                                style={{ width: "80%" }}
                              />
                            </span>
                            <span className='rating-num text-light'>(3)</span>
                          </span>
                          <h4 className='testimonial-author'>Cristal Aryan</h4>
                        </div>
                        {/* Testimonial Content End */}
                      </div>
                      <div className='swiper-slide'>
                        {/* Testimonial Content Start */}
                        <div className='testimonial-content text-center'>
                          <p>
                            Vivamus a lobortis ipsum, vel condimentum magna.
                            Etiam id turpis tortor. Nunc scelerisque, nisi a
                            blandit varius, nunc purus venenatis ligula, sed
                            venenatis orci augue nec sapien. Cum sociis natoque
                          </p>
                          <span className='ratings justify-content-center mb-3'>
                            <span className='rating-wrap text-white'>
                              <span
                                className='star text-warning'
                                style={{ width: "80%" }}
                              />
                            </span>
                            <span className='rating-num text-light'>(3)</span>
                          </span>
                          <h4 className='testimonial-author'>Jems Jhon</h4>
                        </div>
                        {/* Testimonial Content End */}
                      </div>
                    </div>
                    {/* Add Arrows */}
                    <div className='swiper-button-next swiper-button-white d-none' />
                    <div className='swiper-button-prev swiper-button-white d-none' />
                  </div>
                </div>
                {/* Testimonial Carousel End */}
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section End */}
        {/* Team Section Start */}
        <div className='section section-margin'>
          <div className='container'>
            <div className='row'>
              <div className='col-12' data-aos='fade-up' data-aos-delay={200}>
                {/* Section Title Start */}
                <div className='section-title text-center'>
                  <h2 className='title'>Đội ngũ làm việc</h2>
                  <p className='sub-title'>
                    {/* Accumsan vitae pede lacus ut ullamcocol-lg-3 col-md-4
                    col-sm-6 */}
                  </p>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className='row mb-n6'>
              <div
                className='col-lg-3 col-md-4 col-sm-6'
                data-aos='fade-up'
                data-aos-delay={200}>
                <div className='single-team-member text-center mb-6'>
                  {/* Team Thumb Start */}
                  <div className='team-thumb'>
                    {/* Team Member Image Start */}
                    <img
                      className='fit-image'
                      src='assets/images/team/1.jpg'
                      alt='Team Image'
                    />
                    {/* Team Member Image End */}
                    {/* Team Social Start */}
                    <div className='team-social'>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-linkedin' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </div>
                    {/* Team Social End */}
                  </div>
                  {/* Team Thumb End */}
                  {/* Team Content Start */}
                  <div className='team-content'>
                    <h6 className='team-member-name'>Jonathan Scott</h6>
                    <p>CEO</p>
                  </div>
                  {/* Team Content End */}
                </div>
              </div>
              <div
                className='col-lg-3 col-md-4 col-sm-6'
                data-aos='fade-up'
                data-aos-delay={300}>
                <div className='single-team-member text-center mb-6'>
                  {/* Team Thumb Start */}
                  <div className='team-thumb'>
                    {/* Team Member Image Start */}
                    <img
                      className='fit-image'
                      src='assets/images/team/2.jpg'
                      alt='Team Image'
                    />
                    {/* Team Member Image End */}
                    {/* Team Social Start */}
                    <div className='team-social'>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-linkedin' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </div>
                    {/* Team Social End */}
                  </div>
                  {/* Team Thumb End */}
                  {/* Team Content Start */}
                  <div className='team-content'>
                    <h6 className='team-member-name'>Oliver bastin</h6>
                    <p>Designer</p>
                  </div>
                  {/* Team Content End */}
                </div>
              </div>
              <div
                className='col-lg-3 col-md-4 col-sm-6'
                data-aos='fade-up'
                data-aos-delay={400}>
                <div className='single-team-member text-center mb-6'>
                  {/* Team Thumb Start */}
                  <div className='team-thumb'>
                    {/* Team Member Image Start */}
                    <img
                      className='fit-image'
                      src='assets/images/team/3.jpg'
                      alt='Team Image'
                    />
                    {/* Team Member Image End */}
                    {/* Team Social Start */}
                    <div className='team-social'>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-linkedin' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </div>
                    {/* Team Social End */}
                  </div>
                  {/* Team Thumb End */}
                  {/* Team Content Start */}
                  <div className='team-content'>
                    <h6 className='team-member-name'>Erik jonson</h6>
                    <p>Developer</p>
                  </div>
                  {/* Team Content End */}
                </div>
              </div>
              <div
                className='col-lg-3 col-md-4 col-sm-6'
                data-aos='fade-up'
                data-aos-delay={500}>
                <div className='single-team-member text-center mb-6'>
                  {/* Team Thumb Start */}
                  <div className='team-thumb'>
                    {/* Team Member Image Start */}
                    <img
                      className='fit-image'
                      src='assets/images/team/4.jpg'
                      alt='Team Image'
                    />
                    {/* Team Member Image End */}
                    {/* Team Social Start */}
                    <div className='team-social'>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-linkedin' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </div>
                    {/* Team Social End */}
                  </div>
                  {/* Team Thumb End */}
                  {/* Team Content Start */}
                  <div className='team-content'>
                    <h6 className='team-member-name'>Jon doe</h6>
                    <p>Marketing Officer</p>
                  </div>
                  {/* Team Content End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section End */}
      </div>
    </React.Fragment>
  );
}

export default PhanDuoiGioiThieu;
