<<<<<<< HEAD
$(document).ready(function () {
    var calendar = $('#calendar').fullCalendar({
        editable: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: 'load.php',
        selectable: true,
        selectHelper: true,
        select: function (start, end, allDay) {
            var title = prompt("Enter Event Title");
            if (title) {
                var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
                var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
                $.ajax({
                    url: "insert.php",
                    type: "POST",
                    data: { title: title, start: start, end: end },
                    success: function () {
                        calendar.fullCalendar('refetchEvents');
                        alert("Added Successfully");
                    }
                })
            }
        },
        editable: true,
        eventResize: function (event) {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
            $.ajax({

                type: "POST",
                data: { title: title, start: start, end: end, id: id },
                success: function () {
                    calendar.fullCalendar('refetchEvents');
                    alert('Event Update');
                }
            })
        },
        eventDrop: function (event) {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
            $.ajax({

                type: "POST",
                data: { title: title, start: start, end: end, id: id },
                success: function () {
                    calendar.fullCalendar('refetchEvents');
                    alert("Event Updated");
                }
            });
        },
        eventClick: function (event) {
            if (confirm("Are you sure you want to remove it?")) {
                var id = event.id;
                $.ajax({

                    type: "POST",
                    data: { id: id },
                    success: function () {
                        calendar.fullCalendar('refetchEvents');
                        alert("Event Removed");
                    }
                })
            }
        },
    });
});

=======
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

var Calendar = function () {
  var date = new Date();
  this.currentMonth = date.getMonth();
  this.currentYear = date.getFullYear();

}

Calendar.prototype.nextMonth = function () {
  if (this.currentMonth == 11) {
    this.currentYear++;
    this.currentMonth = 0;
  } else {
    this.currentMonth++;
  }
  this.showCurrentCalendar();
  console.log('ls - ' + JSON.stringify(getLS('taskList')))
}

Calendar.prototype.prevMonth = function () {
  if (this.currentMonth == 0) {
    this.currentYear--;
    this.currentMonth = 11;
  } else {
    this.currentMonth--;
  }
  this.showCurrentCalendar();
}

Calendar.prototype.nextYear = function () {
  this.currentYear++;
  this.showCurrentCalendar();
}

Calendar.prototype.prevYear = function () {
  this.currentYear--;
  this.showCurrentCalendar();
}

Calendar.prototype.showCurrentCalendar = function () {
  // alert(this.currentYear + ' ' +  this.currentMonth)
  this.buildCalendar(this.currentYear, this.currentMonth);
}

Calendar.prototype.buildCalendar = function (year, month) {
  // alert(year, month);
  var date = new Date(); // ISSUE here
  var dateToday = date.getDate(); // ISSUE here
  document.getElementById('current_month_year').innerHTML = MONTHS[month] + ' ' + year;

  var firstDayOfMonth = new Date(year, month, 1).getDay();
  var lastDateofMonth = new Date(year, month + 1, 0).getDate();
  var lastDateofLastMonth;
  if (month === 0) {
    lastDateofLastMonth = new Date(year - 1, 11, 0).getDate()
  } else {
    lastDateofLastMonth = new Date(year, month, 0).getDate();
  }

  var calDatesDiv = document.getElementById('cal_dates');
  var dateSpans = '';

  var spanid = '', spanClass = '';
  var lastMonthDatesCount = lastDateofLastMonth - firstDayOfMonth;
  var checkDate;
  var ls = getLS('taskList');
  var idDate;
  if (lastMonthDatesCount < lastDateofLastMonth) {
    for (var j = lastMonthDatesCount + 1; j <= lastDateofLastMonth; j++) {
      idDate = year + '-' + (month) + '-' + j;
      if (month < 9){
        checkDate = year + '' + '0' + (month) + '' + j;
      }
      console.log('last month ' + checkDate);

      spanid = 'future_' + idDate;
      spanClass = ls[checkDate] === undefined ? 'cal_dates disable-span' : 'cal_dates disable-span has-task'
      dateSpans += '<span id="' + spanid + '" class="' + spanClass + '">' + j + '</span>'
    }
  }

  for (var i = 1; i <= lastDateofMonth; i++) {
    idDate = year + '-' + (month + 1) + '-' + i;
    if (month < 9)
      checkDate = year + '' + '0' + (month + 1) + '' + i;
    spanid = 'future_' + idDate;
    // console.log('date' + checkDate + ' ' + ls[checkDate])
    spanClass = ls[checkDate] === undefined ? "cal_dates" : "cal_dates has-task"; //dateToday <= i ? "cal_dates" : "cal_dates disable-span"
    dateSpans += '<span id="' + spanid + '" class="' + spanClass + '">' + i + '</span>'
  }

  calDatesDiv.innerHTML = dateSpans;
}

