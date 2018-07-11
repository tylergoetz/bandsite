var runOnce = true

function changeText() {
  var el = document.getElementById('bandName')
  $('#bandName').fadeOut('slow', function() {
    el.innerHTML = 'Band Bio stuff here'
    el.className = 'diplay-4'
    $('#bandName').fadeIn('slow', function() {})
  })
}

function restoreText() {
  var el = document.getElementById('bandName')
  $('#bandName').fadeOut('slow', function() {
    el.innerHTML = 'NEWCOMER'
    el.className = 'display-4'
    $('#bandName').fadeIn('slow', function() {})
  })
}

$(window).scroll(function() {
  if (runOnce === true) {
    $('html, body').animate({
      scrollTop: $('#row2').offset().top
    }, 850)
    console.log('fired: ' + runOnce)
    runOnce = false
  }
})