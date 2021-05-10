import { Component, OnInit } from '@angular/core';
import { SimpleQuestion } from '../simple-question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from '../question-service.service';
import { ResultServiceService } from "../result-service.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {

  questions: SimpleQuestion[];
  answers: object;

  constructor(private route: ActivatedRoute, 
      private router: Router, private questionService : QuestionServiceService, public resultService : ResultServiceService) { }

	  // On initialization, fetch the questions from the backend.
  ngOnInit() {
	  this.questionService.listQuestions().subscribe(data => {
		  this.questions = data;
	  });
  }
  
  /* 
   * When submitting the form, post the answers to the backend and receive back the answers. Transfer all data to the data sharing service and 
   * load the results page.
   */
  onSubmit(f) {
	  this.questionService.answerQuestion(f).subscribe(result => {
		  this.answers = result;
		  
		  // Parse the Object dictionaries to Map types to ensure correct typing for keys and values and so we can use standard Map functions later
		  let resultMap = new Map<string, string>();
		  Object.keys(result).forEach(k => {
			  resultMap.set(k, result[k]);
		  });
		  this.sendResults(resultMap);
		  
		  let answerMap = new Map<string, string>();
		  Object.keys(f).forEach(k => {
			  answerMap.set(k, f[k]);
		  });
		  this.sendAnswers(answerMap);
		  
		  let questionMap = new Map<string, string>();
		  this.questions.forEach(q => {
			  questionMap.set(q.id.toString(), q.question);
		  });
		  this.sendQuestions(questionMap);
		  
		  this.router.navigate(['/results']);	
	  })
  }
  /*
   * Methods for sending data to the data sharing service so the result page component can access them.
   */
  sendResults(results){
	  this.resultService.receiveResults(results);
  }
  sendAnswers(answers){
	  this.resultService.receiveAnswers(answers);
  }
  sendQuestions(questions){
	  this.resultService.receiveQuestions(questions);
  }

}
