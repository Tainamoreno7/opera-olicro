import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from '../../account/shared/account.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(
    private router: Router,
    private accountService: AccountService
) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
        this.router.navigate(['/']);
    }
}

}
