import { Component, OnInit } from '@angular/core';
import {PhraseService} from "../../shared/phrase.service";
import {Phrase} from "../../shared/phrase.class";
import {Router} from "@angular/router";

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];

  constructor(private svc: PhraseService, private router: Router) { }

  ngOnInit(): void {
    this.svc
      .getAll()
      .then(res => this.phrases = res);
  }

  onSelect(phrase: Phrase): void {
    //siteurl/phrase/3
    this.router.navigate(['phrase', phrase.id]).then(() => {});
  }

}
