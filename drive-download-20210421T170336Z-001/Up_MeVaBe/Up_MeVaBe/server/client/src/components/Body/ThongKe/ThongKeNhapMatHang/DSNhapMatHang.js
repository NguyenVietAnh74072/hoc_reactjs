import React from 'react'
import host from '../../../../host/host'
const date = new Date()
var ngay_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
function DSNhapMatHang() {
    const [DSSoNhap,SetDSSoNhap] = React.useState([])

    React.useEffect(async ()=>{
        try {
            var date = new Date()
            var ngay_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
            const response = await fetch(host.SoNhap_Ban+`/${ngay_hien_tai}/0`)
            const JsonData = await response.json()
            SetDSSoNhap(JsonData)
        } catch (error) {
            
        }
    },[])
    const onClickInSoNhap =  () =>{

        var divToPrint=document.getElementById('ThongKeNhapMatHang');
  
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
          <div className="card-body" id="ThongKeNhapMatHang">
              <h3 className="text-center mb-5">Số nhập ngày {ngay_hien_tai.split('-')[2] + '-' + ngay_hien_tai.split('-')[1] +'-' +ngay_hien_tai.split('-')[0] }</h3>
          <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Mã hàng</th>
                <th scope="col">Tên hàng</th>
                <th scope="col">Số nhập</th>
                </tr>
            </thead>
            <tbody>
                {
                    DSSoNhap.map(x=>
                    (<tr>
                        <th scope="row">{x.ma_hang}</th>
                        <td>{x.ten_hang}</td>
                        <td>{x.so_luong_nhap}</td>
                    </tr>)
                    )
                }
            </tbody>
            </table>
                <button className="btn btn-primary" id="nut-click-ban" style={{float:'right',marginRight:'20px'}} onClick={onClickInSoNhap}>In số nhập</button>
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

export default DSNhapMatHang
