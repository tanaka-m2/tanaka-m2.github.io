function validateForm() {
  var userid = document.getElementById("userid").value;
  var password = document.getElementById("password").value;
  
  if (userid === "-1" && password === "admin") {
    window.location.href = "id/admin.html";
    return false;
  } 
  else if (userid === "mako" && password === "0000") {
    window.location.href = "id/member/25512087/mako.html";
    return false;
  } 
  else if (userid === "1" || userid === "Panda") {
    if (password === "panchan") {
      window.location.href = "id/62712566/1.html";
      return false;
    }
    else {
      alert("パスワードが違います。お忘れの場合はサイト下部のメールアドレスにお問い合わせください。");
      return false;
    }
  }
  else if (userid === "2" || userid === "yukaminn") {
    if (password === "1209") {
      window.location.href = "id/33599693/2.html";
      return false;
    }
    else {
      alert("パスワードが違います。お忘れの場合はサイト下部のメールアドレスにお問い合わせください。");
      return false;
    }
  }
  else if (userid === "" && password === "") {
    alert("番号またはユーザー名とパスワードを入力してください");
    return false;
  }
  else {
    alert("存在しないIDまたはユーザー名です");
    return false;
  }
}