$(document).ready(function () {
    console.log("JS file Connected");

    var tbar = $('#Bartender');
    var tserver = $('#Server');
    var tpromo = $('#promoModel');
    var tsecurity = $('#Security');
    var tsales = $('#Sales');

    function outCall(event, jobs) {
        $.get("/api/talent." + jobs, function (req, res) {
            console.log(req);
            console.log("/api/talent/:" + jobs);
        }).then(function (data) {
            var filteredTalent = data; 
            //res.json(filteredTalent); 
            console.log(filteredTalent);
        });
    };

    function checker(event) {
        event.preventDefault();
    }

    $(document).on("submit", "#talentSearch", getTalent);

    function getTalent(event) {
        if (tbar.is(':checked') == true) {
            var jobs = "jobBar";
            outCall(event, jobs);

        } else if (tserver.is(':checked') == true) {
            var jobs = "jobServer";
            outCall(event, jobs);
        } else if (tsales.is(':checked') == true) {
            var jobs = "jobSales";
            outCall(event, jobs);
        } else if (tsecurity.is(':checked') == true) {
            var jobs = "jobSecurity";
            outCall(event, jobs);
        } else if (tpromo.is(':checked') == true) {
            var jobs = "jobModel";
            outCall(event, jobs);
        } else {
            alert('You have to pick something to Search!');
        }
        
    };



});