export interface IRetourConnexion {
     accessToken:	string,
     tokenType:	string
}



export class RetourConnexion implements IRetourConnexion {
    constructor(
        public accessToken:	string,
        public tokenType:	string

    ){}
    
}