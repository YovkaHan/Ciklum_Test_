var signup_name = $("#signup_name"),
    signup_email = $("#signup_email"),
    signup_password = $("#signup_password");
signup_name.keyup(function() {
    "" == $("#signup_name").val() ? $('label[for="signup_name"]').html("Your Name") : $('label[for="signup_name"]').html(" ")
}), signup_name.focus(function() {
    $('label[for="signup_name"]').css("opacity", .5)
}), signup_name.focusout(function() {
    $('label[for="signup_name"]').css("opacity", 1)
}), $("#signup_email").keyup(function() {
    "" == $("#signup_email").val() ? $('label[for="signup_email"]').html("Email Address") : $('label[for="signup_email"]').html(" ")
}), signup_email.focus(function() {
    $('label[for="signup_email"]').css("opacity", .5)
}), signup_email.focusout(function() {
    $('label[for="signup_email"]').css("opacity", 1)
}), $("#signup_password").keyup(function() {
    "" == $("#signup_password").val() ? $('label[for="signup_password"]').html("Create a Password") : $('label[for="signup_password"]').html(" ")
}), signup_password.focus(function() {
    $('label[for="signup_password"]').css("opacity", .5)
}), signup_password.focusout(function() {
    $('label[for="signup_password"]').css("opacity", 1)
}), [].forEach.call($("footer").find(".ac-gf-directory-column-section-link"), function(a, b, c) {
    var d = "http://www.apple.com";
    d += a.attributes.href.nodeValue, a.attributes.href.nodeValue = d
});

$('#signup_form').click(function() {
  if (signup_name.val() = "") {
	  signup_name.addClass("error")
  }
});

$('#signup_form').submit(function() {
    // get all the inputs into an array.
    var $inputs = $('#signup_form :input');

    $inputs.each(function(e) {
        if($(this).val()=="")
		{
			$(this).addClass("error");
			e.preventDefault();
		}
    });

});