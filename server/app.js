var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Brokes = require('./brokes.js');
var Color = require('./color.js');
var Service = require('./service.js');
var port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969);
server.listen(port, () => console.log('Server running in port ' + port));

// init 
global.now = new Brokes();
global.status = new Color(0, 0); // 1: green, 2:red
global.click = true;
global.database = [];

io.on('connection', function (socket) { //Bắt sự kiện một client kết nối đến server
  socket.on('data', function (data) { //lắng nghe event gui data
  	data = data.toString();
	data = data.split("ETH-USDT: open: ");
	if (data.length > 1) {
		var times = data[0];
		var check = global.now;

		if (check.time != times && check.second == '30') { // neu hien tai khac time va dang o giay 30 thi moi chuyen color
			let status = global.status;
			var count = status.count;
			var newStatus = Service.checkStatus(check, status); // kiem tra mau` hien tai
			// console.log(status);
			// console.log(newStatus);
			if (global.database[count] == null) {

				global.database[count] = {};
				global.database[count]['index'] = count,
				global.database[count]['success'] = 0;
				global.database[count]['fail'] = 0;
				global.database[count]['show'] = 0;
			}
			if (newStatus.color != status.color) {
				// global.click = true;
				global.database[count]['success'] = global.database[count]['success'] + 1;
			} else {
				global.database[count]['fail'] = global.database[count]['fail'] + 1;
			}
			global.database[count]['show']++;
			global.status = newStatus;

			console.log(global.database);
		}

		var present = new Brokes(data);
		global.now = present;	
		
		// if (present.second == '00') { // time to buy
		// 	if (global.status.count == 6) { // bắt đầu mua từ cột mốc này
		// 	}
		// }


		// if (global.status.count == 6 && present.second == '00' && global.click) {
		// 	if (global.status.color == 2) {
		// 		socket.emit('buy', 'buy');
		// 	} else {
		// 		socket.emit('sell', 'buy');
		// 	}

		// 	global.click = false; // just buy one time
		// }

		
		// console.log(global.status);
		// console.log('1: green, 2:red');
	}
  });
 
});


// var string = "52:00ETH-USDT: open: 244.71close: 243.39lowest: 243.03highest: 244.78MA3: 244.17MA10: 243.61";

// var split = string.split("ETH-USDT: open: ");
// var time = split[0].split(":");
// var minutes = time[0];
// var second  = time[1];
// split = split[1].split("close: ");
// var open = parseFloat(split[0]);

// split = split[1].split("lowest: ");
// var close = parseFloat(split[0]);

// split = split[1].split("highest: ");
// var lowest = parseFloat(split[0]);

// split = split[1].split("MA3: ");
// var highest = parseFloat(split[0]);

// split = split[1].split("MA10: ");
// var MA3 = parseFloat(split[0]);
// var MA10 = parseFloat(split[1]);
//  console.log(time % 1 == 0);
//  console.log("time: " + time);
//  console.log("open: " + open);
//  console.log("close: " + close);
//  console.log("lowest: " + lowest);
//  console.log("highest: " + highest);
//  console.log("MA3: " + MA3);
//  console.log("MA10: " + MA10);
 

// socket.on('all client', function (data) { //lắng nghe event 'all client'
  //   io.sockets.emit('news', socket.id + ' send all client: ' + data); // gửi cho tất cả client
  // });
  
  // socket.on('broadcast', function (data) { //lắng nghe event 'broadcast'
  //   socket.broadcast.emit('news',  socket.id + ' send broadcast: ' + data); // gửi event cho tất cả các client từ client hiện tại
  // });
    // socket.emit('news', data);//chiỉ gửi event cho client hiện tại

// var time = split[0].split(":");
		// var minutes = time[0];
		// var second  = time[1];
		// split = split[1].split("close: ");
		// var open = parseFloat(split[0]);

		// split = split[1].split("lowest: ");
		// var close = parseFloat(split[0]);

		// split = split[1].split("highest: ");
		// var lowest = parseFloat(split[0]);

		// split = split[1].split("MA3: ");
		// var highest = parseFloat(split[0]);

		// split = split[1].split("MA10: ");
		// var MA3 = parseFloat(split[0]);
		// var MA10 = parseFloat(split[1]);