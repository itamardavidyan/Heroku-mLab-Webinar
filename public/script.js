$( document ).ready(function() {
	$("#showAlertBtn").click(function(){
		var inputName = $('#name-input').val();
		fetch('/show', {
			method:'POST',
			headers: {
			  'Accept': 'application/json, text/plain, */*',
			  'Content-type':'application/json'
			},
			body:JSON.stringify({name: inputName})
		})
		.then((res) => res.json())
			.then((data) => {
				console.log(data);
				alert(data.msg);
			});
	});
	
	$("#addAlertBtn").click(function(){
		var inputName = $('#name-input').val();
		fetch('/add', {
			method:'POST',
			headers: {
			  'Accept': 'application/json, text/plain, */*',
			  'Content-type':'application/json'
			},
			body:JSON.stringify({name: inputName})
		})
		.then((res) => res.json())
			.then((data) => {
				alert(data.msg);
			});
    });
});