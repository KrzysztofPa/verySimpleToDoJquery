$("ul#todoList li:even").css("background-color", "#44adac");
$("ul#todoList li:odd").css("background-color", "#105251");

$("#add").click(function() {
  $("#todoList").append(
    `<li class="task"> ${$(
      "#newTask"
    ).val()} <button class="del"> del </button> </li>`
  );
  $("#newTask").val("");
});

$(document).on("click", ".del", function() {
  $(this)
    .parent(".task")
    .remove();
});
