/*
 * SFS Review JS
 */

jQuery(document).ready(function () {
    jQuery("button.sfcr-create-review").on("click", function () {
        jQuery(this).hide();
        jQuery("form.review-form").slideToggle();
    });
    jQuery("button.sfcr-cancel-review").on("click", function () {
        jQuery("button.sfcr-create-review").show();
        jQuery("form.review-form").hide();
    });
    jQuery(".error-msg").hide();
    jQuery("form.review-form .sfcr-submit-review").on("click", function () {
        var title = jQuery("form.review-form input#title").val();
        var content = jQuery("form.review-form textarea#content").val();
        var rating = jQuery("form.review-form input.rating:checked").val();
        if (title == "") {
            jQuery("label#title_error").show();
            jQuery("input#title").focus();
            return !1;
        } else {
            jQuery("label#title_error").hide();
        }
        if (content == "") {
            jQuery("label#content_error").show();
            jQuery("textarea#content").focus();
            return !1;
        } else {
            jQuery("label#content_error").hide();
        }
        if (rating == null) {
            jQuery("label#rating_error").show();
            jQuery("input#rating").focus();
            return !1;
        } else {
            jQuery("label#rating_error").hide();
        }
        jQuery.ajax({
            type: "post",
            url: ajax_object.ajax_url,
            data: { action: "review_ajax_request", title: title, content: content, rating: rating },
            success: function () {
                jQuery("form.review-form").hide();
                jQuery(".review-thank-you").html("Thank You For Submitting Your Review.");
            },
        });
        return !1;
    });


    /*
    * Sidebar Review Slider
    */
    jQuery('.widget-review').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        fade: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

});
