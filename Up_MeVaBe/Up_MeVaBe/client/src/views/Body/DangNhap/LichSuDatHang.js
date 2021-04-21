import React from 'react'
import hosting from '../../../host/hosting'

function LichSuDatHang() {
    const getData = async ()=>{
        const DLDangNhapLucLac = window.localStorage.getItem('DLDangNhapLucLac') === null ? [] :
        JSON.parse(window.localStorage.getItem('DLDangNhapLucLac'))
        const response = await fetch(hosting.LichSuHoaDonTaiKhoanKhachHang+`/`)
        const JsonData = await response.json()
    }
    React.useEffect(()=>{
        getData()
    },[])
    return (
        <React.Fragment>
            {/* Shopping Cart Section Start */}
<div className="section section-margin">
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Cart Table Start */}
        <div className="cart-table table-responsive" style={{width:'100%'}}>
          <table className="table table-bordered">
            {/* Table Head Start */}
            <thead>
              <tr>
                <th className="pro-thumbnail">Mã hoá đơn</th>
                <th className="pro-quantity">Ngày đặt hàng</th>
                <th className="pro-subtotal">Xem hoá đơn</th>
                
              </tr>
            </thead>
            {/* Table Head End */}
            {/* Table Body Start */}
            <tbody>
              <tr>
                <td className="pro-thumbnail">Mã test</td>
                <td className="pro-quantity"><a href="#">Yellow Toy For Baby</a></td>
                <td className="pro-subtotal"><span>$95.00</span></td>
              </tr>
            
            </tbody>
            {/* Table Body End */}
          </table>
        </div>
        {/* Cart Table End */}
        {/* Cart Button Start */}
        <div className="cart-button-section">
          <a className="btn btn-primary btn-hover-dark" style={{cursor:'pointer'}}
          onClick={{}}
          >Cập nhập trạng thái</a>
          <a className="btn btn-primary btn-hover-dark">Mua hàng tiếp</a>
        </div>
        {/* Cart Button End */}
      </div>
    </div>
    <div className="row mt-10 mb-n10">
      <div className="col-lg-6 mb-10">
        <div className="delivery-date-wrapper mb-6">
          <h3 className="title">Delivery Date</h3>
          <form action="#" className="date-input-label">
            <label className="date-label" htmlFor="date-link">Pick a delivery date:</label>
            <span className="date-in">
              <input className="date-input" type="text" name="date" id="date-link" />
            </span>
          </form>
          <span>We do not deliver during the week-end.</span>
        </div>
        <div className="input-textarea">
          <h3 className="title border-0 mb-0">Special instructions for seller</h3>
          <textarea name="text" id="minitextarea" className="input-cupon-textarea" cols={30} rows={6} defaultValue={""} />
        </div>
      </div>
      <div className="col-lg-6 mb-10">
        {/* Cart Calculation Area Start */}
        <div className="cart-calculator-wrapper">
          {/* Cart Calculate Items Start */}
          <div className="cart-calculate-items">
            {/* Cart Calculate Items Title Start */}
            <h3 className="title">Cart Totals</h3>
            {/* Cart Calculate Items Title End */}
            {/* Responsive Table Start */}
            <div className="table-responsive">
              <table className="table">
                <tbody><tr>
                    <td>Sub Total</td>
                    <td>$230</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>$70</td>
                  </tr>
                  <tr className="total">
                    <td>Total</td>
                    <td className="total-amount">$300</td>
                  </tr>
                </tbody></table>
            </div>
            {/* Responsive Table End */}
          </div>
          {/* Cart Calculate Items End */}
          {/* Cart Checktout Button Start */}
          <a href="checkout.html" className="btn btn-primary btn-hover-dark mt-6">Proceed To Checkout</a>
          {/* Cart Checktout Button End */}
        </div>
        {/* Cart Calculation Area End */}
      </div>
    </div>
  </div>
</div>
{/* Shopping Cart Section End */}

        </React.Fragment>
    )
}

export default LichSuDatHang
