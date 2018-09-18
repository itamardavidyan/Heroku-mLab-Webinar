$( document ).ready(function() {
	$("#showAlertBtn").click(function(){
		var name = $('#name-input').val();
		fetch('/show', {
			method:'POST',
			headers: {
			  'Accept': 'application/json, text/plain, */*',
			  'Content-type':'application/json'
			},
			body:JSON.stringify({name: name})
		})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			alert(data.msg);
		});
	});
	
	$("#addAlertBtn").click(function(){
		var name = $('#name-input').val();
		fetch('/add', {
			method:'POST',
			headers: {
			  'Accept': 'application/json, text/plain, */*',
			  'Content-type':'application/json'
			},
			body:JSON.stringify({name: name})
		})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			alert('the alert created successfully');
		});
    });
});