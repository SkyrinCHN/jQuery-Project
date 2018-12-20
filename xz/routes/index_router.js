const express=require("express");
const pool=require("../pool");
const router=express.Router();

// http://localhost:3000/index
router.get("/",(req,res)=>{
    var sql=`select * from xz_index_product where seq_recommended!=0 order by seq_recommended`;
    pool.query(sql,(err,result)=>{
        if(err) throw new Error("打开数据库失败...");
        res.send(result);
    });
})
// 导出路由
module.exports=router;