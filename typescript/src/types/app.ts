function test(a: number): number | undefined { // без null теста ошибки не будет без unefined
	if (a > 0) {
		return a;
	}
}

type StrOrNumberFunc = (a: number | string) => number;

// let f: StrOrNumberFunc = test;
// test('sdf'); => if strictFunctionTypes is true, there is no error

// test.apply(undefined, [1, 3]); strictBindCallApply checks for proper arguments

// class A {
// 	b: number; => error: strictPropertyInitialization checks for the right initialization
// }

// class A {
// 	b: number;

// 	test() {
// 		return function() {
// 			this.b = 5; error: noImplicitThis checks for the right context 
// 		}
// 	}
// }

// try {

// } catch(e) {
// 	console.log(e.message); useUnknownInCatchVariables checks for the right types in the context
// }

