// List Model
let store = {lists:[], tasks:[], del:[]}

  class List{

    constructor(title){
      this.id = store.lists.length + 1
      this.title = title
      this.tasks = []
      store.lists.push(this)
    }

    static find(id){
      return List.all.filter(function(list){
        return list.id === id
      })
    }

    static find_by(obj){
      let key = Object.keys(obj)[0]
      return List.all.filter(function(list){
        return list[key] === obj[key]
      })
    }

    static destroy(id){
      List.all.forEach(function(list,idx){
        if(id === list.id){
          List.all.splice(idx,1)
        }
      })
    }

  }

  List.all = store.lists