window.onload = function () {
  // localStorage.setItem('check', 'hello');
  // localStorage.removeItem('taskList');
  if (localStorage.getItem('taskList') == null) {
    localStorage.setItem('taskList', JSON.stringify({}));
  }
  // alert(localStorage.getItem('taskList').jdjdjdj)
  // alert('lS' + JSON.parse(localStorage.getItem('taskList')).hello);
  var calendar = new Calendar({
    root: 'cal_div',
  });

  // alert('hi')

  calendar.showCurrentCalendar();

  disablePastDates();
  buildTaskList(getLS('taskList'));

  document.getElementById('show_calendar_arrow').onclick = function () {
    console.log('show_calendar_arrow called');
    var newClass = document.getElementById('cal_container').className
    console.log(newClass, newClass.indexOf('hidden-xs'));
    // console.log(newClass.splice(19, 'hidden-xs'.length, 'visible-xs'))
    if (newClass.indexOf('hidden-xs') !== -1) {
      newClass = newClass.replace('hidden-xs', '');
    }

    document.getElementById('cal_container').className = newClass;
    console.log(newClass, newClass.indexOf('hidden-xs'));
  }

  document.getElementById('hide-calendar').onclick = function () {
    var newClass = document.getElementById('cal_container').className
    newClass = newClass.concat('hidden-xs');
    document.getElementById('cal_container').className = newClass;
  }

  document.getElementById('next_month_arrow').onclick = function () {
    // alert('onclick')
    calendar.nextMonth();
  }

  document.getElementById('next_year_arrow').onclick = function () {
    calendar.nextYear();
  }

  document.getElementById('prev_month_arrow').onclick = function () {
    // alert('onclick')
    calendar.prevMonth();
  }

  document.getElementById('prev_year_arrow').onclick = function () {
    calendar.prevYear();
  }

  document.getElementById('cal_dates').onclick = function (e) {
    var elemIdDate = e.target.id.split('_')[1].split('-');
    var dateT = new Date();
    console.log('has-task ' + e.target.className.indexOf('has-task'));

    console.log('cal-dte ' + elemIdDate[0] >= dateT.getFullYear() && elemIdDate[1] == dateT.getMonth() && elemIdDate[2] >= dateT.getDate());
    if(e.target.className.indexOf('has-task') !== -1) {
      editTask(e.target.id, getLS('taskList'));
      return true;
    } else if (( elemIdDate[0] >= dateT.getFullYear() && elemIdDate[1] > dateT.getMonth() ) ||
      (elemIdDate[0] >= dateT.getFullYear() && elemIdDate[1] == dateT.getMonth() && elemIdDate[2] >= dateT.getDate())) {
      console.log('in last ' + e.target.id)
      $('#task_modal').modal('show');
      var taskDate = e.target.id.split('_')[1];
      var dateUpdate = taskDate.split('-');
      console.log('dateUpdate ' + typeof dateUpdate[1])
      // dateUpdate[1] = ;
      if(+dateUpdate[1] < 9) {
        // dateUpdate[1] = '0' + (+dateUpdate[1] + 1)
        dateUpdate[1] = '0' + dateUpdate[1]
      }
      taskDate = dateUpdate.join('-');
      console.log(taskDate);
      document.getElementById('task-title').value = '';
      document.getElementById('task-date').value = taskDate;
      return true;
    } else {
      return false;
    }

  }

  document.getElementById('save_task').onclick = function () {
    var title = document.getElementById('task-title').value;
    var date = document.getElementById('task-date').value;
    // alert(title.value + ' ' + date.value)
    saveTask(title, date);
    calendar.showCurrentCalendar();
  }

  document.getElementById('list-grp').onclick = function (e) {
    var ls = getLS('taskList');
    if (e.target.id.indexOf('edit') !== -1) {
      editTask(e.target.id, ls)

      // $('#task_modal').modal('show');
      // var taskDate = e.target.id.split('_')[1];
      // var taskToEdit = taskDate.split('-').join('');
      // console.log('task to edit', e.target.id)
      // console.log('ls', JSON.stringify(ls))
      // document.getElementById('task-title').value = ls[taskToEdit].title;
      // document.getElementById('task-date').value = taskDate;
      // document.getElementById('task-date').disabled= true;
    } else {
      var taskDate = e.target.id.split('_')[1];
      var taskToDel = taskDate.split('-').join('');
      delete ls[taskToDel];
      setLS('taskList', ls);
      buildTaskList(getLS('taskList'));
    }
    calendar.showCurrentCalendar();
  }

}

