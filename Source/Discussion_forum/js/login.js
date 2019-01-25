/**
 * Created by Ramgopal on 13-11-2016.
 */

(function(){
    const config = {
        apiKey: "AIzaSyDNZ-L9nbmhLmBv1UaL88wl4bfHxZ5MK-0",
        authDomain: "community-forum-d0c5b.firebaseapp.com",
        databaseURL: "https://community-forum-d0c5b.firebaseio.com",
        storageBucket: "community-forum-d0c5b.appspot.com",
        messagingSenderId: "66319693061"
    };
    firebase.initializeApp(config);

    const txtEmail=document.getElementById('txtEmail');
    const txtPassword=document.getElementById('txtPassword');
    const btnLogin=document.getElementById('btnLogin');
    const btnSignup=document.getElementById('btnSignup');
    const btnLogout=document.getElementById('btnLogout');

    //login event



    function register(user) {
        const email = txtEmail.value;
        const pwd = txtPassword.value;
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email,pwd).then(function (authData) {
            console.log("success")

        }).catch(function (error) {
            console.error("Error:"+error)
        })
    };


    btnLogin.addEventListener('click', function($location) {
        const email = txtEmail.value;
        const pwd = txtPassword.value;
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email,pwd).then(function (authData) {
            console.log("registered successfully")
        }).catch(function (error) {
            console.error("Error:"+error)
        })

    });
    // firebase.auth().onAuthStateChanged(user,function () {
    //     if(user)
    //     {
    //         window.location='../index.html';
    //     }
    // })

}());