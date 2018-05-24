$(document).ready(function(){

//inserting in for the new data fields
    var newCompany = $('#newCompany');
    var coordinatorName = $("#coordinatorName");
    var purchasing = $('#purchasing');
    var companyPhone = $('#companyPhone');
    var comEmail = $('#comEmail');
    // var comPic = $('#comPic');
    var comAddress = $('#comAddress');

    $(document).on('click', '#makeComp', insertComp);


function insertComp(){
    event.preventDefault();
    var event_owners = {
        eventOwner: newCompany.val().trim(),
        purchasing: purchasing.val().trim(),
        phone: companyPhone.val().trim(),
        email: comEmail.val().trim(),
        coordinator: coordinatorName.val().trim(),
        ownerAddress: comAddress.val().trim()
        };

        $.post('/api/event_owners', event_owners);

        window.location.href='../signinNew';
    }

});//end of document.ready


