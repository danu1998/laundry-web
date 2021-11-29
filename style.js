$(document).on('click','.send', function(){
    /* Inputan Formulir */
    var input_name          = $("#name").val(),
        input_phone         = $("#phone").val(),
        input_alamat        = $("#alamat").val(),
        input_rt            = $('#rt').val(),
        input_rw            = $('#rw').val(),
        input_no            = $('#no_rumah').val(),
        input_area          = $("#area").val(),
        input_description   = $("#description").val();
 
    /* Pengaturan Whatsapp */
    var walink      = "https://web.whatsapp.com/send",
        phone       = '62895414735627',
        text        = 'Halo saya ingin memesan ',
        text_yes    = 'Pesanan Anda berhasil terkirim.',
        text_no     = 'Isilah formulir terlebih dahulu.';
 
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
 
    if(input_name != "" && input_phone != "" && input_area != ""){
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
            '*Nama* : ' + input_name + '%0A' +
            '*Alamat Anda* : ' + input_alamat + '%0A' +
            '*No RT : ' + input_rt + '%0A' +
            '*No RW :' + input_rw + '%0A' +
            '*No Rumah :' + input_no + '%0A' +
            '*Nomor Kontak / Whatsapp* : ' + input_phone + '%0A' +
            '*Area Anda* : ' + input_area + '%0A' +
            '*Catatan* : ' + input_description + '%0A';
 
        /* Whatsapp Window Open */
        window.open(checkout_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
    }
});