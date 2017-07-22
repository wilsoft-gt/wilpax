window.onscroll = function () {parallax()};
function parallax() {
  var scrolling = this.pageYOffset;
  var capas = document.getElementsByClassName("parallax");
  for (var i = 0; i < capas.length; i++) {
    var move = capas[i].getAttribute("move-top");
    var capa = capas[i];
    var yPosition = -(scrolling * move / 100);
    capa.setAttribute("style", "transform: translate(0px, " + yPosition + "px)");
  }
}