function editTask(id, ls) {
  console.log('edittask' + JSON.stringify(ls));
  $('#task_modal').modal('show');
  var taskDate = id.split('_')[1];
  var taskToEdit = taskDate.split('-');
  if(taskToEdit[1] < 10 && taskToEdit[1].length < 2) {
    taskToEdit[1] = '0' + taskToEdit[1]
  } 
  taskToEdit = taskToEdit.join('');
  console.log('task to edit', id)
  console.log('ls', taskToEdit)
  console.log('ls', ls[taskToEdit])
  document.getElementById('task-title').value = ls[taskToEdit].title;
  document.getElementById('task-date').value = ls[taskToEdit].date;
  document.getElementById('task-date').disabled= true;
}

function saveTask(title, date) {
  var obj = {
    title: title,
    date: date
  }

  var dateJoin = date.split('-').join('');
  // console.log(dateArr.join(''));
  console.log(JSON.stringify(obj));
  var taskList = getLS('taskList');
  console.log(JSON.stringify(taskList));
  taskList[dateJoin] = obj;
  // if(taskList.hasOwnProperty(dateArr[0])) {
  //   if(taskList[dateArr[0]].hasOwnProperty[dateArr[1]]) {
  //     taskList[dateArr[0]][dateArr[1]][dateArr[2]] = obj; // Check for undefined.
  //   }  
  // } else {
  //   taskList[dateArr[0]] = {}
  // }
  // alert(JSON.stringify(taskList[dateArr[0]][dateArr[1]][dateArr[2]]));
  setLS('taskList', taskList);
  // alert('saved')
  document.getElementById('task-title').value = '';
  document.getElementById('task-date').value = '';
  $('#task_modal').modal('hide');
  // console.log(Object.keys(taskList));

  buildTaskList(getLS('taskList'));
}


function disablePastDates() {
  var input = document.getElementById("task-date");
  var today = new Date();
  // Set month and day to string to add leading 0
  var day = new String(today.getDate());
  var mon = new String(today.getMonth() + 1); //January is 0!
  var yr = today.getFullYear();

  if (day.length < 2) {
    day = "0" + day;
  }
  if (mon.length < 2) {
    mon = "0" + mon;
  }

  var date = new String(yr + '-' + mon + '-' + day);

  input.disabled = false;
  input.setAttribute('min', date);
}


function buildTaskList(taskList) {
  var ul = document.getElementById('list-grp');
  var child = '';
  for (key in taskList) {
    child += '<li id="' + taskList[key].date + '" class="list-group-item">'
      + taskList[key].date + ' ' + taskList[key].title
      + '<span id="del_' + taskList[key].date + '"class="badge">&times;</span> \
                <span id="edit_' + taskList[key].date + '"class="badge">Edit</span> \
              </li>'
  }

  ul.innerHTML = child;

}

function getLS(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
