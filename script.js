$('#about').toggle();

$('.bi-house-door-fill').addClass('active');

$('.fa-question').on('click', function() {
  $('#home').toggle();
  $('#about').toggle();
  $('.bi-house-door-fill').removeClass('active');
  $('.fa-question').addClass('active');
});

$('.bi-house-door-fill').on('click', function() {
  $('#home').toggle();
  $('#about').toggle();
  $('.bi-house-door-fill').addClass('active');
  $('.fa-question').removeClass('active');
});