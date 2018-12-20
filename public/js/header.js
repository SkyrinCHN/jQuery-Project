$(function () {
  $.ajax({
    url: "http://127.0.0.1:5500/public/header.html",
    type: "get",
    success: function (res) {
      $(res).replaceAll(header);
      $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
      var $input = $("#header>nav>div input");
      var $btnSearch = $input.next();
      $btnSearch.click(function () {
        //如果搜索框中有内容,且不是空字符时
        if ($input.val().trim().length > 0) {
          location.href = "products.html?kwords=" + $input.val();
        }
      });
      $input.keydown(function (e) {
        if (e.keyCode == 13) {
          $btnSearch.click();
        }
      })
      //如果地址栏中有keywords
      if (location.search.indexOf("kwords") != -1) {//就读取keywords内容,放入搜索框
        $input.val(
          //将编码后的字符串解码为原文
          decodeURI(location.search.split("=")[1])
        )
      }
    }
  })
})