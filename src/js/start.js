
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });

}


var divs = document.querySelectorAll(".card"), i;
for (i = 0; i < divs.length; ++i) {
  divs[i].style.background = random_bg_color();
}
function random_bg_color() {
  /*  var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;*/
    var color;
        color = Math.floor(Math.random() * 0x1000000); // integer between 0x0 and 0xFFFFFF
        color = color.toString(16); // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color; // prepend #
        return color;
  }
document.body.style.background = random_bg_color();
document.querySelectorAll("")


  var txts = document.querySelectorAll(".card_label"), i;
  for (i = 0; i < txts.length; ++i) {
    txts[i].style.color = invertColor(random_bg_color());
  }

  function invertColor(hexcolor){
    var colorcode=hexcolor;
    colorcode=colorcode.substring(1);
    colorcode=parseInt(colorcode,16);
    colorcode=0xFFFFFF^colorcode;
    colorcode=colorcode.toString(16);
    colorcode = ("000000" + colorcode).slice(-6);
    colorcode = "#" + colorcode;
    return colorcode;
  }
