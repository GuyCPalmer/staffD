$(document).on('click', '#deleteTalent', function(){
    var user = this.user;

    $.delete('/api/talent', user);
});

$(document).on('click', '#updateTalent', function(){
    var name = $('#username');
    var num = $('#usernum');
    var email = $('#useremail');
    var bio = $('#userbio');

    $.update()
});


$(document).ready(function(){

});