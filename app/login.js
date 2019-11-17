function login()
{
  var password = document.getElementById("password").value;
  if (password == "adminadmin")
  {
    document.location = "index2.html";
  }
  else
  {
    alert("登录码输入错误！");
  }
}
