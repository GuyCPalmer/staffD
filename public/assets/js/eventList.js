$(document).ready(function () {
<<<<<<< HEAD

    var newEvents = {
        eventOwner: $("#task-title"),
        eventDateTimeStart: $("#task-date"),
        eventDateTimeEnd: $("#task-end"),
        locationAddress: $("#task-Location"),
        locationSpecialInst: $("#task-Specialist"),
        onsiteContact: $("#task-Contact")
=======
    function getEvents() {
        $.get("/api/events/", function (req, res, eventData) {
            console.log(eventData, "front end event data");

        }).then(function(err, eventData){
            if(err){
                console.log(err, "eventList.js ERR");
            }
            console.log(eventData);
        })
>>>>>>> JDuck
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