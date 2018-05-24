<<<<<<< HEAD
$(document).ready(function(){

   /* $.get('/api/userProfile', function(req , res){
        console.log(res, "Front end Call for user profile");
        console.log(req);
    }).then(function(req){
        const userData = req;
        console.log(userData);
    })*/
=======
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


>>>>>>> f6951e3e271fbe2b0ed51f728bf5d036fc025f65
});