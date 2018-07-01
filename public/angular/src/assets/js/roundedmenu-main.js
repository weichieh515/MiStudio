jQuery(document).ready(function ($) {
  var overlayNav = $('.cd-overlay-nav'),
    overlayContent = $('.cd-overlay-content'),
    navigation = $('.cd-primary-nav'),
    toggleNav = $('.cd-nav-trigger');
	navLink = $('.bt_title');
	smallNavLink = $('.breakdown a');

  //inizialize navigation and content layers
  layerInit();
  $(window).on('resize', function () {
    window.requestAnimationFrame(layerInit);
  });

  //open/close the menu and cover layers
  toggleNav.on('click', function () {
	  toggle();
  });

   navLink.on('click', function () {
	  toggle();
  });

   smallNavLink.on('click', function () {
	  toggle();
  });

  function toggle() {
    if (!toggleNav.hasClass('close-nav')) {
      //it means navigation is not visible yet - open it and animate navigation layer
      toggleNav.addClass('close-nav');

      overlayNav.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1,
      }, 500, 'easeInCubic', function () {
        navigation.addClass('fade-in');
      });
      /*$('body').css('overflow','hidden');*/
    } else {
      //navigation is open - close it and remove navigation layer
      toggleNav.removeClass('close-nav');

      overlayContent.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1,
      }, 500, 'easeInCubic', function () {
        navigation.removeClass('fade-in');

        overlayNav.children('span').velocity({
          translateZ: 0,
          scaleX: 0,
          scaleY: 0,
        }, 0);

        overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
          }, 0, function () {
            overlayContent.removeClass('is-hidden')
          });
        });
        if ($('html').hasClass('no-csstransitions')) {
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
          }, 0, function () {
            overlayContent.removeClass('is-hidden')
          });
        }
      });

      /*$('body').css('overflow','auto');*/
    }
  }

  function layerInit() {
    var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);
    overlayNav.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0,
    }, 50).velocity({
      height: diameterValue + 'px',
      width: diameterValue + 'px',
      top: -(diameterValue / 2) + 'px',
      left: -(diameterValue / 2) + 'px',
    }, 0);

    overlayContent.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0,
    }, 50).velocity({
      height: diameterValue + 'px',
      width: diameterValue + 'px',
      top: -(diameterValue / 2) + 'px',
      left: -(diameterValue / 2) + 'px',
    }, 0);
  }
});
