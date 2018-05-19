$(document).ready(function(){

    var talentName = $('#talentName');
    var talentPhone = $('#talentPhone');
    var talentEmail = $('#talentEmail');
    var address = $('#Address');
    var SSN = $('#SSN');
    var dlNumber = $('#dlNumber');
    var tabc = $('#tabc');
    //need to input function for boulean
    var bio = $('#bio');

    function checker(event){
        event.preventDefault();
    }

    $(document).on('click', '#makeTalent', insertTalent);

    function insertTalent(event){
            event.preventDefault();
            var talent = {
                talentName: talentName.val().trim(),
                phone: talentPhone.val().trim(),
                email: talentEmail.val().trim(),
                talentAddress: address.val().trim(),
                socSec: SSN.val().trim(),
                driverLic: true,
                driverLicNum: dlNumber.val().trim(),
                tabc: true,
                tabcNum: tabc.val().trim(),
                jobBar: true,
                jobServer: true,
                jobSales: true,
                jobModal: true,
                jobSecurity: true,

                //This is where the booleans \
                bio: bio.val().trim()
            };

            $.post('/api/talent', talent);

    }



});//endd of doccument