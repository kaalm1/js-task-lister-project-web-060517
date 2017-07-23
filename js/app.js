// Initialize


//
// $(function() { // on document ready
//   // listController = new ListsController();
//   // listController.init();
//   // tasksController = new TasksController();
//   // tasksController.init();
// });

$( document ).ready(function() {

    buildList()
    buildTask()
    deleteList()
    removeTaskList()
    deleteTask()

});

function removeTaskList(){
  if (List.all.length === 0){
     store.del.loc = $('#add_task').prev()
     store.del.obj = $('#add_task').detach()
  } else if (List.all.length === 1){
    store.del.loc.after(store.del.obj)
  }
}
