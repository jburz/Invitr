$(() => {
    $("#login").on("click", (event) => {

        event.preventDefault();
        console.log(event);
        console.log("log me in!");
    });
});