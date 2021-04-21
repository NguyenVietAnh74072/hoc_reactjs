import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import SuaDonViTinh from './SuaDonViTinh';
import XoaDonViTinh from './XoaDonViTinh';

const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DachSachDonViTinh({DSDonViTinh,_DuLieuSuaMoi,_DuLieuXoaMoi}) {
  const DuLieuSuaMoi = (e)=>{
    _DuLieuSuaMoi(e)
    console.log(e)
  }
  const DuLieuXoaMoi =(e)=>{
    _DuLieuXoaMoi(e)
    console.log(e)
  }
    const columns = [
        {
         name: "ma_dvt",
         label: "Mã đơn vị tính",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ten_dvt",
         label: "Tên đơn vị tính",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ghi_chu",
         label: "Ghi chú",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
          name: "Sửa",
            options: {
              filter: false,
              sort: true,
              customBodyRenderLite: (data,dataIndex,rowIndex) => {
                // console.log('data :'+data)
                // console.log('dataIndex :'+dataIndex)
                // console.log('rowIndex:'+rowIndex)
                // console.log(DSTaiKhoan[data])
                return (
                  // <Edit todo={dataSate[rowIndex]} OnSubmit={EditSubmit}></Edit>
                  <SuaDonViTinh DuLieuSua={DSDonViTinh[data]} DuLieuSuaMoi={DuLieuSuaMoi}></SuaDonViTinh>
                );
              }
            }
        },
        {
          name: "Xóa",
            options: {
              filter: false,
              sort: true,
              empty: true,
              customBodyRenderLite: (data,dataIndex,rowIndex) => {
                return (
                  // <Delete todo={dataSate[rowIndex]} onSubmit={DeleteSubmit}></Delete>
                    <XoaDonViTinh DuLieuXoa={DSDonViTinh[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaDonViTinh>
                //   <div></div>
                );
              }
            }
        },
       ];


       const options = {
        filter: true,
        filterType: 'checkbox',
        responsive: 'standard',
      // customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
      //   return (
      //     <CustomFooter
      //       count={count}
      //       page={page}
      //       rowsPerPage={rowsPerPage}
      //       changeRowsPerPage={changeRowsPerPage}
      //       changePage={changePage}
      //       textLabels={textLabels}
      //     />
      //   );
      // },
      onDownload: (buildHead, buildBody, columns, data) => {
        return "\uFEFF" + buildHead(columns) + buildBody(data); 
      },
      print:true,
      viewColumns:true,
       download:true,
       downloadOptions:{
        filename:'DSTaiKhoan('+ngay_gio_hien_tai+').csv',
        filterOptions :{
          useDisplayedRowsOnly:true,
          useDisplayedColumnsOnly:true,
        }
       }
     }

    return (
        <React.Fragment>
            <div className="content" style={{marginTop:'-70px'}}>
                <MUIDataTable
                        title={""}
                        data={DSDonViTinh}
                        columns={columns}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}

export default DachSachDonViTinh
