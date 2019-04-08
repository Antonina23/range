function range (start, end) {
	if (typeof(start) == "number" && typeof(end) == "number") {
		for(var i = start; i <= end; i++) {
			console.log(i);
		}
	} else {
		console.log("Please, type a number");
	}
}

range(1, 6);