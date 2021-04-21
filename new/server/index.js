/** @format */
const express = require('express');
const cors = require('cors');
const pool = require('./db.js');
const _3DES = require('nodejs3des');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;
const { response } = require('express');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(process.env.PORT || port, () => {
	console.log('Port : ' + port);
});


app.get("/test1",async(req, res)=>{


    try{
        const newTodo = await pool.query(`
        select * from test1
        `)
        res.json(newTodo.rows)
        console.log(req.body);
    }

    catch(err){
    console.log(err.message);
    }

});

//Them co so du lieu

app.post("/test1",async(req, res)=>{

    try{
        const{gioithieu}=req.body;
        console.log(gioithieu);
        const newTodo = await pool.query(`
        insert into test1 (gioithieu) Values (N'${gioithieu}')
        `)
        const DuLieuTruyenLen = await pool.query(`
            select * from test1 where gioithieu = N'${gioithieu}'
        `)
        res.json(DuLieuTruyenLen.rows)
        console.log(req.body);

    }
    catch(err)
    {
        console.log(err.message);
    }
});

//update co so du lieu
app.put("/test1",async(req, res)=>{

    try{
        const{id,gioithieu}=req.body;
        console.log(gioithieu);
        const newTodo = await pool.query(`
        UPDATE test1 set gioithieu = '${gioithieu}'
        where id = ${id}
        `)
        const DuLieuTruyenLen = await pool.query(`
            select * from test1 where gioithieu = N'${gioithieu}'
        `)
        res.json(DuLieuTruyenLen.rows)
        console.log(req.body);

    }
    catch(err)
    {
        console.log(err.message);
    }
});
// delete
app.delete('/test1' , async (req, res) => {
    try{
        const{id,gioithieu}=req.body;
        console.log(gioithieu)
        const newTodo = await pool.query(`
            DELETE FROM test1 where id = ${id}
        `)
        res.json(id)
        console.log(req.body);
    }
    catch(err){
    console.log(err.message);
    }
})



