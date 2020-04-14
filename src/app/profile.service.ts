import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = 'bcd966cb4d92844ab4ca';
  private clientsecret = '8542b7b64137f87d12491ed7df95968cc5017cb0';
  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'Eugeneiregi';
   }
   getProfileInfo() {
     // tslint:disable-next-line: max-line-length
     return this.http.get('https://api.github.com/users/' + this.username + '?client_id =' + this.clientid + '&client_secret =' + this.clientsecret);
     // tslint:disable-next-line: align
    //  .map(res => res.json());
   }

   getProfileRepos() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id =' + this.clientid + '&client_secret =' + this.clientsecret);
   }

}
