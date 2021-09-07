import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/LocalSotrage.js"

class TasksService {
  constructor() {
    ProxyState.on('tasks', saveState)
    console.log('Hello from the Tasks Service!')
  }

  addTask(taskData){
    ProxyState.tasks = [...ProxyState.tasks, new List(taskData)]
    ProxyState.tasks = ProxyState.tasks
    console.log(ProxyState.tasks)
    console.log(ProxyState.lists)
  }

  deleteTask(taskID){
  ProxyState.tasks = ProxyState.tasks.filter(t => taskID !== t.id)
  ProxyState.tasks = ProxyState.tasks
  }


}

export const tasksService = new TasksService()