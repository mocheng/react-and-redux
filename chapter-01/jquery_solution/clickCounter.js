$(function() {
  $('#clickMe').click(function() {
    var clickCounter = $('#clickCount');
    var count = parseInt(clickCounter.text(), 10);
    clickCounter.text(count+1);
  })
})
