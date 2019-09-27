import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public desc:string,
    public date:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos =[
    new Todo(1,'ok', new Date()),
    new Todo(2, 'kl', new Date())
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
