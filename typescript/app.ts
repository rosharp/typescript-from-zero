enum StatusCode {
  SUCCESS = 's',
  IN_PROGRESS = 'p',
  FAILED = 3 
  // Гетерогенный енам
}

const res = {
  message: 'Payment was successful.',
  statusCode: StatusCode.SUCCESS 
};

 

// 'success' - success, 'progress' - in progress, 3 - failed

// if (res.statusCode === StatusCode.SUCCESS) {

// }

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(3);
action(1);
// Даже гетерогенный енам автоматически будет оставаться числовым - но это не большая проблема
// action('p'); - передача даже валидного значения в гетерогенный енам не сработает - он все равно числововй 

// Четкий справочник кодов ответа, физических значений (движения), любой другой параметр в базе, который
// имеет ограниченное число значений

function compute() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = ADMIN * 2,
  DEALER = compute() 
}

// Использование енама в большом числе мест и микросервисов, их надо обновлять повсюду

// function test(x: { ADMIN: number }) {

// }

// Часто ведет себя как объект
// test(Roles);

// Как енамы выглядят в рантайме? 

// Компилятор будет искать все места, где упоминается тим, и будет убирать 
const enum Team {
  First = 1,
  Second = 2
}
