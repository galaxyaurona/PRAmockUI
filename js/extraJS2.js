var count=1;
$(document).ready(function(){
	$(document).on('click','.dismiss-notification',{notification:"Dismissed"},dissmiss);
	$('#generateNoti').sortable();
	$('#generateNoti').click( function() {
		$target = $('#notificationTable');
		$target.droppable();
		$element = 	'<li class="list-group-item draggable"><strong>Warning!</strong> Generic notification'+count+'<button class="dismiss-notification right"><span class="glyphicon glyphicon-remove"></span></button></li>';
		count=count+1;
		$('#new-notification').prepend($element);

		$('#new-notification').sortable(
		{
			connectWith: "#pinned-notification"
		});
		$('#pinned-notification').sortable({
			connectWith: "#new-notification"
		});

	})
	function dissmiss(parameter)
	{	
		alert("1"+hello);
		alert("2"+$hello);
		alert(parameter.data.notification)
		$parent=$(this).parent('li');
		$parent.remove();
		$count=count-1;
	}
	$('#new-notification').sortable(
	{
		items: '> li:not(.pin)',
		connectWith: "#pinned-notification"
	});
	$('#pinned-notification').sortable({
		items: '> li:not(.pin)',
		connectWith: "#new-notification"
	});
});

