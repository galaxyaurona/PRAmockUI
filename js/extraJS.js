var count=1;
var countBadge=1;
var silentMode = false;
var columnState = false;
$(document).ready(function(){
	$("#silent-mode-switch").bootstrapSwitch(
		{size:"mini",
		state:silentMode,
		labelText:"Silent mode",
		onSwitchChange:function()
		{silentMode=$(this).bootstrapSwitch('state');console.log(silentMode)
	}});
	//$('.dismiss-notification').on('click',dissmiss);
	$('#generateNoti').click( function() {
		$target = $('#notificationTable');
		$date = '<td>'+new Date().toLocaleDateString("en-us")+'</td>';
		$from = '<td>'+"System"+"</td>";
		$subject ="<td>A Very " +count +" <strong>generic</strong> notification</td>";
		$dismiss ='<td "><button class="dismiss-notification"><span class="glyphicon glyphicon-remove"></span></button></td>';
		$element = "<tr class=\"info\">"+$date+$from+$subject+$dismiss+"</tr>";
		$('#firstRow').after($element);
		countBadge++;
		$('#notification-count').html(countBadge);
		//$('#slidecontent').append("<div>notified</div>")
		if (silentMode == false)
		{
			$('#notification-modal').modal('show');
			$('#notification-modal').find('.modal-header h5').html("System");
			$('#notification-modal').find('.modal-body').html("<p>A Very " + count+ " <strong>generic</strong> notification</p>");
		}
		
		count++;

		updateCountBadge();
		$("#list-head-link").after(
			"<div class=\"list-group-item\">A Very " + count+ " <strong>generic</strong> notification</div>")
	})
	$('#notification-modal').modal({
				keyboard:false,
				show:false,
				backdrop:false
	}); 

	$('#show-calendar').click(function(event) {
		$('#calendar-modal').modal('show');
	});

	 $("#close-calendar").click(function () {
	 	$('#calendar-modal').modal('hide');
    });


	$('#open-map').click(function(event) {
		$('#map-modal').modal('show');
	});

	 $("#close-map").click(function () {
	 	$('#map-modal').modal('hide');
    });

	 $("#slideNoti").click(function () {

	 	if (columnState== false){
	 		$('#notification-column').animate({right:"0"},100);
       		$('body').animate({right:"350"},100);
       		countBadge=0;   		
       		$('#notification-count').html(countBadge);
       	}
       	else
       	{
       		$('#notification-column').animate({right:"-350"},100);
       		$('body').animate({right:"0"},100);
       	}
       	updateCountBadge();
       	columnState=!columnState;
	  });



	$("#close-notification-column").click(function () {
	 		$('#notification-column').animate({right:"-350"},100);
       		$('body').animate({right:"0"},100);
       		columnState=false;
    });


	initialize()

});


function initialize() {
adjustCanvas();
  var mapOptions = {  
  	zoom: 13,
    center: new google.maps.LatLng(40.712292, -74.006460)
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions); // new map option with map tio
  
}


function adjustCanvas()
{
	    var h =  w=$('#map-modal .modal body').height(),
         // Calculate the top offset
      	    w=$('#map-modal .modal body').width();
    $('#map-canvas').width(w) ;
    $('#map-canvas').css('height',h);
}

google.maps.event.addDomListener(window, 'load', initialize);


$(window).resize(function () {
 	adjustCanvas();
}).resize();

$(document).on('shown.bs.modal','#notification-modal',function() {
	setTimeout( function(){
			$('#notification-modal').modal('hide');
			},3500);
})

$(document).on('click','.dismiss-notification',dissmiss)
function dissmiss()
{
	count--;
	$parent=$(this).parents('tr');
	$parent.remove();
}
function updateCountBadge(){
	if (countBadge==0)
	{
		$("#slideNoti").css("background","#6C7A89");
		$("#slideNoti").css("border-color","#6C7A89");
	}
	else
	{
		$("#slideNoti").css("background", "#E74C3C");
		$("#slideNoti").css("border-color","#E74C3C");
	}

};
