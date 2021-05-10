import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SimpleQuestion } from './simple-question';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  
  /*
   * REST calls to the backend
   */
  public listQuestions(): Observable<SimpleQuestion[]> {
	  return this.http.get<SimpleQuestion[]>("http://localhost:8092/questions?nr=5");
  }
  
  public answerQuestion(answers: Map<number, string>) {
	  return this.http.post<Map<number, string>>("http://localhost:8092/checkanswer", answers);
  }

}
