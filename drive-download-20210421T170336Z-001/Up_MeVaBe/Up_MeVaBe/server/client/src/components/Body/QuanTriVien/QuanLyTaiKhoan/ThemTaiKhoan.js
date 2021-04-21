import React from 'react'
import ThemNhanVien from './ThemNhanVien'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/MaHoa'

function ThemTaiKhoan({DuLieuTaiKhoanMoi}) {
    const [TenNhanVien,SetTenNhanVien] = React.useState([])
    const [nhan_vien_id,Setnhan_vien_id] = React.useState('1')
    const [ten_dang_nhap,Setten_dang_nhap] = React.useState('')
    const [mat_khau,Setmat_khau] = React.useState('')
    const [mat_khau_lai,Setmat_khau_lai] = React.useState('')
    const [quyen,Setquyen] = React.useState('Nhân viên quản trị')
    const [ghi_chu,Setghi_chu] = React.useState('')
    const onClickThemTaiKhoan = async()=>{
        try {
            if (mat_khau!==mat_khau_lai){
                alert('Mật khẩu nhập lại chưa trùng!')
            }
            else{
                alert('Thêm tài khoản thành công!')
                const data = new Date()
                var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
                var ngay_tao = ngay_gio_hien_tai
                var nguoi_tao = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
                const response = await fetch(host.ThemTaiKhoanNguoiDung,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body : JSON.stringify({nhan_vien_id,ten_dang_nhap,mat_khau,mat_khau_lai,quyen,ghi_chu,nguoi_tao,ngay_tao})
                })
                console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
                DuLieuTaiKhoanMoi(await response.json())
                console.log(await response.json())
                Setnhan_vien_id('1')
                Setten_dang_nhap('')
                Setmat_khau('')
                Setmat_khau_lai('')
                Setghi_chu('')
                Setquyen('Nhân viên quản trị')
                
            }
        } catch (error) {
            
        }
    }
    const ThemNhanVienMoi = (e)=>{
        const newData = [...TenNhanVien]
        newData.push(e[0])
        SetTenNhanVien(newData)
    }
    // console.log(TenNhanVien)
    React.useEffect(async ()=>{
        try {
            const response = await fetch(host.LayTenNhanVien)
            const JsonData = await response.json()
            SetTenNhanVien(JsonData)
            
        } catch (error) {
            
        }
    },[])
    return (
        <React.Fragment>
            <div className="content">
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Thêm tài khoản</strong>
          </div>
          <div className="card-body">
            {/* Credit Card */}
            <div className="row mt-3">
                <div className="col">
                    Tên nhân viên
                    <div class="form-group">
                        <select class="form-control" id="sel1" value={nhan_vien_id} onChange={e=>Setnhan_vien_id(e.target.value)} defaultValue={'1'}>
                                {TenNhanVien.map(x=>(<option value={x.nhan_vien_id}>{x.ten_nhan_vien}</option>))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    Tên đăng nhập
                    <input className="form-control" type="text" value={ten_dang_nhap} onChange={e=>Setten_dang_nhap(e.target.value)}></input>
                </div>
                <div className="col">
                    Mật khẩu
                    <input className="form-control" type="password" value={mat_khau} onChange={e=>Setmat_khau(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                Quyền hạn chính
                    <div class="form-group">
                        <select class="form-control" id="sel1" value={quyen} onChange={e=>Setquyen(e.target.value)}>
                                {PhanQuyen.map(x=>(<option value={x}>{x}</option>))}
                        </select>
                    </div>
                </div>
                <div className="col">
                    Xác nhận lại mật khẩu
                    <input className="form-control" type="password" value={mat_khau_lai} onChange={e=>Setmat_khau_lai(e.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Ghi chú
                    <input className="form-control" type="text" value={ghi_chu} onChange={e=>Setghi_chu(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col"></div>
                <div className="col">
                    <div className="row ml-1">
                        <button className="btn btn-primary" onClick={onClickThemTaiKhoan}>Thêm tài khoản</button>
                        <div className="ml-3"><ThemNhanVien ThemNhanVienMoi={ThemNhanVienMoi}></ThemNhanVien></div>
                    </div>
                </div>
            </div>
          </div>
        </div> {/* .card */}
      </div>{/*/.col*/}
    </div>
  </div>{/* .animated */}
</div>{/* .content */}

        </React.Fragment>
    )
}
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
export default ThemTaiKhoan
