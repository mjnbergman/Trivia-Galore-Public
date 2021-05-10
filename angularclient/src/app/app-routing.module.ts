import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  { path: 'questions', component: QuestionListComponent },
  { path: 'results', component: ResultsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
