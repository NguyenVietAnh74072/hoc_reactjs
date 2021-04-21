import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import SuaTaiKhoan from './SuaTaiKhoan'
import XoaTaiKhoan from './XoaTaiKhoan';
import ThemTaiKhoan from './ThemTaiKhoan';

const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DanhSachTaiKhoan({DSTaiKhoan,_DuLieuSuaMoi,_DuLieuXoaMoi}) {
    const DuLieuSuaMoi = (e)=>{
      _DuLieuSuaMoi(e)
    }
    const DuLieuXoaMoi =(e)=>{
      _DuLieuXoaMoi(e)
    }
    const columns = [
        {
         name: "nguoi_dung_id",
         label: "ID",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ten_dang_nhap",
         label: "Tên đăng nhập",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "quyen",
         label: "Quyền",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "ten_nhan_vien",
         label: "Tên nhân viên",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
            name: "nguoi_tao",
            label: "Người tạo",
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
            name: "ngay_tao",
            label: "Ngày tạo",
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
                  <SuaTaiKhoan DuLieuSua={DSTaiKhoan[data]} DuLieuSuaMoi={DuLieuSuaMoi}></SuaTaiKhoan>
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
                  <XoaTaiKhoan DuLieuXoa={DSTaiKhoan[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaTaiKhoan>
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
                        data={DSTaiKhoan}
                        columns={columns}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}

export default DanhSachTaiKhoan
