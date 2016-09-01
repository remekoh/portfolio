(function($) {
  "use strict";

  // function availabilityCalendar() {
  //   var calendarHtml = $("#calendar");

  //   if (calendarHtml.length > 0) {
  //     var calendarThead = calendarHtml.find('.calendar-thead');
  //     var calendarTbody = calendarHtml.find('.calendar-tbody');

  //     var calendarTodayDay = calendarHtml.find('.calendar-today .day');
  //     var calendarTodayMonth = calendarHtml.find('.calendar-today .month');
  //     var calendarTodayWeekday = calendarHtml.find('.calendar-today .week-day');

  //     var calendarActiveMonth = calendarHtml.find('.active-month');
  //     var calendarActiveYear = calendarHtml.find('.active-year');
  //     var calendarActiveMonthAndYear = calendarActiveMonth.add(calendarActiveYear);

  //     var calendar = new Object();
  //     calendar = {
  //       currentYear: new Date().getFullYear(),
  //       currentMonth: new Date().getMonth(),
  //       currentWeekDay: new Date().getDay(),
  //       currentDay: new Date().getDate(),
  //       active: {
  //         month: '',
  //         year: ''
  //       },
  //       limitUp: {
  //         month: '',
  //         year: ''
  //       },
  //       limitDown: {
  //         month: '',
  //         year: ''
  //       },
  //       busyDays: '',
  //       weekStart: '',
  //       weekNames: calOptions.calendar.weekNames,
  //       daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  //       monthNames: calOptions.calendar.monthNames,
  //       init: function() {
  //         this.initToday();
  //         this.initWeekNames();
  //         this.createMonthHtml(this.currentYear, this.currentMonth);
  //       },
  //       initToday: function() {
  //         calendarTodayDay.html(this.currentDay);
  //         calendarTodayMonth.html(this.monthNames[this.currentMonth].substring(0, 3));
  //         calendarTodayWeekday.html(this.weekNames[this.currentWeekDay]);
  //       },
  //       initWeekNames: function() {
  //         var html = '<tr>';

  //         for (var i = 0; i < this.weekNames.length; ++i) {
  //           html += '<th>' + this.weekNames[i].substring(0, 3) + '</th>';
  //         }
  //         html += '</tr>';
  //         calendarThead.append(html);
  //       },
  //       getDaysInMonth: function(year, month) {
  //         if ((month == 1) && (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
  //           return 29;
  //         } else {
  //           return this.daysInMonth[month];
  //         }
  //       },
  //       createMonthHtml: function(year, month) {
  //         var html = '';
  //         var monthFirstDay = new Date(year, month, 1).getDay(); // Returns the day of a Date object (from 0-6. 0=Sunday, 1=Monday, etc.)
  //         var monthBusyDays = [];

  //         if (calendar.weekStart.toLowerCase() == 'monday') { // If calendar starts from monday
  //           if (monthFirstDay == 0) { // Make sunday (0) week last day (6)
  //             monthFirstDay = 6;
  //           } else {
  //             monthFirstDay = monthFirstDay - 1;
  //           }
  //         }

  //         calendarActiveMonth.html(this.monthNames[month]);
  //         calendarActiveYear.html(year);

  //         // Get busy days array for active month
  //         for (var i = 0; i < this.busyDays.length; i++) {
  //           if (this.busyDays[i].getFullYear() == year && this.busyDays[i].getMonth() == month) {
  //             monthBusyDays[i] = this.busyDays[i].getDate();
  //           }
  //         }

  //         for (var j = 0; j < 42; j++) {
  //           var className = '';

  //           // Set today class
  //           if (year == this.currentYear && month == this.currentMonth && (j - monthFirstDay + 1) == this.currentDay) {
  //             className += 'current-day';
  //           }

  //           // Set busy day class
  //           if (arrayContains(monthBusyDays, (j - monthFirstDay + 1))) {
  //             className += ' busy-day';
  //           }

  //           // Create month html
  //           if (j % 7 == 0) html += '<tr>';
  //           if ((j < monthFirstDay) || (j >= monthFirstDay + this.getDaysInMonth(year, month))) {
  //             html += '<td class="calendar-other-month"><span></span></td>';
  //           } else {
  //             html += '<td class="calendar-current-month"><span class="' + className + '">' + (j - monthFirstDay + 1) + '</span></td>';
  //           }
  //           if (j % 7 == 6) html += '</tr>';
  //         }

  //         calendarTbody.append(html);
  //       },
  //       nextMonth: function() {
  //         if (!(this.active.year == this.limitUp.year && this.active.month == this.limitUp.month)) {
  //           calendarActiveMonthAndYear.addClass('moveup');
  //           calendarTbody.addClass('moveright');

  //           setTimeout(function() {
  //             calendarActiveMonthAndYear.removeClass('moveup');
  //             calendarActiveMonthAndYear.addClass('movedown');

  //             calendarTbody.removeClass('moveright');
  //             calendarTbody.addClass('moveleft');
  //           }, 300);
  //           setTimeout(function() {
  //             calendarActiveMonthAndYear.removeClass('movedown');
  //             calendarTbody.removeClass('moveleft');
  //           }, 450);

  //           if (this.active.month == 11) {
  //             this.active.month = 0;
  //             this.active.year = this.active.year + 1;
  //           } else {
  //             this.active.month = this.active.month + 1;
  //           }
  //           this.createMonthHtml(this.active.year, this.active.month);
  //         } else {
  //           //console.log('Calendar Limit Up');
  //         }
  //       },
  //       prevMonth: function() {
  //         if (!(this.active.year == this.limitDown.year && this.active.month == this.limitDown.month)) {
  //           calendarActiveMonthAndYear.addClass('moveup');
  //           calendarTbody.addClass('moveright');
  //           setTimeout(function() {
  //             calendarActiveMonthAndYear.removeClass('moveup');
  //             calendarActiveMonthAndYear.addClass('movedown');

  //             calendarTbody.removeClass('moveright');
  //             calendarTbody.addClass('moveleft');
  //           }, 300);
  //           setTimeout(function() {
  //             calendarActiveMonthAndYear.removeClass('movedown');
  //             calendarTbody.removeClass('moveleft');
  //           }, 450);

  //           if (this.active.month == 0) {
  //             this.active.month = 11;
  //             this.active.year = this.active.year - 1;
  //           } else {
  //             this.active.month = this.active.month - 1;
  //           }
  //             this.createMonthHtml(this.active.year, this.active.month);
  //         } else {
  //           //console.log('Calendar Limit Down');
  //         }
  //       }
  //     };

  //     calendar.active.year = calendar.currentYear;
  //     calendar.active.month = calendar.currentMonth;
  //     calendar.limitUp.year = calOptions.calendar.endYear; //calendar.currentYear + 1;
  //     calendar.limitUp.month = calOptions.calendar.endMonth; //calendar.currentMonth;
  //     calendar.limitDown.year = calOptions.calendar.startYear; //calendar.currentYear;
  //     calendar.limitDown.month = calOptions.calendar.startMonth; //calendar.currentMonth;
  //     calendar.weekStart = calOptions.calendar.weekStart;
  //     calendar.busyDays = calOptions.calendar.busyDays;

  //     calendar.init();

  //     calendarHtml.on(clickEventType, '.calendar-prev', function() {
  //       calendar.prevMonth();
  //     });

  //     calendarHtml.on(clickEventType, '.calendar-next', function() {
  //       calendar.nextMonth();
  //     });
  //   }
  // }

  // function arrayContains(array, value) {
  //   for (var i = 0; i < array.length; i++) {
  //     if (array[i] === value) {
  //         return true;
  //     }
  //   }
  //   return false;
  // }

  // $(function() {
  //   availabilityCalendar();
  // });
})(jQuery);
