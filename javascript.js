$('.add-item').click(function(){
    $('.modal').show(500);
});

$('.exit-modal').click(function() {
    $('.modal').hide(500);
});

$('.button').click(function() {
    event.preventDefault();
    var input = $('.text-input').val();
    var newTask = $("<div></div>").text(input);
    $('.list').append(newTask);
    $('.modal').hide(500);
});

//Add sub-task function to sidebar - maybe doesn't appear until you click on a task?
//add deadline and checkbox to new tasks