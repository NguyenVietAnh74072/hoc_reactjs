import React, { useState } from 'react'
import host from '../../../../host/host'
const date = new Date()
var ngay_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
function DSBankingBanHang() {
    const [SL_500K,SetSL_500K] = useState(0)
    const [SL_200K,SetSL_200K] = useState(0)
    const [SL_100K,SetSL_100K] = useState(0)
    const [SL_50K,SetSL_50K] = useState(0)
    const [SL_20K,SetSL_20K] = useState(0)
    const [SL_10K,SetSL_10K] = useState(0)
    const [SL_5K,SetSL_5K] = useState(0)
    const [SL_2K,SetSL_2K] = useState(0)
    const [SL_1K,SetSL_1K] = useState(0)
    const [SL_500,SetSL_500] = useState(0)
    const [SL_200,SetSL_200] = useState(0)
    const [DoanhThuBanHang,SetDoanhThuBanHang] = useState([])
    const onClickInBankingBanHang = ()=>{
        var divToPrint=document.getElementById('ThongKeBankingBanHang');
  
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
                .form-control {
                    border: none;
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
    React.useEffect(async ()=>{
        try {
            const date = new Date()
            var ngay_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
            const reponse = await fetch(host.ThongKeBankingBanHang+`/${ngay_hien_tai}`)
            const JsonData = await reponse.json()
            SetDoanhThuBanHang(JsonData)
            console.log(DoanhThuBanHang)
        } catch (error) {
            
        }
    },[])
    return (
        <React.Fragment>
        <div>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Thông tin</strong>
          </div>
          <div className="card-body" id="ThongKeBankingBanHang">
              <h3 className="text-center mb-5">Số bán ngày {ngay_hien_tai.split('-')[2] + '-' + ngay_hien_tai.split('-')[1] +'-' +ngay_hien_tai.split('-')[0] }</h3>
              <div className="row ml-5">
                  <div className="col" style={{fontWeight:'Bold'}}>Tiền</div>
                  <div className="col" style={{fontWeight:'Bold'}}>Số lượng</div>
                  <div className="col" style={{fontWeight:'Bold'}}>Tổng</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">500.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_500K} onChange={e=>SetSL_500K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_500K*500000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">200.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_200K} onChange={e=>SetSL_200K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_200K*200000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">100.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_100K} onChange={e=>SetSL_100K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_100K*100000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">50.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_50K} onChange={e=>SetSL_50K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_50K*50000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">20.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_20K} onChange={e=>SetSL_20K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_20K*20000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">10.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_10K} onChange={e=>SetSL_10K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_10K*10000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">5.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_5K} onChange={e=>SetSL_5K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_5K*5000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">2.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_2K} onChange={e=>SetSL_2K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_2K*2000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">1.000 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_1K} onChange={e=>SetSL_1K(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_1K*1000).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">500 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_500} onChange={e=>SetSL_500(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_500*500).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
              <div className="row ml-5 mt-3">
                  <div className="col">200 đ</div>
                  <div className="col"><input className="form-control" style={{width:'100px'}} value={SL_200} onChange={e=>SetSL_200(e.target.value)}></input></div>
                  <div className="col">{parseInt(SL_200*200).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</div>
              </div>
              <hr></hr>
                <div className="row mt-3">
                    <div className="col"></div>
                    <div className="col">Tiền doanh thu bán :</div>
                    <div className="col">{DoanhThuBanHang.map(x=>parseInt(x.sum).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              }))}</div>
                </div>
                <hr></hr>
                <div className="row mt-3">
                    <div className="col"></div>
                    <div className="col">Tiền thực chuyển:</div>
                    <div className="col">                    {
            parseInt((SL_500K*500000) + (SL_200K*200000) + (SL_100K*100000) + (SL_50K*50000) +
                (SL_20K*20000) +(SL_10K*10000) + (SL_5K*5000) + (SL_2K*2000) + (SL_1K*1000) + (SL_500*500) + (SL_200*200)  ).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })
                }</div>
                </div>

                <hr></hr>
                <div className="row mt-3">
                    <div className="col"></div>
                    <div className="col">Số dư : </div>
                    <div className="col">{
( parseInt((SL_500K*500000) + (SL_200K*200000) + (SL_100K*100000) + (SL_50K*50000) +
 (SL_20K*20000) +(SL_10K*10000) + (SL_5K*5000) + (SL_2K*2000) + (SL_1K*1000) + (SL_500*500) + (SL_200*200)  ) - DoanhThuBanHang.map(x=>parseInt(x.sum))).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })
                }</div>
                </div>
                <button className="btn btn-primary" id="nut-click-ban" style={{float:'right',marginRight:'20px'}} onClick={onClickInBankingBanHang}>In</button>
            {/* Credit Card */}

          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}
        </div>
        </React.Fragment>
    )
}

export default DSBankingBanHang
