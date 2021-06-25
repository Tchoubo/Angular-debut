export interface IInscription {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    password?: string;
    rolename?: string
}

export class Inscription implements IInscription {

    constructor (
        public firstname?: string,
        public lastname?: string,
        public email?: string,
        public phone?: string,
        public password?: string,
        public rolename?: string
    ){

    }
}