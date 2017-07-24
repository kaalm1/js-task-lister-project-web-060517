
    function buildList(){
      $('form#add_list').on('submit', function(event){
        let title = $('#list_title').val()
        $('#list_title').val('')
        new List(title)
        removeTaskList()
        addToList(title)
        list = List.all[List.all.length-1]
        showList(list)
        event.preventDefault()
      })
    }

    function addToList(title){
      var option = document.createElement('option')
      var node = document.createTextNode(title);
      option.append(node)
      option.value = title
      $('#select_list').append(option)
    }

    function showList(list){
        let fullList = $('#lists')
        var div =  document.createElement('div')
        div.class = 'list'
        var h2 = document.createElement('h2')
        h2.innerText = list.title
        div.append(h2)
        var button = document.createElement('button')
        button.className = 'destroy-list'
        button.innerText = 'X'
        h2.append(button)
        var ul = document.createElement('ul')
        ul.id = list.id
        div.append(ul)
        fullList.append(div)
    }

    function deleteList(){
      $('body').on('click', '.destroy-list', function(event) {
        id = this.parentElement.nextElementSibling.id
        list = List.find(parseInt(id))[0]
        $(`option[value=${list.title}]`).remove()
        Task.destroyListTasks(list.title)
        List.destroy(parseInt(id))
        this.parentElement.parentElement.remove()
        removeTaskList()
      })
    }
