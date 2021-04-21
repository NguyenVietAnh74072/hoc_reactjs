/** @format */

import React from "react";

function PhanDuoiSanPham() {
  const [SanPham, SetSanPham] = React.useState([]);
  const getData = async () => {
    const SanPham =
      window.localStorage.getItem("onClickSanPham") === null
        ? []
        : JSON.parse(window.localStorage.getItem("onClickSanPham"));
    SetSanPham(SanPham);
  };
  const ThemSanPhamThich = (x) => {
    console.log(x);
    const DanhMucSanPhamThich =
      window.localStorage.getItem("DanhMucSanPhamThich") === null
        ? []
        : JSON.parse(window.localStorage.getItem("DanhMucSanPhamThich"));
    alert("Đã thêm vào mục thích!");
    DanhMucSanPhamThich.push(x);
    window.localStorage.setItem(
      "DanhMucSanPhamThich",
      JSON.stringify(DanhMucSanPhamThich)
    );
    window.location.href = "./";
  };
  const ThemGioHang = async (x) => {
    try {
      let check = false;
      alert("Thêm giỏ hàng thành công!");
      const GioHang =
        window.localStorage.getItem("GioHang") === null
          ? []
          : JSON.parse(window.localStorage.getItem("GioHang"));

      const DL = [];
      console.log(GioHang.length>0)
      if (GioHang.length > 0) {
        GioHang.map((y) => {
          if (y.hang_id === x.hang_id) {
            check = true;
            y.so_luong = parseInt(y.so_luong + SoLuongSanPham);
          } else {
            check = false;
          }
        });
        if (!check) {
          GioHang.push({
            hang_id: x.hang_id,
            ten_hang: x.ten_hang,
            gia_ban_le: x.gia_ban_le,
            duong_link: x.duong_link,
            so_luong: SoLuongSanPham,
          });
        }
      } else {
        GioHang.push({
          hang_id: x.hang_id,
          ten_hang: x.ten_hang,
          gia_ban_le: x.gia_ban_le,
          duong_link: x.duong_link,
          so_luong: SoLuongSanPham,
        });
      }
      let tong_tien = 0;
      GioHang.map((x) => {
        tong_tien += parseInt(x.gia_ban_le) * parseInt(x.so_luong);
      });
      window.localStorage.setItem("TongTien", tong_tien.toString());
      window.localStorage.setItem("GioHang", JSON.stringify(GioHang));
      window.location.href = "./";
    } catch (error) {}
  };
  const [SoLuongSanPham, SetSoLuongSanPham] = React.useState(1);
  React.useEffect(() => {
    getData();
  }, []);
  console.log(SanPham);
  return (
    <React.Fragment>
      {/* Single Product Section Start */}
      <div className='section section-margin-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-custom'>
              {/* Product Details Image Start */}
              <div className='product-details-img'>
                {/* Single Product Image Start */}
                <div className='single-product-img swiper-container product-gallery-top'>
                  <div className='swiper-wrapper popup-gallery'>
                    <a className='swiper-slide w-100' href={SanPham.duong_link}>
                      <img
                        className='w-100'
                        src={SanPham.duong_link}
                        alt='Product'
                      />
                    </a>
                    <a
                      className='swiper-slide w-100'
                      href='assets/images/products/large-product/3.jpg'>
                      <img
                        className='w-100'
                        src='assets/images/products/large-product/3.jpg'
                        alt='Product'
                      />
                    </a>
                    <a
                      className='swiper-slide w-100'
                      href='assets/images/products/large-product/3.jpg'>
                      <img
                        className='w-100'
                        src='assets/images/products/large-product/3.jpg'
                        alt='Product'
                      />
                    </a>
                    <a
                      className='swiper-slide w-100'
                      href='assets/images/products/large-product/4.jpg'>
                      <img
                        className='w-100'
                        src='assets/images/products/large-product/4.jpg'
                        alt='Product'
                      />
                    </a>
                    <a
                      className='swiper-slide w-100'
                      href='assets/images/products/large-product/5.jpg'>
                      <img
                        className='w-100'
                        src='assets/images/products/large-product/5.jpg'
                        alt='Product'
                      />
                    </a>
                  </div>
                </div>
                {/* Single Product Image End */}
                {/* Single Product Thumb Start */}
                <div className='single-product-thumb swiper-container product-gallery-thumbs'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img src={SanPham.duong_link} alt='Product' />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='assets/images/products/small-product/3.jpg'
                        alt='Product'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='assets/images/products/small-product/3.jpg'
                        alt='Product'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='assets/images/products/small-product/15.jpg'
                        alt='Product'
                      />
                    </div>
                    <div className='swiper-slide'>
                      <img
                        src='assets/images/products/small-product/8.jpg'
                        alt='Product'
                      />
                    </div>
                  </div>
                  {/* Next Previous Button Start */}
                  <div className='swiper-button-next swiper-button-white'>
                    <i className='pe-7s-angle-right' />
                  </div>
                  <div className='swiper-button-prev swiper-button-white'>
                    <i className='pe-7s-angle-left' />
                  </div>
                  {/* Next Previous Button End */}
                </div>
                {/* Single Product Thumb End */}
              </div>
              {/* Product Details Image End */}
            </div>
            <div className='col-lg-7 col-custom'>
              {/* Product Summery Start */}
              <div className='product-summery position-relative'>
                {/* Product Head Start */}
                <div className='product-head mb-3'>
                  <h2 className='product-title'>{SanPham.ten_hang}</h2>
                </div>
                {/* Product Head End */}
                {/* Rating Start */}
                <span className='ratings justify-content-start mb-2'>
                  <span className='rating-wrap'>
                    <span className='star' style={{ width: "100%" }} />
                  </span>
                  {/* <span className="rating-num">(4)</span> */}
                </span>
                {/* Rating End */}
                {/* Price Box Start */}
                <div className='price-box mb-2'>
                  <span className='regular-price'>
                    {parseInt(SanPham.gia_ban_le).toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                  {/* <span className="old-price"><del>$90.00</del></span> */}
                </div>
                {/* Price Box End */}
                {/* SKU Start */}
                <div className='sku mb-3'>
                  <span>Mã hàng hóa : {SanPham.ma_hang}</span>
                </div>
                {/* SKU End */}
                {/* Product Inventory Start */}
                <div className='product-inventroy mb-3'>
                  <span className='inventroy-title'>
                    {" "}
                    <strong>Trạng thái : </strong>
                  </span>
                  <span className='inventory-varient'>
                    {SanPham.SoLuongTon > 0 ? "Còn hàng" : "Hết hàng"}
                  </span>
                </div>
                {/* Product Inventory End */}
                {/* Description Start */}
                <p className='desc-content mb-5'>{SanPham.ghi_chu}.</p>
                {/* Description End */}
                {/* Product Coler Variation Start */}
                {/* <div className="product-color-variation mb-5">
                    <span> <strong>Color: </strong></span>
                    <button type="button" className="btn bg-danger" />
                    <button type="button" className="btn bg-primary" />
                    <button type="button" className="btn bg-dark" />
                    <button type="button" className="btn bg-success" />
                </div> */}
                {/* Product Coler Variation End */}
                {/* Product Size Start */}
                {/* <div className="product-size mb-5">
                    <span><strong>Size :</strong></span>
                    <a href="#" className="size-ratio active">m</a>
                    <a href="#" className="size-ratio">l</a>
                    <a href="#" className="size-ratio">xl</a>
                    <a href="#" className="size-ratio">xxl</a>
                </div> */}
                {/* Product Size End */}
                {/* Product Countdown Start */}
                {/* <div className="countdown-area mb-4">
                    <div className="countdown-wrapper d-flex" data-countdown="2022/12/24" />
                </div> */}
                {/* Product Countdown End */}
                {/* Quantity Start */}
                <div className='align-items-center d-flex mb-5'>
                  <span className='me-2'>
                    <strong>Số lượng : </strong>{" "}
                  </span>
                  <div className='art-plus-minus'>
                    <input
                      className='cart-plus-minus-box'
                      style={{ width: "100px" }}
                      value={SoLuongSanPham}
                      onChange={async (e) =>
                        SetSoLuongSanPham(e.target.value)
                      }></input>
                  </div>
                </div>
                {/* <div className="d-flex align-items-center mb-5">
                <span className="me-2"><strong>Số lượng : </strong></span>
                    <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" value={SoLuongSanPham} type="text" onChange={
                        async (e)=>SetSoLuongSanPham(e.target.value)
                    }/>
                </div>
                </div> */}
                {/* Quantity End */}
                {/* Cart Button Start */}
                <div className='cart-btn mb-4'>
                  <div className='add-to_cart'>
                    <a
                      className='btn btn-dark btn-hover-primary'
                      onClick={async () => {
                        ThemGioHang(SanPham);
                      }}>
                      Thêm sản phẩm
                    </a>
                  </div>
                </div>
                {/* Cart Button End */}
                {/* Action Button Start */}
                <div className='actions border-bottom mb-4 pb-4'>
                  {/* <a href="compare.html" title="Compare" className="action compare"><i className="pe-7s-refresh-2" /> Compare</a> */}
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      ThemSanPhamThich(SanPham);
                    }}
                    title='Wishlist'
                    className='action wishlist'>
                    <i className='pe-7s-like' /> Yêu thích
                  </a>
                </div>
                {/* Action Button End */}
                {/* Social Shear Start */}
                {/* <div className="social-share">
                    <span><strong>Social: </strong></span>
                    <a href="#" className="facebook-color"><i className="fa fa-facebook" /> Like</a>
                    <a href="#" className="twitter-color"><i className="fa fa-twitter" /> Tweet</a>
                    <a href="#" className="pinterest-color"><i className="fa fa-pinterest" /> Save</a>
                </div> */}
                {/* Social Shear End */}
                {/* Payment Option Start */}
                <div className='payment-option mt-4 d-flex'>
                  <span>
                    <strong>Thanh toán: </strong>
                  </span>
                  <a href='#'>
                    <img
                      className='fit-image ms-1'
                      src='assets/images/payment/payment.png'
                      alt='Payment Option Image'
                    />
                  </a>
                </div>
                {/* Payment Option End */}
                {/* Product Delivery Policy Start */}
                <ul className='product-delivery-policy border-top pt-4 mt-4 border-bottom'>
                  <li>
                    {" "}
                    <i className='fa fa-check-square' />{" "}
                    <span>
                      Bảo mật thông tin (Edit With Customer Reassurance Module)
                    </span>
                  </li>
                  <li>
                    <i className='fa fa-truck' />
                    <span>
                      Giao hàng (Edit With Customer Reassurance Module)
                    </span>
                  </li>
                  <li>
                    <i className='fa fa-refresh' />
                    <span>
                      Hoàn trả sản phẩm (Edit With Customer Reassurance Module)
                    </span>
                  </li>
                </ul>
                {/* Product Delivery Policy End */}
              </div>
              {/* Product Summery End */}
            </div>
          </div>

          <div className='row section-margin'>
            <div className='col-lg-12 col-custom single-product-tab'>
              <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='home-tab'
                    data-bs-toggle='tab'
                    href='#connect-1'
                    role='tab'
                    aria-selected='true'>
                    Description
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='profile-tab'
                    data-bs-toggle='tab'
                    href='#connect-2'
                    role='tab'
                    aria-selected='false'>
                    Reviews
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='contact-tab'
                    data-bs-toggle='tab'
                    href='#connect-3'
                    role='tab'
                    aria-selected='false'>
                    Shipping Policy
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='review-tab'
                    data-bs-toggle='tab'
                    href='#connect-4'
                    role='tab'
                    aria-selected='false'>
                    Size Chart
                  </a>
                </li>
              </ul>
              <div className='tab-content mb-text' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='connect-1'
                  role='tabpanel'
                  aria-labelledby='home-tab'>
                  <div className='desc-content p-3'>
                    <p className='mb-3'>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore always holds
                      in these matters to this principle of selection: he
                      rejects pleasures to secure other greater pleasures, or
                      else he endures pains to avoid worse pains.
                    </p>
                    <p>
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut rerum necessitatibus saepe eveniet ut et
                      voluptates repudiandae sint et molestiae non recusandae.
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='connect-2'
                  role='tabpanel'
                  aria-labelledby='profile-tab'>
                  {/* Start Single Content */}
                  <div className='product_tab_content border p-3'>
                    {/* Start Single Review */}
                    <div className='single-review d-flex mb-4'>
                      {/* Review Thumb Start */}
                      <div className='review_thumb'>
                        <img
                          alt='review images'
                          src='assets/images/review/1.jpg'
                        />
                      </div>
                      {/* Review Thumb End */}
                      {/* Review Details Start */}
                      <div className='review_details'>
                        <div className='review_info mb-2'>
                          {/* Rating Start */}
                          <span className='ratings justify-content-start mb-3'>
                            <span className='rating-wrap'>
                              <span
                                className='star'
                                style={{ width: "100%" }}
                              />
                            </span>
                            <span className='rating-num'>(1)</span>
                          </span>
                          {/* Rating End */}
                          {/* Review Title & Date Start */}
                          <div className='review-title-date d-flex'>
                            <h5 className='title'>Admin - </h5>
                            <span> January 19, 2021</span>
                          </div>
                          {/* Review Title & Date End */}
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin in viverra ex, vitae vestibulum arcu. Duis
                          sollicitudin metus sed lorem commodo, eu dapibus
                          libero interdum. Morbi convallis viverra erat, et
                          aliquet orci congue vel. Integer in odio enim.
                          Pellentesque in dignissim leo. Vivamus varius ex sit
                          amet quam tincidunt iaculis.
                        </p>
                      </div>
                      {/* Review Details End */}
                    </div>
                    {/* End Single Review */}
                    {/* Rating Wrap Start */}
                    <div className='rating_wrap'>
                      <h5 className='rating-title mb-2'>Add a review </h5>
                      <p className='mb-2'>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <h6 className='rating-sub-title mb-2'>Your Rating</h6>
                      {/* Rating Start */}
                      <span className='ratings justify-content-start mb-3'>
                        <span className='rating-wrap'>
                          <span className='star' style={{ width: "100%" }} />
                        </span>
                        <span className='rating-num'>(2)</span>
                      </span>
                      {/* Rating End */}
                    </div>
                    {/* Rating Wrap End */}
                    {/* Comments ans Replay Start */}
                    <div className='comments-area comments-reply-area'>
                      <div className='row'>
                        <div className='col-lg-12 col-custom'>
                          {/* Comment form Start */}
                          <form action='#' className='comment-form-area'>
                            <div className='row comment-input'>
                              {/* Input Name Start */}
                              <div className='col-md-6 col-custom comment-form-author mb-3'>
                                <label>
                                  Name <span className='required'>*</span>
                                </label>
                                <input
                                  type='text'
                                  required='required'
                                  name='Name'
                                />
                              </div>
                              {/* Input Name End */}
                              {/* Input Email Start */}
                              <div className='col-md-6 col-custom comment-form-emai mb-3'>
                                <label>
                                  Email <span className='required'>*</span>
                                </label>
                                <input
                                  type='text'
                                  required='required'
                                  name='email'
                                />
                              </div>
                              {/* Input Email End */}
                            </div>
                            {/* Comment Texarea Start */}
                            <div className='comment-form-comment mb-3'>
                              <label>Comment</label>
                              <textarea
                                className='comment-notes'
                                required='required'
                                defaultValue={""}
                              />
                            </div>
                            {/* Comment Texarea End */}
                            {/* Comment Submit Button Start */}
                            <div className='comment-form-submit'>
                              <button className='btn btn-dark btn-hover-primary'>
                                Submit
                              </button>
                            </div>
                            {/* Comment Submit Button End */}
                          </form>
                          {/* Comment form End */}
                        </div>
                      </div>
                    </div>
                    {/* Comments ans Replay End */}
                  </div>
                  {/* End Single Content */}
                </div>
                <div
                  className='tab-pane fade'
                  id='connect-3'
                  role='tabpanel'
                  aria-labelledby='contact-tab'>
                  {/* Shipping Policy Start */}
                  <div className='shipping-policy mb-n2 p-3'>
                    <h4 className='title-3 mb-4'>
                      Shipping policy for our store
                    </h4>
                    <p className='desc-content mb-2'>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate
                    </p>
                    <ul className='policy-list mb-2'>
                      <li>1-2 business days (Typically by end of day)</li>
                      <li>
                        <a href='#'>30 days money back guaranty</a>
                      </li>
                      <li>24/7 live support</li>
                      <li>odio dignissim qui blandit praesent</li>
                      <li>luptatum zzril delenit augue duis dolore</li>
                      <li>te feugait nulla facilisi.</li>
                    </ul>
                    <p className='desc-content mb-2'>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat facer possim
                      assum. Typi non habent claritatem insitam; est usus
                      legentis in iis qui facit eorum
                    </p>
                    <p className='desc-content mb-2'>
                      claritatem. Investigationes demonstraverunt lectores
                      legere me lius quod ii legunt saepius. Claritas est etiam
                      processus dynamicus, qui sequitur mutationem consuetudium
                      lectorum. Mirum est notare quam littera gothica, quam nunc
                      putamus parum claram, anteposuerit litterarum formas
                      humanitatis per
                    </p>
                    <p className='desc-content mb-2'>
                      seacula quarta decima et quinta decima. Eodem modo typi,
                      qui nunc nobis videntur parum clari, fiant sollemnes in
                      futurum.
                    </p>
                  </div>
                  {/* Shipping Policy End */}
                </div>
                <div
                  className='tab-pane fade'
                  id='connect-4'
                  role='tabpanel'
                  aria-labelledby='review-tab'>
                  <div className='size-tab table-responsive-lg p-3'>
                    <h4 className='title-3 mb-4'>Size Chart</h4>
                    <table className='table border mb-0'>
                      <tbody>
                        <tr>
                          <td className='cun-name'>
                            <span>UK</span>
                          </td>
                          <td>18</td>
                          <td>20</td>
                          <td>22</td>
                          <td>24</td>
                          <td>26</td>
                        </tr>
                        <tr>
                          <td className='cun-name'>
                            <span>European</span>
                          </td>
                          <td>46</td>
                          <td>48</td>
                          <td>50</td>
                          <td>52</td>
                          <td>54</td>
                        </tr>
                        <tr>
                          <td className='cun-name'>
                            <span>usa</span>
                          </td>
                          <td>14</td>
                          <td>16</td>
                          <td>18</td>
                          <td>20</td>
                          <td>22</td>
                        </tr>
                        <tr>
                          <td className='cun-name'>
                            <span>Australia</span>
                          </td>
                          <td>28</td>
                          <td>10</td>
                          <td>12</td>
                          <td>14</td>
                          <td>16</td>
                        </tr>
                        <tr>
                          <td className='cun-name'>
                            <span>Canada</span>
                          </td>
                          <td>24</td>
                          <td>18</td>
                          <td>14</td>
                          <td>42</td>
                          <td>36</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single Product Section End */}
    </React.Fragment>
  );
}

export default PhanDuoiSanPham;
