console.log('The Iron Yard Rocks');


$('.moving').click(function() {
  console.log('click');
   $('moving').removeClass('open');
   $(this).addClass('open');
});
