import React from 'react'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import QrReader from 'react-qr-reader'
function QuetMaVach() {
    const [ data, setData ] = React.useState('Not found');
    React.useEffect(()=>{

    },[data])
    const handleError = (e)=>{
      console.log(e)
    }
    const handleScan = (e)=>{
      setData(e)
    }
    return (
        <React.Fragment>
            <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Quét mã vạch
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
        {/* <BarcodeScannerComponent
        width={'100%'}
        height={'50%'}
        onUpdate={(err, result) =>  setData(result.text)}
      />
      <p>{data}</p> */}
              <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{data}</p>
            </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    )
}

export default QuetMaVach
