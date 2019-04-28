var script_url = "https://script.google.com/macros/s/AKfycbwHrD42dRjmtYLNI3W6cCygHp0mfXBlodlcdrocyhBt3I64o5k/ex";
function insert_value() {
    var email = $("#email").val();
    var company = $("#company").val();
    var apparel_type = $("apparel_type").val();
    var quantity = $("quantity").val();
    var url = script_url + "?callback=ctrlq&name=" + email + "&email=" + company + "&company=" + quantity + "&quantity=" + apparel_type + "&apparel_type=";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    $("resetForm").reset();
}
function ctrlq(e){
    alert("You have donated successfully, thankyou so much for your contribution!");
}
