import React from 'react'
import MUIDataTable from "mui-datatables";
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import XemChiTietHoaDonTraHang from './XemChiTietHoaDonTraHang';


const data = new Date()
var  ngay_gio_hien_tai =data.toString().split(' ')[0] +' '+ data.toString().split(' ')[2]+'-'+data.toString().split(' ')[1]+ ' '+ data.toString().split(' ')[3]


function DanhSachHoaDonTraHang({DSHoaDonTraHang,_DuLieuSuaMoi,_DuLieuXoaMoi}) {
    const [GioHang,SetGioHang] = React.useState([])
    const GetGioHang = async (HoaDonID)=>{
        try {
            const response = await fetch(host.HoaDonBan+`/0/${HoaDonID}`)
            const JsonData = await response.json()
            
            return JsonData
            // if(GioHang.length>0){

            // }else{

                // console.log(GioHang)
            // }
        } catch (error) {
            
        }
    }
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
         name: "hoa_don_ban_id",
         label: "Mã hoá đơn bán",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "NgayFORMAT",
         label: "Ngày",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "tong_gia_tri",
         label: "Tổng tiền",
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
          name: "Xem chi tiết",
            options: {
              filter: false,
              sort: true,
              customBodyRenderLite: (data,dataIndex,rowIndex) => {
                // console.log('data :'+data)
                // console.log('dataIndex :'+dataIndex)
                // console.log('rowIndex:'+rowIndex)
                return (
                  // <Edit todo={dataSate[rowIndex]} OnSubmit={EditSubmit}></Edit>
                  <XemChiTietHoaDonTraHang DuLieuXem={DSHoaDonTraHang[data]} GetGioHang={GetGioHang(DSHoaDonTraHang[data].hoa_don_ban_id)}></XemChiTietHoaDonTraHang>
                //   <SuaHoaDonBan DuLieuSua={DSHoaDonTraHang[data]} DuLieuSuaMoi={DuLieuSuaMoi}></SuaHoaDonBan>
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
                        data={DSHoaDonTraHang}
                        columns={columns}
                        options={options}
                        />
            </div>
        </React.Fragment>
    )
}

export default DanhSachHoaDonTraHang
