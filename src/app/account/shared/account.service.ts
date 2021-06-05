import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/model/user'
import { Login } from '@app/shared/model/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  public isLogging$: Subject<boolean> = new Subject();
  public isLogging: boolean = false;

  constructor(private router: Router,
    private http: HttpClient
) {
  //o valor inicial do BehaviorSubject vem do local storage
    this.userSubject = new BehaviorSubject<User>(JSON.parse(''+ window.localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
}

public get userValue(): User{
  return this.userSubject.value;
}

login(email:string, senha:string) {
  {{debugger}}

  var login = new Login();
  login.email = email;
  login.senha = senha;

  return this.http.post<User>(`${environment.apiUrl}Login/Authentication`, login)
      .pipe(map(user => {
        debugger
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
      }));
}

logout() {
  // remove o usuário do armazenamento local e define o usuário atual como nulo
  window.localStorage.removeItem('user');
  this.userSubject.next;
  this.router.navigate(['/']);
}

register(user: any) {
  var userRegister = new User();

  userRegister.login.email = user.email;
  userRegister.login.senha = user.senha;
  userRegister.nome = user.nome;
  userRegister.sobrenome = user.sobrenome;
  userRegister.pais = user.pais;
  userRegister.termo = user.termo;
  userRegister.whatsapp = user.whatsapp;

  {{debugger}}
  return this.http.post(`${environment.apiUrl}user/register`, userRegister);
}

getAll() {
  return this.http.get<User[]>(`${environment.apiUrl}users`);
}

getById(id: number) {
  return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
}

// update(id:number, params: any) {
//   return this.http.put(`${environment.apiUrl}/users/${id}`, params)
//       .pipe(map(x => {
//           // update stored user if the logged in user updated their own record
//           if (id == this.userValue.id) {
//               // update local storage
//               const user = { ...this.userValue, ...params };
//               localStorage.setItem('user', JSON.stringify(user));

//               // publish updated user to subscribers
//               this.userSubject.next(user);
//           }
//           return x;
//       }));
// }

// delete(id:number) {
//   return this.http.delete(`${environment.apiUrl}/users/${id}`)
//       .pipe(map(x => {
//           // auto logout if the logged in user deleted their own record
//           if (id == this.userValue.id) {
//               this.logout();
//           }
//           return x;
//       }));
}


// login( user:any){
    //   return new Promise((resolver) => {
    //     window.localStorage.setItem('token', 'meu-token');
    //     resolver(true);
    //   });

    // }
    // logout(){

    // window.localStorage.removeItem('token');

    // }
