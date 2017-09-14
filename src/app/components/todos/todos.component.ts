import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos:any;
	text:String;
	lists:any;
	date:any;
   constructor() { }

  ngOnInit() {
  	this.todos={date: this.date , tasks : []};
  	this.lists=[];
  }

  addTask(){
  	this.todos.tasks.push({
  		text: this.text
  	});
  	this.text = "";
  }

  deleteTask(todoText){
  	for(var i = 0 ; i<this.todos.tasks.length; i++){
  		if(this.todos.tasks[i].text == todoText){
  			this.todos.tasks.splice(i,1);
  		}
  	}
  }

  checkTask(todoText){
  	for(var i = 0;i< this.todos.tasks.length; i++){
  		if(this.todos.tasks[i].text == todoText){
  			this.todos.tasks[i].text = "Done";
  		}
  	}
  }

  isDone(todoText){
  	if(todoText == "Done")
  		return true;
  	return false;
  }

  newList(){
    this.lists.push(this.todos)
    this.todos = {date: this.date, tasks: []}
    this.date = "";
  }

}
