
function buildTask(){
  $('form#add_task').on('submit', function(event){
    let listTitle = $('#select_list').val()
    $('#select_list').val('')
    let desc = $('#task_description').val()
    $('#task_description').val('')
    let priority = $('#task_priority').val()
    $('#task_priority').val('')
    list = List.find_by({title: `${listTitle}`})
    task = new Task(desc,priority,list)
    showTask(task)
    event.preventDefault()
  })
}

function showTask(task){
    var ul = $(`ul#${task.list[0].id}`)
    var li = document.createElement('li')
    var p = document.createElement('p')
    p.innerText = task.description
    li.append(p)
    var button = document.createElement('button')
    button.className = 'destroy-task'
    button.innerText = 'X'
    p.append(button)
    li.id = task.id
    ul.append(li)
}


function deleteTask(){
  $('body').on('click', '.destroy-task', function(event) {
    id = this.parentElement.parentElement.id
    Task.destroy(parseInt(id))
    this.parentElement.parentElement.remove()
  })
}
