$(document).ready(function () {
var script_url = "https://sheetdb.io/api/v1/iknrrsimgqa4j"; // totally insecure, handle at server side, but no time..

    $("form").on("submit", function (event) {
        event.preventDefault();
        // process form
        var form = $('<form></form>');
        var email = $(this).find('[name="email"]').val();
        var quantity = $(this).find('[name="quantity"]').val();
        var company = $(this).find('[name="company"]').val();
        var apparel_type = $(this).find('[name="apparel"]').val();

        var url = script_url + "?&email=" + email + "&company=" + company + "&quantity=" + quantity + "&apparel_type=" + apparel_type;

        console.log(url);
        jQuery.ajax({
            crossDomain: true,
            url: script_url,
            data: {
                data: [{email, quantity, company, apparel_type}]
            },
            method: "POST",
            dataType: "json",
            success: function() {
                console.log('test');
                alert('test');
            }
        })
    });
});
