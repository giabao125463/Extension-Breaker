// window.onload = function(e) {
// 	setInterval(function(){
// 		var y = document.getElementsByTagName('div')[42];
// 		console.log(y);
// 	},2000)
// }

// window.onload = function(e) {
// 	setInterval(function(){
// 		var y = document.getElementsByTagName('div')[42];

// 		document.getElementsByTagName('button')[8].click();
// 	}, 30000);
// }

var socket = io.connect('http://localhost:6969');// clent khởi tạo kết nối socket đến server
socket.on('buy', function (data) { // lắng nghe event 'news' được server gửi đến
	document.getElementsByTagName('button')[10].click();
});	

socket.on('sell', function(data) {
	document.getElementsByTagName('button')[11].click();
});


window.onload = function(e) {
	setInterval(function(){
		var data = document.getElementsByTagName('div')[42].textContent;
		console.log(data);
		socket.emit('data',  data);
	}, 1000);
}

// document.querySelector('input[name=order-amount]').value = 10
//buy // document.querySelector('.btn.btn-block.bg-buy.btn-outline-buy.m-b-0.py-0').click() 
//sel // document.querySelector('.btn.btn-block.bg-sell.btn-outline-sell.m-b-0.py-0').click()