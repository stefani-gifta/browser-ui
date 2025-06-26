// noise
$('body').append(`
  <!-- from https://grainy-gradients.vercel.app/ -->
  <svg id="noise"
    viewBox='0 0 100 100'
    preserveAspectRatio='none'
    xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence 
        type='fractalNoise' 
        baseFrequency='10' 
        numOctaves='1' 
        stitchTiles='stitch'/>
    </filter>
    <rect width='100vw' height='100vh' opacity='0.25' filter='url(#noiseFilter)'/>
  </svg>
`); // viewbox 100 = 1 unit is 1% of screen

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
  location.href = `divisions.html?division=${divisionName}`;
});

// page titles (tabs)
$('.page-title').each(function(index, element) {
  if (index < $('.page-title').length-1) {
    $(element).addClass('inactive-tab');
  }
});

// link in search bar
$('.search-link').text(window.location.href);
