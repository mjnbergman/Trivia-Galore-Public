import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

/*
 * The data sharing service for sharing data between the question list and result page components.
 * Singleton instance used app-wide.
 */
export class ResultServiceService {
	
  // Use behaviorsubjects instead of regular subjects so when polling the receivers the previous result is returned.
  public questionResultSource = new BehaviorSubject<Map<string, string>>(new Map<string, string>([["0", "no results"]])); 
  public answerSource = new BehaviorSubject<Map<string, string>>(new Map<string, string>([["0", "no answers"]])); 
  public questionSource = new BehaviorSubject<Map<string, string>>(new Map<string, string>([["0", "no questions"]])); 
  
  resultsReceiver$ = this.questionResultSource.asObservable();
  answersReceiver$ = this.answerSource.asObservable();
  questionsReceiver$ = this.questionSource.asObservable();
  
  constructor() { }
  
  receiveResults(results : Map<string, string> ){
	  this.questionResultSource.next(results);
  }
  receiveAnswers(answers : Map<string, string> ){
	  this.answerSource.next(answers);
  }
  receiveQuestions(questions : Map<string, string> ){
	  this.questionSource.next(questions);
  }

}
