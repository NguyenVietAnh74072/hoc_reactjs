import React,{useState} from 'react'
import host from '../../../../host/host'
import fnc from '../../../../assets/js/function'
import { makeStyles } from '@material-ui/core/styles';
import { storage } from '../../../../firebase';
import { Card, Button } from '@material-ui/core';
import IMAGENONE from '../../../../assets/images/none-img.png'
import LoadingScreen from 'react-loading-screen';
import LoadImage from '../../../../assets/Spinner-1s-200px.svg'
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}));




function SuaMatHang({DuLieuSua,DuLieuSuaMoi,TrangThai}) {
  // Hình ảnh 
  const classes = useStyles();
  // IMAGE USER ADMIN
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [OnCheckUpdateImage, SetOnCheckUpdateImage] = useState()
  const [url,setUrl] = useState(DuLieuSua.duong_link)
  const [Loading,SetLoading] = useState(false)
  // Hình ảnh

  const [ma_hang,Setma_hang] = React.useState(DuLieuSua.ma_hang)
  const [ten_hang,Setten_hang] = React.useState(DuLieuSua.ten_hang)
  const [gia_ban_le,Setgia_ban_le] = React.useState(DuLieuSua.gia_ban_le)
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const [duong_link,Setduong_link] = React.useState(DuLieuSua.duong_link)

  // console.log(DuLieuSua)


  const _handChange = async (e) => {
    try {
      const dl = JSON.parse(window.localStorage.getItem('DuLieuSuaMatHang'))
      
      const file = e.target.files[0];
      if (file) {
        const fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
          if (true) {
            const uploadTask = storage.ref(`/images/HinhAnhSanPham/${dl.nganh_hang_id}/${dl.loai_hang_id}/${dl.ten_hang}.JPG`).put(file);
            SetLoading(true)
            uploadTask.on(
              'state_changed',
              snapshot => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
                if(progress===100)
                {
                  storage.ref("images").child(`HinhAnhSanPham/${dl.nganh_hang_id}/${dl.loai_hang_id}/${dl.ten_hang}.JPG`).getDownloadURL().then(async (url)=>{
                    const ma_loai_hang = dl.ma_loai_hang
                    const TrangThaiSua = true
                    console.log('test')
                    const response = await fetch(host.SuaMatHang,{
                      method:"PUT",
                      headers:{"Content-Type":"application/json"},
                      body : JSON.stringify({dl,TrangThaiSua,url})
                    })
                    console.log({dl,TrangThaiSua,url})
                    setUrl(url)
                    //console.clear()
                    SetLoading(false)
                    alert(`Sửa ảnh ${dl.ten_hang} thành công !`)
                    window.location.href = "./"
                   })
                }
              },
              error => {
                setError(error);
                console.log(error)
                alert(`Sửa ảnh ${dl.ten_hang} thành công !`)
                window.location.href = "./"
              },
              () => {
                storage.ref("images").child(`HinhAnhSanPham/${dl.nganh_hang_id}/${dl.loai_hang_id}/${dl.ten_hang}.JPG`).getDownloadURL().then(async (url)=>{
                  const ma_loai_hang = dl.ma_loai_hang
                  const TrangThaiSua = true
                  console.log('test')
                  const response = await fetch(host.SuaMatHang,{
                    method:"PUT",
                    headers:{"Content-Type":"application/json"},
                    body : JSON.stringify({dl,TrangThaiSua,url})
                  })
                  console.log({dl,TrangThaiSua,url})
                  setUrl(url)
                  //console.clear()
                  alert(`Sửa ảnh ${dl.ten_hang} thành công !`)
                  window.location.href = "./"
                 })
              }
            );
          } else {
            // alert('Người dùng chưa chọn hình ảnh')
          }
          setError('');
          setImage(file);
          // alert('Chọn ảnh thành công !'+file.name + ten_loai_hang)
        }

      } else {
        setError('Xin vui lòng chọn ảnh');
      }
    } catch (error) {
      console.error(error);
      //console.clear()
    }
  };


  const handleUpdate = () => {
    // // console.log(ten_loai_hang)
    // if(nganh_hang_id===''){
    //   alert('Người dùng chưa chọn ngành hàng')
    // }
    // // else if(loai_hang_id===''){
    // //   alert('Người dùng chưa chọn loại hàng')
    // // }
    // else{
    //   if (image) {
    //     SetonClickUpdate(false);
    //     const uploadTask = storage.ref(`/images/HinhAnhDanhMuc/${ten_loai_hang}.JPG`).put(image);
    //     uploadTask.on(
    //       'state_changed',
    //       snapshot => {
    //         const progress = Math.round(
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );
    //         setProgress(progress);
    //         if(progress===100)
    //         {
    //           // window.location.href ="/btl-kho-anh/ThongTin"
    //           //console.clear()
    //           storage.ref("images").child(`/HinhAnhDanhMuc/${ten_loai_hang}.JPG`.toString()).getDownloadURL().then(url=>{
    //             console.log(url)
    //             setUrl(url)
    //             //console.clear()
    //            })
    //         }
    //       },
    //       error => {
    //         setError(error);
    //         //console.clear()
    //       },
    //       () => {
    //         storage
    //           .ref('images')
    //           .child(`/images/HinhAnhDanhMuc/${ten_loai_hang}.JPG`)
    //           .getDownloadURL()
    //           .then(url => {
    //             setUrl(url);
    //             setProgress(0);
    //             console.log(url);
    //           });
    //       }
    //     );
    //   } else {
    //     alert('Người dùng chưa chọn hình ảnh')
    //   }
    // }
  };




  // 
  const OnClickSuaMatHang = async()=>{
      try {
            console.log('test sửa')
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.MatHang,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({ma_hang,ten_hang,gia_ban_le,ghi_chu,ngay_sua,nguoi_sua})
            })
            alert('Sửa tài khoản thành công!')
            DuLieuSuaMoi(await response.json())
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_hang('')
      } catch (error) {
        
      }
  }
  React.useEffect(async ()=>{
    try {
      Setten_hang(DuLieuSua.ten_hang)
      setUrl(DuLieuSua.duong_link)
      Setduong_link(DuLieuSua.duong_link)
      Setma_hang(DuLieuSua.ma_hang)
      Setgia_ban_le(DuLieuSua.gia_ban_le)
      Setghi_chu(DuLieuSua.ghi_chu)
      // const response = await fetch(host.MatHang)
      // const JsonData = await response.json()
      // SetDSMatHang(JsonData)
      // console.log(DSMatHang)
    } catch (error) {
      
    }
  },[duong_link,DuLieuSua.ma_hang,DuLieuSua.ghi_chu,DuLieuSua.ten_hang,url,DuLieuSua.duong_link,DuLieuSua.gia_ban_le,DuLieuSua.ghi_chu])
    return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuaMatHang${ma_hang}`}
          style ={{width:'75px'}}
          onClick={async () =>{
            window.localStorage.setItem('DuLieuSuaMatHang',JSON.stringify(DuLieuSua))
          }}
          >
          Sửa
        </button>
        {/* Modal */}

        <div
          className='modal fade'
          id={`idsuaMatHang${ma_hang}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa ngành hàng {ma_hang} !
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
                Tên mặt hàng
                <input
                  className='form-control'
                  type='text'
                  value={ten_hang}
                  onChange={e=>Setten_hang(e.target.value)}
                ></input>
                {/*  */}
                Giá bán lẻ
                <input
                  className='form-control'
                  type='text'
                  value={gia_ban_le}
                  onChange={e=>Setgia_ban_le(e.target.value)}
                ></input>
                <div style={{color:'green',marginLeft:'13px'}}>{parseInt(gia_ban_le).toLocaleString("vi", {style: "currency",currency: "VND",})}</div>
                {/*  */}
                Nội dung
                <input
                  className='form-control'
                  type='text'
                  value={ghi_chu}
                  onChange={e=>Setghi_chu(e.target.value)}
                ></input>
                {/*  */}
                {/* Tên mặt hàng
                <input
                  className='form-control'
                  type='text'
                  value={ten_hang}
                  onChange={e=>Setten_hang(e.target.value)}
                ></input> */}
                {/*  */}
              <div className="row mt-4">
                <div className="col text-center">
                <img
                    alt="..."
                    className="card-img-top"
                    src={duong_link ==='' ? IMAGENONE : duong_link}
                    style={{ width: '100vh', height: '100vh', zoom: '0.45' }}
                  />
                </div>
            </div>
            {/* <div>{DuLieuSua.duong_link}</div> */}
            <div className="row mt-4">
            <div className="col">
                {/* <span>
                    {!OnCheckUpdateImage
                      ? name.length === 0
                        ? 'Xin vui lòng chọn ảnh'
                        : name
                      : ''}
                  </span> */}
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file-sua-mat-hang"
                    multiple
                    type="file"
                    onChange={_handChange}
                    disabled={OnCheckUpdateImage}
                  />
                  <label htmlFor="contained-button-file-sua-mat-hang">
                    <Button
                    className="ml-2"
                      variant="contained"
                      color="primary"
                      component="span"
                      disabled={OnCheckUpdateImage}>
                      {'Sửa ảnh'}
                    </Button>
                  </label>
                  {/* <Button
                    className="ml-3"
                    variant="contained"
                    color="primary"
                    component="span"
                    disabled={OnCheckUpdateImage}
                    onClick={handleUpdate}>
                    {'Upload'}
                  </Button> */}
                </div>  
            </div>
              </div>
                    <LoadingScreen
                  loading={Loading}
                  bgColor='#f1f1f1'
                  // spinnerColor='#9ee5f8'
                  textColor='#676767'
                  logoSrc={LoadImage}
                  text='Đang tải . . .'
                > 
                </LoadingScreen>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Thoát
                </button>
                <button type='button' className='btn btn-primary'
                data-dismiss="modal" onClick={OnClickSuaMatHang}>
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
const PhanQuyen =['Nhân viên quản trị','Quản trị viên','Quản lý danh mục','Quản lý bán hàng','Quản lý thu chi','Quản lý thống kê','Quản lý công nợ']
export default SuaMatHang
