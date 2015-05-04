var count=1;
var countBadge=1;
var silentMode = false;
var columnState = false;
$(document).ready(function(){

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
		count++;
	})
	$('#notification-modal').modal({
				keyboard:false,
				show:false,
				backdrop:false
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

});





$(document).on('shown.bs.modal','#notification-modal',function() {
	setTimeout( function(){
			$('#notification-modal').modal('hide');
			},3500);
})


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
