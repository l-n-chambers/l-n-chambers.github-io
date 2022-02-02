function submitForm() {
    submit_cnt++;

    if (validateForm()) {
        var form = document.getElementsByName('contact-form')[0];
        form.submit();
        form.reset();
    }
}
function validateForm() {
    if (submit_cnt == 0) {
        return false;
    }
    var list = document.getElementById("four").getElementsByClassName("row gtr-uniform")[0].children;
    var valid = true;

    for (let i=0; i < list.length-1; i++) {
        let input_div = list[i];
        let field = input_div.lastElementChild;
        let warning = input_div.firstElementChild;
        let name = field.name

        if (emptyOrWhitespace(field.value)) {
            warning.textContent = "* Required Field"
            warning.style.color = "red";
            valid = false;
        } else if (name == 'email') {
            if (!validateEmail(field.value)) {
                warning.textContent = "* Invalid Email"
                warning.style.color = "red"
                valid = false;
            } else {
                warning.style.color = 'transparent'
            }
        } else {
            warning.style.color = "transparent";
        }
    }
    return valid;
}

function resetForm() {
    var list = document.getElementById("four").getElementsByClassName("row gtr-uniform")[0].children;
    for (let i=0; i < list.length-1; i++) {
        let warning = list[i].firstElementChild;
        warning.style.color = "transparent";
    }
}

function validateEmail(str) {
    regex = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"
    match = str.match(regex)

    if (match == null) {
        return false
    } else {
        return true
    }
}

function emptyOrWhitespace(str) {
    return str == null || str.length == 0 || str.match('^\s+$') != null
}
