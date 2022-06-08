declare abstract class Controller {
    abstract handle(req: any): void;
    handleWithLogs(req: any): void;
}
declare const c: UserController;
