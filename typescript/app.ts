// const arr = ['string', 1]; // either string or number 

function logId(id: string | number | boolean) {
  console.log(id);
  // toLowerCase здесь пока не получится, потому что айди все еще юнион тип

  if (typeof id === 'string') {
    console.log(id.toLowerCase());
    // Теперь открываются методы для строк и чисел
  } else if (typeof id === 'number') {
    console.log(id);
    // А теперь только булианы
  }
}

logId(1);
logId('string');
logId(true);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err); // string
  }
}

// function logObject(obj: { a: number } | { b: number }) {
//   if (Array.isArray(obj)) {
//     console.log(obj);
//   } else {
//     console.log(obj); // string
//   }
// }

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
    
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    // string methods
  } else {
    console.log(a);
   // either string or a num 
  }
}

let one = 1; // type will be 1, not number
// a = 2


