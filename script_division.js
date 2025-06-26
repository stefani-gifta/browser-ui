$('.division-class').hide();
$('.fa-arrow-left').hide();

// var division = ['Reporter', 'Editor', 'Layouter', 'Illustrator', 'Fotografer'];
var divisionIndexNow;

const urlParams = new URLSearchParams(window.location.search);
const divisionName = urlParams.get('division');
if(divisionName) {
  divisionIndexNow = division.indexOf(divisionName);
  goToDivision(divisionName);
  window.history.replaceState({}, document.title, window.location.pathname);
  $('.search-link').text(window.location.href);
}

function goToDivision(divisionName) {
  $('#all-division').hide();
  $('.division-class').hide();
  $(`#${divisionName.toLowerCase()}`).show();
  checkArrow();
};

$('.fa-arrow-left').on('click', function() {
  divisionIndexNow--;
  goToDivision(division[divisionIndexNow]);
});

$('.fa-arrow-right').on('click', function() {
  if(divisionIndexNow < 0 || divisionIndexNow == null) {
    divisionIndexNow = 0;
  } else {
    divisionIndexNow++;
  }
  goToDivision(division[divisionIndexNow]);
});

function checkArrow() {
  $('.fa-arrow-left').toggle(divisionIndexNow > 0);
  $('.fa-arrow-right').toggle(divisionIndexNow < division.length - 1);
};

$('.bi-house-door-fill').on('click', function() {
  $('#all-division').show();
  $('.division-class').hide();
  divisionIndexNow = -1;
  checkArrow();
});