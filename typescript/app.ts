// null - явно заданный неопределенный объект
// undefined - не содержит какого-то свойства, незаданный

const n: null = null; 
const n1: any = null;
// const n2: number = null; => error
// const n3: string = null; => error
// const n4: boolean = null; => error
// const n3: undefined = null; => error

// strictNullCheck fron tsconfig

interface User {
  name: string
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: 'Vasya'
    } as User
  }
}

const user = getUser();

if (user) {
  const n55 = user.name;
}
