$(document).ready(function(){

    var newTalent = $('#newTalent');
    var talentPhone = $('#talentPhone');
    var talentEmail = $('#talentEmail');
    var address = $('#address');
    var SSN = $('#SSN');
    var dlNumber = $('#dlNumber');
    var tabc = $('#tabc');
    //need to input function for boulean
    var bio = $('#bio');

    function insertTalent(){
            event.preventDefault();
            var talent = {
                talentName: newTalent.val().trim(),
                phone: talentPhone.val().trim(),
                email: talentEmail.val().trim(),
                talentAddress: address.val().trim(),
                socSec: SSN.val().trim(),
                driverLic: true,
                driverlicNum: dlNumber.val().trim(),
                tabc: true,
                tabcNum: tabc.val().trim(),
                //This is where the booleans \
                bio: bio.val().trim()
            };

            $.post('/api/talent', talent);

            console.log(res.body);
    }

});//endd of doccument