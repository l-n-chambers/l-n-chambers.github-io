function validateForm() {
    var list = document.getElementById("four").getElementsByClassName("row gtr-uniform")[0].children;
    var valid = true;

    for (let i=0; i < list.length-1; i++) {
        let input_div = list[i];
        let field = input_div.lastElementChild;
        let warning = input_div.firstElementChild;

        if (emptyOrWhitespace(field.value)) {
            warning.style.color = "red";
            valid = false;
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

function emptyOrWhitespace(str) {
    return str == null || str.length == 0 || str.match('^\s+$') != null
}
