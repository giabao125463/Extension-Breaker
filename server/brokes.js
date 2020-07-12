class brokes {
	constructor(data) {
		if (data != null) {
			var times = data[0];
			var time = data[0].split(":");
			var minutes = time[0];
			var second  = time[1];
			var split = data[1].split("close: ");
			var open = parseFloat(split[0]);

			split = split[1].split("lowest: ");
			var close = parseFloat(split[0]);

			split = split[1].split("highest: ");
			var lowest = parseFloat(split[0]);

			split = split[1].split("MA3: ");
			var highest = parseFloat(split[0]);

			split = split[1].split("MA10: ");
			var MA3 = parseFloat(split[0]);
			var MA10 = parseFloat(split[1]);
		}

	    this.time = times;
	    this.minutes = minutes;
	    this.second = second;
	    this.open = open;
	    this.close = close;
	    this.lowest = lowest;
	    this.highest = highest;
	    this.MA3 = MA3;
	    this.MA10 = MA10;
  	}
}

module.exports = brokes