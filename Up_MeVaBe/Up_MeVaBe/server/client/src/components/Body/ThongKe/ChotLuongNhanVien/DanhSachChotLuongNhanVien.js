import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'

const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DachSachChotLuongNhanVien({ChonKieuChotLuongNhanVien,DSChotLuongNhanVien,_DuLieuSuaMoi,_DuLieuXoaMoi}) {
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

     const columns = [
      {
       name: "ma_nhan_vien",
       label: "Mã nhân viên",
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
        name: "ngay",
        label: "Ngày",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "ngay_ca_lam_viec",
        label: "Lịch làm việc",
        options: {
         filter: true,
         sort: true,
        }
       },
      {
       name: "gio_vao",
       label: "Giờ vào",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "gio_ra",
       label: "Giờ ra",
       options: {
        filter: true,
        sort: true,
       }
      },
      // {
      //   name: "Sửa",
      //     options: {
      //       filter: false,
      //       sort: true,
      //       customBodyRenderLite: (data,dataIndex,rowIndex) => {
      //         // console.log('data :'+data)
      //         // console.log('dataIndex :'+dataIndex)
      //         // console.log('rowIndex:'+rowIndex)
      //         // console.log(DSTaiKhoan[data])
      //         return (
      //           // <Edit todo={dataSate[rowIndex]} OnSubmit={EditSubmit}></Edit>
      //           <></>
      //           // <SuaChotLuongNhanVien DuLieuSua={DSChotLuongNhanVien[data]} DuLieuSuaMoi={DuLieuSuaMoi} ChonKieuChotLuongNhanVien={ChonKieuChotLuongNhanVien}></SuaChotLuongNhanVien>
      //         );
      //       }
      //     }
      // },
      // {
      //   name: "Xóa",
      //     options: {
      //       filter: false,
      //       sort: true,
      //       empty: true,
      //       customBodyRenderLite: (data,dataIndex,rowIndex) => {
      //         return (
      //           // <Delete todo={dataSate[rowIndex]} onSubmit={DeleteSubmit}></Delete>
      //             <XoaChotLuongNhanVien DuLieuXoa={DSChotLuongNhanVien[data]} DuLieuXoaMoi={DuLieuXoaMoi}></XoaChotLuongNhanVien>
      //         //   <div></div>
      //         );
      //       }
      //     }
      // },
     ]
    return (
        <React.Fragment>
            <div className="content" style={{marginTop:'-70px'}}>
                <MUIDataTable
                        title={""}
                        data={DSChotLuongNhanVien}
                        columns={columns}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}


export default DachSachChotLuongNhanVien
