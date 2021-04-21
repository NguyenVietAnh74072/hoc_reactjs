import React,{useState} from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
function SuaDoiTuong({DuLieuSua,DuLieuSuaMoi,ChonKieuDoiTuong}) {
  const [ma_doi_tuong,Setma_doi_tuong] = React.useState(DuLieuSua.ma_doi_tuong)
  const [ten_doi_tuong,Setten_doi_tuong] = React.useState(DuLieuSua.ten_doi_tuong)
  const [ngay_bao_cong_no,Setngay_bao_cong_no] = React.useState(DuLieuSua.ngay_bao_cong_no)
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const [kieu,Setkieu] = React.useState(_Kieu.indexOf(DuLieuSua.kieu_text).toString())
  const [dia_chi,Setdia_chi] = React.useState(DuLieuSua.dia_chi)
  const [dien_thoai,Setdien_thoai] = React.useState(DuLieuSua.dien_thoai)
  const [ma_so_thue,Setma_so_thue] = React.useState(DuLieuSua.ma_so_thue)
  const [no_mua_dau_ky,Setno_mua_dau_ky] = React.useState(DuLieuSua.no_mua_dau_ky)
  const [no_ban_dau_ky,Setno_ban_dau_ky] = React.useState(DuLieuSua.no_ban_dau_ky)
  const [ngay_sinh,Setngay_sinh] = React.useState(DuLieuSua.ngay_sinh !== null ? DuLieuSua.ngay_sinh.substring(0,10) : '')
  const [chiet_khau,Setchiet_khau] = React.useState(DuLieuSua.chiet_khau)
  const [vip, setvip] = useState(DuLieuSua.vip)
  const [no_ban, setno_ban] = useState()
  const [no_mua, setno_mua] = useState()
  const [ab,SetaB] = useState(true)
  const OnClickSuaDoiTuong = async()=>{
      try {
        alert('Sửa tài khoản thành công!')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.DoiTuong+`/${kieu}`,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ten_doi_tuong,ma_doi_tuong,
                dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_ban_dau_ky,
                kieu,ghi_chu,nguoi_sua,ngay_sua,ngay_sinh,
                ngay_bao_cong_no,chiet_khau,vip,no_ban,no_mua})
            })
            DuLieuSuaMoi(await response.json())
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_doi_tuong('')
            Setngay_bao_cong_no('')
            Setghi_chu('')
      } catch (error) {
        
      }
  }
  React.useEffect(()=>{
    Setma_doi_tuong(DuLieuSua.ma_doi_tuong)
    Setten_doi_tuong(DuLieuSua.ten_doi_tuong)
    Setngay_bao_cong_no(DuLieuSua.ngay_bao_cong_no)
    Setghi_chu(DuLieuSua.ghi_chu)
    Setdia_chi(DuLieuSua.dia_chi)
    Setdien_thoai(DuLieuSua.dien_thoai)
    Setma_so_thue(DuLieuSua.ma_so_thue)
    Setno_mua_dau_ky(DuLieuSua.no_mua_dau_ky)
    Setno_ban_dau_ky(DuLieuSua.no_ban_dau_ky)
    Setngay_sinh(DuLieuSua.ngay_sinh !== null ? DuLieuSua.ngay_sinh.substring(0,10) : '')
    Setchiet_khau(DuLieuSua.chiet_khau)
    setvip(DuLieuSua.vip)
  },
  [ DuLieuSua.ma_doi_tuong,
    DuLieuSua.ten_doi_tuong,
    DuLieuSua.ngay_bao_cong_no,
    DuLieuSua.ghi_chu,
    DuLieuSua.kieu_text,
    kieu,
    DuLieuSua.dia_chi,
    DuLieuSua.dien_thoai,
    DuLieuSua.ma_so_thue,
    DuLieuSua.ngay_sinh,
    DuLieuSua.chiet_khau,
    DuLieuSua.vip,
    DuLieuSua.no_mua_dau_ky,
    DuLieuSua.no_ban_dau_ky])
  function fnc_Kieu(){
      const mang = ['Khách hàng','NCC','Khách hàng & NCC']
      mang.splice(mang.indexOf(DuLieuSua.kieu_text),1)
      return mang.map(x=>(<option value={_Kieu.indexOf(x)}>{x}</option>))
  }
  console.log(ngay_sinh)
  const FormThemDoiTuong = (ChonKieuDoiTuong)=>{
    if(kieu==='0'){
        return (
          <React.Fragment>
              Kiểu
              <select className="form-control" onChange={e=>Setkieu(e.target.value)}>
                <option value={_Kieu.indexOf(DuLieuSua.kieu_text)}>{DuLieuSua.kieu_text}</option>
                {
                    fnc_Kieu()
                }
              </select>
              Tên đối tượng
                <input
                  className='form-control'
                  type='text'
                  value={ten_doi_tuong}
                  onChange={e=>Setten_doi_tuong(e.target.value)}
                ></input>
                Địa chỉ
                <input
                  className='form-control'
                  type='text'
                  value={dia_chi}
                  onChange={e=>Setdia_chi(e.target.value)}
                ></input>
                Điện thoại
                <input className="form-control" 
                value={dien_thoai} 
                onChange={e=>Setdien_thoai(e.target.value)}>
                </input>
                Ngày sinh
                <input className="form-control"
                type="date"
                value={ngay_sinh.toString()}
                onChange={e=>Setngay_sinh(e.target.value)}>
                </input>
                Ngày báo công nợ
                <input className="form-control" 
                value={ngay_bao_cong_no} 
                onChange={e=>Setngay_bao_cong_no(e.target.value)}>
                </input>
                Mã số thuế
                <input className="form-control" 
                value={ma_so_thue} 
                onChange={e=>Setma_so_thue(e.target.value)}>
                </input>
                Nợ đầu kỳ khách hàng
                <input className="form-control" 
                value={no_mua_dau_ky} 
                onChange={e=>Setno_mua_dau_ky(e.target.value)}>
                </input>
                Mã số thuế
                <input className="form-control" 
                value={ma_so_thue} 
                onChange={e=>Setma_so_thue(e.target.value)}>
                </input>
                Chiết khấu
                <input className="form-control" 
                value={chiet_khau} 
                onChange={e=>Setchiet_khau(e.target.value)}>
                </input>
                Chuyển đổi thẻ
                <select
                  className='form-control'
                  onChange={(e) =>
                    setvip(e.target.value)
                  }>  
                  <option value={vip}>Thẻ hiện tại là thẻ {vip===0 ?'Thường' :'VIP'}</option>
                  <option value="0">Thường</option>
                  <option value="1">VIP</option>
                  </select>
                Ghi chú
                <input className="form-control" 
                value={ghi_chu} 
                onChange={e=>Setghi_chu(e.target.value)}>
                </input>
          </React.Fragment>
        )
    }
    
    else if(kieu==='1'){
      return (
        <React.Fragment>
            Kiểu
            <select className="form-control" onChange={e=>Setkieu(e.target.value)}>
              <option value={_Kieu.indexOf(DuLieuSua.kieu_text)}>{DuLieuSua.kieu_text}</option>
              {
                  fnc_Kieu()
              }
            </select>
            Tên đối tượng
              <input
                className='form-control'
                type='text'
                value={ten_doi_tuong}
                onChange={e=>Setten_doi_tuong(e.target.value)}
              ></input>
              Địa chỉ
              <input
                className='form-control'
                type='text'
                value={dia_chi}
                onChange={e=>Setdia_chi(e.target.value)}
              ></input>
              Điện thoại
              <input className="form-control" 
              value={dien_thoai} 
              onChange={e=>Setdien_thoai(e.target.value)}>
              </input>
              Ngày sinh
              <input className="form-control"
              type="date"
              value={ngay_sinh.toString()}
              onChange={e=>Setngay_sinh(e.target.value)}>
              </input>
              Ngày báo công nợ
              <input className="form-control" 
              value={ngay_bao_cong_no} 
              onChange={e=>Setngay_bao_cong_no(e.target.value)}>
              </input>
              Mã số thuế
              <input className="form-control" 
              value={ma_so_thue} 
              onChange={e=>Setma_so_thue(e.target.value)}>
              </input>
              Nợ đầu kỳ NCC
              <input className="form-control" 
              value={no_ban_dau_ky} 
              onChange={e=>Setno_ban_dau_ky(e.target.value)}>
              </input>
              Mã số thuế
              <input className="form-control" 
              value={ma_so_thue} 
              onChange={e=>Setma_so_thue(e.target.value)}>
              </input>
              Chiết khấu
              <input className="form-control" 
              value={chiet_khau} 
              onChange={e=>Setchiet_khau(e.target.value)}>
              </input>
              Chuyển đổi thẻ
              <select
                className='form-control'
                onChange={(e) =>
                  setvip(e.target.value)
                }>  
                <option value={vip}>Thẻ hiện tại là thẻ {vip===0 ?'Thường' :'VIP'}</option>
                <option value="0">Thường</option>
                <option value="1">VIP</option>
                </select>
              Ghi chú
              <input className="form-control" 
              value={ghi_chu} 
              onChange={e=>Setghi_chu(e.target.value)}>
              </input>
        </React.Fragment>
      )
    }else{
      return (
        <React.Fragment>
            Kiểu
            <select className="form-control" onChange={e=>Setkieu(e.target.value)}>
              <option value={_Kieu.indexOf(DuLieuSua.kieu_text)}>{DuLieuSua.kieu_text}</option>
              {
                  fnc_Kieu()
              }
            </select>
            Tên đối tượng
              <input
                className='form-control'
                type='text'
                value={ten_doi_tuong}
                onChange={e=>Setten_doi_tuong(e.target.value)}
              ></input>
              Địa chỉ
              <input
                className='form-control'
                type='text'
                value={dia_chi}
                onChange={e=>Setdia_chi(e.target.value)}
              ></input>
              Điện thoại
              <input className="form-control" 
              value={dien_thoai} 
              onChange={e=>Setdien_thoai(e.target.value)}>
              </input>
              Ngày sinh
              <input className="form-control"
              type="date"
              value={ngay_sinh.toString()}
              onChange={e=>Setngay_sinh(e.target.value)}>
              </input>
              Ngày báo công nợ
              <input className="form-control" 
              value={ngay_bao_cong_no} 
              onChange={e=>Setngay_bao_cong_no(e.target.value)}>
              </input>
              Mã số thuế
              <input className="form-control" 
              value={ma_so_thue} 
              onChange={e=>Setma_so_thue(e.target.value)}>
              </input>
              Nợ đầu kỳ khách hàng
              <input className="form-control" 
              value={no_mua_dau_ky} 
              onChange={e=>Setno_mua_dau_ky(e.target.value)}>
              </input>
              Nợ đầu kỳ NCC
              <input className="form-control" 
              value={no_ban_dau_ky} 
              onChange={e=>Setno_ban_dau_ky(e.target.value)}>
              </input>
              Mã số thuế
              <input className="form-control" 
              value={ma_so_thue} 
              onChange={e=>Setma_so_thue(e.target.value)}>
              </input>
              Chiết khấu
              <input className="form-control" 
              value={chiet_khau} 
              onChange={e=>Setchiet_khau(e.target.value)}>
              </input>
              Chuyển đổi thẻ
              <select
                className='form-control'
                onChange={(e) =>
                  setvip(e.target.value)
                }>  
                <option value={vip}>Thẻ hiện tại là thẻ {vip===0 ?'Thường' :'VIP'}</option>
                <option value="0">Thường</option>
                <option value="1">VIP</option>
                </select>
              Ghi chú
              <input className="form-control" 
              value={ghi_chu} 
              onChange={e=>Setghi_chu(e.target.value)}>
              </input>
        </React.Fragment>
      )
    }
  }
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuadoituong${ma_doi_tuong}`}
          style ={{width:'75px'}}>
          Sửa
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsuadoituong${ma_doi_tuong}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa loại đối tượng {ma_doi_tuong} !
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                {FormThemDoiTuong(ChonKieuDoiTuong)}
              </div>
              
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss="modal" onClick={OnClickSuaDoiTuong}>
                  Sửa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </React.Fragment>
    )
}
const _Kieu = ['Khách hàng','NCC','Khách hàng & NCC']
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
export default SuaDoiTuong
