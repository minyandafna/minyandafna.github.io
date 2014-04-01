new cbpScroller(document.getElementById('cbp-so-scroller'));

function parallax() {
  var scrollPosition = $(window).scrollTop();
  // bg image moves at 30% of scrolling speed
//  $('#parallax').css('top',(0 - (scrollPosition * 0.3))+'px' ); 
  // bg image moves at 30% of scrolling speed
  $('.jumbotron').css('background-position-y', (0 - (scrollPosition * 0.3) ) + 'px');
//  $('#contact').css('background-position-y',(570 - (scrollPosition * 0.3) ) + 'px'); 
}

var clndr = {};

$(document).ready(function () {
  $('.navbar-brand').addClass("navbar-light");
  $('.navbar .nav > li > a').addClass("navbar-light");

  $(window).on('scroll', function (e) {
    parallax();

    if ($(this).scrollTop() > 460)
    {   
       $('.navbar-default').css({"background": "#ECEEF0"});
       $('.navbar-brand').removeClass("navbar-light");
       $('.navbar .nav > li > a').removeClass("navbar-light");
    }
    if ($(this).scrollTop() < 460)
    {   
       $('.navbar-default').css({"background": "transparent"});
       $('.navbar-brand').addClass("navbar-light");
       $('.navbar .nav > li > a').addClass("navbar-light");
    }
  });

//  var eventsArrayNew = new Array();
  var eventsArrayNew = [];
  
  $.getJSON('/api/cal.json', null, function (data) {
    $.each(data, function(i){
      eventsArrayNew.push(data[i]);
    });
    console.log(eventsArrayNew);

    clndr = $('#full-clndr').clndr({
      template: $('#full-clndr-template').html(),
      events: eventsArrayNew,
      clickEvents: {
        click: function(target) {
          if(target.events.length) {
            var eventUrl = $.map(target.events, function(val) {
              return val.url;
            });

            $('.modal').modal({
              remote: eventUrl
            });

          }
        }
      },

      targets: {
        nextButton: 'clndr-button-next',
        previousButton: 'clndr-button-prev',
      }

    });

  });

  $(document).on("hidden.bs.modal", function (e) {
    $(e.target).removeData("bs.modal").find(".modal-content").empty();
  });



});
