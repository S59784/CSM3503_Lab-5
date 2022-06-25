$(function () {

    $("#btnRegister").click(function () {
        location.href = "register.html";
    }
    );

    $("#frmLogin").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var email = $("#emailAddress").val();
        var pass = $("#password").val();

        var datalist = "emailAddress=" + email + "&password=" + pass;

        $.ajax({
            type: "post",
            url: "http://localhost:8080/Lab_5_FrontEnd/Login",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    sessionStorage.ttoken = email;
                    location.href = "index.html";
                } else {
                    alert("Wrong Username and Password");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });
});