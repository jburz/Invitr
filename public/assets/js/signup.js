$(() => {
    $("#signup").on("click", (event) => {
        event.preventDefault();
        console.log("sign me up!");
        const newUsername = $("#usernameAdd").val().trim();
        const newPassword = $("#passAdd").val().trim();
        const newUserObj = {
            username: newUsername,
            password: newPassword
        };

        $.ajax("/api/signup", {
            method: "POST",
            data: newUserObj
        }).then((res) => {
            console.log("user added");
            location.reload();
        });
    });

});