import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../../models/Question';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit { 
  // questPass is each QUESTION_num that is being passed from question list
  // incomponent we must pass object and input it to desired component

  @Input('questPass') que:Question;

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  removeQuestion(question:Question){

    this.dataService.removeQuestion(question);

  }

}
