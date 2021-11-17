import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhraseListComponent} from "./phrase-list/phrase-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import {PhraseHomeComponent} from "./phrase-home/phrase-home.component";


const routes: Routes = [
  {path: 'phrases',
    component: PhraseHomeComponent,
    children:[
      {
        path:'',
        component: PhraseListComponent,
        children: [
          {path: ':id', component: PhraseDetailsComponent},
          {path: '', component: PhraseDetailsComponent }
        ]
      }
    ]},
  //{path: 'phrase/:id', component:PhraseDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
