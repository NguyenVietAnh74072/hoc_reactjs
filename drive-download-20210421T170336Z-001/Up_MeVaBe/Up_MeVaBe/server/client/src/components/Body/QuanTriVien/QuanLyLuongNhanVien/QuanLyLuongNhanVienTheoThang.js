import React ,{useEffect,useState,useRef}from 'react'
import host from '../../../../host/host';
const tbody_style = {height:'80em',overflow:'scroll'}
function QuanLyLuongNhanVienTheoThang() {
    const onClickInLuongNhanVienTheoThang = ()=>{
        var divToPrint=document.getElementById('table-scroll');
    
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
    
    
      const daysInMonth =(month,year)=>{return new Date(year,month,0).getDate();}
      const DateInDay = (value) =>{
        console.log(value)
        switch (value){
              case 1:
                return "Mon"
                case 2:
            return "Tue"
                case 3:
            return "Wed"
                case 4:
            return "Thu"
                case 5:
            return "Fri"
                case 6:
            return "Sat"
                case 0:
            return "Sun"
        }
      }
      const typingTimeoutRef = useRef(null)
      const date = new Date()
      const [Thang,SetThang] = useState(date.getMonth()+1)
      const [Nam,SetNam] = useState(date.getFullYear())
      const [DLNgay,SetDLNgay] = useState([])
      const [DSNhanVien,SetDSNhanVien] = useState([])
    
      const HienThiCacNgayTrongThang = ()=>{
          return (
            <>
              {DLNgay.map(x=>(<th>{DateInDay(new Date(Nam,Thang-1,x).getDay())+'-'+ x}</th>))}
            </>
          )
    }
    const BangLuongNhanVien = ()=>{
        return (<>
            {
              DSNhanVien.map(x=>(<tr>
                <td>{x.ten_nhan_vien}</td>
                {DLNgay.map(y=>
                  (<td>{x.ma_nhan_vien}</td>)
                )}
              </tr>))}
        </>)
    }
    React.useEffect(async ()=>{
      try {
        const DL = []
        for (let i=1;i<= daysInMonth(Thang,Nam);i++){
          DL.push(i)
        }
        SetDLNgay(DL)
        console.log(host.LayTenNhanVien)
        const response = await fetch(host.LayTenNhanVien)
        const JsonData = await response.json()
        SetDSNhanVien(JsonData)
      } catch (error) {
        
      }
    },[])
    return (
        <React.Fragment>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Quản lý lương nhân viên</strong>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                  Tháng
                  <input className="form-control" value={Thang} onChange={e=>SetThang(e.target.value)} style={{width:'200px'}}></input>
              </div>
              <div className="col">
                Năm
              <input className="form-control" value={Nam} onChange={e=>SetNam(e.target.value)} style={{width:'200px'}}></input>
              </div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
            <div>
              <div className="table-responsive mt-5">
                  <h3 className="text-center">Lương nhân viên tháng {Thang} - Năm {Nam}</h3>
                  <table className="table table-hover table-inverse mt-3">
                    <thead className="thead-inverse">
                      <tr>
                        <th>Tên nhân viên</th>
                        {HienThiCacNgayTrongThang()}
                      </tr>
                    </thead >
                    <tbody style={tbody_style}>
                    {BangLuongNhanVien()}
                    </tbody>
                  </table>

                  </div>
            </div>
          <button className="btn btn-primary" id="nut-click-ban" style={{float:'right',marginRight:'20px'}} onClick={onClickInLuongNhanVienTheoThang}>In</button>
          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}

        </React.Fragment>
    )
}

export default QuanLyLuongNhanVienTheoThang
