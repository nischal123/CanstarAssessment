import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
    this.questions=[
      
    ]

  }

  getQuestion(){
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question); //push to top
    // this.questions.push(question);
  }

  removeQuestion(question:Question){
    for(let i=0;i<this.questions.length;i++){
      if(question==this.questions[i]){
        this.questions.splice(i,1);   //remove certain element , and mergearray
      }
    }
  }

}
