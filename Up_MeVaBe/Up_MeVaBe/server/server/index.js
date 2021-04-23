/** @format */
const express = require('express');
const cors = require('cors');
const pool = require('./pgconnect');
const _3DES = require('nodejs3des');
const app = express();
const port = 3001;
const fnc = require('./assets/js/function')
const mahoa = require('./assets/js/MaHoa');
const { response } = require('express');
app.use(cors());
app.use(express.json());

app.use(cors());
app.listen(process.env.PORT || port, () => {
	console.log('Port : ' + port);
});

//#region TaiKhoan (Quản Trị viên)
app.get('/TaiKhoanNguoiDung/:TaiKhoan/:MatKhau', async (req,res)=>{ //Đăng nhập tài khoản người dùng
	try {
		var TaiKhoan = req.params.TaiKhoan; // req.body lấy dữ liệu từ client về server
		var MatKhau = req.params.MatKhau; // req.body lấy dữ liệu từ client về server
		const newTodo = await pool.query(
			`
				select * from tbl_nguoi_dung,tbl_nhan_vien where 
				tbl_nhan_vien.nhan_vien_id = tbl_nguoi_dung.nhan_vien_id and ten_dang_nhap = N'${TaiKhoan}' and mat_khau = N'${mahoa.Encrypt_LOOP_3DES(MatKhau,TaiKhoan,1)}'
			`
		);
		// res.send('<h3>a</h3>')
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.get('/LayTenNhanVien', async (req,res)=>{ //Lấy tên nhân viên
	try {
		const newTodo = await pool.query(
			`
				select * from tbl_nhan_vien
			`
		);
		// res.send('<h3>a</h3>')
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.post('/ThemTenNhanVien',async (req,res)=>{ 
	try {
		const DuLieuNV = await pool.query(`select * from tbl_nhan_vien`)

		const DuLieuNhanVien = req.body;
		const newTodo = await pool.query(
			`
			insert into tbl_nhan_vien(ma_nhan_vien,ten_nhan_vien,dia_chi,dien_thoai,ghi_chu,ngay_tao,nguoi_tao)
			values(N'${fnc.MaNV(DuLieuNV.rows)}',N'${DuLieuNhanVien.ten_nhan_vien}',N'${DuLieuNhanVien.dia_chi}',N'${DuLieuNhanVien.dien_thoai}',N'${DuLieuNhanVien.ghi_chu}','${DuLieuNhanVien.ngay_tao}',N'${DuLieuNhanVien.nguoi_tao}')
			`
		);
		const DuLieuTruyenLen = await pool.query(`select nhan_vien_id,ten_nhan_vien from tbl_nhan_vien where ma_nhan_vien = N'${fnc.MaNV(DuLieuNV.rows)}'`)
		// console.log(DuLieuTruyenLen.rows)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		
	}
})
app.post('/ThemTaiKhoan', async (req,res)=>{
	try {
		const {nhan_vien_id,ten_dang_nhap,mat_khau,mat_khau_lai,quyen,ghi_chu,nguoi_tao,ngay_tao} = req.body;
		const newTodo = await pool.query(
		`
			insert into tbl_nguoi_dung(nhan_vien_id,ten_dang_nhap,mat_khau,quyen,ghi_chu,ngay_tao,nguoi_tao)
			values(${nhan_vien_id},N'${ten_dang_nhap}',N'${mahoa.Encrypt_LOOP_3DES(mat_khau,ten_dang_nhap,1)}',N'${quyen}',N'${ghi_chu}','${ngay_tao}',N'${nguoi_tao}')
		`)
		const DuLieuTruyenLen = await pool.query(
			`
			select tbl_nguoi_dung.*,tbl_nhan_vien.ten_nhan_vien from tbl_nguoi_dung,tbl_nhan_vien where 
			tbl_nguoi_dung.ten_dang_nhap = N'${ten_dang_nhap}' and tbl_nguoi_dung.nhan_vien_id = tbl_nhan_vien.nhan_vien_id
			`
		);
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.get('/HienThiTaiKhoan', async(req,res)=>{
	try {
		const newTodo = await pool.query(`
			select tbl_nguoi_dung.ghi_chu,tbl_nguoi_dung.nguoi_dung_id,tbl_nguoi_dung.ten_dang_nhap,tbl_nguoi_dung.quyen,tbl_nhan_vien.ten_nhan_vien,tbl_nguoi_dung.nguoi_tao,tbl_nguoi_dung.ngay_tao from tbl_nhan_vien,tbl_nguoi_dung where tbl_nhan_vien.nhan_vien_id = tbl_nguoi_dung.nhan_vien_id
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.put('/SuaTaiKhoan', async (req,res)=>{
	try {
		const {nguoi_dung_id,ten_dang_nhap,mat_khau,ghi_chu,quyen,nguoi_sua,ngay_sua}=req.body
		const newTodo = await pool.query(`
			update tbl_nguoi_dung set nguoi_sua=N'${nguoi_sua}',ngay_sua='${ngay_sua}',ten_dang_nhap = N'${ten_dang_nhap}',
			mat_khau=N'${mahoa.Encrypt_LOOP_3DES(mat_khau,ten_dang_nhap,1)}',quyen=N'${quyen}',ghi_chu=N'${ghi_chu}'
			where nguoi_dung_id = ${nguoi_dung_id}
		`)
		const DuLieuTruyenLen = await pool.query(
			`
			select tbl_nguoi_dung.*,tbl_nhan_vien.ten_nhan_vien from tbl_nguoi_dung,tbl_nhan_vien where 
			tbl_nguoi_dung.ten_dang_nhap = N'${ten_dang_nhap}' and tbl_nguoi_dung.nhan_vien_id = tbl_nhan_vien.nhan_vien_id
			`
		);
		console.log(DuLieuTruyenLen.rows)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		
	}
})
app.delete('/XoaTaiKhoan', async (req,res)=>{
	try {
		const {nguoi_dung_id}=req.body
		const newTodo = await pool.query(`
			DELETE from tbl_nguoi_dung WHERE nguoi_dung_id = ${nguoi_dung_id}
		`)
		console.log(newTodo)
	} catch (error) {
		console.log(error)
	}
})
//#endregion

//#region  Phân quyền người dùng
app.get('/PhanQuyenNguoiDung', async (req,res)=>{
	try {
		const newTodo= await pool.query(`
			select nguoi_dung_id,ten_dang_nhap,quyen,danh_sach_quyen from tbl_nguoi_dung
		`)
		res.json(newTodo.rows)

	} catch (error) {
		
	}
})

app.put('/PhanQuyenNguoiDung',async (req,res)=>{
	try {
		const {nguoi_dung_id,quyen,PQ} = req.body
		const newTodo = await pool.query(`
			update tbl_nguoi_dung set quyen = N'${quyen}',danh_sach_quyen=N'${PQ}'
			where nguoi_dung_id = ${nguoi_dung_id}
		`)
		console.log({nguoi_dung_id,quyen,PQ})
		res.json(newTodo)
	} catch (error) {
		
	}
})
//#endregion

//#region DanhMuc
	//#region LoaiDoiTuong
app.get('/LoaiDoiTuong', async (req,res)=>{
	try {
		const newTodo = await pool.query(`
			select * from tbl_loai_doi_tuong
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.post('/LoaiDoiTuong', async (req,res)=>{
	try {
		const ldt = await pool.query(`select * from tbl_loai_doi_tuong`)
		const {ten_loai_doi_tuong,tien_bao_cong_no,ghi_chu,nguoi_tao,ngay_tao} = req.body
		const newTodo = await pool.query(`
			insert into tbl_loai_doi_tuong(
				ma_loai_doi_tuong,ten_loai_doi_tuong,tien_bao_cong_no,ghi_chu,nguoi_tao,ngay_tao
			)
			values(
				N'${fnc.MaLDT(ldt.rows)}',N'${ten_loai_doi_tuong}',${tien_bao_cong_no},N'${ghi_chu}',N'${nguoi_tao}','${ngay_tao}'
			)
		`)
		
		const DuLieuTruyenLen = await pool.query(`
			select * from tbl_loai_doi_tuong where ma_loai_doi_tuong = N'${fnc.MaLDT(ldt.rows)}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		
	}
})

app.put('/LoaiDoiTuong', async (req,res)=>{
	try {
		const {ma_loai_doi_tuong,ten_loai_doi_tuong,tien_bao_cong_no,ghi_chu,nguoi_sua,ngay_sua} = req.body
		const newTodo = await pool.query(`
			update tbl_loai_doi_tuong set ten_loai_doi_tuong = N'${ten_loai_doi_tuong}',tien_bao_cong_no=${tien_bao_cong_no},ghi_chu=N'${ghi_chu}',nguoi_sua='${nguoi_sua}',ngay_sua='${ngay_sua}'
			where ma_loai_doi_tuong =N'${ma_loai_doi_tuong}'
		`)
		
		const DuLieuTruyenLen = await pool.query(`
			select * from tbl_loai_doi_tuong where ma_loai_doi_tuong = N'${ma_loai_doi_tuong}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		
	}
})
app.delete('/LoaiDoiTuong', async (req,res)=>{
	try {
		const {ma_loai_doi_tuong} = req.body
		const newTodo = await pool.query(`
			delete from tbl_loai_doi_tuong where ma_loai_doi_tuong = N'${ma_loai_doi_tuong}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
	//#endregion

	//#region Đối tượng
app.get('/DoiTuong/:Kieu',async(req,res)=>{
	try {
		const Kieu = req.params.Kieu
		if(Kieu==='0' || Kieu ==='1')
		{
			const newTodo = await pool.query(`
			select tbl_doi_tuong.*,tbl_loai_doi_tuong.ten_loai_doi_tuong,
			CASE
			   WHEN tbl_doi_tuong.kieu = 0 THEN 'Khách hàng'
			   WHEN tbl_doi_tuong.kieu = 1 THEN 'NCC'
			   WHEN tbl_doi_tuong.kieu = 2 THEN 'Khách hàng & NCC'
			END kieu_text,
			CASE
			   WHEN tbl_doi_tuong.vip = 0 THEN 'Thường'
			   WHEN tbl_doi_tuong.vip = 1 THEN 'VIP'
			END vip_text
			,tbl_doi_tuong.no_mua-tbl_doi_tuong.no_ban"tong_no" from tbl_loai_doi_tuong,tbl_doi_tuong
			where tbl_loai_doi_tuong.loai_doi_tuong_id = tbl_doi_tuong.loai_doi_tuong_id and (kieu = ${Kieu} or kieu=2)
			`)
			res.json(newTodo.rows)
		}
		else{
			const newTodo = await pool.query(`
			select tbl_doi_tuong.*,tbl_loai_doi_tuong.ten_loai_doi_tuong,
			CASE
			   WHEN tbl_doi_tuong.kieu = 0 THEN 'Khách hàng'
			   WHEN tbl_doi_tuong.kieu = 1 THEN 'NCC'
			   WHEN tbl_doi_tuong.kieu = 2 THEN 'Khách hàng & NCC'
			END kieu_text,
			CASE
			   WHEN tbl_doi_tuong.vip = 0 THEN 'Thường'
			   WHEN tbl_doi_tuong.vip = 1 THEN 'VIP'
			END vip_text
			,tbl_doi_tuong.no_mua-tbl_doi_tuong.no_ban"tong_no" from tbl_loai_doi_tuong,tbl_doi_tuong
			where tbl_loai_doi_tuong.loai_doi_tuong_id = tbl_doi_tuong.loai_doi_tuong_id
			`)
			res.json(newTodo.rows)
		}
	} catch (error) {
		
	}
})

app.post('/DoiTuong/:Kieu',async(req,res)=>{
	try {
		const Kieu = req.params.Kieu
		const {loai_doi_tuong_id,ten_doi_tuong,
			dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_ban_dau_ky,
			kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
			ngay_bao_cong_no,chiet_khau,vip,no_ban} = req.body
		const dl = await pool.query(`select * from tbl_doi_tuong`)
		if(Kieu==='0')
		{
			const newTodo = await pool.query(`
			insert into tbl_doi_tuong 
			(loai_doi_tuong_id,ma_doi_tuong,ten_doi_tuong,
			dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_mua,
			kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
			ngay_bao_cong_no,chiet_khau,vip)
			values(${loai_doi_tuong_id},N'${fnc.MaDT(dl.rows)}',N'${ten_doi_tuong}',
			N'${dia_chi}','${dien_thoai}',N'${ma_so_thue}',${no_mua_dau_ky},${no_mua_dau_ky},${kieu},N'${ghi_chu}',
			'${ngay_tao}','${nguoi_tao}','${ngay_sinh}',${ngay_bao_cong_no},${chiet_khau},${vip})
			`)
		}else if (Kieu==='1'){
			const newTodo = await pool.query(`
			insert into tbl_doi_tuong 
			(loai_doi_tuong_id,ma_doi_tuong,ten_doi_tuong,
			dia_chi,dien_thoai,ma_so_thue,no_ban_dau_ky,no_ban,
			kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
			ngay_bao_cong_no,chiet_khau,vip)
			values(${loai_doi_tuong_id},N'${fnc.MaDT(dl.rows)}',N'${ten_doi_tuong}',
			N'${dia_chi}','${dien_thoai}',N'${ma_so_thue}',${no_ban_dau_ky},${no_ban_dau_ky},${kieu},N'${ghi_chu}',
			'${ngay_tao}','${nguoi_tao}','${ngay_sinh}',${ngay_bao_cong_no},${chiet_khau},${vip})
			`)
		}else{
			const newTodo = await pool.query(`
			insert into tbl_doi_tuong 
			(loai_doi_tuong_id,ma_doi_tuong,ten_doi_tuong,
			dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_mua,
			kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
			ngay_bao_cong_no,chiet_khau,vip,no_ban_dau_ky,no_ban)
			values(${loai_doi_tuong_id},N'${fnc.MaDT(dl.rows)}',N'${ten_doi_tuong}',
			N'${dia_chi}','${dien_thoai}',N'${ma_so_thue}',${no_mua_dau_ky},${no_mua_dau_ky},${kieu},N'${ghi_chu}',
			'${ngay_tao}','${nguoi_tao}','${ngay_sinh}',${ngay_bao_cong_no},${chiet_khau},${vip},${no_ban_dau_ky},${no_ban_dau_ky})
			`)
		}
		const DuLieuTruyenLen = await pool.query(`
		select tbl_doi_tuong.*,tbl_loai_doi_tuong.ten_loai_doi_tuong,
		CASE
		   WHEN tbl_doi_tuong.kieu = 0 THEN 'Khách hàng'
		   WHEN tbl_doi_tuong.kieu = 1 THEN 'NCC'
		   WHEN tbl_doi_tuong.kieu = 2 THEN 'Khách hàng & NCC'
		END kieu_text,
		CASE
		   WHEN tbl_doi_tuong.vip = 0 THEN 'Thường'
		   WHEN tbl_doi_tuong.vip = 1 THEN 'VIP'
		END vip_text
		,tbl_doi_tuong.no_mua-tbl_doi_tuong.no_ban"tong_no" from tbl_loai_doi_tuong,tbl_doi_tuong
		where tbl_loai_doi_tuong.loai_doi_tuong_id = tbl_doi_tuong.loai_doi_tuong_id and tbl_doi_tuong.ten_doi_tuong =N'${ten_doi_tuong}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.put('/DoiTuong/:Kieu' , async (req,res)=>{
	try {
		const Kieu = req.params.Kieu
		const {ten_doi_tuong,ma_doi_tuong,
			dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_ban_dau_ky,
			kieu,ghi_chu,nguoi_sua,ngay_sua,ngay_sinh,
			ngay_bao_cong_no,chiet_khau,vip,no_ban,no_mua} = req.body
		// console.log()
		const dl = await pool.query(`select no_mua_dau_ky,no_mua,no_ban_dau_ky,no_ban from tbl_doi_tuong where  ma_doi_tuong =N'${ma_doi_tuong}'`)
		// console.log(kieu)
		var no_mua_moi = parseFloat(dl.rows[0].no_mua) + ( parseFloat(no_mua_dau_ky)- parseFloat(dl.rows[0].no_mua_dau_ky) ) 
		var no_ban_moi = parseFloat(dl.rows[0].no_ban) + ( parseFloat(no_ban_dau_ky)- parseFloat(dl.rows[0].no_ban_dau_ky) ) 
		// console.log('No mua : ' + no_mua_moi)
		// console.log('No ban : ' + no_ban_moi)
		if(kieu==='0')
		{
			const newTodo = await pool.query(`
			update tbl_doi_tuong 
			set ten_doi_tuong = N'${ten_doi_tuong}',
			dia_chi=N'${dia_chi}',dien_thoai = '${dien_thoai}',ma_so_thue=N'${ma_so_thue}',no_mua_dau_ky=${no_mua_dau_ky},no_mua=${no_mua_moi.toString()},
			kieu=${kieu},ghi_chu=N'${ghi_chu}',nguoi_sua='${nguoi_sua}',ngay_sua='${ngay_sua}',ngay_sinh='${ngay_sinh}',
			ngay_bao_cong_no=${ngay_bao_cong_no},chiet_khau=${chiet_khau},vip=${vip}
			where ma_doi_tuong = N'${ma_doi_tuong}'
			
			`)
		}else if (kieu==='1'){
			const newTodo = await pool.query(`
			update tbl_doi_tuong 
			set ten_doi_tuong = N'${ten_doi_tuong}',
			dia_chi=N'${dia_chi}',dien_thoai = '${dien_thoai}',ma_so_thue=N'${ma_so_thue}',no_ban_dau_ky=${no_ban_dau_ky},no_ban=${no_ban_moi.toString()},
			kieu=${kieu},ghi_chu=N'${ghi_chu}',nguoi_sua='${nguoi_sua}',ngay_sua='${ngay_sua}',ngay_sinh='${ngay_sinh}',
			ngay_bao_cong_no=${ngay_bao_cong_no},chiet_khau=${chiet_khau},vip=${vip}
			where ma_doi_tuong = N'${ma_doi_tuong}'
			`)
		}else{
			const newTodo = await pool.query(`
			update tbl_doi_tuong 
			set ten_doi_tuong = N'${ten_doi_tuong}',
			dia_chi=N'${dia_chi}',dien_thoai = '${dien_thoai}',ma_so_thue=N'${ma_so_thue}',no_mua_dau_ky=${no_mua_dau_ky},no_mua=${no_mua_moi.toString()},
			kieu=${kieu},ghi_chu=N'${ghi_chu}',nguoi_sua='${nguoi_sua}',ngay_sua='${ngay_sua}',ngay_sinh='${ngay_sinh}',
			ngay_bao_cong_no=${ngay_bao_cong_no},chiet_khau=${chiet_khau},vip=${vip},no_ban_dau_ky=${no_ban_dau_ky},no_ban=${no_ban_moi.toString()}
			where ma_doi_tuong = N'${ma_doi_tuong}'
			`)
		}
		const DuLieuTruyenLen = await pool.query(`
		select tbl_doi_tuong.*,tbl_loai_doi_tuong.ten_loai_doi_tuong,
		CASE
		   WHEN tbl_doi_tuong.kieu = 0 THEN 'Khách hàng'
		   WHEN tbl_doi_tuong.kieu = 1 THEN 'NCC'
		   WHEN tbl_doi_tuong.kieu = 2 THEN 'Khách hàng & NCC'
		END kieu_text,
		CASE
		   WHEN tbl_doi_tuong.vip = 0 THEN 'Thường'
		   WHEN tbl_doi_tuong.vip = 1 THEN 'VIP'
		END vip_text
		,tbl_doi_tuong.no_mua-tbl_doi_tuong.no_ban"tong_no" from tbl_loai_doi_tuong,tbl_doi_tuong
		where tbl_loai_doi_tuong.loai_doi_tuong_id = tbl_doi_tuong.loai_doi_tuong_id and tbl_doi_tuong.ten_doi_tuong =N'${ten_doi_tuong}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.delete('/DoiTuong' ,async(req,res)=>{
	try {
		const {ma_doi_tuong} = req.body
		const newTodo = await pool.query(`
			delete from tbl_doi_tuong where ma_doi_tuong =N'${ma_doi_tuong}' 
		`)
		res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
	//#endregion
	//#region DonViTinh
app.get('/DonViTinh', async (req,res)=>{
	try {
		const newTodo = await pool.query(`select * from tbl_dvt`)
		res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
app.post('/DonViTinh', async (req,res)=>{
	try {
		const {ten_dvt,ghi_chu,nguoi_tao,ngay_tao} = req.body
		const dl = await pool.query(`select * from tbl_dvt`)
		const newTodo = await pool.query(`
		insert into tbl_dvt(ma_dvt,ten_dvt,ghi_chu,ngay_tao,nguoi_tao)
		values (N'${fnc.MaDVT(dl.rows)}',N'${ten_dvt}',N'${ghi_chu}','${ngay_tao}','${nguoi_tao}')
		`)
		const DuLieuTruyenLen = await pool.query(`
		select * from tbl_dvt where ma_dvt = N'${fnc.MaDVT(dl.rows)}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.put('/DonViTinh', async (req,res)=>{
	try {
		const {ma_dvt,ten_dvt,ghi_chu,nguoi_sua,ngay_sua} = req.body
		const newTodo = await pool.query(`
		update tbl_dvt set ten_dvt=N'${ten_dvt}',ghi_chu=N'${ghi_chu}',ngay_sua='${ngay_sua}',
		nguoi_sua=N'${nguoi_sua}' where ma_dvt = N'${ma_dvt}'
		`)
		const DuLieuTruyenLen = await pool.query(`
		select * from tbl_dvt where ma_dvt = N'${ma_dvt}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.delete('/DonViTinh', async (req,res)=>{
	try {
		const {ma_dvt} = req.body
		const newTodo = await pool.query(`
				delete from tbl_dvt where ma_dvt = N'${ma_dvt}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
	//#endregion
	//#region LoaiHang
app.get('/LoaiHang/:TrangThai', async (req,res)=>{
	try {
		const TrangThai = req.params.TrangThai
		const newTodo = await pool.query(`
		select tbl_loai_hang.*,tbl_nganh_hang.ten_nganh_hang from tbl_loai_hang,tbl_nganh_hang
		where tbl_loai_hang.nganh_hang_id = tbl_nganh_hang.nganh_hang_id and tbl_loai_hang.trang_thai=${TrangThai}
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.post('/LoaiHang', async (req,res)=>{
	try {
		const {nganh_hang_id,ten_loai_hang,ghi_chu,nguoi_tao,ngay_tao,trang_thai,url} = req.body
		const dl = await pool.query(`select * from tbl_loai_hang`)
		const newTodo = await pool.query(`
		insert into tbl_loai_hang(ma_loai_hang,ten_loai_hang,ghi_chu,ngay_tao,nguoi_tao,trang_thai,kieu,nganh_hang_id,link_danh_muc)
		values(N'${fnc.MaLH(dl.rows)}',N'${ten_loai_hang}',N'${ghi_chu}','${ngay_tao}','${nguoi_tao}',${trang_thai},0,${nganh_hang_id},N'${url}')
		`)
		const DuLieuTruyenLen = await pool.query(`		
		select tbl_loai_hang.*,tbl_nganh_hang.ten_nganh_hang from tbl_loai_hang,tbl_nganh_hang
		where tbl_loai_hang.nganh_hang_id = tbl_nganh_hang.nganh_hang_id and tbl_loai_hang.trang_thai=${trang_thai}
		and tbl_loai_hang.ma_loai_hang = N'${fnc.MaLH(dl.rows)}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.get(`/LoaiHangTheoMaLoaiHang/:MaLoaiHang` , async (req,res)=>{
	try {
		const MaLoaiHang = req.params.MaLoaiHang
		const newTodo = await pool.query(`
			select ten_loai_hang from tbl_loai_hang where ma_loai_hang = N'${MaLoaiHang}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.put('/LoaiHang', async (req,res)=>{
	try {
		const {nganh_hang_id,ma_loai_hang,ghi_chu,ten_loai_hang,nguoi_sua,ngay_sua,trang_thai,url,sua_url} = req.body
		console.log(url)
		if(sua_url){
			const newTodo = await pool.query(`
			update tbl_loai_hang set link_danh_muc = N'${url}'
			where ma_loai_hang = N'${ma_loai_hang}'
			`)

		}else{
			const newTodo = await pool.query(`
			update tbl_loai_hang set ten_loai_hang =N'${ten_loai_hang}',ghi_chu=N'${ghi_chu}',
			nguoi_sua='${nguoi_sua}',ngay_sua='${ngay_sua}',trang_thai=${trang_thai},nganh_hang_id=${nganh_hang_id}
			where ma_loai_hang = N'${ma_loai_hang}'
			`)
		}
		const DuLieuTruyenLen = await pool.query(`		
		select tbl_loai_hang.*,tbl_nganh_hang.ten_nganh_hang from tbl_loai_hang,tbl_nganh_hang
		where tbl_loai_hang.nganh_hang_id = tbl_nganh_hang.nganh_hang_id and tbl_loai_hang.trang_thai=${trang_thai}
		and tbl_loai_hang.ma_loai_hang = N'${ma_loai_hang}'
		`)
		res.json(DuLieuTruyenLen.rows)
		
	} catch (error) {
		console.log(error)
	}
})

app.delete('/LoaiHang' , async (req,res)=>{
	try {
		const {ma_loai_hang} = req.body
		const newTodo = await pool.query(`
			delete from tbl_loai_hang where ma_loai_hang = N'${ma_loai_hang}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
	//#endregion

	//#region NganhHang
app.get('/NganhHang', async (req,res)=>{
	try {
		const newTodo = await pool.query(`
		select * from tbl_nganh_hang
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})

app.post('/NganhHang' , async (req,res)=>{
	try {
		const {ten_nganh_hang,ghi_chu,nguoi_tao,trang_thai,ngay_tao} = req.body
		const dl = await pool.query(`select * from tbl_nganh_hang`)
		const newTodo = await pool.query(`
			insert into tbl_nganh_hang(ma_nganh_hang,ten_nganh_hang,ghi_chu,ngay_tao,nguoi_tao,trang_thai)
			values(N'${fnc.MaNH(dl.rows)}',N'${ten_nganh_hang}',N'${ghi_chu}','${ngay_tao}','${nguoi_tao}',${trang_thai})
		`)
		const DuLieuTruyenLen = await pool.query(`
			select * from tbl_nganh_hang where ma_nganh_hang = N'${fnc.MaNH(dl.rows)}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.put('/NganhHang' , async (req,res)=>{
	try {
		const {ma_nganh_hang,ten_nganh_hang,ghi_chu,nguoi_sua,trang_thai,ngay_sua} = req.body
		console.log({ma_nganh_hang,ten_nganh_hang,ghi_chu,nguoi_sua,trang_thai,ngay_sua})
		const newTodo = await pool.query(`
			update tbl_nganh_hang set ten_nganh_hang=N'${ten_nganh_hang}',ghi_chu=N'${ghi_chu}',ngay_sua='${ngay_sua}',nguoi_sua='${nguoi_sua}',trang_thai=${trang_thai}
			where ma_nganh_hang = N'${ma_nganh_hang}'
		`)
		const DuLieuTruyenLen = await pool.query(`
			select * from tbl_nganh_hang where ma_nganh_hang = N'${ma_nganh_hang}'
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.delete('/NganhHang' , async (req,res)=>{
	try {
		const {ma_nganh_hang} = req.body
		const newTodo = await pool.query(`
				delete from tbl_nganh_hang where ma_nganh_hang = N'${ma_nganh_hang}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
app.get('/NganhHangPhanLoaiSuDung/:TrangThai', async (req,res)=>{
	try {
		const TrangThai = req.params.TrangThai
		const newTodo = await pool.query(`
		select * from tbl_nganh_hang where trang_thai = ${TrangThai}
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
	//#endregion

	//#region MatHang
app.get('/LoaiHangTheoNganhHang/:nganh_hang_id' ,async(req,res)=>{
	try {
		const nganh_hang_id = req.params.nganh_hang_id
		const newTodo = await pool.query(`
			select * from tbl_loai_hang where nganh_hang_id = ${nganh_hang_id} and trang_thai = true
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.get('/MatHang/:TrangThai' , async(req,res)=>{
	try {
		const TrangThai = req.params.TrangThai
		const newTodo = await pool.query(`
		select tbl_hang.ghi_chu"ghi_chu_hang",*,tbl_hang_ton_dau_ky.so_luong_dau_ky+tbl_hang_ton_dau_ky.so_luong_phat_sinh"SoLuongTon" from tbl_dvt,tbl_hang,tbl_nganh_hang,tbl_loai_hang,tbl_hang_ton_dau_ky
		where tbl_hang.hang_id=tbl_hang_ton_dau_ky.hang_id
		and tbl_nganh_hang.nganh_hang_id = tbl_loai_hang.nganh_hang_id
		and tbl_loai_hang.loai_hang_id = tbl_hang.loai_hang_id
		and tbl_hang_ton_dau_ky.trang_thai = ${TrangThai}
		and tbl_hang_ton_dau_ky.dvt_id = tbl_dvt.dvt_id
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})

app.put(`/SuaMatHang`  , async (req,res) =>{
	try {
		
		console.log('test')
		const { dl,TrangThaiSua,url } = req.body

		console.log({ dl,TrangThaiSua,url })
		if(TrangThaiSua){
			const newTodo = await pool.query(`
				update tbl_hang_ton_dau_ky 
				set duong_link = N'${url}'
				where hang_id = ${dl.hang_id}
			`)
			res.json(newTodo.rows)
		}else{
			const newTodo = await pool.query(`

			`)
		}
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.get('/MatHang/:TrangThai/:IDLoaiHang' , async(req,res)=>{
	try {
		
		const TrangThai = req.params.TrangThai
		const IDLoaiHang = req.params.IDLoaiHang
		// console.log(IDLoaiHang)
		const newTodo = await pool.query(`
		select tbl_hang.ghi_chu"ghi_chu_hang",*,tbl_hang_ton_dau_ky.so_luong_dau_ky+tbl_hang_ton_dau_ky.so_luong_phat_sinh"SoLuongTon" from tbl_dvt,tbl_hang,tbl_nganh_hang,tbl_loai_hang,tbl_hang_ton_dau_ky
		where tbl_hang.hang_id=tbl_hang_ton_dau_ky.hang_id
		and tbl_nganh_hang.nganh_hang_id = tbl_loai_hang.nganh_hang_id
		and tbl_loai_hang.loai_hang_id = tbl_hang.loai_hang_id
		and tbl_hang_ton_dau_ky.trang_thai = ${TrangThai}
		and tbl_hang_ton_dau_ky.dvt_id = tbl_dvt.dvt_id
		and tbl_loai_hang.loai_hang_id = ${IDLoaiHang}
		`)
		res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
app.get('/MatHang/:TrangThai/:IDLoaiHang/:TenHang' , async(req,res)=>{
	try {
		
		const TrangThai = req.params.TrangThai
		const TenHang = req.params.TenHang
		// console.log(IDLoaiHang)
		const newTodo = await pool.query(`
		select tbl_hang.ghi_chu"ghi_chu_hang",*,tbl_hang_ton_dau_ky.so_luong_dau_ky+tbl_hang_ton_dau_ky.so_luong_phat_sinh"SoLuongTon" from tbl_dvt,tbl_hang,tbl_nganh_hang,tbl_loai_hang,tbl_hang_ton_dau_ky
		where tbl_hang.hang_id=tbl_hang_ton_dau_ky.hang_id
		and tbl_nganh_hang.nganh_hang_id = tbl_loai_hang.nganh_hang_id
		and tbl_loai_hang.loai_hang_id = tbl_hang.loai_hang_id
		and tbl_hang_ton_dau_ky.trang_thai = ${TrangThai}
		and tbl_hang_ton_dau_ky.dvt_id = tbl_dvt.dvt_id
		and tbl_hang.ten_hang like N'%${TenHang}%'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
app.post('/MatHang',async (req,res)=>{
	try {
		const {ten_hang,loai_hang_id,nguoi_tao,ngay_tao,dvt_id,so_luong_dau_ky,so_luong_phat_sinh,gia_goc,gia_thuc_nhap,gia_ban_buon,gia_ban_le,ten_biet_duoc,hoat_chat,nha_san_xuat
		,ghi_chu,so_luong_toi_thieu,trang_thai,hsd_toi_thieu,hsd_muc_xanh,hsd_muc_vang,hsd_muc_do,url} = req.body
		const dl = await pool.query(`
			select * from tbl_hang
		`)
		// console.log({ten_hang,loai_hang_id,nguoi_tao,ngay_tao,dvt_id,so_luong_dau_ky,so_luong_phat_sinh,gia_goc,gia_thuc_nhap,gia_ban_buon,gia_ban_le,ten_biet_duoc,hoat_chat,nha_san_xuat
		// 	,ghi_chu,so_luong_toi_thieu,trang_thai,hsd_toi_thieu,hsd_muc_xanh,hsd_muc_vang,hsd_muc_do})
		const newTodo = await pool.query(`
			insert into tbl_hang(
				loai_hang_id,ma_hang,ten_hang,ghi_chu,ngay_tao,nguoi_tao
			)
			values (${loai_hang_id},N'${fnc.MaHang(dl.rows)}',N'${ten_hang}',N'${ghi_chu}','${ngay_tao}',N'${nguoi_tao}');

			insert into tbl_hang_ton_dau_ky
			(hang_id,nguoi_tao,ngay_tao,kho_id,doi_tuong_id,dvt_id,so_luong_dau_ky,
			gia_goc,gia_thuc_nhap,gia_ban_buon,gia_ban_le,ten_biet_duoc,hoat_chat,nha_san_xuat,
			ghi_chu,so_luong_toi_thieu,trang_thai,tong_tien,hsd_toi_thieu,hsd_muc_xanh,hsd_muc_vang,hsd_muc_do,duong_link)
			values((select hang_id from tbl_hang where ten_hang = N'${ten_hang}'),N'${nguoi_tao}','${ngay_tao}',1,2,${dvt_id},${so_luong_dau_ky},
			${gia_goc},${gia_thuc_nhap},${gia_ban_buon},${gia_ban_le},N'${ten_biet_duoc}',N'${hoat_chat}',N'${nha_san_xuat}',
			N'${ghi_chu}',${so_luong_toi_thieu},${trang_thai},${gia_thuc_nhap},${hsd_toi_thieu},${hsd_muc_xanh},${hsd_muc_vang},${hsd_muc_do},N'${url}')
		`)
		const DuLieuTruyenLen = await pool.query(`
		select tbl_hang.ghi_chu"ghi_chu_hang",*,tbl_hang_ton_dau_ky.so_luong_dau_ky+tbl_hang_ton_dau_ky.so_luong_phat_sinh"SoLuongTon" from tbl_dvt,tbl_hang,tbl_nganh_hang,tbl_loai_hang,tbl_hang_ton_dau_ky
		where tbl_hang.hang_id=tbl_hang_ton_dau_ky.hang_id
		and tbl_nganh_hang.nganh_hang_id = tbl_loai_hang.nganh_hang_id
		and tbl_loai_hang.loai_hang_id = tbl_hang.loai_hang_id
		and tbl_hang_ton_dau_ky.trang_thai = ${trang_thai}
		and tbl_hang_ton_dau_ky.dvt_id = tbl_dvt.dvt_id and tbl_hang.ma_hang = N'${fnc.MaHang(dl.rows)}}'
		`)
		console.log('them thanh cong')
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
		console.log(error)
	}	
})
app.put('/MatHang',async(req,res)=>{
	try {
		const {ma_hang,ten_hang,gia_ban_le,ghi_chu,ngay_sua,nguoi_sua} = req.body

		console.log({ma_hang,ten_hang,gia_ban_le,ghi_chu,ngay_sua,nguoi_sua})
		const newTodo = await pool.query(`
			update tbl_hang 
			set ghi_chu = N'${ghi_chu}',ten_hang = N'${ten_hang}',ngay_sua='${ngay_sua}',nguoi_sua='${nguoi_sua}'
			where ma_hang = N'${ma_hang}';
			update tbl_hang_ton_dau_ky 
			set ghi_chu = N'${ghi_chu}',gia_ban_le = ${gia_ban_le},ngay_sua='${ngay_sua}',nguoi_sua='${nguoi_sua}'
			where hang_id = (
				select hang_id from tbl_hang where ma_hang = N'${ma_hang}'
			);
		`)

		const DuLieuTruyenLen = await pool.query(`
			select * from tbl_hang,tbl_hang_ton_dau_ky
			where tbl_hang.hang_id = tbl_hang_ton_dau_ky.hang_id
			and tbl_hang_ton_dau_ky.hang_id = 
			(select hang_id from tbl_hang where ma_hang = N'${ma_hang}')
		`)
		res.json(DuLieuTruyenLen.rows)
	} catch (error) {
	}
})
app.delete('/MatHang',async(req,res)=>{
	try {
		const {ma_hang} = req.body
		const newTodo = await pool.query(`
		delete from tbl_hang_ton_dau_ky where hang_id = (select hang_id from tbl_hang where ma_hang = N'${ma_hang}');
		delete from tbl_hang where hang_id = (select hang_id from tbl_hang where ma_hang = N'${ma_hang}')
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
	//#endregion

	//#endregion
	
//#endregion

//#region QuanLyBanHang
	//#region QuanLyBanHangMayPOS
	app.get('/HoaDonBan/:Kieu' , async (req,res)=>{
		try {
			const Kieu = req.params.Kieu
			// and date_part('day', ngay) = 31
			// and date_part('month', ngay) = 1
			// and date_part('year',ngay) = 2021
			const newTodo = await pool.query(`
			select TO_CHAR(tbl_hoa_don_ban.ngay,'DD-MM-YYYY HH24:MI:SS AM')"NgayFORMAT",* from tbl_hoa_don_ban where kieu = ${Kieu}
			`)
			res.json(newTodo.rows)
		} catch (error) {
			
		}
	})
	app.get('/HoaDonBan/:Kieu/:hoa_don_ban_id/:NgayBatDau/:NgayKetThuc' , async (req,res)=>{
		try {
			const Kieu = req.params.Kieu
			const NgayBatDau = req.params.NgayBatDau
			const NgayKetThuc = req.params.NgayKetThuc
			console.log(Kieu)
			// and date_part('day', ngay) = 31
			// and date_part('month', ngay) = 1
			// and date_part('year',ngay) = 2021
			const newTodo = await pool.query(`
			select TO_CHAR(tbl_hoa_don_ban.ngay,'DD-MM-YYYY HH24:MI:SS AM')"NgayFORMAT",* from tbl_hoa_don_ban where kieu = ${Kieu}
			and (tbl_hoa_don_ban.ngay >= '${NgayBatDau}' and tbl_hoa_don_ban.ngay <= '${NgayKetThuc}'  ) 
			`)
			res.json(newTodo.rows)
			// console.log(newTodo.rows)
		} catch (error) {
			console.log(error)
		}
	})
	app.get('/HoaDonBan/:Kieu/:hoa_don_ban_id' , async (req,res)=>{
		try {
			const Kieu = req.params.Kieu
			const hoa_don_ban_id = req.params.hoa_don_ban_id
			// console.log(hoa_don_ban_id)
			// and date_part('day', ngay) = 31
			// and date_part('month', ngay) = 1
			// and date_part('year',ngay) = 2021
			const newTodo = await pool.query(`
				select tbl_hang.ma_hang,tbl_hang.ten_hang,tbl_hoa_don_ban_chi_tiet.so_luong,tbl_hoa_don_ban_chi_tiet.don_gia from tbl_hoa_don_ban,tbl_hoa_don_ban_chi_tiet ,tbl_hang
				where kieu = ${Kieu} and tbl_hoa_don_ban.hoa_don_ban_id = tbl_hoa_don_ban_chi_tiet.hoa_don_ban_id
				and tbl_hang.hang_id = tbl_hoa_don_ban_chi_tiet.hang_id and tbl_hoa_don_ban.hoa_don_ban_id = N'${hoa_don_ban_id}'
			`)
			res.json(newTodo.rows)
		} catch (error) {
			
		}
	})
	
	app.post('/HoaDonBan', async (req,res)=>{
		try {
			const {GioHang,ngay_tao,nguoi_tao,tong_tien,nhan_vien_id} = req.body
			var ngay_viet_nam = (ngay_tao.split(' ')[0].split('-')[2].length > 1 ? ngay_tao.split(' ')[0].split('-')[2] : "0"+ngay_tao.split(' ')[0].split('-')[2]) + '-' + (ngay_tao.split(' ')[0].split('-')[1].length > 1 ? ngay_tao.split(' ')[0].split('-')[1] : '0'+ngay_tao.split(' ')[0].split('-')[1]) + '-' + ngay_tao.split(' ')[0].split('-')[0]
			console.log(ngay_viet_nam)
			const dl = await pool.query(`
			select * from tbl_hoa_don_ban,tbl_hoa_don_ban_chi_tiet where 
			date_part('day', tbl_hoa_don_ban.ngay) = ${ngay_viet_nam.split('-')[0]} 
			and date_part('month', tbl_hoa_don_ban.ngay) = ${ngay_viet_nam.split('-')[1]} 
			and date_part('year', tbl_hoa_don_ban.ngay) = ${ngay_viet_nam.split('-')[2]}
			and tbl_hoa_don_ban_chi_tiet.trang_thai_so_seri = N'HD'
			and tbl_hoa_don_ban.hoa_don_ban_id = tbl_hoa_don_ban_chi_tiet.hoa_don_ban_id
			`)
			// console.log(dl.rows)
			// Tạo hoá đơn
			const hoa_don_ban_id = fnc.HoaDonBanID(dl.rows,ngay_viet_nam)
			const TaoHoaDon = await pool.query(`
			insert into tbl_hoa_don_ban(hoa_don_ban_id,ngay,doi_tuong_id,ten_doi_tuong,tong_gia_tri,tien_thuc_tra,trang_thai,kieu,nhan_vien_id,nguoi_tao)
			values (N'${hoa_don_ban_id}','${ngay_tao}',1,N'Khách lẻ',${tong_tien},${tong_tien},true,1,${nhan_vien_id},N'${nguoi_tao}')
			`)
			
			// 
			// Cập nhập tồn kho
			GioHang.map(async(x)=>{
				const newTodo = await pool.query(`
				update tbl_hang_ton_dau_ky set so_luong_phat_sinh = so_luong_phat_sinh - ${x.so_luong} where hang_id = ${x.hang_id} ;
				insert into tbl_hoa_don_ban_chi_tiet(hoa_don_ban_id,kho_id,doi_tuong_id,hang_id,dvt_id,so_luong,don_gia,trang_thai_so_seri)
				values(N'${hoa_don_ban_id}',1,2,${x.hang_id} ,(select dvt_id from tbl_hang_ton_dau_ky where hang_id = ${x.hang_id}) ,${x.so_luong}, ${x.gia_ban_le}, N'HD')
			`)
			})
			res.json(hoa_don_ban_id)
		} catch (error) {
			console.log(error)
		}
	})
		//#endregion
		//#region QuanLyTraHangKH
	
	app.post(`/HoaDonTraHangKH` , async(req,res)=>{
		try {
			const {GioHang,ngay_tao,nguoi_tao,tong_tien,nhan_vien_id} = req.body
			var ngay_viet_nam = (ngay_tao.split(' ')[0].split('-')[2].length > 1 ? ngay_tao.split(' ')[0].split('-')[2] : "0"+ngay_tao.split(' ')[0].split('-')[2]) + '-' + (ngay_tao.split(' ')[0].split('-')[1].length > 1 ? ngay_tao.split(' ')[0].split('-')[1] : '0'+ngay_tao.split(' ')[0].split('-')[1]) + '-' + ngay_tao.split(' ')[0].split('-')[0]
			console.log(ngay_viet_nam)
			const dl = await pool.query(`
			select * from tbl_hoa_don_ban,tbl_hoa_don_ban_chi_tiet where 
			date_part('day', tbl_hoa_don_ban.ngay) = ${ngay_viet_nam.split('-')[0]} 
			and date_part('month', tbl_hoa_don_ban.ngay) = ${ngay_viet_nam.split('-')[1]} 
			and date_part('year', tbl_hoa_don_ban.ngay) = ${ngay_viet_nam.split('-')[2]}
			and tbl_hoa_don_ban_chi_tiet.trang_thai_so_seri != N'HD'
			and tbl_hoa_don_ban.hoa_don_ban_id = tbl_hoa_don_ban_chi_tiet.hoa_don_ban_id
			`)
			// console.log(dl.rows)
			// Tạo hoá đơn
			const hoa_don_ban_id = fnc.KhachHangTraID(dl.rows,ngay_viet_nam)
			console.log(hoa_don_ban_id)
			const TaoHoaDon = await pool.query(`
			insert into tbl_hoa_don_ban(hoa_don_ban_id,ngay,doi_tuong_id,ten_doi_tuong,tong_gia_tri,tien_thuc_tra,trang_thai,kieu,nhan_vien_id,nguoi_tao)
			values (N'${hoa_don_ban_id}','${ngay_tao}',1,N'Khách lẻ',-${tong_tien},-${tong_tien},true,0,${nhan_vien_id},N'${nguoi_tao}')
			`)
			
			// 
			// Cập nhập tồn kho
			GioHang.map(async(x)=>{
				const newTodo = await pool.query(`
				update tbl_hang_ton_dau_ky set so_luong_phat_sinh = so_luong_phat_sinh + ${x.so_luong} where hang_id = ${x.hang_id} ;
				insert into tbl_hoa_don_ban_chi_tiet(hoa_don_ban_id,kho_id,doi_tuong_id,hang_id,dvt_id,so_luong,don_gia,trang_thai_so_seri)
				values(N'${hoa_don_ban_id}',1,2,${x.hang_id} ,(select dvt_id from tbl_hang_ton_dau_ky where hang_id = ${x.hang_id}) ,-${x.so_luong}, ${x.gia_ban_le}, N'Ktra')
			`)
			})
			res.json(hoa_don_ban_id)
		} catch (error) {
			console.log(error)
		}
	})
	//#endregion
//#endregion


//#region Nhập xuất
	//#region Nhập hàng














	// ************************************************
	app.get('/PhieuNhap/:Kieu' , async (req,res)=>{
		try {
			const Kieu = req.params.Kieu
			// and date_part('day', ngay) = 31
			// and date_part('month', ngay) = 1
			// and date_part('year',ngay) = 2021
			const newTodo = await pool.query(`
			select TO_CHAR(tbl_phieu_nhap.ngay,'DD-MM-YYYY HH24:MI:SS AM')"NgayFORMAT",* from tbl_phieu_nhap where kieu = ${Kieu}
			`)
			res.json(newTodo.rows)
		} catch (error) {
			
		}
	})
	app.get('/PhieuNhap/:Kieu/:phieu_nhap_id/:NgayBatDau/:NgayKetThuc' , async (req,res)=>{
		try {
			const Kieu = req.params.Kieu
			const NgayBatDau = req.params.NgayBatDau
			const NgayKetThuc = req.params.NgayKetThuc
			console.log(Kieu)
			// and date_part('day', ngay) = 31
			// and date_part('month', ngay) = 1
			// and date_part('year',ngay) = 2021
			const newTodo = await pool.query(`
			select TO_CHAR(tbl_phieu_nhap.ngay,'DD-MM-YYYY HH24:MI:SS AM')"NgayFORMAT",* from tbl_phieu_nhap where kieu = ${Kieu}
			and (tbl_phieu_nhap.ngay >= '${NgayBatDau}' and tbl_phieu_nhap.ngay <= '${NgayKetThuc}'  ) 
			`)
			res.json(newTodo.rows)
			// console.log(newTodo.rows)
		} catch (error) {
			console.log(error)
		}
	})
	app.get('/PhieuNhap/:Kieu/:phieu_nhap_id' , async (req,res)=>{
		try {
			const Kieu = req.params.Kieu
			const phieu_nhap_id = req.params.phieu_nhap_id
			// console.log(hoa_don_ban_id)
			// and date_part('day', ngay) = 31
			// and date_part('month', ngay) = 1
			// and date_part('year',ngay) = 2021
			const newTodo = await pool.query(`
				select tbl_hang.ma_hang,tbl_hang.ten_hang,tbl_phieu_nhap_chi_tiet.so_luong,tbl_phieu_nhap_chi_tiet.don_gia from tbl_phieu_nhap,tbl_phieu_nhap_chi_tiet ,tbl_hang
				where kieu = ${Kieu} and tbl_phieu_nhap.phieu_nhap_id = tbl_phieu_nhap_chi_tiet.phieu_nhap_id
				and tbl_hang.hang_id = tbl_phieu_nhap_chi_tiet.hang_id and tbl_phieu_nhap.phieu_nhap_id = N'${phieu_nhap_id}'
			`)
			res.json(newTodo.rows)
		} catch (error) {
			
		}
	})
	
	app.post('/PhieuNhap', async (req,res)=>{
		try {
			const {GioHang,ngay_tao,nguoi_tao,tong_tien,nhan_vien_id} = req.body
			var ngay_viet_nam = (ngay_tao.split(' ')[0].split('-')[2].length > 1 ? ngay_tao.split(' ')[0].split('-')[2] : "0"+ngay_tao.split(' ')[0].split('-')[2]) + '-' + (ngay_tao.split(' ')[0].split('-')[1].length > 1 ? ngay_tao.split(' ')[0].split('-')[1] : '0'+ngay_tao.split(' ')[0].split('-')[1]) + '-' + ngay_tao.split(' ')[0].split('-')[0]
			console.log(ngay_viet_nam)
			const dl = await pool.query(`
			select * from tbl_phieu_nhap,tbl_phieu_nhap_chi_tiet where 
			date_part('day', tbl_phieu_nhap.ngay) = ${ngay_viet_nam.split('-')[0]} 
			and date_part('month', tbl_phieu_nhap.ngay) = ${ngay_viet_nam.split('-')[1]} 
			and date_part('year', tbl_phieu_nhap.ngay) = ${ngay_viet_nam.split('-')[2]}
			and tbl_phieu_nhap_chi_tiet.trang_thai_so_seri = N''
			and tbl_phieu_nhap.phieu_nhap_id = tbl_phieu_nhap_chi_tiet.phieu_nhap_id
			`)
			// console.log(dl.rows)
			// Tạo hoá đơn
			const phieu_nhap_id = fnc.PhieuNhapID(dl.rows,ngay_viet_nam)
			const TaoHoaDon = await pool.query(`
			insert into tbl_phieu_nhap(phieu_nhap_id,ngay,doi_tuong_id,ten_doi_tuong,tong_gia_tri,tien_thuc_tra,trang_thai,kieu,nguoi_tao)
			values (N'${phieu_nhap_id}','${ngay_tao}',2,N'Nhà cung cấp lẻ',${tong_tien},${tong_tien},true,1,N'${nguoi_tao}')
			`)
			
			// 
			// Cập nhập tồn kho
			GioHang.map(async(x)=>{
				const newTodo = await pool.query(`
				update tbl_hang_ton_dau_ky set so_luong_phat_sinh = so_luong_phat_sinh + ${x.so_luong} where hang_id = ${x.hang_id} ;
				insert into tbl_phieu_nhap_chi_tiet(phieu_nhap_id,kho_id,hang_id,dvt_id,so_luong,don_gia,trang_thai_so_seri)
				values(N'${phieu_nhap_id}',1,${x.hang_id} ,(select dvt_id from tbl_hang_ton_dau_ky where hang_id = ${x.hang_id}) ,${x.so_luong}, ${x.gia_thuc_nhap}, N'')
			`)
			})
			res.json(phieu_nhap_id)
		} catch (error) {
			console.log(error)
		}
	})
		//#endregion
		//#region QuanLyTraHangKH
	
	app.post(`/HoaDonTraHangNCC` , async(req,res)=>{
		try {
			const {GioHang,ngay_tao,nguoi_tao,tong_tien,nhan_vien_id} = req.body
			var ngay_viet_nam = (ngay_tao.split(' ')[0].split('-')[2].length > 1 ? ngay_tao.split(' ')[0].split('-')[2] : "0"+ngay_tao.split(' ')[0].split('-')[2]) + '-' + (ngay_tao.split(' ')[0].split('-')[1].length > 1 ? ngay_tao.split(' ')[0].split('-')[1] : '0'+ngay_tao.split(' ')[0].split('-')[1]) + '-' + ngay_tao.split(' ')[0].split('-')[0]
			console.log(ngay_viet_nam)
			const dl = await pool.query(`
			select * from tbl_phieu_nhap,tbl_phieu_nhap_chi_tiet where 
			date_part('day', tbl_phieu_nhap.ngay) = ${ngay_viet_nam.split('-')[0]} 
			and date_part('month', tbl_phieu_nhap.ngay) = ${ngay_viet_nam.split('-')[1]} 
			and date_part('year', tbl_phieu_nhap.ngay) = ${ngay_viet_nam.split('-')[2]}
			and tbl_phieu_nhap_chi_tiet.trang_thai_so_seri = N'TraN'
			and tbl_phieu_nhap.phieu_nhap_id = tbl_phieu_nhap_chi_tiet.phieu_nhap_id
			`)
			// console.log(dl.rows)
			// Tạo hoá đơn
			const phieu_nhap_id = fnc.PhieuTraNCCID(dl.rows,ngay_viet_nam)
			console.log(phieu_nhap_id)
			const TaoHoaDon = await pool.query(`
			insert into tbl_phieu_nhap(phieu_nhap_id,ngay,doi_tuong_id,ten_doi_tuong,tong_gia_tri,tien_thuc_tra,trang_thai,kieu,nguoi_tao)
			values (N'${phieu_nhap_id}','${ngay_tao}',2,N'Nhà cung cấp lẻ',-${tong_tien},-${tong_tien},true,0,N'${nguoi_tao}')
			`)
			
			// 
			// Cập nhập tồn kho
			GioHang.map(async(x)=>{
				const newTodo = await pool.query(`
				update tbl_hang_ton_dau_ky set so_luong_phat_sinh = so_luong_phat_sinh - ${x.so_luong} where hang_id = ${x.hang_id} ;
				insert into tbl_phieu_nhap_chi_tiet(phieu_nhap_id,kho_id,hang_id,dvt_id,so_luong,don_gia,trang_thai_so_seri)
				values(N'${phieu_nhap_id}',1,${x.hang_id} ,(select dvt_id from tbl_hang_ton_dau_ky where hang_id = ${x.hang_id}) ,-${x.so_luong}, ${x.gia_thuc_nhap}, N'Ktra')
			`)
			})
			res.json(phieu_nhap_id)
		} catch (error) {
			console.log(error)
		}
	})



	// ************************************************


	//#endregion



	//#region PhieuThuChi
app.get(`/PhieuThuChi/:Kieu/:NgayTao`, async (req,res)=>{
		try {
			/* kiểu 0 phiếu thu*/
			/* kiểu 1 phiếu chi*/
	
			/* Chi phí khác loại 2 còn đâu loại 1*/
			const Kieu = req.params.Kieu
			const NgayTao = req.params.NgayTao
			console.log(NgayTao)
			const newTodo = await pool.query(`
			select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thu_chi where kieu = ${Kieu}
			and date_part('day', ngay) = ${NgayTao.split('-')[2]}
			and date_part('month', ngay) = ${NgayTao.split('-')[1]}
			and date_part('year', ngay) = ${NgayTao.split('-')[0]}
			`)
			res.json(newTodo.rows)
		} catch (error) {
			
		}
	})
app.get(`/PhieuThuChi/:Kieu/:NgayTao/:NgayBatDau/:NgayKetThuc`, async (req,res)=>{
	try {
		/* kiểu 0 phiếu thu*/
		/* kiểu 1 phiếu chi*/

		/* Chi phí khác loại 2 còn đâu loại 1*/
		const Kieu = req.params.Kieu
		const NgayTao = req.params.NgayTao
		console.log(NgayTao)
		const newTodo = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thu_chi where kieu = ${Kieu}
		and date_part('day', ngay) = 1
		and date_part('month', ngay) = 2
		and date_part('year', ngay) = 2021
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.post(`/PhieuThuChi/:Kieu`,async (req,res)=>{
	try {
		/* kiểu 0 phiếu thu*/
		/* kiểu 1 phiếu chi*/

		/* Chi phí khác loại 2 còn đâu loại 1*/
		const {thoi_gian,thu_chi_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,ngay_tao,nguoi_tao,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,khoa_so,loai} = req.body
		const Kieu = req.params.Kieu
		var ngay_viet_nam = (ngay.split(' ')[0].split('-')[2].length > 1 ? ngay.split(' ')[0].split('-')[2] : "0"+ngay.split(' ')[0].split('-')[2]) + '-' + (ngay.split(' ')[0].split('-')[1].length > 1 ? ngay.split(' ')[0].split('-')[1] : '0'+ngay.split(' ')[0].split('-')[1]) + '-' + ngay.split(' ')[0].split('-')[0]
		// console.log(ngay_viet_nam)
		const dl = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thu_chi where kieu = ${Kieu}
		and date_part('day', ngay) = ${ngay_viet_nam.split('-')[0]} 
		and date_part('month', ngay) = ${ngay_viet_nam.split('-')[1]} 
		and date_part('year', ngay) = ${ngay_viet_nam.split('-')[2]} 
		`)
		
		const newTodo = await pool.query(`
		insert into tbl_thu_chi(thu_chi_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,kieu,ghi_chu,ngay_tao,nguoi_tao,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,khoa_so,loai)
	values(N'${Kieu==='0' ? fnc.PhieuThuID(dl.rows,ngay_viet_nam) : fnc.PhieuChiID(dl.rows,ngay_viet_nam)}','${ngay+' '+ thoi_gian}',${nhan_vien_id},N'${noi_dung}',${so_tien},true,${Kieu},N'${ghi_chu}','${ngay_tao}',N'${nguoi_tao}',N'${ten_doi_tuong}',N'${dia_chi}','${dien_thoai}','${ma_so_thue}',0,${loai});
		
		`)
		const TruyenDuLieuLen = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thu_chi where thu_chi_id = N'${Kieu==='0' ? fnc.PhieuThuID(dl.rows,ngay_viet_nam) : fnc.PhieuChiID(dl.rows,ngay_viet_nam)}'
		`)
		console.log(TruyenDuLieuLen.rows)
		res.json(TruyenDuLieuLen.rows)

	} catch (error) {
		console.log(error)
	}
})
app.put(`/PhieuThuChi/:Kieu` , async (req,res)=>{
	try {
		const {thoi_gian,thu_chi_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,nguoi_sua,ngay_sua,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,loai} = req.body
		const Kieu = req.params.Kieu
		var so_tien_new = so_tien
		if(so_tien_new.indexOf('₫') >0){
			
			so_tien_new = 	parseInt(so_tien.split('.').join("").split('₫').join("")).toString()
		}
		console.log(so_tien_new)
		console.log({thoi_gian,thu_chi_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,nguoi_sua,ngay_sua,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,loai})
		const newTodo = await pool.query(`
		update tbl_thu_chi set ngay='${ngay}',nhan_vien_id=${nhan_vien_id},noi_dung=N'${noi_dung}',so_tien=${so_tien_new},kieu=${Kieu},ghi_chu=N'${ghi_chu}',
		ngay_sua='${ngay_sua}',nguoi_tao=N'${nguoi_sua}',ten_doi_tuong=N'${ten_doi_tuong}',dia_chi=N'${dia_chi}',dien_thoai=N'${dien_thoai}',ma_so_thue=N'${ma_so_thue}'
		where thu_chi_id = '${thu_chi_id}'
		`)
		var ngay_viet_nam = (ngay_sua.split(' ')[0].split('-')[2].length > 1 ? ngay_sua.split(' ')[0].split('-')[2] : "0"+ngay_sua.split(' ')[0].split('-')[2]) + '-' + (ngay_sua.split(' ')[0].split('-')[1].length > 1 ? ngay_sua.split(' ')[0].split('-')[1] : '0'+ngay_sua.split(' ')[0].split('-')[1]) + '-' + ngay_sua.split(' ')[0].split('-')[0]
		// console.log(ngay_viet_nam)
		const TruyenDuLieuLen = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thu_chi where kieu = ${Kieu}
		and thu_chi_id = '${thu_chi_id}'
		`)
		res.json(TruyenDuLieuLen.rows)
		// console.log(TruyenDuLieuLen.rows)
	} catch (error) {
		console.log(error)
	}
})
app.delete(`/PhieuThuChi`,async (req,res)=>{
	try {
		const {thu_chi_id} = req.body
		const newTodo = await pool.query(`
		DELETE FROM tbl_thu_chi WHERE thu_chi_id = N'${thu_chi_id}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
	//#endregion 







	













	//#region CongNO
app.get(`/CongNo/:Kieu/:NgayTao`, async (req,res)=>{
		try {
			/* Kiểu 1 Thanh toán NCC */
			/* Kiểu 0 Thanh toánKhách hàng */

			const Kieu = req.params.Kieu
			const NgayTao = req.params.NgayTao
			console.log(NgayTao)
			const newTodo = await pool.query(`
			select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thanh_toan where kieu = ${Kieu}
			and date_part('day', ngay) = ${NgayTao.split('-')[2]}
			and date_part('month', ngay) = ${NgayTao.split('-')[1]}
			and date_part('year', ngay) = ${NgayTao.split('-')[0]}
			`)
			res.json(newTodo.rows)
		} catch (error) {
			
		}
	})
app.get(`/CongNo/:Kieu/:NgayTao/:NgayBatDau/:NgayKetThuc`, async (req,res)=>{
	try {
		/* kiểu 0 phiếu thu*/
		/* kiểu 1 phiếu chi*/

		/* Chi phí khác loại 2 còn đâu loại 1*/
		const Kieu = req.params.Kieu
		const NgayTao = req.params.NgayTao
		console.log(NgayTao)
		const newTodo = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thanh_toan where kieu = ${Kieu}
		and date_part('day', ngay) = 1
		and date_part('month', ngay) = 2
		and date_part('year', ngay) = 2021
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
app.post(`/CongNo/:Kieu`,async (req,res)=>{
	try {
		/* kiểu 0 phiếu thu*/
		/* kiểu 1 phiếu chi*/

		/* Chi phí khác loại 2 còn đâu loại 1*/
		const {thoi_gian,thanh_toan_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,ngay_tao,nguoi_tao,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,khoa_so,loai} = req.body
		const Kieu = req.params.Kieu
		var ngay_viet_nam = (ngay.split(' ')[0].split('-')[2].length > 1 ? ngay.split(' ')[0].split('-')[2] : "0"+ngay.split(' ')[0].split('-')[2]) + '-' + (ngay.split(' ')[0].split('-')[1].length > 1 ? ngay.split(' ')[0].split('-')[1] : '0'+ngay.split(' ')[0].split('-')[1]) + '-' + ngay.split(' ')[0].split('-')[0]
		// console.log(ngay_viet_nam)
		const dl = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thanh_toan where kieu = ${Kieu}
		and date_part('day', ngay) = ${ngay_viet_nam.split('-')[0]} 
		and date_part('month', ngay) = ${ngay_viet_nam.split('-')[1]} 
		and date_part('year', ngay) = ${ngay_viet_nam.split('-')[2]} 
		`)
		
		const newTodo = await pool.query(`
		insert into tbl_thanh_toan(thanh_toan_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,kieu,ghi_chu,ngay_tao,nguoi_tao,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,khoa_so)
	values(N'${Kieu==='0' ? fnc.ThanhToanKHID(dl.rows,ngay_viet_nam) : fnc.ThanhToanNCCID(dl.rows,ngay_viet_nam)}','${ngay+' '+ thoi_gian}',${nhan_vien_id},N'${noi_dung}',${so_tien},true,${Kieu},N'${ghi_chu}','${ngay_tao}',N'${nguoi_tao}',N'${ten_doi_tuong}',N'${dia_chi}','${dien_thoai}','${ma_so_thue}',0);
		
		`)
		const TruyenDuLieuLen = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thanh_toan where thanh_toan_id = N'${Kieu==='0' ? fnc.ThanhToanKHID(dl.rows,ngay_viet_nam) : fnc.ThanhToanNCCID(dl.rows,ngay_viet_nam)}'
		`)
		console.log(TruyenDuLieuLen.rows)
		res.json(TruyenDuLieuLen.rows)

	} catch (error) {
		console.log(error)
	}
})
app.put(`/CongNo/:Kieu` , async (req,res)=>{
	try {
		const {thoi_gian,thanh_toan_id,ngay,nhan_vien_id,noi_dung,so_tien,trang_thai,ghi_chu,nguoi_sua,ngay_sua,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,loai} = req.body
		const Kieu = req.params.Kieu
		var so_tien_new = so_tien
		if(so_tien_new.indexOf('₫') >0){
			
			so_tien_new = 	parseInt(so_tien.split('.').join("").split('₫').join("")).toString()
		}
		console.log(so_tien_new)
		const newTodo = await pool.query(`
		update tbl_thanh_toan set ngay='${ngay}',nhan_vien_id=${nhan_vien_id},noi_dung=N'${noi_dung}',so_tien=${so_tien_new},kieu=${Kieu},ghi_chu=N'${ghi_chu}',
		ngay_sua='${ngay_sua}',nguoi_tao=N'${nguoi_sua}',ten_doi_tuong=N'${ten_doi_tuong}',dia_chi=N'${dia_chi}',dien_thoai=N'${dien_thoai}',ma_so_thue=N'${ma_so_thue}'
		where thanh_toan_id = '${thanh_toan_id}'
		`)
		var ngay_viet_nam = (ngay_sua.split(' ')[0].split('-')[2].length > 1 ? ngay_sua.split(' ')[0].split('-')[2] : "0"+ngay_sua.split(' ')[0].split('-')[2]) + '-' + (ngay_sua.split(' ')[0].split('-')[1].length > 1 ? ngay_sua.split(' ')[0].split('-')[1] : '0'+ngay_sua.split(' ')[0].split('-')[1]) + '-' + ngay_sua.split(' ')[0].split('-')[0]
		// console.log(ngay_viet_nam)
		const TruyenDuLieuLen = await pool.query(`
		select TO_CHAR(ngay, 'DD/MM/YYYY HH24:MI:SS AM')"NgayText",* from tbl_thanh_toan where kieu = ${Kieu}
		and thanh_toan_id = '${thanh_toan_id}'
		`)
		console.log(TruyenDuLieuLen.rows)
		res.json(TruyenDuLieuLen.rows)
	} catch (error) {
		console.log(error)

	}
})
app.delete(`/CongNo`,async (req,res)=>{
	try {
		const {thanh_toan_id} = req.body
		const newTodo = await pool.query(`
		DELETE FROM tbl_thanh_toan WHERE thanh_toan_id = N'${thanh_toan_id}'
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})
	//#endregion

//#region Thông kê báo cáo
app.get(`/SoNhap_Ban/:NgayHomNay/:Kieu` ,async(req,res)=>{
	try {
		const NgayHomNay = req.params.NgayHomNay
		console.log(NgayHomNay)
		const Kieu = req.params.Kieu
		// const NgayHomNay = "2021-02-03"
		const DSSoBan = await pool.query(`
		select tbl_hang.ma_hang,tbl_hang.ten_hang,sum(tbl_hoa_don_ban_chi_tiet.so_luong)"so_ban_tong"
		from tbl_hoa_don_ban,tbl_hoa_don_ban_chi_tiet,tbl_hang
		where tbl_hoa_don_ban.hoa_don_ban_id =tbl_hoa_don_ban_chi_tiet.hoa_don_ban_id
		and tbl_hang.hang_id = tbl_hoa_don_ban_chi_tiet.hang_id
		and date_part('day', tbl_hoa_don_ban.ngay) = ${NgayHomNay.split('-')[2]}
		and date_part('month', tbl_hoa_don_ban.ngay) = ${NgayHomNay.split('-')[1]}
		and date_part('year', tbl_hoa_don_ban.ngay) = ${NgayHomNay.split('-')[0]}
		group by tbl_hang.ten_hang,tbl_hang.ma_hang
		`)
		console.log(DSSoBan.rows)
		const DSSoNhap = await pool.query(`
		select tbl_hang.ma_hang,tbl_hang.ten_hang,sum(tbl_phieu_nhap_chi_tiet.so_luong)"so_luong_nhap" from tbl_phieu_nhap,tbl_phieu_nhap_chi_tiet,tbl_hang
		where tbl_phieu_nhap.phieu_nhap_id = tbl_phieu_nhap_chi_tiet.phieu_nhap_id
		and tbl_phieu_nhap_chi_tiet.hang_id = tbl_hang.hang_id
		and date_part('day', tbl_phieu_nhap.ngay) = ${NgayHomNay.split('-')[2]}
		and date_part('month', tbl_phieu_nhap.ngay) = ${NgayHomNay.split('-')[1]}
		and date_part('year', tbl_phieu_nhap.ngay) = ${NgayHomNay.split('-')[0]}
		group by tbl_hang.ten_hang,tbl_hang.ma_hang
		`)
		res.json(Kieu==='0'? DSSoNhap.rows :DSSoBan.rows)
		// DSSoNhap.rows.map
	} catch (error) {
		
	}
})

app.get(`/ThongKeBankingBanHang/:NgayHomNay` , async (req,res)=>{
	try {
		const NgayHomNay = req.params.NgayHomNay
		console.log(NgayHomNay)
		const TienHienTai = await pool.query(`
			select sum(tbl_hoa_don_ban.tong_gia_tri) from tbl_hoa_don_ban,tbl_hoa_don_ban_chi_tiet
			where tbl_hoa_don_ban.hoa_don_ban_id = tbl_hoa_don_ban_chi_tiet.hoa_don_ban_id
			and date_part('day', tbl_hoa_don_ban_chi_tiet.ngay_tao) = ${NgayHomNay.split('-')[2]}
			and date_part('month', tbl_hoa_don_ban_chi_tiet.ngay_tao) = ${NgayHomNay.split('-')[1]}
			and date_part('year', tbl_hoa_don_ban_chi_tiet.ngay_tao) = ${NgayHomNay.split('-')[0]}
		`)
		console.log(TienHienTai.rows)
		res.json(TienHienTai.rows)
	} catch (error) {
		
	}
})
//#endregion
















//#region Thiết lập lương nhân viên
app.get(`/HienThiCaNhanVien` , async (req,res)=>{
	try {
		const newTodo = await pool.query(`
			select tbl_nhan_vien.ma_nhan_vien,* from tbl_gio_cong,tbl_lich_nhan_vien,tbl_nhan_vien
			where tbl_gio_cong.gio_cong_id = tbl_lich_nhan_vien.gio_cong_id
			and tbl_nhan_vien.nhan_vien_id = tbl_lich_nhan_vien.nhan_vien_id
		`)
		res.json(newTodo.rows)
	} catch (error) {
		
	}
})

app.post('/ThietLapCaNhanVien',async (req,res)=>{
	try {
			const DL = req.body
			// console.log(DL)
			const newTodo = await pool.query(`
			select * from tbl_lich_nhan_vien,tbl_gio_cong
			where tbl_lich_nhan_vien.gio_cong_id = tbl_gio_cong.gio_cong_id and
			tbl_lich_nhan_vien.nhan_vien_id = 
			(SELECT nhan_vien_id from tbl_nhan_vien where ma_nhan_vien = N'${DL[0].ma_nhan_vien}')
			and date_part('day',tbl_lich_nhan_vien.ngay) = ${DL[0].ngay.split('-')[2]}
			and date_part('month',tbl_lich_nhan_vien.ngay) = ${DL[0].ngay.split('-')[1]}
			and date_part('year',tbl_lich_nhan_vien.ngay) = ${DL[0].ngay.split('-')[0]}
			`)
			if(newTodo.rowCount===0){
				const tbl_gio_cong = await pool.query(`
					insert into tbl_gio_cong(ca_lam_viec)
					values (N'${JSON.stringify(DL)}')
				`)
				const tbl_lich_nhan_vien = await pool.query(`
					insert into tbl_lich_nhan_vien(
						ngay,nhan_vien_id,gio_cong_id
					)
					values ('${DL[0].ngay}',
					(SELECT nhan_vien_id from tbl_nhan_vien where ma_nhan_vien = N'${DL[0].ma_nhan_vien}'),
					(select gio_cong_id from tbl_gio_cong where ca_lam_viec = 
					N'${JSON.stringify(DL)}')
					)
				`)
			}
			else{
					const tesst = JSON.parse(newTodo.rows[0].ca_lam_viec)
					// console.log(tesst)
					const ca_lam_viec =[{
						ma_nhan_vien : tesst[0].ma_nhan_vien,
						ten_nhan_vien : tesst[0].ten_nhan_vien,
						ngay : tesst[0].ngay,
						gio_vao : (DL[0].gio_vao!=undefined ? DL[0].gio_vao : tesst[0].gio_vao),
						gio_ra : (DL[0].gio_ra!=undefined ? DL[0].gio_ra : tesst[0].gio_ra)
					}]
					// console.log(ca_lam_viec)
					// Cập nhập giờ vào giờ ra 
					const tbl_gio_cong_ca_lam_viec = await pool.query(`
						update tbl_gio_cong set ca_lam_viec = N'${JSON.stringify(ca_lam_viec)}'
						where gio_cong_id = ${newTodo.rows[0].gio_cong_id}
					`)
			}
			// console.log(newTodo.rowCount===0)
	} catch (error) {
		console.log(error)
	}
})

app.post('/CheckRaVaoNhanVien' , async (req,res)=>{
	try {
		const {ngay_gio_hien_tai,e,check} = req.body
		console.log({ngay_gio_hien_tai,e,check})
		// ngay_gio_hien_tai '2021-2-11 0:59:33'
		// e giá trị mã nhân viên nhập từ trên client
		const newTodo = await pool.query(`
		select * from tbl_gio_cong,tbl_lich_nhan_vien
		where tbl_gio_cong.gio_cong_id = tbl_lich_nhan_vien.gio_cong_id
		and date_part('day', ngay) = ${ngay_gio_hien_tai.split(' ')[0].split('-')[2]}
		and date_part('month', ngay) = ${ngay_gio_hien_tai.split(' ')[0].split('-')[1]}
		and date_part('year', ngay) = ${ngay_gio_hien_tai.split(' ')[0].split('-')[0]}
		and tbl_lich_nhan_vien.nhan_vien_id = (
			select nhan_vien_id from tbl_nhan_vien where ma_nhan_vien= N'${e}'
		)
		`)
		const TenNV = await pool.query(`
		select ten_nhan_vien from tbl_nhan_vien where ma_nhan_vien = N'${e}'
		`)
		if(newTodo.rows.length > 0){
			console.log(newTodo.rows)
			const CapNhapGioVaoRaNhanVien = await pool.query(
				check ?
				`update tbl_gio_cong set gio_vao = '${ngay_gio_hien_tai}' where gio_cong_id = ${newTodo.rows[0].gio_cong_id}` :
				`update tbl_gio_cong set gio_ra = '${ngay_gio_hien_tai}' where gio_cong_id = ${newTodo.rows[0].gio_cong_id}`
				) 
			res.json('Check '+ (check ? 'vào': 'ra') + ' thành công !\n'+'Xin chào nhân viên : '+TenNV.rows[0].ten_nhan_vien)
		}else{
			res.json('Lỗi nhân viên chưa thiết lập trên lịch làm !')
		}
		// console.log(TenNV.rows[0].ten_nhan_vien)
		console.log(newTodo.rows.length > 0)
		// res.json(newTodo.rows)
	} catch (error) {
		console.log(error)
	}
})
//#endregion

//#endregion
const GioVaoRaCaLamViec = (str,check)=>{
	try {
		const DL = JSON.parse(str)
		return (check ? DL[0].gio_vao : DL[0].gio_ra)
	} catch (error) {
		
	}
}

app.get('/ChotLuongNhanVien',async (req,res)=>{
	try {
		const newTodo = await pool.query(`
		select * from tbl_lich_nhan_vien,tbl_gio_cong,tbl_nhan_vien
		where tbl_lich_nhan_vien.gio_cong_id = tbl_gio_cong.gio_cong_id
		and tbl_lich_nhan_vien.nhan_vien_id = tbl_nhan_vien.nhan_vien_id
		
		
		`)
		// console.log(newTodo.rows)

		const DuLieuTruyenLen = []
		newTodo.rows.map(x=>{
			_ngay = new Date( (Date.parse(x.ngay)) ).getDate()+ '-'+  ( new Date( (Date.parse(x.ngay)) ).getMonth() +1) +'-'+ new Date( (Date.parse(x.ngay)) ).getFullYear() 
			DuLieuTruyenLen.push({
				lich_nhan_vien_id : x.lich_nhan_vien_id,
				ma_nhan_vien : x.ma_nhan_vien,
				ten_nhan_vien : x.ten_nhan_vien,
				ngay : _ngay,
				ngay_ca_lam_viec : GioVaoRaCaLamViec(x.ca_lam_viec,true) +'->' + GioVaoRaCaLamViec(x.ca_lam_viec,false),
				gio_vao :  new Date( Date.parse(x.gio_vao) ).getHours()+':'+new Date( Date.parse(x.gio_vao) ).getMinutes() +':'+new Date( Date.parse(x.gio_vao) ).getSeconds(),
				gio_ra : new Date( Date.parse(x.gio_ra) ).getHours()+':'+new Date( Date.parse(x.gio_ra) ).getMinutes() +':'+new Date( Date.parse(x.gio_ra) ).getSeconds()
			})
		}
		)
		console.log(DuLieuTruyenLen)
		res.json(DuLieuTruyenLen)
	} catch (error) {
		console.log(error)
	}
}
)

// NOTE

// select * from tbl_gio_cong,tbl_lich_nhan_vien
// where tbl_gio_cong.gio_cong_id = tbl_lich_nhan_vien.gio_cong_id
// and tbl_lich_nhan_vien.nhan_vien_id = (select nhan_vien_id from tbl_nhan_vien where ma_nhan_vien = N'NV0001')
// NOTE








// Thanh toán online
// CommonJS
const { OnePayDomestic } = require('vn-payments');
const { OnePayInternational } = require('vn-payments');
const { VNPay } = require('vn-payments');
const { SohaPay } = require('vn-payments');
const { NganLuong } = require('vn-payments');

const onepayIntl = new OnePayInternational({
	paymentGateway: 'https://onepay.vn/onecomm-pay/vpc.op',
	merchant: 'TESTONEPAY',
	accessCode: '6BEB2546',
	secureSecret: '6D0870CDE5F24F34F3915FB0045120DB',
  });
// const vnpay = new VNPay({
// 	 merchant
// })

	/*
		Xây dựng URL chuyển đến cổng thanh toán bằng hàm buildCheckoutUrl. 
		Dữ liệu truyền vào là một object có cấu trúc được định nghĩa sẵn bởi thư viện và sẽ được kiểm tra hợp lệ bởi GatewayClass.checkoutSchema. 
		Hàm buildCheckoutUrl sẽ trả về Promise bất đồng bộ, khi hoàn tất, sẽ trả về một WHATWG URL. Sau khi có được URL checkout, 
		redirect trình duyệt của khách qua URL này:
	*/
	app.post('/payment/checkout', (req, res) => {
	const params = Object.assign({}, req.body);

	// construct checkout payload from form data and app's defaults
	const checkoutData = {
		amount: parseInt(params.amount, 10),
		customerId: params.email,
		currency: 'VND',
		/*...*/
	};

	// buildCheckoutUrl is async operation and will return a Promise
	onepayIntl
		.buildCheckoutUrl(checkoutData)
		.then(checkoutUrl => {
		res.writeHead(301, { Location: checkoutUrl.href });
		res.end();
		})
		.catch(err => {
		res.send(err);
		});
	});

	/* 
	Cuối cùng, bạn sẽ cần xử lý URL callback từ cổng thanh toán. 
	Một trong các yêu cầu đó là các tham số trong URL query trả về 
	phải được kiểm tra tính hợp lệ với chuỗi mã hóa đính kèm:
	*/

	app.get('/payment/callback', (req, res) => {
		const query = req.query;
	  
		onepayIntl.verifyReturnUrl(query).then(results => {
		  if (results.isSucceed) {
			res.render('success', {
			  title: 'Nau Store - Thank You',
			  orderId: results.orderId,
			  price: results.price,
			  message: results.message,
			});
		  } else {
			res.render('errors', {
			  title: 'Nau Store - Payment Errors',
			  message: results.message,
			});
		  }
		});
	  });

	  /*
	 Về việc xử lý IPN Request gửi trực tiếp đến backend của trang bán hàng, 
	 bạn cần hiện thực một route handler theo tài liệu hướng dẫn của cổng thanh toán 
	 và sử dụng lại hàm verifyReturnUrl để kiểm tra tính hợp lệ của request gửi từ cổng thanh toán. 
	  */


// Thanh toán online