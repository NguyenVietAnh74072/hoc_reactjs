/** @format */
const express = require('express');
const cors = require('cors');
const pool = require('./db.js');
const _3DES = require('nodejs3des');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const { response } = require('express');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(process.env.PORT || port, () => {
	console.log('Port : ' + port);
});

//Routes////////////////




//Create a to do

// SERVER
app.post("/todos",async(req, res)=>{
    try{
        const {description} = req.body;
        console.log(description)
        const newTodo = await pool.query(`
            insert into todo (description)
            values(N'${description}')
        `)
        const DuLieuTruyenLen = await pool.query(`
            select * from todo where description = N'${description}'
        `)
        res.json(DuLieuTruyenLen.rows)
        console.log(req.body);
    }

    catch(err){
    console.log(err.message);
    }

});

// get a todo

app.get("/todos",async(req, res)=>{


    try{
        const newTodo = await pool.query(`
        select * from todo
        `)
        res.json(newTodo.rows)
        console.log(req.body);
    }

    catch(err){
    console.log(err.message);
    }

});


//update a todo
app.put('/todos' , async (req, res) => {
    try{
        const {todo_id,description} = req.body;
        console.log(description)
        const newTodo = await pool.query(`
            UPDATE todo set description = '${description}'
            where todo_id = ${todo_id}
        `)
        const DuLieuTruyenLen = await pool.query(`
            select * from todo where todo_id = ${todo_id}
        `)
        res.json(DuLieuTruyenLen.rows)
        console.log(req.body);
    }

    catch(err){
        
    console.log(err.message);
    }
})

// DELETE a todos
app.delete('/todos' , async (req, res) => {
    try{
        const {todo_id,description} = req.body;
        console.log(description)
        const newTodo = await pool.query(`
            DELETE FROM todo where todo_id = ${todo_id}
        `)
        res.json(todo_id)
        console.log(req.body);
    }
    catch(err){
    console.log(err.message);
    }
})

app.listen(5000,()=>{

    console.log('helo the gioi');
});


/*

const [Data,SetData] = React.useState([])
const onClickThem = async ()=>{
    try{
        const response = await fetch("http://127.0.0.1:3001/todos")

        const JsonDta = await response.json()
        SetData(JsonDta)
        console.log(JsonDta)
    }catch(error){

    }
}


const onClickSua = async ()=>{
    try{
        const response = await fetch("http://127.0.0.1:3001/todos",{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({loai_doi_tuong_id,ten_doi_tuong,
            dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,no_ban_dau_ky,
            kieu,ghi_chu,ngay_tao,nguoi_tao,ngay_sinh,
            ngay_bao_cong_no,chiet_khau,vip}),
        })

        const JsonDta = await response.json()
        SetData(JsonDta)
        console.log(JsonDta)
    }catch(error){

    }
}



*/