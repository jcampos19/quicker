$(document).ready(function() {

    $(".fav-user").click(function() {
        $(this).find('i').toggleClass('icon-c fa-heart fa-heart-o');
    });

    $("table").tablesorter();
    //$("#myTable").tablesorter( {dateFormat: 'pt'} );

    $("#changeEmailAddress").hide();
    $("#changePswd").hide();
    $('.stripeAccount').hide();

    $("#updateEmail").click(function(){
         $("#changeEmailAddress").show();
         $(".generalOptions").hide();
     });

     $("#updatePassword").click(function(){
         $("#changePswd").show();
         $('.generalOptions').hide();
     });

     $(".cancel").click(function() {
        $('.generalOptions').show();
        $("#changePswd").hide();
        $("#changeEmailAddress").hide();
     });

     $('#connectStripeAccount').click(function(){
        $('.stripeAccount').show();
        $('#stripeContent').hide();
     });

    var date_input=$('input[name="date"]');
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true
    };
    date_input.datepicker(options);

//star rating
    $('.star-rating div').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10);

        $(this).parent().children('div.star').each(function(e){
          if (e < onStar) {
            $(this).addClass('hover');
          }
          else {
            $(this).removeClass('hover');
          }
        });
    }).on('mouseout', function(){
        $(this).parent().children('div.star').each(function(e){
          $(this).removeClass('hover');
        });
    });  //end of mouseout

    $('.star-rating div').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('div.star');

        for (i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
          $(stars[i]).addClass('selected');
        }
        $('#cancelModal').modal('show');
    });
//end of star rating

    //replace img size
    $('#profile-container img').each(function () {
      var imgSrc = $(this).attr('src');
      if ( imgSrc === '/images/photoicon.png' ) {
          $(this).css("width", "38px");
          $(this).css("height", "30px");
      } else {
        $(this).css("width", "100%");
      }

    });

//assign EtaColor
    $('#active-jobs-content .activeJobEta').each(function () {
        var chkTimeStatus = $('.activeJobEta').text();
        var assignColor = $('.activeJobEta');
        activeJobEtaColor(chkTimeStatus, assignColor);
    });

    $('.workstatusrows tr').each(function() {
        if ($(this)[0].cells[4].innerText === "On Site") {
            $(this)[0].cells[4].childNodes[1].style.backgroundColor = "gold";
            $(this)[0].cells[4].childNodes[1].style.borderColor = "gold";
        } else if ($(this)[0].cells[4].innerText === "En Route") {
              $(this)[0].cells[4].childNodes[1].style.backgroundColor = "MediumAquaMarine";
              $(this)[0].cells[4].childNodes[1].style.borderColor = "MediumAquaMarine";
          } else if ($(this)[0].cells[4].innerText === "Quote Issued") {
            $(this)[0].cells[4].childNodes[1].style.backgroundColor = "crimson";
            $(this)[0].cells[4].childNodes[1].style.borderColor = "crimson";
        }
    });

    $('#transcationsRows tbody tr').each(function() {
        if ($(this)[0].cells[4].innerText === "Completed") {
            $(this)[0].cells[4].childNodes[1].style.backgroundColor = "#65B8FF";
            $(this)[0].cells[4].childNodes[1].style.borderColor = "#65B8FF";
        } else {
            $(this)[0].cells[4].childNodes[1].style.backgroundColor = "#A0A0A0";
            $(this)[0].cells[4].childNodes[1].style.borderColor = "#A0A0A0";
        }
    });

    if ($(".read-only").length > 0) {
        $(".form-control").addClass("disabled");
    } else {
        $("#profile-container").click(function(e) {
            $("#lblImageUpload").click();
        });

        $("#upload-button").click(function(e) {
            $("#lblImageUpload").click();
        });

        $("#lblImageUpload").change(function(){
            fasterPreview( this );
        });
    }

    $(function(){
        $('a, button').click(function() {
            $(this).toggleClass('active');
        });
    });

    $('.dropdown-menu').mouseleave(function () {
        $(".myFakeClass").dropdown('toggle');
    });
////

'use strict';

// elements
var text = document.getElementById('fq-header-text');
var input = document.getElementById('input');

// add spans
function addSpans(el, text) {
    var letters = text.split('');
    var html = '';
    for (var i = 0; i < letters.length; i++) {
        html += '<span>' + letters[i] + '</span>';
    }
    el.innerHTML = html;
}
addSpans(text, text.innerText);
    changePageAndSize();
    colorEtaIndicators();
    cancelFormSubmission();
    setCurrentPageActive();
    setAccountSettingsActive();
    replaceEditText();

