import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['login']).then();
      return false;
    }
  }
}
