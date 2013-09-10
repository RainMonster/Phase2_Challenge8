$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }

  function modifyText(e) {
    var toDoDOM = e.srcElement.parentNode.parentNode.parentNode;

    if (e.target.nodeName === "BUTTON") {
      console.log("add");
      var todo = $('input.todo').val();
      var addToList = buildTodo(todo);
      $(".todo_list").append(addToList);
      e.stopPropagation();
    } else if (e.srcElement.className === "complete") {
      $(toDoDOM).addClass("complete");
    } else if (e.srcElement.className == "delete") {
      $(toDoDOM).remove();
    } else {
      console.log("unknown click");
    }
  }

  document.getElementById("todo").addEventListener("click", function(e){
    modifyText(e);
  });
});
