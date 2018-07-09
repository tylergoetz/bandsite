var elHeight = document.getElementById("bandName").offsetHeight;
var elWidth = document.getElementById("bandName").offsetWidth;
var c = true;
  function changeText(){
    var el = document.getElementById("bandName");
    $("#bandName").fadeOut("slow", function(){
      el.innerHTML = "Band Bio stuff here";
      el.className="diplay-4";
      $("#bandName").fadeIn("slow", function(){
      });
    });


  }
  function restoreText(){
    var el = document.getElementById("bandName");
    $("#bandName").fadeOut("slow", function(){
      el.innerHTML = "NEWCOMER";
      el.className="display-4";
      $("#bandName").fadeIn("slow", function(){
      });
    });
  }

$(document).ready(function(){
  $(window).scroll(function(){
    if(true){
        document.getElementById("row2").scrollIntoView({block: "end", behavior:"instant", inline:"nearest"});
        c = false;
        console.log('fire' + c);
    }

  });
});

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
