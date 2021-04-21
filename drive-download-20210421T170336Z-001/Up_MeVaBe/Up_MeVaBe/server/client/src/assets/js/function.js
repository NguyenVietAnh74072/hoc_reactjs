//#region HamXuLy
function ChuyenNgay(data){
    return data.split('-')[2].split('T')[0]+'-'+data.split('-')[1]+'-'+data.split('-')[0]+ ' '+data.split('-')[2].split('T')[1].split('.')[0]
  }

export default {ChuyenNgay}