/** @format */

import React,{useState} from "react";
import QRCode from "react-qr-code";
import host from '../../../../host/host'
function ThanhToan() {
    const [ngay_tao,Setngay_tao] = React.useState('2021-31-1 12:12:12')
    const [GioHang, SetGioHang] = useState(
        window.localStorage.getItem("GioHang")
          ? JSON.parse(window.localStorage.getItem("GioHang"))
          : []
      );
      const [SoDu, SetSoDu] = useState(0)
      const [KhachGuiTien, SetKhachGuiTien] = useState(
        window.localStorage.getItem("KhachGuiTien")
          ? JSON.parse(window.localStorage.getItem("KhachGuiTien"))
          : ''
      );
    const [HoaDonID,SetHoaDonID] = useState('')
    const TaoHoaDon = async ()=>{
      try {
        if(GioHang.length===0){
          alert('Bạn chưa chọn giỏ hàng !')
        }else{
          const data = new Date()
          var ngay_tao=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
          Setngay_tao(ngay_tao)
          SetKhachGuiTien(        window.localStorage.getItem("KhachGuiTien")
          ? JSON.parse(window.localStorage.getItem("KhachGuiTien"))
          : '')
          var nguoi_tao = JSON.parse(
            window.localStorage.getItem("dulieunguoidung")
          )[0].ten_nhan_vien
          var nhan_vien_id = JSON.parse(
            window.localStorage.getItem("dulieunguoidung")
          )[0].nhan_vien_id
          // var jsPrintAll = function () {
          //     setTimeout(function () {
          //     window.print();
          //     }, 500);
          //     }
          var tong_tien = window.localStorage.getItem("TongTienGioHang")
          const response = await fetch(host.HoaDonTraHangKH,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify({GioHang,ngay_tao,nguoi_tao,tong_tien,nhan_vien_id})
          })
          console.log(response)
          SetHoaDonID(await response.json())
          window.localStorage.setItem("GioHang",'[]')
          window.localStorage.setItem("TongTienGioHang",'0')
          var divToPrint=document.getElementById('hoadontrahangkhach');
  
          var newWin=window.open('','Print-Window');
  
          newWin.document.open();
  
          newWin.document.write(`<html>
          <style>
          .invoice-box {
              max-width: 800px;
              margin: auto;
              padding: 30px;
              border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);
              font-size: 16px;
              line-height: 24px;
              font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
              color: #555;
          }
          
          .invoice-box table {
              width: 100%;
              line-height: inherit;
              text-align: left;
          }
          
          .invoice-box table td {
              padding: 5px;
              vertical-align: top;
          }
          
          .invoice-box table tr td:nth-child(2) {
              text-align: right;
          }
          
          .invoice-box table tr.top table td {
              padding-bottom: 20px;
          }
          
          .invoice-box table tr.top table td.title {
              font-size: 45px;
              line-height: 45px;
              color: #333;
          }
          
          .invoice-box table tr.information table td {
              padding-bottom: 40px;
          }
          
          .invoice-box table tr.heading td {
              background: #eee;
              border-bottom: 1px solid #ddd;
              font-weight: bold;
          }
          
          .invoice-box table tr.details td {
              padding-bottom: 20px;
          }
          
          .invoice-box table tr.item td{
              border-bottom: 1px solid #eee;
          }
          
          .invoice-box table tr.item.last td {
              border-bottom: none;
          }
          
          .invoice-box table tr.total td:nth-child(2) {
              border-top: 2px solid #eee;
              font-weight: bold;
          }
          
          @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td {
                  width: 100%;
                  display: block;
                  text-align: center;
              }
              
              .invoice-box table tr.information table td {
                  width: 100%;
                  display: block;
                  text-align: center;
              }
          }
          
          /** RTL **/
          .rtl {
              direction: rtl;
              font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
          }
          
          .rtl table {
              text-align: right;
          }
          
          .rtl table tr td:nth-child(2) {
              text-align: left;
          }
          #exampleModalLabel{
              display:none;
          }
          #daux{
              display:none;
          }
          </style>
          <body onload="window.print()">`+divToPrint.innerHTML+`</body>
          </html>`);
  
          newWin.document.close();
  
          setTimeout(function(){newWin.close();},3000);
        }
        
      } catch (error) {
        
      }
        
    }
    React.useEffect(()=>{
        const data = new Date()
        var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
        Setngay_tao(ngay_gio_hien_tai)
        SetGioHang(        window.localStorage.getItem("GioHang")
        ? JSON.parse(window.localStorage.getItem("GioHang"))
        : [])
    },[GioHang,ngay_tao,KhachGuiTien,HoaDonID])
  return (
    <React.Fragment>
      <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" id="btnprint" data-toggle="modal" data-target="#hoadontrahangkhach" onClick={TaoHoaDon}>
    Xác nhận trả hàng
  </button>
  {/* Modal */}
  <div className="modal fade" id="hoadontrahangkhach" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Hoá đơn</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="daux">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
                        {/* Bill */}
                        <div className="invoice-box">
  <table cellPadding={0} cellSpacing={0}>
    <tbody><tr className="top">
        <td colSpan={2}>
          <table>
            <tbody><tr>
                <td className="title">
                
                <QRCode value={HoaDonID==='' ? 'ABC' : HoaDonID+'*SHOPABC'} size={200}/>
                  {/* <img src="https://www.sparksuite.com/images/logo.png" style={{width: '100%', maxWidth: '300px'}} /> */}
                </td>
                <td>
                  Hoá đơn trả hàng : {HoaDonID}<br />
                  Ngày tạo : {(ngay_tao.split(' ')[0].split('-')[2].length > 1 ? ngay_tao.split(' ')[0].split('-')[2] : "0"+ngay_tao.split(' ')[0].split('-')[2]) + '-' + (ngay_tao.split(' ')[0].split('-')[1].length > 1 ? ngay_tao.split(' ')[0].split('-')[1] : '0'+ngay_tao.split(' ')[0].split('-')[1]) + '-' + ngay_tao.split(' ')[0].split('-')[0]}
                  <br />
                  Giờ tạo : {ngay_tao.split(' ')[1]}
                </td>
              </tr>
            </tbody></table>
        </td>
      </tr>
      <tr className="information">
        <td colSpan={2}>
          <table>
            <tbody><tr>
                <td>
                  {/* Sparksuite, Inc.<br />
                  12345 Sunny Road<br />
                  Sunnyville, CA 12345 */}
                </td>
                <td>
                  {/* Acme Corp.<br />
                  John Doe<br />
                  john@example.com */}
                </td>
              </tr>
            </tbody></table>
        </td>
      </tr>
      <tr className="heading">
        <td>
          Thông tin hoá đơn
        </td>
        <td>
          Check #
        </td>
      </tr>
      <tr className="details">
        <td>
          Nhân viên bán hàng
        </td>
        <td>
          Admin
        </td>
      </tr>
      {/* <tr className="details">
        <td>
          Thông tin người dùng
        </td>
        <td>
          Admin
        </td>
      </tr> */}
      <tr className="heading">
        <td>
          Sản phẩm
        </td>
        <td>
          Tổng
        </td>
      </tr>
      {GioHang.map(x=>(
            <tr className="item">
            <td>
                { x.ma_hang+' '+x.ten_hang}
            </td>
            <td>
                {parseInt(x.gia_ban_le).toLocaleString("vi",{style: "currency",currency: "VND",}) + 'x'+ x.so_luong +'='+ 
                parseInt(x.so_luong * x.gia_ban_le).toLocaleString("vi", {style: "currency",currency: "VND",})}
            </td>
            </tr>
      ))}
      <tr className="total item">
        <td />
        <td>
        Thành tiền :{" "}
                    {parseInt(
                      window.localStorage.getItem("TongTienGioHang")
                    ).toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
        </td>
      </tr>

      <tr className="heading">
        <td>
          {/* Sản phẩm */}
        </td>
        <td>
          {/* Tổng */}
        </td>
      </tr>
        <tr className="total item">
        <td />
        <td>
        Thành tiền :{" "}
                    {parseInt(
                      window.localStorage.getItem("TongTienGioHang")
                    ).toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
        </td>
      </tr>      <tr className="total item">
        <td />
        <td>
        Khách gửi tiền :{" "}
                    {parseInt(
                      window.localStorage.getItem("KhachGuiTien")
                    ).toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
        </td>
      </tr>
      <tr className="total item">
        <td />
        <td>
        Tổng :{" "}
        {( parseInt(window.localStorage.getItem('KhachGuiTien')) + parseInt(window.localStorage.getItem('TongTienGioHang')) ).toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    }) }
        </td> 
      </tr>
    </tbody></table>
</div>

                        {/* Bill */}
        </div>
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
          <button type="button" className="btn btn-primary" data-dismiss="modal" id="daux">Trở về</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
}

export default ThanhToan;
