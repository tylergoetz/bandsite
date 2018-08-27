var mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {  //if mobile client
  mobile = true;
  console.log('mobile detected');
 }
$('#bandName').css({opacity: 1});
if(!mobile){
  $('#bandName').css({opacity: 1});
  function changeText() {
    var el = document.getElementById('bandName')
    $('#bandName').animate({opacity: 1});
  }
  
  function restoreText() {
    var el = document.getElementById('bandName')
    $('#bandName').animate({opacity: 0});
  }
}
else{
}
$('#contact').click(function(){
  window.location.href = 'mailto:gunner.basinger@gmail.com?subject=Hello there&body=This is the body';
})

/*
$(window).scroll(function() {
  if (runOnce === true) {
    $('html, body').animate({
      scrollTop: $('#music').offset().top
    }, 850)
    console.log('fired: ' + runOnce)
    runOnce = false
  }
})
*/

