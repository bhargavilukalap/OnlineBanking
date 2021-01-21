

export class Alert {
    [x: string]: any;


    id: string="";
    type: AlertType = 0;
    message: string="";
    autoClose: boolean=false;
    keepAfterRouteChange: boolean=false;
    fade: boolean=false;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}