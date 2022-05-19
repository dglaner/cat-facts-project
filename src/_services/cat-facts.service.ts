import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  URL = 'https://meowfacts.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getRandomCatFact(): Observable<any> {
    return this.http.get(this.URL).pipe(map((res: any) => res.data[0]));
  }
}
