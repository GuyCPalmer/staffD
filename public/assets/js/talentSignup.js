$(document).ready(function(){

    var talentName = $('#talentName');
    var talentPhone = $('#talentPhone');
    var talentEmail = $('#talentEmail');
    var address = $('#Address');
    var SSN = $('#SSN');
    var dlNumber = $('#dlNumber');
    var dL = $('#drivers');
    var tabcL = $('#tabcL');
    var tabc = $('#tabcNum');
    //need to input function for boulean
    var bio = $('#bio');
    var tbar= $('#Bartender');
    var tserver= $('#Server');
    var tpromo= $('#promoModel');
    var tsecurity= $('#Security');
    var tsales= $('#Sales');

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
                driverLic: dL.is(':checked'),
                driverLicNum: dlNumber.val().trim(),
                tabc: tabcL.is(':checked'),
                tabcNum: tabc.val().trim(),
                jobBar: tbar.is(':checked'),
                jobServer: tserver.is(':checked'),
                jobSales: tsales.is(':checked'),
                jobModel: tpromo.is(':checked'),
                jobSecurity: tsales.is(':checked'),

                //This is where the booleans \
                bio: bio.val().trim()
            };

            $.post('/api/talent', talent);

    }



});//endd of doccument