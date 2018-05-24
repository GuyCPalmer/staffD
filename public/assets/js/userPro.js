$(document).ready(function () {

    function getUserData(email) {
        $.get('/profile/' + email, function(data){
            console.log(data);
        });
    };

    initApp = function (getUserData) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                console.log(email);
                getUserData(email);
            };
        });
    };

    initApp(getUserData);


});