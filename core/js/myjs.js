var runOnce = true

function changeText() {
  var el = document.getElementById('bandName')
  $('#bandName').fadeOut('slow', function() {
    el.innerHTML = 'Band Bio stuff here'
    el.className = 'diplay-2'
    $('#bandName').fadeIn('slow', function() {})
  })
}

function restoreText() {
  var el = document.getElementById('bandName')
  $('#bandName').fadeOut('slow', function() {
    el.innerHTML = 'Gunner Bassinger'
    el.className = 'display-3'
    $('#bandName').fadeIn('slow', function() {})
  })
}

$(window).scroll(function() {
  if (runOnce === true) {
    $('html, body').animate({
      scrollTop: $('#music').offset().top
    }, 850)
    console.log('fired: ' + runOnce)
    runOnce = false
  }
})