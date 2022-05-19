import {Injectable} from "@angular/core";
import {LoginDataInterface} from "../_interfaces/login-data.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login = 'admin';
  password = 'qwerty';

  constructor() { }

  loginUser(loginData: LoginDataInterface) : boolean {
    return loginData.login === this.login && loginData.password === this.password;
  }
}
