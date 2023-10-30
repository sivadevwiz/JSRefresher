// import "./style.css";
function a() {
  var x = 10;
  function b() {
    x += 1;
    console.log(x);
  }
  // b();
  return b;
}

var x = 20;

a()();
