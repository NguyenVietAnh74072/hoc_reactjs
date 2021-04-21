/** @format */

import React from "react";
import host from '../../../host/hosting'
function PhanDuoiThanhToan() {
  const [GioHang, SetGioHang] = React.useState([]);
  const [TienShip, SetTienShip] = React.useState(0);
  const [KiemTraDangNhap,SetKiemTraDangNhap] = React.useState(
    window.localStorage.getItem('DangNhapLucLac') !== null  ? window.localStorage.getItem('DangNhapLucLac') : 
    'false'
  )
  const [DLKhachHang,SetDLKhachHang] = React.useState(
    window.localStorage.getItem('DLDangNhapLucLac') !== null ? 
    JSON.parse(window.localStorage.getItem('DLDangNhapLucLac')) : []
  )
  const getData = async () => {
    SetGioHang(
      window.localStorage.getItem("GioHang") === null
        ? []
        : JSON.parse(window.localStorage.getItem("GioHang"))
    );
    
    console.log(DLKhachHang.map(x=>x.doi_tuong_id).toString())
    const response = await fetch(host.LayDuLieuThanhToan+`/${DLKhachHang.map(x=>x.doi_tuong_id).toString()}`)
    const JsonData = await response.json()
    console.log(JsonData)
    if(JsonData.length > 0 ){
        console.log(JsonData.map(x=>x.dien_thoai).toString())
        SetSoDT(JsonData.map(x=>x.dien_thoai).toString())
        SetDiaChi(JsonData.map(x=>x.dia_chi).toString())
        SetHoVaTen(JsonData.map(x=>x.ten_doi_tuong).toString().split('-')[0])
        Setdoi_tuong_id(DLKhachHang.map(x=>x.doi_tuong_id).toString())
    }else{
      
        
    }
    console.log(JsonData.length)
  };
  console.log(GioHang);
  const [Ho,SetHo] = React.useState(' ')
  const [HoVaTen,SetHoVaTen] = React.useState(' ')
  const [DiaChi,SetDiaChi] = React.useState(' ')
  const [TinhThanhPho,SetTinhThanhPho] = React.useState(' ')
  const [QuanHuyen,SetQuanHuyen] = React.useState(' ')
  const [MaBuuChinh,SetMaBuuChinh] = React.useState(' ')
  const [DiaChiEmail,SetDiaChiEmail] = React.useState(
    window.localStorage.getItem('DLDangNhapLucLac') !== null  ? DLKhachHang.map(x=>x.email) : ' '
  )
  const [SoDT,SetSoDT] = React.useState('0')
  const [doi_tuong_id,Setdoi_tuong_id] = React.useState('1')
  const [NoiDungCanGhiChu,SetNoiDungCanGhiChu] = React.useState(
    window.localStorage.getItem('NoiDungCuaKhach') === null ? ' ' :
    window.localStorage.getItem('NoiDungCuaKhach')
  )
  
  const [PhuongThucThanhToan,SetPhuongThucThanhToan] = React.useState(' ')
  const ThanhToanHoaDon = async () => {
    if(GioHang.length === 0){
      alert('Xin vui lòng chọn sản phẩm bên shop')
    }
    else if(HoVaTen === ' '){
      alert('Xin vui lòng điền họ và tên')
    }else if(DiaChi === ' '){
      alert('Xin vui lòng điền địa chỉ')
    }else if(TinhThanhPho === ' '){
      alert('Xin vui lòng điền tỉnh thành phố')
    }else if(QuanHuyen === ' '){
      alert('Xin vui lòng điền quận huyện')
    }else if(MaBuuChinh === ' '){
      alert('Xin vui lòng điền mã bưu chính')
    }else if(SoDT === '0'){
      alert('Xin vui lòng điền số điện thoại')
    }else if(NoiDungCanGhiChu === ' '){
      alert('Xin vui lòng điền nội dung cần ghi chú')
    }else if(PhuongThucThanhToan === ' '){
      alert('Xin vui lòng chọn phương thức thanh toán')
    }else{
      const NgayGiaoHangMongMuon = window.localStorage.getItem('NgayGiaoHangKhach') === null ? ' ' : window.localStorage.getItem('NgayGiaoHangKhach')
      const TongTien = window.localStorage.getItem('TongTien') === null ? ' ' : window.localStorage.getItem('TongTien')
      console.log({HoVaTen,DiaChi,TinhThanhPho,QuanHuyen,MaBuuChinh,DiaChiEmail,SoDT,NoiDungCanGhiChu,PhuongThucThanhToan,GioHang,NgayGiaoHangMongMuon,TongTien})
      const response = await fetch(host.HoaDonBan,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({HoVaTen,DiaChi,TinhThanhPho,QuanHuyen,MaBuuChinh,DiaChiEmail,SoDT,NoiDungCanGhiChu,PhuongThucThanhToan,GioHang,NgayGiaoHangMongMuon,TongTien,doi_tuong_id}),
      })
      const TaiKhoanKhachHang = window.localStorage.getItem('DLDangNhapLucLac') === null ? [] : JSON.parse(window.localStorage.getItem('DLDangNhapLucLac'))

      window.localStorage.clear()
      window.localStorage.setItem('DLDangNhapLucLac',JSON.stringify(TaiKhoanKhachHang))
      window.localStorage.setItem('DangNhapLucLac','true')
      alert('Đặt hàng thành công!')
      window.location.href="./"
    }
  };

  console.log(DLKhachHang)
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      {/* Checkout Section Start */}
      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* Coupon Accordion Start */}
              <div className='coupon-accordion'>
                {/* Title Start */}
                <h3 className='title' hidden={
                  KiemTraDangNhap === 'true' ? true : false
                }>
                  Đăng nhập ?{" "}
                  <span
                    id='showlogin'
                    onClick={async () => {
                      window.localStorage.setItem("Tab", "Đăng nhập");
                      window.location.href = "./";
                    }}>
                    Nhấn để đăng nhập
                  </span>
                </h3>
                {/* Title End */}
                {/* Checkout Login Start */}
                <div id='checkout-login' className='coupon-content'>
                  <div className='coupon-info'>
                    <p className='coupon-text mb-2'>
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    {/* Form Start */}
                    <form action='#'>
                      {/* Input Email Start */}
                      <p className='form-row-first'>
                        <label>
                          Username or email <span className='required'>*</span>
                        </label>
                        <input type='text' />
                      </p>
                      {/* Input Email End */}
                      {/* Input Password Start */}
                      <p className='form-row-last'>
                        <label>
                          Password <span className='required'>*</span>
                        </label>
                        <input type='password' />
                      </p>
                      {/* Input Password End */}
                      {/* Remember Password Start */}
                      <p className='form-row mb-2'>
                        <input type='checkbox' id='remember_me' />
                        <label htmlFor='remember_me' className='checkbox-label'>
                          Remember me
                        </label>
                      </p>
                      {/* Remember Password End */}
                      {/* Lost Password Start */}
                      <p className='lost-password'>
                        <a href='#'>Lost your password?</a>
                      </p>
                      {/* Lost Password End */}
                    </form>
                    {/* Form End */}
                  </div>
                </div>
                {/* Checkout Login End */}
                {/* Title Start */}
                {/* <h3 className='title'>
                  Have a coupon?{" "}
                  <span id='showcoupon'>Click here to enter your code</span>
                </h3> */}
                {/* Title End */}
                {/* Checkout Coupon Start */}
                <div id='checkout_coupon' className='coupon-checkout-content'>
                  <div className='coupon-info'>
                    <form action='#'>
                      <p className='checkout-coupon d-flex'>
                        <input placeholder='Coupon code' type='text' />
                        <input
                          className='btn btn-primary btn-hover-secondary rounded-0'
                          defaultValue='Apply Coupon'
                          type='submit'
                        />
                      </p>
                    </form>
                  </div>
                </div>
                {/* Checkout Coupon End */}
              </div>
              {/* Coupon Accordion End */}
            </div>
          </div>
          <div className='row mb-n4' >
            <div className='col-lg-6 col-12 mb-4'>
              {/* Checkbox Form Start */}
                <div className='checkbox-form'>
                  {/* Checkbox Form Title Start */}
                  <h3 className='title'>Thông tin</h3>
                  {/* Checkbox Form Title End */}
                  <div className='row'>
                    {/* Select Country Name Start */}
                    <div className='col-md-12 mb-6'>
                      {/* <div className='country-select'>
                        <label>
                          Country <span className='required'>*</span>
                        </label>
                        <select className='myniceselect nice-select wide rounded-0'>
                          <option data-display='Bangladesh'>Bangladesh</option>
                          <option value='uk'>London</option>
                          <option value='rou'>Romania</option>
                          <option value='fr'>French</option>
                          <option value='de'>Germany</option>
                          <option value='aus'>Australia</option>
                        </select>
                      </div> */}
                    </div>
                    {/* Select Country Name End */}
                    {/* First Name Input Start */}
                    <div className='col-md-6'>
                      {/* <div className='checkout-form-list'>
                        <label>
                          Họ <span className='required'>*</span>
                        </label>
                        <input placeholder type='text' onChange={
                          async (e)=>SetHo(e.target.value)
                        }/>
                      </div> */}
                    </div>
                    {/* First Name Input End */}
                    {/* Last Name Input Start */}
                    <div className='col-md-12'>
                      <div className='checkout-form-list'>
                        <label>
                          Họ và tên <span className='required'>*</span>
                        </label>
                        <input placeholder type='text' 
                          value={HoVaTen}
                          onChange={
                          async (e)=>SetHoVaTen(e.target.value)
                        }/>
                      </div>
                    </div>
                    {/* Last Name Input End */}
                    {/* Company Name Input Start */}
                    {/* <div className='col-md-12'>
                      <div className='checkout-form-list'>
                        <label>Company Name</label>
                        <input placeholder type='text' />
                      </div>
                    </div> */}
                    {/* Company Name Input End */}
                    {/* Address Input Start */}
                    <div className='col-md-12'></div>
                    <div className='col-md-12'>
                      <div className='checkout-form-list'>
                        <label>
                          Địa chỉ <span className='required'>*</span>
                        </label>
                        <input placeholder='địa chỉ' type='text' 
                          value={DiaChi}
                          onChange={
                          async (e)=>SetDiaChi(e.target.value)
                        }/>
                      </div>
                    </div>
                    {/* Address Input End */}
                    {/* Optional Text Input Start */}
                    {/* <div className='col-md-12'>
                      <div className='checkout-form-list'>
                        <input
                          placeholder='Apartment, suite, unit etc. (optional)'
                          type='text'
                        />
                      </div>
                    </div> */}
                    {/* Optional Text Input End */}
                    {/* Town or City Name Input Start */}
                    <div className='col-md-12'>
                      <div className='checkout-form-list'>
                        <label>
                          Tỉnh / Thành phố <span className='required'>*</span>
                        </label>
                        <input type='text' 
                        onChange={
                          async (e)=>SetTinhThanhPho(e.target.value)
                        }
                        />
                      </div>
                    </div>
                    {/* Town or City Name Input End */}
                    {/* State or Country Input Start */}
                    <div className='col-md-6'>
                      <div className='checkout-form-list'>
                        <label>
                          Quận / Huyện <span className='required'>*</span>
                        </label>
                        <input placeholder type='text' 
                        onChange={
                          async (e)=>SetQuanHuyen(e.target.value)
                        }
                        />
                      </div>
                    </div>
                    {/* State or Country Input End */}
                    {/* Postcode or Zip Input Start */}
                    <div className='col-md-6'>
                      <div className='checkout-form-list'>
                        <label>
                          Mã bưu chính / Zip <span className='required'>*</span>
                        </label>
                        <input placeholder type='text' 
                        onChange={
                          async (e)=>SetMaBuuChinh(e.target.value)
                        }
                        />
                      </div>
                    </div>
                    {/* Postcode or Zip Input End */}
                    {/* Email Address Input Start */}
                    <div className='col-md-6'>
                      <div className='checkout-form-list'>
                        <label>
                          Địa chỉ Email <span className='required'>*</span>
                        </label>
                        <input value={DiaChiEmail} type='email' 
                          onChange={
                            async (e)=>SetDiaChiEmail(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    {/* Email Address Input End */}
                    {/* Phone Number Input Start */}
                    <div className='col-md-6'>
                      <div className='checkout-form-list'>
                        <label>
                          Số điện thoại <span className='required'>*</span>
                        </label>
                        <input type='text'   
                            value={SoDT}
                            onChange={
                            async (e)=>SetSoDT(e.target.value)
                          }/>
                      </div>
                    </div>
                    {/* Phone Number Input End */}
                    {/* Checkout Form List checkbox Start */}
                    {/* <div className='col-md-12'>
                      <div className='checkout-form-list create-acc'>
                        <input id='cbox' type='checkbox' />
                        <label htmlFor='cbox' className='checkbox-label'>
                          Create an account?
                        </label>
                      </div>
                      <div
                        id='cbox-info'
                        className='checkout-form-list create-account'>
                        <p className='mb-2'>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <label>
                          Account password <span className='required'>*</span>
                        </label>
                        <input placeholder='Password' type='password' />
                      </div>
                    </div> */}
                    {/* Checkout Form List checkbox End */}
                  </div>
                  {/* Different Address Start */}
                  <div className='different-address'>
                    {/* Ship Different Title Checkbox Start */}
                    <div className='ship-different-title'>
                      <div>

                      </div>
                    </div>
                    {/* Ship Different Title Checkbox End */}
                    {/* Ship Box Info Start */}
                    <div id='ship-box-info' className='row mt-2'>
                      {/* Select Country Name Start */}
                      <div className='col-md-12'>
                        <div className='myniceselect country-select clearfix'>
                          <label>
                            Country <span className='required'>*</span>
                          </label>
                          <select className='myniceselect nice-select wide rounded-0'>
                            <option data-display='Bangladesh'>
                              Bangladesh
                            </option>
                            <option value='uk'>London</option>
                            <option value='rou'>Romania</option>
                            <option value='fr'>French</option>
                            <option value='de'>Germany</option>
                            <option value='aus'>Australia</option>
                          </select>
                        </div>
                      </div>
                      {/* Select Country Name End */}
                      {/* First Name Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            First Name <span className='required'>*</span>
                          </label>
                          <input placeholder type='text' />
                        </div>
                      </div>
                      {/* First Name Input End */}
                      {/* Last Name Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            Last Name <span className='required'>*</span>
                          </label>
                          <input placeholder type='text' />
                        </div>
                      </div>
                      {/* Last Name Input End */}
                      {/* Company Name Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>Company Name</label>
                          <input placeholder type='text' />
                        </div>
                      </div>
                      {/* Company Name End */}
                      {/* Address Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            Address <span className='required'>*</span>
                          </label>
                          <input placeholder='Street address' type='text' />
                        </div>
                      </div>
                      {/* Address Input End */}
                      {/* Optional Text Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <input
                            placeholder='Apartment, suite, unit etc. (optional)'
                            type='text'
                          />
                        </div>
                      </div>
                      {/* Optional Text End */}
                      {/* Town or City Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            Town / City <span className='required'>*</span>
                          </label>
                          <input type='text' />
                        </div>
                      </div>
                      {/* Town or City Input End */}
                      {/* State or Country Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            State / County <span className='required'>*</span>
                          </label>
                          <input placeholder type='text' />
                        </div>
                      </div>
                      {/* State or Country Input End */}
                      {/* Postcode or Zip Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            Postcode / Zip <span className='required'>*</span>
                          </label>
                          <input placeholder type='text' />
                        </div>
                      </div>
                      {/* Postcode or Zip Input End */}
                      {/* Email Address Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            Email Address <span className='required'>*</span>
                          </label>
                          <input placeholder type='email' 
                          
                          />
                        </div>
                      </div>
                      {/* Email Address Input End */}
                      {/* Phone Number Input Start */}
                      <div className='col-md-12'>
                        <div className='checkout-form-list'>
                          <label>
                            Phone <span className='required'>*</span>
                          </label>
                          <input type='text' onChange={async (e)=>SetSoDT(e.target.value)} value={SoDT}/>
                        </div>
                      </div>
                      {/* Phone Number Input End */}
                    </div>
                    {/* Ship Box Info End */}
                    {/* Order Notes Textarea Start */}
                    <div className='order-notes mt-3 mb-n2'>
                      <div className='checkout-form-list checkout-form-list-2'>
                        <label>Nội dung cần ghi chú</label>
                        <textarea
                          id='checkout-mess'
                          cols={30}
                          rows={10}
                          placeholder='Vui lòng điền nội dung cần ghi chú bên dưới.'
                          value={NoiDungCanGhiChu}
                          onChange={
                            async (e)=>SetNoiDungCanGhiChu(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    {/* Order Notes Textarea End */}
                  </div>
                  {/* Different Address End */}
                </div>
      
              {/* Checkbox Form End */}
            </div>
            <div className='col-lg-6 col-12 mb-4'>
              {/* Your Order Area Start */}
              <div className='your-order-area border'>
                {/* Title Start */}
                <h3 className='title'>Hóa đơn</h3>
                {/* Title End */}
                {/* Your Order Table Start */}
                <div className='your-order-table table-responsive'>
                  <table className='table'>
                    {/* Table Head Start */}
                    <thead>
                      <tr className='cart-product-head'>
                        <th className='cart-product-name text-start'>
                          Sản phẩm
                        </th>
                        <th className='cart-product-total text-end'>Tổng</th>
                      </tr>
                    </thead>
                    {/* Table Head End */}
                    {/* Table Body Start */}
                    <tbody>
                      {GioHang.map((x) => (
                        <tr className='cart_item'>
                          <td
                            className='cart-product-name text-start ps-0'
                            style={{ width: "100%" }}>
                            {" "}
                            {x.ten_hang}
                            <strong className='product-quantity'>
                              {" "}
                              |{" "}
                              {x.gia_ban_le.toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                              })}{" "}
                              × {x.so_luong}
                            </strong>
                          </td>
                          <td className='cart-product-total text-end pe-0'>
                            <span className='amount'>
                              {parseInt(
                                x.so_luong * x.gia_ban_le
                              ).toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* Table Body End */}
                    {/* Table Footer Start */}
                    <tfoot>
                      <tr className='cart-subtotal'>
                        <th className='text-start ps-0'>
                          Tổng tiền thanh toán
                        </th>
                        <td className='text-end pe-0'>
                          <span className='amount'>
                            {parseInt(
                              window.localStorage.getItem("TongTien")
                            ).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </td>
                      </tr>
                      <tr className='cart-subtotal'>
                        <th className='text-start ps-0'>Tiền ship</th>
                        <td className='text-end pe-0'>
                          <span className='amount'>
                            {parseInt(TienShip).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </td>
                      </tr>
                      <tr className='order-total'>
                        <th className='text-start ps-0'>Thành tiền</th>
                        <td className='text-end pe-0'>
                          <strong>
                            <span className='amount'>
                              {parseInt(
                                window.localStorage.getItem("TongTien")
                              ).toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                    {/* Table Footer End */}
                  </table>
                </div>
                {/* Your Order Table End */}
                {/* Payment Accordion Order Button Start */}
                <div className='payment-accordion-order-button'>
                  <div className='payment-accordion'>
                    <div className='single-payment'>
                      <h5 className='panel-title mb-3'>
                        <a
                          className='collapse-off'
                          data-bs-toggle='collapse'
                          href='#collapseExample'
                          aria-expanded='false'
                          aria-controls='collapseExample'>
                          Thanh toán giao hàng COD.
                        </a>
                      </h5>
                      <div className='collapse show' id='collapseExample'>
                        <div className='card card-body rounded-0'>
                          <p>
                           Người dùng điền đầy đủ thông tin .
                           
                          </p>
                          <p>Bộ phận giao hàng sẽ nhận thanh toán trực tiếp khi nhận hàng</p>
                        </div>
                      </div>
                    </div>
                    <div className='single-payment'>
                      <h5 className='panel-title mb-3'>
                        <a
                          className='collapse-off'
                          data-bs-toggle='collapse'
                          href='#collapseExample-2'
                          aria-expanded='false'
                          aria-controls='collapseExample-2'>
                          Thanh toán bằng VNPAY.
                        </a>
                      </h5>
                      <div className='collapse' id='collapseExample-2'>
                        <div className='card card-body rounded-0'>
                          <p>
                            Bước 1 : Khách hàng điền đẩy đủ thông tin để thực hiện thanh toán qua mã VNPAY.
                          </p>
                          <p>Bước 2 : Khách hàng quét mã thanh toán bên dưới.</p>
                          <p>Bước 3 : Khi thành công khách hàng vui lòng nhấn thanh toán bên dưới.</p>
                          <p>Bước 4 : Nhân viên sẽ xác nhận hoá đơn khách hàng khi thực hiện thành công.</p>
                          <p>Bước 5 : Xem lịch sử thanh toán trong phần tài khoản khách hàng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='single-payment'>
                      <h5 className='panel-title mb-3'>
                        <a
                          className='collapse-off'
                          data-bs-toggle='collapse'
                          href='#collapseExample-3'
                          aria-expanded='false'
                          aria-controls='collapseExample-3'>
                          Thanh toán qua chuyển khoản ngân hàng.
                        </a>
                      </h5>
                      <div className='collapse' id='collapseExample-3'>
                        <div className='card card-body rounded-0'>
                        <p>
                            Bước 1 : Khách hàng điền đẩy đủ thông tin để thực hiện thanh toán qua chuyển khoản ngân hàng.
                          </p>
                          <p>- Nội dung cần ghi chú khách hàng điền {'<Số tiền hoá đơn>-<Mã giao dịch>'}</p>
                          <p>Bước 2 : Khách hàng thanh toán qua chuyển khoản ngân hàng.</p>
                          <p>Bước 3 : Khi thành công khách hàng vui lòng nhấn thanh toán bên dưới.</p>
                          <p>Bước 4 : Nhân viên sẽ xác nhận hoá đơn khách hàng khi thực hiện thành công.</p>
                          <p>Bước 5 : Xem lịch sử thanh toán trong phần tài khoản khách hàng.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  
                    <select className="form-control mb-5" style={{fontSize:'16px'}}
                    onChange={async (e)=>{
                      SetPhuongThucThanhToan(e.target.value)
                    }}
                    >
                      
                      <option style={{fontSize:'16px'}} value=" ">Vui lòng nhấn đây chọn phương thức thanh toán</option>
                      <option style={{fontSize:'16px'}} value="Thanh toán COD">Thanh toán COD</option>
                      <option style={{fontSize:'16px'}} value="Thanh toán bằng VNPAY">Thanh toán bằng VNPAY</option>
                      <option style={{fontSize:'16px'}} value="Thanh toán chuyển tiền ngân hàng">Thanh toán chuyển tiền ngân hàng</option>
                  </select>
                  </div>
                  <div className='order-button-payment'>
                    <button
                      className='btn btn-primary btn-hover-secondary rounded-0 w-100'
                      onClick={async () => ThanhToanHoaDon()}>
                      Thanh toán
                    </button>
                  </div>
                </div>
                {/* Payment Accordion Order Button End */}
              </div>
              {/* Your Order Area End */}
            </div>
          </div>
        </div>
      </div>
      {/* Checkout Section End */}
    </React.Fragment>
  );
}

export default PhanDuoiThanhToan;
