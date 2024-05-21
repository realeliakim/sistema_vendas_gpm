document.addEventListener("DOMContentLoaded", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const res = JSON.parse(this.response);
        var length = res.data.length;
        var option = "";
        for (var i = 0; i < length; i++) {
            option +=
                "<option value='" +
                res.data[i].id +
                "'>" +
                res.data[i].type +
                "</option>";
        }
        document.getElementById("type").innerHTML = option;
    };

    xhttp.open("GET", "/user_types", true);
    xhttp.send();
});
