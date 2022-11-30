// Owl Carousel Start..................

$(document).ready(function() {
    var one = $("#one");
    var two = $("#two");

    $('#customNextBtn').click(function() {
        one.trigger('next.owl.carousel');
    })
    $('#customPrevBtn').click(function() {
        one.trigger('prev.owl.carousel');
    })
    one.owlCarousel({
        autoplay:true,
        loop:true,
        dot:true,
        autoplayHoverPause:true,
        autoplaySpeed:100,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    two.owlCarousel({
        autoplay:true,
        loop:true,
        dot:true,
        autoplayHoverPause:true,
        autoplaySpeed:100,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});

// Owl Carousel End..................


$('#contactSendBtnId').click(function () {

    let contactName = $('#contactNameId').val();
    let contactMobile = $('#contactMobileId').val();
    let contactEmail = $('#contactEmailId').val();
    let contactMsg = $('#contactMsgId').val();
    sendContact(contactName, contactMobile, contactEmail, contactMsg);
})

// Contact Send
function sendContact(contact_name, contact_mobile, contact_email, contact_msg) {

    if (contact_name.length==0){
        $('#contactSendBtnId').html('আপনার নাম দিন');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }
    else if (contact_mobile.length==0){
        $('#contactSendBtnId').html('আপনার মোবাইল নং দিন');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }
    else if (contact_email.length==0){
        $('#contactSendBtnId').html('আপনার ইমেইল দিন');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }
    else if (contact_msg.length==0){
        $('#contactSendBtnId').html('আপনার মেসেজ দিন');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }
    else{

        $('#contactSendBtnId').html('পাঠানো হচ্ছে');

        axios.post('/contact',{
            contact_name:contact_name,
            contact_mobile:contact_mobile,
            contact_email:contact_email,
            contact_msg:contact_msg
        })
            .then(function (response) {
                if (response.status===200){
                    if (response.data===1){
                        $('#contactSendBtnId').html('আপনার অনুরোধ সফল হয়েছে');
                        setTimeout(function () {
                            $('#contactSendBtnId').html('পাঠিয়ে দিন');
                        },3000)
                    }
                    else{
                        $('#contactSendBtnId').html('অনুরোধ ব্যর্থ হয়েছে! আবার চেষ্টা করুন');
                        setTimeout(function () {
                            $('#contactSendBtnId').html('পাঠিয়ে দিন');
                        },3000)
                    }
                }
                else{
                    $('#contactSendBtnId').html('অনুরোধ ব্যর্থ হয়েছে! আবার চেষ্টা করুন');
                    setTimeout(function () {
                        $('#contactSendBtnId').html('পাঠিয়ে দিন');
                    },3000)
                }
            })
            .catch(function (error) {
                $('#contactSendBtnId').html('অনুরোধ ব্যর্থ হয়েছে! আবার চেষ্টা করুন');
                setTimeout(function () {
                    $('#contactSendBtnId').html('পাঠিয়ে দিন');
                },3000)
            })
    }

}

/////////////////////

$('.addBtn').on('click',function () {

    let newTableRow =
            "<tr>"+
                "<td><input class='fileInput form-control' type='file'></td>"+
                "<td class='fileSize'>File Size</td>"+
                "<td><button class='btn btn-danger btn-sm cancelBtn'>Cancel</button></td>"+
                "<td><button class='btn btn-primary btn-sm upBtn'>Upload</button></td>"+
                "<td class='fileUpMb'>Uploaded(MB)</td>"+
                "<td class='fileUpPercentage'>Uploaded(%)</td>"+
                "<td class='fileUpStatus'>Status</td>"+
            "</tr>"
    $('.fileList').append(newTableRow);

    $('.fileInput').on('change',function () {
        let myFile = $(this).prop('files');
        let myFileSize = (myFile[0].size/(1024*1024)).toFixed(2);
        $(this).closest('tr').find('.fileSize').html(myFileSize+ " MB");
    })

    $('.upBtn').on('click', function (event) {

        let myFile = $(this).closest('tr').find('.fileInput').prop('files');
        let fileUpMb = $(this).closest('tr').find('.fileUpMb');
        let fileUpPercentage = $(this).closest('tr').find('.fileUpPercentage');
        let fileUpStatus = $(this).closest('tr').find('.fileUpStatus');
        let upBtn = $(this);

        let formData = new FormData();
        formData.append('fileKey', myFile[0]);
        onFileUpload(formData, fileUpMb, fileUpPercentage, fileUpStatus, upBtn);
        event.preventDefault();
        event.stopImmediatePropagation();
    })


    // Remove Row
    $('.cancelBtn').on('click', function () {

        $(this).parents('tr').remove();
    })

})

 function onFileUpload(formData, fileUpMb, fileUpPercentage, fileUpStatus, upBtn) {
    fileUpStatus.html("Uploading...");
    upBtn.prop('disabled', true);
    let url = "/fileUp";
    let config = {
        headers:{'content-type':'multipart/form-data'},
        onUploadProgress:function (progressEvent) {
            let upMb = (progressEvent.loaded/(1024*1024)).toFixed(2) +" Mb";
            let upPercent = ((progressEvent.loaded*100)/progressEvent.total).toFixed(2) +" %";
            fileUpMb.html(upMb);
            fileUpPercentage.html(upPercent);
        }
    }

    axios.post(url, formData, config)
        .then(function (response) {
            if (response.status===200){
                fileUpStatus.html('Success');
                upBtn.prop('disabled', false);
            }else{
                fileUpStatus.html('Fail');
                upBtn.prop('disabled', false);
            }
        }).catch(function (error) {
        fileUpStatus.html('Fail');
        upBtn.prop('disabled', false);
    })
 }
