$( document ).ready(function() {
	// alert('try');
	$("#showAlertBtn").click(function(){
		// alert("alert pop up!");
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
		// alert("alert pop up!");
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


// $("#alertBtn").click(function(){	
// 	var name = $('#name-input').val();
// 	$.post("/save",{name: name}, function(data){
//		
// 	});
// });


// 	var name = $('#name-input').val();
// fetch('/send', {
// 	method:'POST',
// 	headers: {
// 	  'Accept': 'application/json, text/plain, */*',
// 	  'Content-type':'application/json'
// 	},
// 	body:JSON.stringify({name: name})
// })
// .then((res) => res.json())
// .then((data) => {
// 	console.log(data);
// 	alert(data.msg);
// });