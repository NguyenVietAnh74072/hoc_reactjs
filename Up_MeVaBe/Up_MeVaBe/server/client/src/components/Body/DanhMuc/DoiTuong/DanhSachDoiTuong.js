import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import SuaDoiTuong from './SuaDoiTuong';
import XoaDoiTuong from './XoaDoiTuong';

const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DachSachDoiTuong({ChonKieuDoiTuong,DSDoiTuong,_DuLieuSuaMoi,_DuLieuXoaMoi}) {
  const DuLieuSuaMoi = (e)=>{
    _DuLieuSuaMoi(e)
    console.log(e)
  }
  const DuLieuXoaMoi =(e)=>{
    _DuLieuXoaMoi(e)
    console.log(e)
  }
    


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

     const columns_KH = [
      {
       name: "ten_loai_doi_tuong",
       label: "Tên loại đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ma_doi_tuong",
       label: "Mã đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ten_doi_tuong",
       label: "Tên đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "dia_chi",
       label: "Địa chỉ",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
        name: "dien_thoai",
        label: "Điện thoại",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "ma_so_thue",
        label: "Mã số thuế",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "no_mua",
        label: "Tổng tiền nợ",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "kieu_text",
        label: "Kiểu",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "chiet_khau",
        label: "Chiết khấu",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "vip_text",
        label: "Thẻ",
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
                <SuaDoiTuong DuLieuSua={DSDoiTuong[data]} DuLieuSuaMoi={DuLieuSuaMoi} ChonKieuDoiTuong={ChonKieuDoiTuong}></SuaDoiTuong>
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
                  <XoaDoiTuong DuLieuXoa={DSDoiTuong[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaDoiTuong>
              //   <div></div>
              );
            }
          }
      },
     ]

     const columns_NCC = [
      {
       name: "ten_loai_doi_tuong",
       label: "Tên loại đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ma_doi_tuong",
       label: "Mã đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ten_doi_tuong",
       label: "Tên đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "dia_chi",
       label: "Địa chỉ",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
        name: "dien_thoai",
        label: "Điện thoại",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "ma_so_thue",
        label: "Mã số thuế",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "no_ban",
        label: "Tổng tiền nợ",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "kieu_text",
        label: "Kiểu",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "chiet_khau",
        label: "Chiết khấu",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "vip_text",
        label: "Thẻ",
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
                <SuaDoiTuong DuLieuSua={DSDoiTuong[data]} DuLieuSuaMoi={DuLieuSuaMoi} ChonKieuDoiTuong={ChonKieuDoiTuong}></SuaDoiTuong>
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
                  <XoaDoiTuong DuLieuXoa={DSDoiTuong[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaDoiTuong>
              //   <div></div>
              );
            }
          }
      },
     ]

     const columns_KH_NCC = [
      {
       name: "ten_loai_doi_tuong",
       label: "Tên loại đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ma_doi_tuong",
       label: "Mã đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ten_doi_tuong",
       label: "Tên đối tượng",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "dia_chi",
       label: "Địa chỉ",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
        name: "dien_thoai",
        label: "Điện thoại",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "ma_so_thue",
        label: "Mã số thuế",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "no_mua",
        label: "KH nợ",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "no_ban",
        label: "NCC nợ",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "tong_no",
        label: "Tổng nợ",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "kieu_text",
        label: "Kiểu",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "chiet_khau",
        label: "Chiết khấu",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "vip_text",
        label: "Thẻ",
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
                <SuaDoiTuong DuLieuSua={DSDoiTuong[data]} DuLieuSuaMoi={DuLieuSuaMoi} ChonKieuDoiTuong={ChonKieuDoiTuong}></SuaDoiTuong>
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
                  <XoaDoiTuong DuLieuXoa={DSDoiTuong[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaDoiTuong>
              //   <div></div>
              );
            }
          }
      },
     ]
    return (
        <React.Fragment>
            <div className="content" style={{marginTop:'-70px'}}>
                <MUIDataTable
                        title={""}
                        data={DSDoiTuong}
                        columns={ChonKieuDoiTuong==='0' ? columns_KH : ChonKieuDoiTuong==='1' ? columns_NCC : columns_KH_NCC}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}


export default DachSachDoiTuong
