$(() => {
    $("#signup").on("click", (event) => {
        event.preventDefault();
        const newUsername = $("#usernameAdd").val().trim();
        const newPassword = $("#passAdd").val().trim();
        const newUserObj = {
            username: newUsername,
            password: newPassword
        };

        $.ajax("/api/signup", {
            method: "POST",
            data: newUserObj
        }).then(() => {
            location.replace("/dashboard");
        }).catch((err) => {
            console.log(err);
        });
    });

});