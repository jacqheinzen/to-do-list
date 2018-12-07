$('.add-item').click(function(){
    $('.modal').show(500);
});

$('.exit-modal').click(function() {
    $('.modal').hide(500);
});

$('.button').click(function() {
    event.preventDefault();
    var input = $('.text-input').val();
    var checkbox = $('<input/>').attr({type: 'checkbox', name: 'chk'}).addClass('chk');
    var category = $('.category').children("option:selected").val();
    var newTask = $("<div></div>").text(input).addClass('task').addClass(category).prepend(checkbox);
    $('.list').append(newTask);
    $('.modal').hide(500);
});
//Add sub-task function to sidebar - maybe doesn't appear until you click on a task?
