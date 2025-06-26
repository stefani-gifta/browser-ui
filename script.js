// navigation menu
$('#about').hide();
$('.bi-house-door-fill').addClass('active');
$('.fa-question').on('click', function() {
  $('#home').hide();
  $('#about').show();
  $('.bi-house-door-fill').removeClass('active');
  $('.fa-question').addClass('active');
});
$('.bi-house-door-fill').on('click', function() {
  $('#home').show();
  $('#about').hide();
  $('.bi-house-door-fill').addClass('active');
  $('.fa-question').removeClass('active');
});

// divisions (about page)
var division = ['Reporter', 'Editor', 'Layouter', 'Illustrator', 'Fotografer'];
for(let i = 0; i < division.length; i++) {
  let cloned = $('.division-link').first().clone();
  cloned.find('span').text(division[i]);
  $('.divisions').append(cloned);
};
$('.division-link').first().remove();
$('.division-link').on('click', function() {
  let divisionName = $(this).text().trim();
  location.href = `/divisions.html?division=${divisionName}`;
});