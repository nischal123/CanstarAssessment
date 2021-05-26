import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Question} from '../../models/Question'


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {
 // questions:Object[];
  //after importing question we can be more specific and can use 
  //question interface
  questions:Question[];
  name:string;

  constructor(public dataService:DataService) { 
    this.name="";
  }

  ngOnInit() {
    this.questions=this.dataService.getQuestion();
  }


  addQuestion(question:Question){
    this.dataService.addQuestion(question);
  }

}
