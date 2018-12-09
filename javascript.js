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

$('.list').on("click", '.chk', function() {
        var clicked = $(this).parent();
        $(clicked).css({"order": "1", "text-decoration": "line-through", "opacity": ".5"});
});