import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuestionServiceService } from './question-service.service';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultServiceService } from './result-service.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule, 
  ],
  
  // Singleton service declarations
  providers: [QuestionServiceService, ResultServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
