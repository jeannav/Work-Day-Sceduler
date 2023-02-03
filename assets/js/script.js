var container = $('.container-lg');

$(document).ready(function () {

    $('.saveBtn').on('click', function () {
        var saveInput = $(this).siblings('.description').val();
        var timeBlock = $(this).parent().attr('id');
        localStorage.setItem(timeBlock, JSON.stringify(saveInput));
    })

    $('.description').each(function () {
        var currentTime = dayjs().hour();
        var scheduledBlock = parseInt($(this).parent().attr('id'));

        if (currentTime > scheduledBlock) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }
        else if (currentTime < scheduledBlock) {
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        }
        else {
            $(this).removeClass('future');
            $(this).addClass('present');
            $(this).removeClass('past');
        };
    })

    for(let i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
    }

    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'));

});
