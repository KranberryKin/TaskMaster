import { generateId } from "../Utils/generateId.js"

export class List{
  constructor(listData){
    this.title = listData.title
    this.id = listData.id || generateId()
    this.listID = listData.listID
    this.color = listData.color
    this.class = listData.class
  }


  get ListTemplate(){
    return /*Html*/ `
    <div class = "card container col-lg-4 my-2" style="background-color:${this.color};">
      <div class = "card-header d-flex justify-content-between  ">
        <h3 class = "text-uppercase"> ${this.title} </h3>
        <button class = "btn btn-danger" onclick="app.listsController.deleteList('${this.id}')">Delete</button>
      </div>
      <div class = "card-body py-3 col-12" id = "${this.id}" height = "50px">
        Nothing Here Yet...
      </div>
      <div class = "row my-2">
        <form class = "d-flex justify-content-between" onsubmit = "app.tasksController.addTask('${this.id}')">
          <label for = "taskTitle">Add Task</label>
          <input type = "text" name = "taskTitle" minlength="3" maxlength="50" required>
          <button class = "btn btn-info" type = "submit">Add Task</button>
        </form>
      </div>
    </div>
    `
  }

  get TaskTemplate(){
    return /*Html*/`
    <div class = "row d-flex justify-contents-between text-center">
      <div class = "col-1">
      <input id = "checkbox_${this.id}" type = "checkbox" onclick = "app.tasksController.validate('${this.id}')">
      </div>
      <div class = "col-8">
      <p id = "taskTitle_${this.id}" class = "${this.class}">${this.title}</p>
      </div>
      <div class = "col-3">
      <button class = "btn btn-danger" onclick = "app.tasksController.deleteTask('${this.id}')">Del.</button>
      </div>
    </div>
    `
  }
}