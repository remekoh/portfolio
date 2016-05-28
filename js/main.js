/*
Theme: Eyen
Description: Portfolio Site for reme{e}koh
Author: Reme Ekoh
Author URI: http://www.reme.codes
Version: 1.5
*/

/*--- Day of the Week  ---*/
  var today = new Date();
  var weekdays = new Array("Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday");
  var day = weekdays[today.getDay()];
  $('#happyday').append("Enjoy the rest of your "+day+".");
