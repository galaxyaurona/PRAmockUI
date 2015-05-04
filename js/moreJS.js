var columnState=false;
$(document).ready(function(){




		$("#close-menu-column").click(function () {
		 		$('#menu-column').animate({left:"-350"},100);
	       		$('body').animate({left:"0"},100);
	       		columnState=false;
	    });
	    console.log(columnState);
});

$(document).on('click','#open-menu',toggleMenu);

function toggleMenu()
{
		 	if (columnState==false){
		 		$('#menu-column').animate({left:"0"},100);
	       		$('body').animate({left:"350"},100);		
	       	}
	       	else
	       	{
	       		$('#menu-column').animate({left:"-350"},100);
	       		$('body').animate({left:"0"},100);
	       	}
	       	columnState=!columnState;
			 console.log(columnState);
		  
}