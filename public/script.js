$( document ).ready(function() {
	// alert('try');
	$("#alertBtn").click(function(){
		// alert("alert pop up!");
		var name = $('#name-input').val();
		fetch('/send', {
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