# TypeScript с нуля - полный курс и паттерны проектирования

## Проблемы JS

* Отсутствие Type Safety
* Динамические типы (не строгая типизация)
* Autocomplete => если есть объект, мы не видим его структуры
* Невозможность рефакторинга => проверки в рамках compile time невозможна, а в TS это будет безопасно
* Невозможно понять структуры данных

### Проблемы JS более явно

```javascript
function addMoney(sum, user) {
    user.money = user.money + summ; // mistype
    return user;
}

addMoney('1', { name: 'Vasya' });
// string and no 'money' property
```

В маленьких приложениях такие проблемы не вызывают трудностей, но в больших - да.

```javascript
//@ts-check
function addMoney(sum, user) {
    user.money = user.money + summ; // mistype
    return user;
}

addMoney('1', { name: 'Vasya' });
```

Воркэраунд в ЖС.

Функция выше преобразуется в это:

```typescript
interface User {
    name: string;
    money: number;
}

function addMoney(sum, user) {
    user.money = user.money + sum; // mistype
    return user;
}

addMoney(1, { name: 'Vasya', money: 2 });
```

Все ошибки выше ТС не даст пропустить еще на уровне компайлера.

### О TypeScript

* Open Source
* Разрабатывается Microsoft
* Создан разработчиком C# => очень похож на него
* Надмножество JS, но не чистое
* Почти все новые фичи работают 

### Популярность JS flavors (State of JS)

ТС - первый. 99% удовлетворенностью его качеством. Другие Clojure, Elm. Сейчас ТС поддерживается в любых фреймворках.

По версии гитхаба, TS по популярности среди репозиториев по всем языкам вообще - на 4-м месте. ЖС - на первом.
