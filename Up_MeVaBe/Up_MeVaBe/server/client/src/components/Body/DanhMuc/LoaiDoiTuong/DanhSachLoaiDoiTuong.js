import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import SuaLoaiDoiTuong from './SuaLoaiDoiTuong';
import XoaLoaiDoiTuong from './XoaLoaiDoiTuong';

const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DachSachLoaiDoiTuong({DSLoaiDoiTuong,_DuLieuSuaMoi,_DuLieuXoaMoi}) {
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
         name: "ma_loai_doi_tuong",
         label: "Mã loại đối tượng",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ten_loai_doi_tuong",
         label: "Tên loại đối tượng",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "tien_bao_cong_no",
         label: "Tiền báo công nợ",
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
                console.log('data :'+data)
                console.log('dataIndex :'+dataIndex)
                console.log('rowIndex:'+rowIndex)
                // console.log(DSTaiKhoan[data])
                return (
                  // <Edit todo={dataSate[rowIndex]} OnSubmit={EditSubmit}></Edit>
                  <SuaLoaiDoiTuong DuLieuSua={DSLoaiDoiTuong[data]} DuLieuSuaMoi={DuLieuSuaMoi}></SuaLoaiDoiTuong>
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
                    <XoaLoaiDoiTuong DuLieuXoa={DSLoaiDoiTuong[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaLoaiDoiTuong>
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
                        data={DSLoaiDoiTuong}
                        columns={columns}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}

export default DachSachLoaiDoiTuong
