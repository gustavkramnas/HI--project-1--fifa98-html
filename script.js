function moveBall(e) {
  let ball = document.getElementById("ball");
  ball.style.top = e.clientY + "px";
  ball.style.left = e.clientX + "px";
}
window.addEventListener("mousemove", moveBall);
