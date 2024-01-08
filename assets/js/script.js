$(function () {

  

    $("[toggle-button-group] [toggle-button]").on("click", function (e) {
        const $current = $(e.currentTarget)
        const $siblings = $current.parents("[toggle-button-group]").find('[toggle-button]')

        $siblings.removeClass('active')
        $current.addClass('active')
    })
    $("#rateYo").length > 0 && $("#rateYo").rateYo({
        starWidth: "30px",
        rating: 3.6,
        normalFill: "#fff",
        starSvg: `<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="vuesax/linear/star">
            <g id="star">
            <path id="Vector" d="M20.5949 5.4112L23.2349 10.8379C23.5949 11.5933 24.5549 12.3179 25.3649 12.4566L30.1499 13.2737C33.2099 13.7979 33.9299 16.0795 31.7249 18.3304L28.0049 22.1537C27.3749 22.8012 27.0299 24.0499 27.2249 24.9441L28.2899 29.677C29.1299 33.4233 27.1949 34.8724 23.9699 32.9145L19.4849 30.1858C18.6749 29.6924 17.3399 29.6924 16.5149 30.1858L12.0299 32.9145C8.81986 34.8724 6.86986 33.4079 7.70986 29.677L8.77486 24.9441C8.96986 24.0499 8.62486 22.8012 7.99486 22.1537L4.27486 18.3304C2.08486 16.0795 2.78986 13.7979 5.84986 13.2737L10.6349 12.4566C11.4299 12.3179 12.3899 11.5933 12.7499 10.8379L15.3899 5.4112C16.8299 2.46661 19.1699 2.46661 20.5949 5.4112Z" stroke="#FBBC05" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
            </svg>

            `,
        onSet: function(value, instance){
            $(this).next("span.rateyo-result").text(value)
        },
    });
    $(".container-radio + span").on('click', function(e){
        $(e.currentTarget).parent().find('label').click()
    })

});