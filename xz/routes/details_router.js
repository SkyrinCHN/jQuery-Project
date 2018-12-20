const express=require("express");
const pool=require("../pool");
const router=express.Router();

// http://localhost:3000/details?lid=5
router.get("/",(req,res)=>{
    var lid=req.query.lid;
   var output={product:{},specs:[],pics:[]};
   if(lid!==undefined){
    var sql="select * from xz_laptop where lid=?";
    pool.query(sql,[lid],(err,result)=>{
      if(err) throw err;
      output.product=result[0];
      var family_id=output.product.family_id;
      var sql="select lid ,spec from xz_laptop where family_id=?";
      pool.query(sql,[family_id],(err,result)=>{
        if(err) throw err;
        output.specs=result;
        var sql="select * from xz_laptop_pic where laptop_id=?";
        pool.query(sql,[lid],(err,result)=>{
          if(err) throw err;
          output.pics=result;
          res.send(output);
        })
      });
    });
   }else{
     output.err="请提供lid";
     res.send(output);
   }
})
// 导出路由
module.exports=router;