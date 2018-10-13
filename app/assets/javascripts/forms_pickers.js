// Bootstrap Datepicker
$(function() {
  var isRtl = $('html').attr('dir') === 'rtl';


});

// Bootstrap Daterangepicker
$(function() {
  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

  $('#daterange-1').daterangepicker({
    opens: (isRtl ? 'left' : 'right'),
    showWeekNumbers: true
  });

  $('#daterange-2').daterangepicker({
    timePicker: true,
    timePickerIncrement: 30,
    locale: {
      format: 'MM/DD/YYYY h:mm A'
    },
    opens: (isRtl ? 'left' : 'right')
  });

  $('#daterange-3').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      opens: (isRtl ? 'left' : 'right')
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');

      alert("You are " + years + " years old.");
    }
  );

  // Button

  var start = moment().subtract(29, 'days');
  var end = moment();

  function cb(start, end) {
    $('#daterange-4').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  $('#daterange-4').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
     'Today': [moment(), moment()],
     'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
     'This Month': [moment().startOf('month'), moment().endOf('month')],
     'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
   },
   opens: (isRtl ? 'left' : 'right')
  }, cb);

  cb(start, end);
});
