function validateForm() {
  var userid = document.getElementById("userid").value;
  var password = document.getElementById("password").value;
  
  if (userid === "512" && password === "tanaka") {
    window.location.href = "id/1.html";
    return false;
  } 
  else if (userid === "1" && password === "panchan") {
    window.location.href = "id/62712566/1.html";
    return false;
  }
  else if (userid === "" && password === "") {
    alert("IDとパスワードを入力してください");
    return false;
  }
  else {
    alert("お前部外者だな?不正アクセス禁止法違反だぞ!");
    return false;
  }
}