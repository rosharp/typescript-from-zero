"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "s";
    StatusCode["IN_PROGRESS"] = "p";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
    // Гетерогенный енам
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Payment was successful.',
    statusCode: StatusCode.SUCCESS
};
// 'success' - success, 'progress' - in progress, 3 - failed
// if (res.statusCode === StatusCode.SUCCESS) {
// }
function action(status) {
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
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
    Roles[Roles["DEALER"] = compute()] = "DEALER";
})(Roles || (Roles = {}));
