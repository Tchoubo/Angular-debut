export interface IConnexion {
    username?: string;
    password?: string
}

export class Connexion implements IConnexion {

    constructor (
        public username?: string,
        public password?: string
    ){

    }
}