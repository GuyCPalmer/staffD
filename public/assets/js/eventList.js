$(document).ready(function () {
    function getEvents() {
        $.get("/api/events/", function (req, res, eventData) {
            console.log(eventData, "front end event data");

        }).then(function(err, eventData){
            if(err){
                console.log(err, "eventList.js ERR");
            }
            console.log(eventData);
        })
    };
    getEvents();
});