//issue with this will fix
    // setup timeline
    var tl = new TimelineLite();
    tl.staggerFromTo("#fq-header-text span", 1.7, {
    y: -30,
    x: -30
}, {
    y: 0,
    x: 0,
    ease: Bounce.easeOut
}, 0.03, "stagger");
window.addEventListener('click', function () {
    tl.restart();
});
    tl.play();

});  //end of document ready

function resizeMenuBar() {
    if ($(".filter-sidebar-xs").length > 0) {
        $('#filter-sidebar').addClass('filter-sidebar-lg').removeClass('filter-sidebar-xs');
        $('.main-body').addClass('main-body-lg').removeClass('main-body-xs');
        $('.sidebar-footer').css("position", "absolute");
    } else {
        $('#filter-sidebar').addClass('filter-sidebar-xs').removeClass('filter-sidebar-lg');
        $('.main-body').addClass('main-body-xs').removeClass('main-body-lg');
        $('.sidebar-footer').css("position", "sticky");
    }
}

function cancelFormSubmission() {
    $('.addressCancel').click(function(){
        window.location.href='/addresses';
    })
    $('.customerCancel').click(function(){
        window.location.href='/customers';
    })
    $('.contactsCancel').click(function(){
        window.location.href='/contacts';
    })
    $('.vendorsCancel').click(function(){
        window.location.href='/vendors';
    })
    $('.vendorreportsCancel').click(function(){
        window.location.href='/vendorreports';
    })
    $('.configurationsCancel').click(function(){
        window.location.href='/configurations';
    })
    $('.preauthorizationsCancel').click(function(){
        window.location.href='/preauthorizations';
    })
    //account settings
    $('.notificationsCancel').click(function(){
        window.location.href='/accountSettings';
    })
    $('.profileInformationCancel').click(function(){
        window.location.href='/accountSettings';
    })
    $('.companyInfoCancel').click(function(){
        window.location.href='/accountSettings';
    })

    $('#accountSettings').click(function(){
        window.location.href='/accountSettings';
    })
}

function setCurrentPageActive() {
    var url = window.location.href;
    if (url.search("/jobsubmission") > 0){
        $('#jobRequest').addClass('active');
        $('#topJobRequest').addClass('active');
        $('#workOrderContent').addClass('jobRequestActive');
    } else if (url.search("/vendorreports") > 0){
        $('#vendorResponse').addClass('active');
        $('#topVendorResponse').addClass('active');
        $('#workOrderContent').addClass('vendorResponseActive');
    } else if (url.search("/workstatuses") > 0){
        $('#jobReqStatus').addClass('active');
        $('#topJobReqStatus').addClass('active');
        $('#workOrderContent').addClass('jobReqStatusActive');
    } else if (url.search("/reviewquotes") > 0){
        $('#reviewQuotes').addClass('active');
        $('#topReviewQuotes').addClass('active');
        $('#workOrderContent').addClass('reviewQuoteActive');
    } else if (url.search("/transactions") > 0){
        $('#transHistory').addClass('active');
        $('#topTransHistory').addClass('active');
        $('#workOrderContent').addClass('transHistoryActive');
    } else {
        $('#customerMenus').addClass('hideContent');
        $('#activeJobContent').addClass('col-xs-12').removeClass('col-xs-2 col-sm-3');
        $('.main-body div.bubble').addClass('remove-arrow');
        $('.work-menu-content').css("padding-bottom", "5px");
    }
}

function setAccountSettingsActive() {
    var url = window.location.href;
    if (url.search("/accountSettings") > 0){
        $('#accountSettingsContent').addClass('active');
    } else if (url.search("/generalSettings") > 0){
        $('#generalSettings').addClass('active');
    } else if (url.search("/notifications") > 0){
        $('#notifications').addClass('active');
    } else if (url.search("/profileInformation") > 0){
        $('#profileInformation').addClass('active');
    } else if (url.search("/companyInfo") > 0){
        $('#companyInfo').addClass('active');
    } else if (url.search("/setupPayments") > 0){
        $('#setupPayments').addClass('active');
    }
}
      /*else {
     }
          $('#customerMenus').addClass('hideContent');
          $('#activeJobContent').addClass('col-xs-12').removeClass('col-xs-2 col-sm-3');
          $('.main-body div.bubble').addClass('remove-arrow');
          $('.work-menu-content').css("padding-bottom", "5px");
     }*/

function replaceEditText() {
    var url = window.location.href;
    if (url.search("/edit") > 0){
        $('.container h3').each(function() {
            var text = $(this).text();
            $(this).text(text.replace('Add New', 'Edit'));
        });
    }
}

function setProfileImageSize() {
    var url = window.location.href;
    if (url.search("/edit") > 0){
        $('.container h3').each(function() {
            var text = $(this).text();
            $(this).text(text.replace('Add New', 'Edit'));
        });
    }
}

function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]){
        $('#profileImage').attr('src', window.URL.createObjectURL(uploader.files[0]) );
        $('#profileImage').css("width", "auto");
        $('#profileImage').css("height", "55%");
    }
}

