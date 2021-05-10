import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultServiceService } from "../result-service.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  results: Map<string, string>;
  answers: Map<string, string>;
  questions: Map<string, string>;
  resultKeys: string[];
  
  // Subscriptions are kept track off so we can unsubscribe on closing.
  resultsSubscription: Subscription;
  answersSubscription: Subscription;
  questionsSubscription: Subscription;

  /* Register all of the data listeners. The results of the question form, the questions themselves and the sent answers
   * are passed separately. Generates Map objects for the data.
   */
  constructor(private route: ActivatedRoute, private router: Router, public resultService : ResultServiceService) { 
      this.resultsSubscription = resultService.resultsReceiver$.subscribe(
      result => {
        this.results = result;
		this.loadResultKeys();
    });
	this.answersSubscription = resultService.answersReceiver$.subscribe(
      result => {
		  this.answers = result;
		console.log(this.answers);

    });
	this.questionsSubscription = resultService.questionsReceiver$.subscribe(
      result => {
        this.questions = result;
		console.log(this.questions);

    });}

	loadResultKeys(){
		this.resultKeys = Array.from(this.results.keys());
	}

  
  ngOnInit() {
	  
  }
  
  // Unsubscribe to prevent memory leaks.
  ngOnDestroy() {
        this.resultsSubscription.unsubscribe();
		this.answersSubscription.unsubscribe();
		this.questionsSubscription.unsubscribe();
    }

}
