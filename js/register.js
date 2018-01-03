
var fieldsValid = false;

function checkPassword() {
    $("#errorspw").empty();

    var pass = $("#password").val();
    var confpass = $("#confpword").val();
    //debugger;

    if (pass.length < 8) {
        $("#errorspw").append("Your password must be at least 8 characters.");
    }

    validatePassword();
}

function validatePassword() {

    $("#errorsconfpw").empty();

    var pass = $("#password").val();
    var confpass = $("#confpword").val();

    console.log("password: " + pass);
    console.log("confirmation password: " + confpass);

    if (confpass.length > 0) {
        if (pass !== confpass) {
            $("#errorsconfpw").append("Your passwords don't match.")
            fieldsValid = false;
        }

        else {
            $("#errorsconfpw").append("Passwords match.")
            fieldsValid = true;
        }
    }
}

function checkValidated(e) {
    if (!fieldsValid) {
        console.log("Fields aren't valid");
        e.preventDefault();
    }
}