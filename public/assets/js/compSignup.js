$(document).ready(function(){

//inserting in for the new data fields
    var newCompany = $('#newCompany');
    var coordinatorName = $("#coordinatorName");
    var purchasing = $('#purchasing');
    var companyPhone = $('#companyPhone');
    var comEmail = $('#comEmail');
    // var comPic = $('#comPic');
    var comAddress = $('#comAddress');

    console.log("SHUTSHUTSHUTSUHSTHUSTUHST");


    function insertComp(){
    event.preventDefault();
    var event_owners = {
        eventOwner: newCompany.val().trim(),
        phone: companyPhone.va().trim(),
        email: comEmail.val().trim(),
        coordinator: coordinatorName.val().trim(),
        ownerAddress: comAddress.val().trim()
        };

        $.post('/api/eventOwners', event_owners);

        console.log(req.body);
    }

});//end of document.ready


