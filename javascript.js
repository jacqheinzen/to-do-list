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
    var remove = $("<input/>").attr({type: 'button', id: 'remove', value: "Remove"}).addClass('remove');
    var category = $('.category').children("option:selected").val();
    var newTask = $("<div></div>").text(input).addClass('task').addClass(category).prepend(checkbox).append(remove);
    $('.list').append(newTask);
    $('.modal').hide(500);
});

$('.list').on("click", '.chk', function() {
    var clicked = $(this).parent();
    $(clicked).css({"order": "1", "text-decoration": "line-through", "opacity": ".7"});
});

$('.list').on("click", '.remove', function() {
    var clicked = $(this).parent();
    $(clicked).css({"display": "none"});
});

//add delete/edit functionality