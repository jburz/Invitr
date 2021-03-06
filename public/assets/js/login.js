$(() => {
    $("#login").on("click", (event) => {
        event.preventDefault();
        const username = $("#usernameLogin").val().trim();
        const password = $("#passLogin").val().trim();
        const userObj = {
            username: username,
            password: password
        };

        $.ajax("/api/login", {
            method: "POST",
            data: userObj
        }).then(() => {
            location.replace("/dashboard");
        }).catch(err => {
            location.reload();
            console.log(err);
        });
    });
});