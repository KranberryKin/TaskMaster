import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js"
import { saveState } from "../Utils/LocalSotrage.js";

function _drawTasks() {
  for (let i = 0; i < ProxyState.lists.length; i++) {
    let currentList = ProxyState.lists[i]
    let template = ''
    let currentTasks = ProxyState.tasks.filter(t => currentList.id == t.listID)
    currentTasks.forEach(c => template += c.TaskTemplate)
    document.getElementById(currentList.id).innerHTML = template
  }
}




export default class TasksController {
  constructor() {
    ProxyState.on('tasks', _drawTasks)
    ProxyState.on('lists', _drawTasks)
    _drawTasks()

    console.log('Hello From the Tasks Contoller!')
  }
  addTask(listID) {
    event.preventDefault();
    const form = event.target;

    let taskData = {
      title: form.taskTitle.value,
      listID: listID,
    }
    tasksService.addTask(taskData)
    form.reset()
  }
  deleteTask(taskID) {
    if (confirm('Are you sure you want to delete this Task?')) {
      tasksService.deleteTask(taskID)
    }

  }


  validate(taskID){
    let taskcheckbox = document.getElementById('checkbox_' + taskID)
    let taskTitle = document.getElementById('taskTitle_' + taskID)
    let foundtask = ProxyState.tasks.find(t => taskID == t.id)
    if(taskcheckbox.checked){
      taskTitle.classList.add('line-through')
      foundtask.class = 'line-through'
    }else{
      taskTitle.classList.remove('line-through')
      foundtask.class = ' '
    }
    saveState()
  }
}