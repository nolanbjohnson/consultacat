$(document).ready( function() {
  var bev = $('#bev img');
/*  var img_width = bev.width();
  var img_height = bev.height();
  var img_scale = 1.5;
  bev.css('width', Math.round(img_width / img_scale));
  bev.css('height', Math.round(img_height / img_scale));*/
  bev.click( function () {
    $(this).fadeTo(20,0.5,'linear', function() {
      $('#meow').fadeTo('fast',1).fadeTo('slow',0);
      $(this).fadeTo('slow',1,'swing');
    });
  });
                  
});
                  