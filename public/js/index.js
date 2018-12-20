// 向 http://localhost:3000/index 发送get请求

// 参数解构解决传参不确定的时候使用
$.ajax({
  url:" http://localhost:3000/index",
  type:"get",
  dataType:"json" // 因为返回json字符串，所以希望自动转为对象 
})// 支持promise:open(result)
 .then(function(result){
   var p0=result[0];
   // 复制56~66行 保存到html中
   var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
   <div class="card-body d-flex flex-column align-items-start">
     <h5 class="d-inline-block mb-2">${p0.title}</h5>
     <h6 class="mb-5">
       <a class="text-dark" href="javascript:;">${p0.details}</a>
     </h6>
     <span class="text-primary">￥${p0.price.toFixed(2)}</span>
     <a class="btn btn-primary" href="${p0.href}">查看详情</a>
   </div>
   <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p0.pic}" data-holder-rendered="true">
 </div>`;
  // 找到 放html内容的位置
  var divMain=document.getElementById("main");
  var divP1=divMain.children[1].children[0].children[1].children[0];
  divP1.innerHTML=html;
  // 复制72~82行
  var p1=result[1];
  var html1=`<div class="card border-0 flex-md-row box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <h5 class="d-inline-block mb-2">${p1.title}</h5>
    <h6 class="mb-5">
      <a class="text-dark" href="javascript:;">${p1.details}</a>
    </h6>
    <span class="text-primary">¥${p1.price.toFixed(2)}</span>
    <a class="btn btn-primary" href="${p1.href}">查看详情</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
</div>`;
  divP1.nextElementSibling.innerHTML=html1;
  // 复制88~95行
  var p2=result[2];
  var html3=`<div class="card border-0 flex-md-row box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <h5 class="d-inline-block mb-3">${p2.title}</h5>
    <span class="text-primary">¥${p2.price.toFixed(2)}</span>
    <a class="btn btn-primary" href="${p2.href}">查看详情</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"src="${p2.pic}" data-holder-rendered="true">
</div>`;
  divP1.parentNode.nextElementSibling.children[0].innerHTML=html3;
 
  /*
  for(var i=3;i<result.length;i++){
   var html4=`
    <div class="card border-0 text-center">
      <img class="card-img-top" src="${result[i].pic}" alt="Card image cap">
      <div class="card-body p-0 pr-1 pl-1">
        <span class="d-inline-block">${result[i].title}</span>
        <span class="text-primary small">¥${result[i].price.toFixed(2)}</span>
        <a class="btn btn-sm btn-primary" href="${result[i].href}">查看详情</a>
      </div>
    </div>
`;   // 少复制一行，这个div的父元素没有被复制
// divp1的上一级的下一个的第二个的第一个
    divP1.parentNode.nextElementSibling.children[1].children[0].children[i-3].innerHTML=html4;
   
  }
  */

      var html4="";
      for(var p of result.slice(-3)){
          html4+=`
          <div class="col-md-4 p-0 pl-2">
          <div class="card border-0 text-center">
          <img class="card-img-top" src="${p.pic}" alt="Card image cap">
          <div class="card-body p-0 pr-1 pl-1">
            <span class="d-inline-block">${p.title}</span>
            <span class="text-primary small">¥${p.price.toFixed(2)}</span>
            <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
          </div>
        </div>
        </div>`;
      }
      divP1.parentNode.nextElementSibling.children[1].children[0].innerHTML=html4;
 })
