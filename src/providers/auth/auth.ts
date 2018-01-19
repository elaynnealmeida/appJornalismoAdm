import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthProvider {
  private url: string = 'http://localhost/';

  constructor(public http: Http,
    public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }

  login(parans) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.url + "login.php", parans,
      {
        headers: headers,
        method: "POST"
      }).map((res: Response) => { return res.json(); })
      ;
  }


  userLogado() {
  return this.storage.get('token').then(val => {
      if (val!==null) {
        console.log("val: "+val);
        return val;
      }
      else {
        console.log("val null: "+val);
        return false;
      }
    });
  }

  logout() {
    this.storage.remove('token');
  }

}