function colorEtaIndicators() {
    $('#vendor-profile .arrival-time').each(function () {
	if ($('.arrival-time').text() != '') {
		var vendorEtaText = parseInt($('.arrival-time').text());
    	if (vendorEtaText <= 60) {
            $(".arrival-time").css({backgroundColor: "mediumseagreen"});
            $(".arrival-time").css({borderColor: "mediumseagreen"});
    	} else if (vendorEtaText >= 61 && vendorEtaText <= 120) {
            $(".arrival-time").css({backgroundColor: "gold"});
            $(".arrival-time").css({borderColor: "gold"});
    	} else if (vendorEtaText >= 120) {
            $(".arrival-time").css({backgroundColor: "crimson"});
            $(".arrival-time").css({borderColor: "crimson"});
    	}
	}
    });
}

function changePageAndSize() {
	$('#customerPageSizeSelect').change(function(evt) {
		window.location.replace("/customers/?pageSize=" + this.value + "&page=1");
	});
    $('#vendorPageSizeSelect').change(function(evt) {
        window.location.replace("/vendors/?pageSize=" + this.value + "&page=1");
    });
    $('#addressPageSizeSelect').change(function(evt) {
        window.location.replace("/addresses/?pageSize=" + this.value + "&page=1");
    });
    $('#configPageSizeSelect').change(function(evt) {
        window.location.replace("/configurations/?pageSize=" + this.value + "&page=1");
    });
    $('#contactPageSizeSelect').change(function(evt) {
        window.location.replace("/contacts/?pageSize=" + this.value + "&page=1");
    });
    $('#jobSubmissionPageSizeSelect').change(function(evt) {
        window.location.replace("/jobsubmissions/?pageSize=" + this.value + "&page=1");
    });
    $('#transactionPageSizeSelect').change(function(evt) {
        window.location.replace("/transactions/?pageSize=" + this.value + "&page=1");
    });
    $('#vendorReportPageSizeSelect').change(function(evt) {
        window.location.replace("/vendorreports/?pageSize=" + this.value + "&page=1");
    });
    $('#preauthPageSizeSelect').change(function(evt) {
        window.location.replace("/preauths/?pageSize=" + this.value + "&page=1");
    });
}


function activeJobEtaColor(chkTimeStatus, assignColor) {
    if ( chkTimeStatus === "On Site") {
        $(assignColor).css("background-color", "gold");
        $(assignColor).css("border-color", "gold");
    } else if ( chkTimeStatus === "En Route") {
        $(assignColor).css("background-color", "MediumAquaMarine");
        $(assignColor).css("border-color", "MediumAquaMarine");
    } else if ( chkTimeStatus === "Quote Issued") {
        $(assignColor).css("background-color", "crimson");
        $(assignColor).css("border-color", "crimson");
    }
}

$(document).ready(function() {
//ajax request causing error.  Cannot find this url
/*
    $('.book-request').click(function() {
    $.ajax({
       type: 'GET',
       url: '/book/disclaimer/job/' + '1',
       data: {
          format: 'json'
       },
       success: function(data) {
         $("#book_disclaimer_address").text(data.book_disclaimer_address);
         $("#book_disclaimer_access_code").text(data.book_disclaimer_access_code);
         $("#book_disclaimer_category").text(data.book_disclaimer_category);
         $("#book_disclaimer_description").text(data.book_disclaimer_description);
         $("#book_disclaimer_contact").text(data.book_disclaimer_contact);

//         $('.modal').modal({
//             show: true
//         });
       },
       error: function(data) {
          alert("failure!");
       }
    });
    });
*/
    $( ".fa-times-circle" ).hover(function() {

    //get row of element
    var orderNumber = $(this).closest('tr')[0].cells[0].innerText
    $.ajax({
       type: 'GET',
       url: '/cancellation/order/' + orderNumber,
       data: {
          format: 'json'
       },
       success: function(data) {
         $("#cancellation_user_name").text(data.assignee);
         $("#cancellation_address").text(data.address);
         $("#cancellation_access_code").text(data.accessCode);
         $("#cancellation_category").text(data.category);
         $("#cancellation_description").text(data.description);

         $('.modal').modal({
             show: true
         });
       },
       error: function(data) {
          alert("failure!");
       }
    });
  });

  $('#bookJob').click(function() {
      $('.modal').modal({
           show: true
       });
  });

  $('#bookJobBtn').click(function() {
        $.ajax({
              type: 'POST',
              url: "/availablejob/book",
              data: "abc",
              data: {
                 format: 'json'
              },
              success: function(resultData) {
                  alert("Booked!") ;
              },
              error: function(resultData) {
                  alert("Error Booking!") ;
              }
        });
  });

});


