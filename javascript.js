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