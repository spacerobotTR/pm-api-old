$(function(){$("#tickets-list").dataTable({columnDefs:[{targets:[6],orderable:!0,searchable:!0}],createdRow:function(t,a){$("td",t).addClass("py-3").eq(1).css("min-width","300px");var o={1:"btn-danger",2:"btn-success",3:"btn-warning"};priorityDropdown.find(".dropdown-toggle").addClass(o[a[4]]).text(priorityDropdown.find('[data-priority="'+a[4]+'"]').addClass("active").text()),$("td",t).eq(4).html("").append(priorityDropdown),statusDropdown.find(".dropdown-toggle").text(statusDropdown.find('[data-status="'+a[5]+'"]').addClass("active").text()),$("td",t).eq(5).html("").append(statusDropdown),$("td",t).eq(6).html("").append('<a href="javascript:void(0)" class="btn btn-default btn-xs icon-btn md-btn-flat product-tooltip" title="Edit"><i class="ion ion-md-create"></i></a>&nbsp;<a href="javascript:void(0)" class="btn btn-default btn-xs icon-btn md-btn-flat product-tooltip" title="Remove"><i class="ion ion-md-close"></i></a>')}}),$("#tickets-list-created").daterangepicker({ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},opens:"rtl"===$("body").attr("dir")||"rtl"===$("html").attr("dir")?"right":"left"}),$("body").tooltip({selector:".product-tooltip"})});