$(document).ready(function () {

    var newEvents = {
        eventOwner: $("#task-title"),
        eventDateTimeStart: $("#task-date"),
        eventDateTimeEnd: $("#task-end"),
        locationAddress: $("#task-Location"),
        locationSpecialInst: $("#task-Specialist"),
        onsiteContact: $("#task-Contact")
    };

    $(document).on('click', '#save_task', createEvent);

    function createEvent(event){
        var stuff = {
            eventOwner: newEvents.eventOwner.val().trim(),
            eventDateTimeStart: newEvents.eventDateTimeStart.val().trim(),
            eventDateTimeEnd: newEvents.eventDateTimeEnd.val().trim(),
            locationAddress: newEvents.locationAddress.val().trim(),
            locationSpecialInst: newEvents.locationSpecialInst.val().trim(),
            onsiteContact: newEvents.onsiteContact.val().trim()
        };

        $.post("/api/events", stuff);
    }
});