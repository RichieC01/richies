
function saveUsername(){
  var input = document.getElementById("username").value;
  localStorage.setItem("u1", input);
  alert("Hi, " + localStorage.getItem("u1"));
}
window.onload = function(){
  document.getElementById("welcome").innerHTML += localStorage.getItem("u1");
}
