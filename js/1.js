function changecolor() {
  color = document.getElementById("color").value;
  document.getElementById("heading").style.color = color;
}
function changepostion() {
  color = document.getElementById("pos").value;
  document.getElementById("heading").style.textAlign = color;
}

function changeText() {
  color = document.getElementById("text").value;
  document.getElementById("heading").innerText = color;
}

function changeStyle() {
  style = document.getElementById("style").value;
  document.getElementById("heading").style.fontFamily = style;
}
