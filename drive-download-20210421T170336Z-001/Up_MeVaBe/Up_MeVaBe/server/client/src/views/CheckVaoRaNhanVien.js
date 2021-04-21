import React from 'react'
import QrReader from 'react-qr-reader'
import host from '../host/host'
function CheckVaoRaNhanVien() {
    const [ data, setData ] = React.useState('Not found');
    const [check,Setcheck] = React.useState(true)
    const handleError = (e)=>{
        console.log(e)
      }
      const handleScan = async(e)=>{
        try {
            if(e!=null){
              const date = new Date()
              var ngay_gio_hien_tai = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+ date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
              const response = await fetch(host.CheckRaVaoNhanVien,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ngay_gio_hien_tai,e,check}),
              })
              alert(await response.json())
              console.log(response)
              setData(e)
            }
        } catch (error) {
          
        }
      }

    
    return (
        <React.Fragment>
           <div className='breadcrumbs'>
                <div className='breadcrumbs-inner'>
                <div className='row m-0'>
                    <div className='col-sm-4'>
                    <div className='page-header float-left'>
                        <div className='page-title'>
                        <h1>Check vào ra nhân viên</h1>
                        </div>
                    </div>
                    </div>
                    <div className='col-sm-8'>
                    <div className='page-header float-right'>
                        <div className='page-title'>
                        <ol className='breadcrumb text-right'>
                            <li>
                            <a href='#'>---------------</a>
                            </li>
                            <li>
                            <a href='#'>Check vào ra nhân viên</a>
                            </li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>


            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Check ca ra vào nhân viên</strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '300px',height:'300px'}}
                        />
                        <p>{data}</p>
                        <input type='radio' checked={check} style={check ? {zoom:'1.5'} : {zoom:'1.2'} } 
                            onClick={async ()=>Setcheck(true)}
                        ></input> 
                        <label  style={{fontSize:'18px'}} onClick={async ()=> Setcheck(true)}> Nhân viên đi vào</label>
                        <br></br>
                        <input type='radio' checked={!check}  style={!check ? {zoom:'1.5'} : {zoom:'1.2'} } onClick={async ()=>Setcheck(false)}></input>
                        <label  style={{fontSize:'18px'}} onClick={async ()=>Setcheck(false)}> Nhân viên đi ra</label>
                    </div>
                    <div className="col"></div>
                    
                </div>
                <div className="row">
                </div>
          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}

        </React.Fragment>
    )
}

export default CheckVaoRaNhanVien
