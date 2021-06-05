import { Login } from "./login";


export class User{
    id?: string;
    nome: string = "";
    sobrenome: string = "";
    pais: string = "";
    whatsapp: string = "";
    login: Login = new Login();
    termo: boolean = false;
    token: string = "";


}
