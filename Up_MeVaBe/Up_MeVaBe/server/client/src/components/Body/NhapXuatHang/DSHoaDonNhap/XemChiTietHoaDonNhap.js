import React from 'react'
import host from '../../../../host/host'
function XemChiTietHoaDonBan({DuLieuXem,GetGioHang}) {
    const [HoaDonID,SetHoaDonID] = React.useState(DuLieuXem.phieu_nhap_id)
    const [ngay_tao,Setngay_tao] = React.useState(DuLieuXem.NgayFORMAT)
    const [tong_gia_tri,Settong_gia_tri] = React.useState(DuLieuXem.tong_gia_tri)
    const [GioHang,SetGioHang] = React.useState([])

    React.useEffect(async ()=>{
        try {
            SetHoaDonID(DuLieuXem.phieu_nhap_id)
            Settong_gia_tri(DuLieuXem.tong_gia_tri)
            Setngay_tao(DuLieuXem.ngay_tao)

            GetGioHang.then((result)=>{
                SetGioHang(result)
                console.log(result)
            })
        } catch (error) {
        }
        // console.log(DuLieuXem)
    },[DuLieuXem.phieu_nhap_id,DuLieuXem.ngay_tao,DuLieuXem.tong_gia_tri,GetGioHang])
    return (
        <React.Fragment>
            <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#XemHoaDonBanChiTiet`+HoaDonID}>
    Xem
  </button>
  {/* Modal */}
  <div className="modal fade" id={`XemHoaDonBanChiTiet`+HoaDonID} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel"></h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                
                {/* <QRCode value={HoaDonID==='' ? 'ABC' : HoaDonID+'*SHOPABC'} size={200}/> */}
                  {/* <img src="https://www.sparksuite.com/images/logo.png" style={{width: '100%', maxWidth: '300px'}} /> */}
                </td>
                <td>
                  Hoá đơn bán {DuLieuXem.phieu_nhap_id}<br />
                  Ngày tạo  {DuLieuXem.NgayFORMAT.split(' ')[0]}
                  <br></br>
                  Giờ tạo {DuLieuXem.NgayFORMAT.split(' ')[1]}
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
                {parseInt(x.don_gia).toLocaleString("vi",{style: "currency",currency: "VND",}) + 'x'+ x.so_luong +'='+ 
                parseInt(x.so_luong * x.don_gia).toLocaleString("vi", {style: "currency",currency: "VND",})}
            </td>
            </tr>
      ))}
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
        Tổng :{" "}{tong_gia_tri }
        </td> 
      </tr>
    </tbody></table>
</div>

                        {/* Bill */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    )
}

export default XemChiTietHoaDonBan
