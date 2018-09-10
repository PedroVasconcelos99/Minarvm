//scripts para o plugin isotope
//**************************************************************************

// init Isotope
var $grid = $('.grid').isotope({
    
  });
  
var filters = {};

$('.filters').on( 'click', 'button', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


//fim dos scripts para o isotope************************************************************



//scripts para o efeito de scroll da home

$('.arrow a').click(
  function(event) {

    event.preventDefault();

    var target = $('#produtos');
  
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000)
  }
);
