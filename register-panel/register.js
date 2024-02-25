function showHide() {
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm_password');
    let toggle = document.getElementById('toggle');

    if(password.type === "password" && confirm_password.type === "password") {
        password.setAttribute("type", "text");
        confirm_password.setAttribute("type", "text");
        toggle.classList.add('hide');
    }
    else {
        password.setAttribute("type", "password");
        confirm_password.setAttribute("type", "password");
        toggle.classList.remove('hide');
    }
}