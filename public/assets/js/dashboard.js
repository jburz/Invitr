//click listener on view guest details

$("#viewGuests").on("click", (event) => {
    console.log("hit");
    event.preventDefault();
    //query the db for all guests
    $.get("/api/all", data => {
        console.log(data);
    });
});