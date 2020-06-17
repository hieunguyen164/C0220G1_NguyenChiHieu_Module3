function move() {
  let elem = document.getElementById("myBar");
  let width = 0;
  let id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.getElementById("myP").className = "w3-text-green w3-animate-opacity";
      document.getElementById("myP").innerHTML = "Successfully uploaded 10 photos!";
    } else {
      width++;
      elem.style.width = width + '%';
      let num = width * 1 / 10;
      num = num.toFixed(0)
      document.getElementById("demo").innerHTML = num;
    }
  }
}
