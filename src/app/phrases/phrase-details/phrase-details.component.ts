import { Component, OnInit } from '@angular/core';
import {PhraseService} from "../../shared/phrase.service";
import {Phrase} from "../../shared/phrase.class";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase: Phrase;

  constructor(
    private svc: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      const id = +params.id
      console.log(params.id);
      this.svc
        .getPhrase(id)
        .then(res => this.phrase = res);
    })


  }
  goToPhrasesList(): void{
    const phraseID = this.phrase ? this.phrase.id : null;
    this.router.navigate(['/phrases', {id:phraseID}]).then(() => {});
  }

}
``
