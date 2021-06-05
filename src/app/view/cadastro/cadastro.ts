import { Login } from "@app/shared/model/login";

export interface Cadastro{
     id: number,
     nome: string,
     sobrenome: string,
     pais: string,
     whatsapp: string,
     login: Login,
     confirmeSenha:string,
     termos: boolean

}
