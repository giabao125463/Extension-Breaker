class service {
	constructor () {
		//
	}

	static checkStatus(check, globalStatus) {
		let status = {};
		if (parseFloat(check.close) > parseFloat(check.open)) { //green
			if (globalStatus.color == 1) { // if now is green then ++
				status.color = 1;
				status.count = globalStatus.count + 1;
			} else { // if now is red than change to green
				status.color = 1;
				status.count = 1;
			}
		} else { //red
			if (globalStatus.color == 2) { // if now is red then ++
				status.color = 2;
				status.count = globalStatus.count + 1;
			} else { // if now is green then change to red
				status.color = 2;
				status.count = 1;
			}
		}
		return status;
	}

	static checkBuyOrSell() {

	}
}

module.exports = service;