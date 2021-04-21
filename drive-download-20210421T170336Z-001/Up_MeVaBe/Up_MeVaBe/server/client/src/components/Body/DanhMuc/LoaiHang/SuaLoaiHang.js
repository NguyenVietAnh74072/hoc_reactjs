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


function SuaLoaiHang({DuLieuSua,DuLieuSuaMoi,TrangThai}) {
  const [ma_loai_hang,Setma_loai_hang] = React.useState(DuLieuSua.ma_loai_hang)
  const [ten_loai_hang,Setten_loai_hang] = React.useState(DuLieuSua.ten_loai_hang)
  const [nganh_hang_id, setnganh_hang_id] = useState(DuLieuSua.nganh_hang_id)
  const [loai_hang_id, setloai_hang_id] = useState(DuLieuSua.loai_hang_id)
  const [ghi_chu,Setghi_chu] = React.useState(DuLieuSua.ghi_chu)
  const [link_danh_muc,Setlink_danh_muc] = React.useState(DuLieuSua.link_danh_muc)
  const [DSNganhHang,SetDSNganhHang] = React.useState([])
  const [trang_thai,Settrang_thai] = React.useState(DuLieuSua.trang_thai)
  const [Loading,SetLoading] = useState(false)

  // Sửa hình ảnh Danh mục

  const classes = useStyles();
  // IMAGE USER ADMIN
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [OnCheckUpdateImage, SetOnCheckUpdateImage] = useState()
  const [url,setUrl] = useState(DuLieuSua.link_danh_muc)

  const _handChange = async (e) => {
    try {
      SetLoading(true)
      console.log('test')
      const dl = JSON.parse(window.localStorage.getItem('DuLieuSuaLoaiHang'))
      console.log(dl.ten_loai_hang)
      const reponse = await fetch(host.LoaiHangTheoMaLoaiHang+`/${dl.ma_loai_hang}`)
      const JsonData = await reponse.json()
      const file = e.target.files[0];
      //setName(e.target.files[0].name);
      if (file) {
        console.log(ten_loai_hang)
        const fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
          if (true) {
            const uploadTask = storage.ref(`/images/HinhAnhDanhMuc/${JsonData.map(x=>x.ten_loai_hang).toString()}.JPG`).put(file);
            uploadTask.on(
              'state_changed',
              snapshot => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
                if(progress===100)
                {
                  SetLoading(false)
                  console.log(JsonData.map(x=>x.ten_loai_hang).toString())
                  storage.ref("images").child(`/HinhAnhDanhMuc/${JsonData.map(x=>x.ten_loai_hang).toString()}.JPG`.toString()).getDownloadURL().then(async (url)=>{
                    const ma_loai_hang = dl.ma_loai_hang
                    const sua_url = true
                    
                    const response = await fetch(host.LoaiHang,{
                      method:"PUT",
                      headers:{"Content-Type":"application/json"},
                      body : JSON.stringify({url,sua_url,ma_loai_hang,trang_thai})
                    })
                    const DuLieuTruyenLen = await response.json()
                    console.log( DuLieuTruyenLen.map(x=>x.link_danh_muc).toString() )
                    setUrl(DuLieuTruyenLen.map(x=>x.link_danh_muc).toString())
                    //console.clear()
                    alert(`Sửa ảnh ${JsonData.map(x=>x.ten_loai_hang).toString()} thành công !`)
                    window.location.href = "./"
                   })
                }
              },
              error => {
                setError(error);
                console.log(error)
                //console.clear()
                SetLoading(false)
              },
              () => {
                SetLoading(false)
                storage
                  .ref('images')
                  .child(`/images/HinhAnhDanhMuc/${dl.ten_loai_hang}.JPG`)
                  .getDownloadURL()
                  .then(url => {
                    setUrl(url);
                    setProgress(0);
                    console.log(url);
                  });
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


  const handleUpdate = (ten_loai_hang) => {
    console.log(ten_loai_hang)
    if(nganh_hang_id===''){
      alert('Người dùng chưa chọn ngành hàng')
    }
    // else if(loai_hang_id===''){
    //   alert('Người dùng chưa chọn loại hàng')
    // }
    else{
      if (image) {
        SetonClickUpdate(false);
        const uploadTask = storage.ref(`/images/HinhAnhDanhMuc/${ten_loai_hang}.JPG`).put(image);
        uploadTask.on(
          'state_changed',
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
            if(progress===100)
            {
              // window.location.href ="/btl-kho-anh/ThongTin"
              //console.clear()
              storage.ref("images").child(`/HinhAnhDanhMuc/${ten_loai_hang}.JPG`.toString()).getDownloadURL().then(url=>{
                console.log(url)
                setUrl(url)
                //console.clear()
               })
            }
          },
          error => {
            setError(error);
            //console.clear()
          },
          () => {
            storage
              .ref('images')
              .child(`/images/HinhAnhDanhMuc/${ten_loai_hang}.JPG`)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
                setProgress(0);
                console.log(url);
              });
          }
        );
      } else {
        alert('Người dùng chưa chọn hình ảnh')
      }
    }
  };
  
  const [onClickUpdate, SetonClickUpdate] = useState(true);
  /*
  UPDATE ảnh
  */
  // Sửa hình ảnh Danh mục

  const OnClickSuaLoaiHang = async()=>{
      try {
        console.log(url)
        alert('Sửa tài khoản thành công!'+ten_loai_hang)
            const data = new Date()
            var ngay_gio_hien_tai=data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds()
            var ngay_sua = ngay_gio_hien_tai
            var nguoi_sua = JSON.parse(window.localStorage.getItem('dulieunguoidung'))[0].ten_nhan_vien
            const response = await fetch(host.LoaiHang,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body : JSON.stringify({trang_thai,nganh_hang_id,ma_loai_hang,ten_loai_hang,ghi_chu,ghi_chu,nguoi_sua,ngay_sua,url})
            })
            DuLieuSuaMoi(await response.json())
            TrangThai(trang_thai)
            console.log(fnc.Decrypt_LOOP_3DES(JSON.stringify(response),'babababababababababa',10))
            console.log(await response.json())
            Setten_loai_hang('')
            Setghi_chu('')
            Setghi_chu('')
      } catch (error) {
        
      }
  }
  React.useEffect(async ()=>{
    try {
      Setma_loai_hang(DuLieuSua.ma_loai_hang)
      Setghi_chu(DuLieuSua.ghi_chu)
      Setten_loai_hang(DuLieuSua.ten_loai_hang)
      Setghi_chu(DuLieuSua.ghi_chu)
      setnganh_hang_id(DuLieuSua.nganh_hang_id)
      Setlink_danh_muc(DuLieuSua.link_danh_muc)
      setUrl(DuLieuSua.link_danh_muc)
      const response = await fetch(host.NganhHang)
      const JsonData = await response.json()
      SetDSNganhHang(JsonData)
      // console.log(DSNganhHang)
      
    } catch (error) {
      
    }
  },[DuLieuSua.ma_loai_hang,DuLieuSua.ghi_chu,DuLieuSua.ten_loai_hang,DuLieuSua.ghi_chu,DuLieuSua.nganh_hang_id,DuLieuSua.link_danh_muc,url])

  return (
        <React.Fragment>
        <div>
        {/* Button trigger modal */}
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#idsuaLoaiHang${ma_loai_hang}`}
          style ={{width:'75px'}}
          onClick={async () => {
            // alert(JSON.stringify(DuLieuSua))
            window.localStorage.setItem('DuLieuSuaLoaiHang',JSON.stringify(DuLieuSua))
          }}>
          Sửa
        </button>
        {/* Modal */}
        <div
          className='modal fade'
          id={`idsuaLoaiHang${ma_loai_hang}`}
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Sửa loại hàng {ma_loai_hang} !
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
                Ngành hàng
                  <select className="form-control" onChange={e=>setnganh_hang_id(e.target.value)}>
                      {DSNganhHang.map((x)=>(<option value={x.nganh_hang_id} selected={DuLieuSua.nganh_hang_id === x.nganh_hang_id ? 'selected' : ''}>{x.ten_nganh_hang}</option>))}
                  </select>
                Tên loại hàng
                <input
                  className='form-control'
                  type='text'
                  value={ten_loai_hang}
                  onChange={e=>Setten_loai_hang(e.target.value)}
                ></input>
                Ghi chú
                <input className="form-control" value={ghi_chu} onChange={e=>Setghi_chu(e.target.value)}></input>
                Trang thái
                <select className="form-control" onChange={e=>Settrang_thai(e.target.value)}>
                <option value="true" selected={DuLieuSua.trang_thai?'selected' :''}>Sử dụng</option>
                <option value="false" selected={!DuLieuSua.trang_thai?'selected' :''}>Không sử dụng</option>
              </select>
              {/* Sửa hình ảnh sản phẩm */}

              <div className="row mt-4">
                <div className="col text-center">
                <img
                    alt="..."
                    className="card-img-top"
                    src={url === link_danh_muc ? link_danh_muc : url}
                    style={{ width: '100vh', height: '100vh', zoom: '0.45' }}
                  />
                </div>
                
            </div>
            <div className="row ml-4 mt-3">
            <div className="col">
                <span>
                  </span>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file-sua"
                    multiple
                    type="file"
                    onChange={_handChange}
                    disabled={OnCheckUpdateImage}
                  />
                  <label htmlFor="contained-button-file-sua">
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
              {/* Sửa hình ảnh sản phẩm */}
              {/* <div>
                {link_danh_muc}
              </div> */}
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
                data-dismiss="modal" onClick={OnClickSuaLoaiHang}>
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
export default SuaLoaiHang
