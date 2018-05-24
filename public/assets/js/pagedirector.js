$(document).ready(function () {



    function getCompanyData(email) {
        $.get('/owner/' + email, function (data) {
            if (data) {
                window.location.href = '../dashboard';
            }
        })
    }

    function getUserData(email, getCompanyData) {
        $.get('/talent/' + email, function (data, getCompanyData) {
            console.log(data);
            if (data) {
                window.location.href = '../userProfile';
            } else {
                getCompanyData(email);
            }
        });
    }

    initApp = function () {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log(user.email);
                var displayName = user.displayName;
                var userEmail = user.email;
                var currentUser = { email: userEmail };

                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                //var userObject = currentUser.userEmail;
                //console.log(currentUser.email);
                var talent_email = {
                    email: JSON.stringify(userEmail)
                }
                getUserData(userEmail, getCompanyData(userEmail));
                // user.getIdToken().then(function (accessToken) {
                //     document.getElementById('sign-in-status').textContent = 'Signed in';
                //     document.getElementById('sign-in').textContent = 'Sign out';
                //     document.getElementById('account-details').textContent = JSON.stringify({
                //         displayName: displayName,
                //         email: email,
                //         emailVerified: emailVerified,
                //         phoneNumber: phoneNumber,
                //         photoURL: photoURL,
                //         uid: uid,
                //         accessToken: accessToken,
                //         providerData: providerData
                //     }, null, '  ');

                // });
                //checkUser(currentUser);

            } else {
                // User is signed out.
                document.getElementById('sign-in-status').textContent = 'Signed out';
                document.getElementById('sign-in').textContent = 'Sign in';
                document.getElementById('account-details').textContent = 'null';
            }
        }, function (error) {
            console.log(error);
        });

    };


    initApp();


    // console.log(currentUser);




});