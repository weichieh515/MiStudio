

    $(document).ready(function () {
       rotateCard =  function(btn){
              var $card = $(btn).closest('.card-container');
              if($card.hasClass('hover')){
                  $card.removeClass('hover');
              } else {
                  $card.addClass('hover');
              }
          }
    });
