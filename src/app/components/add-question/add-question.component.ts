import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Question} from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question:string;
  answer:string;
  //emiting this output data fromthis component
  @Output() questionAdded=new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {


  }

  addQuestion(){
    //emit question out from this component
    this.questionAdded.emit({question: this.question,answer:this.answer,hide:true});
  }

}
