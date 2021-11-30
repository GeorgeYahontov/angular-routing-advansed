import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userPassword = '123';
  userLogin = 'admin';
  message: string;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessage();

  }

  private setMessage ():void{
    this.message= `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

  login (): void{
    this.message = 'Trying to log in...';

    this.authService.login(this.userLogin, this.userPassword).subscribe(res =>{
      console.log(`Login subscribe result: ${res}`);
      this.setMessage();
      if (this.authService.isLoggedIn){
        if (this.authService.redirectUrl){
          this.router.navigate([this.authService.redirectUrl]).then();
        }
      }
    });
  }
  logout (): void{
    this.authService.logout();
    this.setMessage();
  }
}
