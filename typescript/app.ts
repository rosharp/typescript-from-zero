// нужен, когда хотим типизировать, но не знаем, что за переменная

// никогда в таких случаях нельзя использовать any


let input: unknown;

input = 3;
input = ['sf', 'sdf'];

let res: any = input; // нельзя положить ничего другого 

function run(i: unknown) {
  if (typeof i == 'number') {
    i++;
  } else {
    i // сужения типа не будет - все еще анноун
  }
}

run(input);

async function getData() {
 try {
   await fetch('');
 } catch (error) {
   if (error instanceof Error) {
     console.log(error.message);
   }
 } 
}

async function getDataForce() {
  try {
    await fetch('');  
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
    }
  }

type U1 = unknown | number; // unknown - самый широкий тип 

type I1 = unknown & string; // string 