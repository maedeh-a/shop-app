$(function () {

  

    $("[toggle-button-group] [toggle-button]").on("click", function (e) {
        console.log("re");
        const $current = $(e.currentTarget)
        const $siblings = $current.siblings('[toggle-button]')

        $siblings.removeClass('active')
        $current.addClass('active')
    })
    $("#rateYo").rateYo({
        rating: 3.6
    });
});