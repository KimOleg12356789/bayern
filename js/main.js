$(document).ready(function(){

 $('.about_s_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });

 $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})


          $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.fag_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});  






                    $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.fag_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion2'), false);
}); 






                              $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.fag_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion3'), false);
}); 



  var today = new Date();
var day,date,month,year,hour,minutes,seconds,hourDeg,minuteDeg,secondDeg;


// switch cases to change numbers to days or months
function fixDate(){
  switch(day){
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }

  switch(month){
    case 0:
      month = 'Jan';
      break;
    case 1:
      month = 'Feb';
      break;
    case 2:
      month = 'Mar';
      break;
    case 3:
      month = 'Apr';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'Jun';
      break;
    case 6:
      month = 'Jul';
      break;
    case 7:
      month = 'Aug';
      break;
    case 8:
      month = 'Sep';
      break;
    case 9:
      month = 'Oct';
      break;
    case 10:
      month = 'Nov';
      break;
    case 11:
      month = 'Dec';
      break;
  }
}



// builder functions
function setSeconds(){
  seconds = today.getSeconds();
  secondDeg = (seconds/60)*360;

  $('#clock-widget svg #seconds').css({
    'transform':'rotate('+secondDeg+'deg)'
  });
  if(seconds<10){
    seconds='0'+seconds.toString();
  }

  if(seconds === 0 || seconds === '0' || seconds === '00'){
    setMinutes();
  }

  $('#clock .time .seconds').text(seconds);
}


function setMinutes(){
  minutes = today.getMinutes();
  minuteDeg = (minutes/60)*360;

  $('#clock-widget svg #minutes').css({
    'transform':'rotate('+minuteDeg+'deg)'
  });
  if(minutes<10){
    minutes='0'+minutes.toString();
  }

  if(minutes === 0 || minutes === '0' || minutes === '00'){
    setHours();
  }

  $('#clock .time .minutes').text(minutes);
}


function setHours(){
  hour = today.getHours();
  hourDeg = (hour/24)*360;

  $('#clock-widget svg #hours').css({
    'transform':'rotate('+hourDeg+'deg)'
  });

  if(hour<10){
    hour='0'+hour.toString();
  }

  if(hours === 0 || hours === '0' || hours === '00'){
    setDate();
  }

  $('#clock .time .hours').text(hour);
}


function setDate(){
  day = today.getDay();
  date = today.getDate();
  month = today.getMonth();
  year = today.getFullYear();
  fixDate();
  $('#clock .date').text(date+' '+month+' '+year+', '+day);
}


function buildClock(){
  setHours();
  setMinutes();
  setSeconds();
  setDate();
}



// intervals to update as time changes
var minuteInt = 60000;
var hourInt = 3600000;
var dayInt = 86400000;

// build the clock
buildClock();

var ms = today.getMilliseconds();
setTimeout(function(){
  today = new Date();
  setSeconds();
  setInterval(function(){
    today = new Date();
    setSeconds();
  }, 1000);
}, 1000-ms);   






jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});                     


});





const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});








