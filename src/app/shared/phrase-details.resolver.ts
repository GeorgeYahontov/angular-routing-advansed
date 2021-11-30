import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {PhraseService} from "./phrase.service";
import {Phrase} from "./phrase.class";

@Injectable({
  providedIn: 'root'
})
export class PhraseDetailsResolver implements Resolve<any> {

  constructor(private svc : PhraseService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Phrase | boolean> | Promise<Phrase | boolean>{

    const id = +route.params.id;

    return this.svc.getPhrase(id).then(phrase => {
      if (phrase){
        return phrase;
      }else{
        this.router.navigate(['/phrases']).then();
        return false;
      }
    })


  }
}
