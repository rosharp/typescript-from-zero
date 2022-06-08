function logMiddleware<T>(data: T): T { // T - shorthand for TYPE
	console.log(data);
	return data;
}

const res = logMiddleware<string>('10');

function getSplitedHalf<T>(data: Array<T>): Array<T> {
	const l= data.length / 2;
	return data.splice(0, 1);
}

getSplitedHalf<number>([1, 3, 4]);
