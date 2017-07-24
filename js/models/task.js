// Task Model

  class Task{
    constructor(description,priority, list){
      this.id = store.tasks.length + 1
      this.description = description
      this.priority = priority
      this.list = list
      store.tasks.push(this)
    }

    static destroyListTasks(title){
      for (var i = 0; i < Task.all.length; i++) {
        if(Task.all[i] !==undefined && title === Task.all[i].list[0].title){
          delete Task.all[i]
        }
      }
    
    }

    static find(id){
      return Task.all.filter(function(task){
        return task.id === id
      })
    }

    static destroy(id){
      Task.all.forEach(function(task,idx){
        if(id === task.id){
          delete Task.all[idx]
        }
      })
    }


  }

  Task.all = store.tasks
