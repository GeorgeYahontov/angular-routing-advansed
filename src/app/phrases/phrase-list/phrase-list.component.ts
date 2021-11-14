import { Component, OnInit } from '@angular/core';
import {PhraseService} from "../../shared/phrase.service";
import {Phrase} from "../../shared/phrase.class";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];
  selectedID: number;
  constructor(private svc: PhraseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.selectedID = +params.id;

      this.svc
        .getAll()
        .then(res => this.phrases = res);
    })
  }

  isSelected(phrase:Phrase): boolean{
    return phrase.id === this.selectedID;
  }

  onSelect(phrase: Phrase): void {
    //siteurl/phrase/3
    this.router.navigate(['phrases', phrase.id]).then(() => {});
  }

}
