require('../less/info.less')
require('../js/main');

//note 기능
$('.note-btns > li').on('click', function () {
    $('.division-contents').removeClass('active');

    var noteBtns = $(this).parent('.note-btns').find('li');
    var noteIndex = $(this).index();

    noteBtns.removeClass('active');
    $(noteBtns[noteIndex]).addClass('active');

    var noteContents = $(this).parents('body').find('.note-contents');
    noteContents.removeClass('active');
    $(noteContents[noteIndex]).addClass('active');

});

//부향률 설명
$('.question').on('mouseover', function () {
    $('#mean').toggle();
});
$('.question').on('mouseout', function () {
    $('#mean').toggle();
});

//division 기능
$('.division-btns > li').on('click', function () {
    $('.note-contents').removeClass('active');

    var divisionBtns = $(this).parent('.division-btns').find('li');
    var divisionIndex = $(this).index();

    divisionBtns.removeClass('active');
    $(divisionBtns[divisionIndex]).addClass('active');

    var divisionContents = $(this).parents('body').find('.division-contents');
    divisionContents.removeClass('active');
    $(divisionContents[divisionIndex]).addClass('active');
});

//계열 기능

$('#type-woody').on('click', function () {

    var it = $(this).parents('.type-name').find('tr td .type-text');
    it.addClass('active');
});
