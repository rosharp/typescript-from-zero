// never - никогда не будет присвоено

function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  // return '' => error
  while (true) {}
}

function rec(): never {
  return rec(); 
}

const a: void = undefined;
// const a: never = undefined; => error

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      // ...
      break;
    case 'checkout':
      // ...
      break;
      case 'reject':
        // ...
        break;
    default:
      const _: never = action;
      throw new Error('Action not found');
  }
}


function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  generateError('Incorrect type'); // Исчерпывающая проверка
}
