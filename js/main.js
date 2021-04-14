



   $(document).ready(function() {
     $('.portfolio-item .text-popup-link').magnificPopup({ 
        type: 'image',
        gallery:{enabled:true}
     });
  });

$(function(){
     $('.categories a').click(function(e){
          $('.categories ul li').removeClass('active');
          $(this).parent('li').addClass('active');
          var itemSelected = $(this).attr('data-filter');
          $('.portfolio-item').each(function(){
               if (itemSelected == '*'){
                    $(this).removeClass('filtered').removeClass('selected');
                    return;
               } else if($(this).is(itemSelected)){
                    $(this).removeClass('filtered').addClass('selected');
               } else{
                    $(this).removeClass('selected').addClass('filtered');
               }
          });
     });
 });










      