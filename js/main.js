/*
Theme Name: Eyen
Description: Portfolio Site for reme{e}koh
Author: Reme Ekoh
Author URI: http://www.reme.codes
Version: 1.0
*/

/*Checking if it's touch device we disable some functionality due to inconsistency*/
if (Modernizr.touch) {
  $('*').removeClass('animated');
}

/*Document Ready*/
$(document).ready(function(e) {

  //--- DAY OF THE WEEK
  var today = new Date();
  var weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var day = weekdays[today.getDay()];
  $('#happyday').append("Enjoy the rest of this great " + day + ".");

  //--- RESPONSIVE NAVIGATION
  $('.navi-toggle').on('click',function(){
    $('.main-navi').toggleClass('open');
  });

  $('.main-navi .has-dropdown a i').click(function(){
    $(this).parent().parent().find('.dropdown').toggleClass('expanded');
    return false
  });

  //--- INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)
  $(".scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 80
    }, 1000, 'easeInOutQuart');
  });

  //--- Scroll Up
  $('.scroll-up').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000, 'easeInOutQuart');
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#scroll-top').addClass('visible');
    } else {
      $('#scroll-top').removeClass('visible');
    }
  });

  //SCROLL-SPY
  // Cache selectors
  var lastId,
    topMenu = $(".main-navi"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight + 200;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
    });

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
      .parent().removeClass("active")
      .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
  });

});/*/End Document ready*/