// ==== ADD A GUEST PAGE ==================

function trimInfo(value) {
    return value.val().trim();
}

$("#submitNewGuest").click((event) => {
    event.preventDefault();
    const newGuestInfo = {
        firstName: trimInfo($("#firstName")),
        lastName: trimInfo($("#lastName")),
        phoneNumber: trimInfo($("#phoneNumber")),
        streetAddress: trimInfo($("#streetAddress")),
        cityAddress: trimInfo($("#cityAddress")),
        zipAddress: trimInfo($("#zipAddress")),
        stateAddress: trimInfo($("#stateAddress")),
        foodRestrictBool: $("#foodRestrictBool").val(),
        foodRestrictText: trimInfo($("#foodRestrictText")),
        additionalGuests: trimInfo($("#additionalGuests")),
        email: trimInfo($("#email")),
        invited: false,
        rsvp: false,
        comment: trimInfo($("#comment"))
    };
    $.post("/api/newGuest", newGuestInfo).then((results) => {
        if (results === "OK"){
            window.location = "/details";
        }
    });
}
);