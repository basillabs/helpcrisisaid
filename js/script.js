$(function() {
  var documentHeight = $(document).height();
  var colorTransitionBegin = Math.ceil(documentHeight / 4);
  var maxDifference = Math.ceil(documentHeight / 3);
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var opacity = 1 - Math.max((scrollTop - colorTransitionBegin) / maxDifference, 0);
    $('#bg').css('opacity', opacity);
  });

  var donationLink = $('#donate-button').attr('href');
  $('#donate-button').click(function(e) {
    e.preventDefault();
    if (!$('#donation').attr('src')) {
      $('#donation').attr('src', donationLink);
    }
    $('#donation').addClass('donation--visible')
    $('body').addClass('overflow-hidden');
  });

  $('#scrim').click(function() {
    $('#donation').removeClass('donation--visible');
    $('body').removeClass('overflow-hidden');
  });
});
