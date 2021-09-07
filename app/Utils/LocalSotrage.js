import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


export function saveState(){
  localStorage.setItem('Your-Plans', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem('Your-Plans'))
  console.log('load state', data)
  if(data != null){
    ProxyState.lists = data.lists.map(f => new List(f))
    ProxyState.tasks = data.tasks.map(t => new List(t ))
  }
  console.log('loaded state')
}