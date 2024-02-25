function showHide() {
    let password = document.getElementById('password');
    let toggle = document.getElementById('toggle');

    if(password.type === "password") {
        password.setAttribute("type", "text");
        toggle.classList.add('hide');
    }
    else {
        password.setAttribute("type", "password");
        toggle.classList.remove('hide');
    }
}