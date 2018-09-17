$( document ).ready(function() {
	alert('try');

    // ajaxGet();

	// function ajaxGet(){
	// 	$.ajax({
	// 		type : "GET",
	// 		url : '/setTable',
	// 		success: function(forms){
	// 			$.each(forms, function(i, form){
					
	// 				var formRow = '<tr>' +
	// 									'<td>' + form.form_id + '</td>' +
	// 									'<td>' + form.form_name + '</td>' +
	// 									'<td>' + form.num_submissions + '</td>' +
	// 									'<td>' + '<a href="/submit?fieldID=' + form.form_id + '">View</a>' + '</td>' +
	// 									'<td>' + '<a href="/submissions?fieldID=' + form.form_id + '">View</a>' + '</td>' +
	// 							  '</tr>';
					
	// 				$('#formsTable tbody').append(formRow);
					
	// 	        });
				
	// 			$( "#formsTable tbody tr:odd" ).addClass("info");
	// 			$( "#formsTable tbody tr:even" ).addClass("success");
	// 		},
	// 		error : function(e) {
	// 			console.log("ERROR: ", e);
	// 		}
	// 	});	
	// }
});
