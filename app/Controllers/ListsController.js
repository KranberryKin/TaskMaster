import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalSotrage.js";


function _draw() {
  let lists = ProxyState.lists;
  let listTemplate = ''
  lists.forEach(l => listTemplate += l.ListTemplate)
  document.getElementById("app").innerHTML = listTemplate
}
export default class ListsController {

  constructor() {
    ProxyState.on('lists', _draw)
    _draw()
    loadState()
    saveState()
    console.log('Hello From Lists Controller!')
  }


  addList() {
    event.preventDefault();
    const form = event.target

    let listData = {
      title: form.listTitle.value,
      color: form.listColor.value
    }

    listsService.addList(listData);
    form.reset();
  }

  deleteList(listID){
    if(confirm('Are you sure you want to delete this List?')){
      listsService.deleteList(listID)
    }
  }
}