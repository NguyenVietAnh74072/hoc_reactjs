import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import SuaMatHang from './SuaMatHang';
import XoaMatHang from './XoaMatHang';

const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DachSachMatHang({DSMatHang,_DuLieuSuaMoi,_DuLieuXoaMoi,_TrangThai}) {
  const DuLieuSuaMoi = (e)=>{
    _DuLieuSuaMoi(e)
    console.log(e)
  }
  const DuLieuXoaMoi =(e)=>{
    _DuLieuXoaMoi(e)
    console.log(e)
  }
  const TrangThai = (e)=>{
    _TrangThai(e)
  }
    const columns = [
        {
         name: "ma_hang",
         label: "Mã hàng",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ten_hang",
         label: "Tên hàng",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ten_dvt",
         label: "DVT",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
          name: "SoLuongTon",
          label: "SL tồn",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
          name: "gia_thuc_nhap",
          label: "Giá thực nhập",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
          name: "gia_ban_buon",
          label: "Giá bán buôn",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
          name: "gia_ban_le",
          label: "Giá bán lẻ",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
          name: "so_luong_toi_thieu",
          label: "SL tối thiểu",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
          name: "ghi_chu_hang",
          label: "Mô tả",
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
                  <SuaMatHang DuLieuSua={DSMatHang[data]} DuLieuSuaMoi={DuLieuSuaMoi} TrangThai={TrangThai}></SuaMatHang>
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
                    <XoaMatHang DuLieuXoa={DSMatHang[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaMatHang>
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
                        data={DSMatHang}
                        columns={columns}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}

export default DachSachMatHang
