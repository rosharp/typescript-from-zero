// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.printDate = function (date) {
        this.log(date.toString());
    };
    return Logger;
}());
var LoggerWithDate = /** @class */ (function (_super) {
    __extends(LoggerWithDate, _super);
    function LoggerWithDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoggerWithDate.prototype.log = function (message) {
        console.log(message);
    };
    LoggerWithDate.prototype.logWithDate = function (message) {
        this.printDate(new Date());
        this.log(message);
    };
    return LoggerWithDate;
}(Logger));
var l = new LoggerWithDate().logWithDate('Hello!');
l;
