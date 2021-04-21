import React from 'react'
import host from '../../../../host/host'
const date = new Date()
var ngay_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
function DSBanMatHang() {
    const [DSSoNhap,SetDSSoNhap] = React.useState([])
    const [DSSoBan,SetDSSoBan] = React.useState([])

    React.useEffect(async ()=>{
        try {
            var date = new Date()
            var ngay_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
            // const response = await fetch(host.SoNhap_Ban+`/${ngay_hien_tai}/0`)
            // const JsonData = await response.json()
            const _response = await fetch(host.SoNhap_Ban+`/${ngay_hien_tai}/1`)
            const _JsonData = await _response.json()
            SetDSSoBan(_JsonData)
            // SetDSSoNhap(JsonData)
            // console.log(DSSoNhap)
            console.log(DSSoBan)
        } catch (error) {
            
        }
    },[])
    const onClickInSoBan =  () =>{

        var divToPrint=document.getElementById('ThongKeBanMatHang');
  
        var newWin=window.open('','Print-Window');

        newWin.document.open();

        newWin.document.write(`
        <!doctype html>
        <html lang="en">
          <head>
            <title>Title</title>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <style>
                #nut-click-ban{
                    display:none;
                }
            </style>
            </head>
          <body onload="window.print()">
          `+divToPrint.innerHTML+`
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            
          </body>
        </html>`);

        newWin.document.close();

        setTimeout(function(){newWin.close();},3000);
    }
    return (
        <div>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Thông tin</strong>
          </div>
          <div className="card-body" id="ThongKeBanMatHang">
              <h3 className="text-center mb-5">Số bán ngày {ngay_hien_tai.split('-')[2] + '-' + ngay_hien_tai.split('-')[1] +'-' +ngay_hien_tai.split('-')[0] }</h3>
          <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Mã hàng</th>
                <th scope="col">Tên hàng</th>
                <th scope="col">Số bán</th>
                </tr>
            </thead>
            <tbody>
                {
                    DSSoBan.map(x=>
                    (<tr>
                        <th scope="row">{x.ma_hang}</th>
                        <td>{x.ten_hang}</td>
                        <td>{x.so_ban_tong}</td>
                    </tr>)
                    )
                }
            </tbody>
            </table>
                <button className="btn btn-primary" id="nut-click-ban" style={{float:'right',marginRight:'20px'}} onClick={onClickInSoBan}>In số bán</button>
            {/* Credit Card */}

          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}
        </div>
    )
}

export default DSBanMatHang
