$(".slides").bind('mousewheel', function (event) {
  disableScroll();

  var currentSlide = $(".slide.active");
  var nextSlide = getNextSlide(event);
  console.log(nextSlide.is($(".slide").first()));

  if (nextSlide.is($(".slide").first()) && !isAtTheBottom()) {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000, "swing",function(){
      enableScroll();
  });
    return;
  }

  $(currentSlide).removeClass("active");
  $(nextSlide).addClass("active");

  scrollToNextSlide(nextSlide);
});

function getNextSlide(event) {
  var nextSlide;
  var currentSlide = $(".slide.active");
  if (event.originalEvent.wheelDelta >= 0) {
    nextSlide = $(currentSlide).prev();
  } else {
    nextSlide = $(currentSlide).next();
  }

  if (nextSlide.length == 0) {
    nextSlide = $(".slide").first();
  }

  return nextSlide;
}

function isAtTheBottom(){
  return $(window).scrollTop() + $(window).height() == $(document).height();
}

function scrollToNextSlide(nextSlide) {
  $("html,body").animate({
    scrollTop: $(nextSlide).offset().top
  }, 1000, "swing", function(){
    enableScroll();
  });
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
