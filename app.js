function range (start, end) {
	if (typeof(start) == "number" && typeof(end) == "number") {
		if (end < start) {
			console.log("Wrong range");
		} else {
		for(var i = start; i <= end; i++) {
			console.log(i);
			}
		}
	} else {
		console.log("Please, type a number");
	}
}

range(1, 6);