$(document).ready(function () {
var script_url = 'http://localhost:8223/sheetdb'; // totally insecure, handle at server side, but no time..

    $("form").on("submit", function (event) {
        event.preventDefault();
        // process form
        var form = $('<form></form>');
        var email = $(this).find('[name="email"]').val();
        var quantity = $(this).find('[name="quantity"]').val();
        var company = $(this).find('[name="company"]').val();
        var apparel_type = $(this).find('[name="apparel"]').val();

        var url = script_url + "?email=" + email + "&company=" + company + "&quantity=" + quantity + "&apparel_type=" + apparel_type;

        console.log(url);
        jQuery.ajax({
            crossDomain: true,
            url: script_url,
            data: {
                data: [{email, quantity, company, apparel_type}]
            },
            method: "GET",
            dataType: "json",
            success: function() {
                console.log('success');
                alert('Thank you');
            }
        }).done(function() {
            console.log('success in done');
            alert('Thank you, we will get back to you in 1-3 business days.');
        });
    });
});
