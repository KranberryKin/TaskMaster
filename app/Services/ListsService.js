import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/LocalSotrage.js"



class ListsService {

  constructor() {
    ProxyState.on('lists', saveState)
    console.log('Hello From Lists Service!')
  }

  addList(listData){
    ProxyState.lists = [...ProxyState.lists, new List(listData)]
    ProxyState.lists = ProxyState.lists
    console.log(ProxyState.lists)
  }

  deleteList(listID){
    ProxyState.lists = ProxyState.lists.filter(l => listID !== l.id)
    ProxyState.lists = ProxyState.lists
    // ProxyState.tasks = ProxyState.tasks.filter(t => taskID !== t.id)
    // ProxyState.tasks = ProxyState.tasks
  }
}

export const listsService = new ListsService()