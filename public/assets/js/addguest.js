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
        foodRestrictBool: false,
        foodRestrictText: trimInfo($("#foodRestrictText")),
        additionalGuests: trimInfo($("#additionalGuests")),
        email: trimInfo($("#email")),
        invited: false,
        rsvp: false,
        comment: trimInfo($("#comment"))
    };
    console.log(newGuestInfo);
    $.post("/api/newGuest", newGuestInfo).then(
        res.redirect("/dashboard")
    );
}
);