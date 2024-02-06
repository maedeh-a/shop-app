$('.fileAdd').on('click touch', function (e) {
    $(this).toggleClass('open');
    $('.tabbar').toggleClass('open');
});

$('.btn-show-menu').on('click touch', function (e) {
    var base_url = window.location.protocol + "//" + window.location.host + "/menu";
    window.location.replace(base_url);
});

$('.excel').on('click touch', function (e) {
    var base_url = window.location.protocol + "//" + window.location.host + "/wallet";
    window.location.replace(base_url);
});

$('.powerpoint').on('click touch', function (e) {
    var base_url = window.location.protocol + "//" + window.location.host + "/reservation";
    window.location.replace(base_url);
});

$('.word').on('click touch', function (e) {
    var base_url = window.location.protocol + "//" + window.location.host + "/reservation";
    window.location.replace(base_url);
});


$('ul.tabbar li').on('click touch', function (e) {
    var action = $(this).data('action');
    var base_url = window.location.protocol + "//" + window.location.host + "/";

    if (action == 'home') {
        window.location.replace(base_url);
    } else if (action == 'profile') {
        window.location.replace(base_url + "menu");
    } else if (action == 'favorite') {
        $('#CommingSoonModal').modal('show');
    } else if (action == 'notification') {
        window.location.replace(base_url + "notification");
    }
});

$('.CommingSoonModal').on('click touch', function (e) {
    $('#CommingSoonModal').modal('show');
});

$('#btn_payment_charge_wallet').on('click touch', function (e) {
    $('#form_charge_wallet').submit();
});

$('input.price_curency_wallet').change(function (event) {
    $(this).val(function (index, value) {
        var eee = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return eee + ' ریال ';
    });
});


$('.search-msg-input').on("keyup change", function (e) {
    var txt = $(this).val();
    if (txt.length >= 3 || txt == '') {
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "inbox/SearchMsg/";
        var url = base_url.concat(controller);
        var data = { txt: txt };
        $.ajax({
            url: url,
            type: 'POST',
            data: data,

            success: function (data) {
                $('.list-msg-main').html(data);
            }
        }, 'json');
    }
});

$(document).on('click touch', '.list-item-msg', function () {
    var id = $(this).data('id');
    if (id != '') {
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "inbox/view/" + id;
        var url = base_url.concat(controller);
        window.location.replace(url);
    }
});

$(document).on('click touch', '#btn-submit-msg', function () {
    var error = 0;
    var subject = $('#subject').val();
    var departeman = $('#departeman').val();
    var text = $('#text').val();

    if (subject == null) {
        $("#subject").css("border", "1px solid #dd2929");
        error++;
    } else {
        $("#subject").css("border", "");
    }

    if (departeman == null) {
        $("#departeman").css("border", "1px solid #dd2929");
        error++;
    } else {
        $("#departeman").css("border", "");
    }

    if (text == '') {
        $("#text").css("border", "1px solid #dd2929");
        error++;
    } else {
        $("#text").css("border", "");
    }

    var file_data = $('#attachment-file-chat').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);

    form_data.append('text', text);
    form_data.append('departeman', departeman);
    form_data.append('subject', subject);


    if (error == 0) {
        // if(true){
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "inbox/DoSendMsg/";
        var url = base_url.concat(controller);
        $('#btn-submit-msg').prop("disabled", true);
        $.ajax({
            url: url,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',

            success: function (data) {

                if (data == "success") {

                    $('#SucceSendTicketModal').modal('show');
                }
            }
        }, 'json');
    }


});
$(document).on('click touch', '#btn-submit-answer-msg', function () {
    var error = 0;

    var text = $('#text').val();
    var ticket_id = $('#ticket_id').val();
    if (text == '') {
        $("#text").css("border", "1px solid #dd2929");
        error++;
    } else {
        $("#text").css("border", "");
    }

    var file_data = $('#attachment-file-chat-answer').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);

    form_data.append('text', text);
    form_data.append('ticket_id', ticket_id);


    if (error == 0) {
        // if(true){
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "inbox/DoSendAnswerMsg/";
        var url = base_url.concat(controller);
        $('#btn-submit-answer-msg').prop("disabled", true);
        $.ajax({
            url: url,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',

            success: function (data) {

                if (data == "success") {
                    $('#SucceSendTicketModal').modal('show');
                }
            }
        }, 'json');
    }
});

$(document).on("input", ".number_only", function () {
    this.value = this.value.replace(/\D/g, '');
});


$('.item-notification-list').on('click touch', function (e) {
    var id = $(this).data('id');

    if (id != '') {
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "notification/NotificationUnview/";
        var url = base_url.concat(controller);
        var data = { id: id };
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function (data) {
                if (JSON.parse(data).respons == "success") {
                    $('#kt_accordion_1_header_' + id).removeClass('bg-unview-notification');
                    $('#kt_accordion_1_header_' + id).removeClass('item-notification-unview');
                    if (JSON.parse(data).count_unview == 0) {
                        $('.notification-count-ajax').remove();
                    } else {
                        $('.notification-count-ajax').html(JSON.parse(data).count_unview);
                    }
                }
            }
        }, 'json');
    }

});




$('#attachment-file-chat').on('change touch', function (e) {
    var fileName = $(this).val();
    if (fileName) {
        $('#del-fil-attach').show();
        $('.txt-status-attachment').html('فایل پیوست شد').css('color', '#29D025');
    }

});

$('#del-fil-attach').on('click touch', function (e) {
    $('#attachment-file-chat').val('');
    $('#del-fil-attach').hide();
    $('.txt-status-attachment').html('فایل پیوست حذف شد').css('color', 'rgba(255, 59, 59, 1)');
    setTimeout(function () {
        $('.txt-status-attachment').html('پیوست...').css('color', 'rgba(26, 26, 26, 1)');
    }, 3000);

});

$("#back").click(function () {
    parent.history.back();
    return false;
});


$(".link_list_service").click(function () {
    var id_cat = $(this).data('id-cat');
    if (id_cat != '') {
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "reservation/ReservationChechAccess/";
        var url = base_url.concat(controller);
        var data = { id_cat: id_cat };
        $.ajax({
            url: url,
            type: 'POST',
            data: data,

            success: function (data) {
                if (data == 'success') {
                    var base_url = window.location.protocol + "//" + window.location.host + "/";
                    window.location.replace(base_url + "reservation/ListService/" + id_cat);
                } else {
                    $('#FailedAccess').modal('show');
                }
            }
        }, 'json');
    }

});
$(".item-select-service").click(function () {
    var id_service = $(this).data('id');
    if (id_service != '') {
        var base_url = window.location.protocol + "//" + window.location.host + "/";
        var controller = "reservation/GelListItemsReservation/";
        var url = base_url.concat(controller);
        var data = { id_service: id_service };
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function (data) {
                $('.res-list').html(data);
            }
        }, 'json');
    }
});



