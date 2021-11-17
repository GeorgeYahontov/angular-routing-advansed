import { Injectable } from '@angular/core';
import {  CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    const value = false;
    console.log(`Auth guard canActivate return ${value}`);
    return value;
  }

}
