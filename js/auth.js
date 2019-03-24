function showSignUp(rel){
    var signUp = document.getElementsByClassName('signUpbox')[0];
    var signIn = document.getElementsByClassName('loginbox')[0];
    signUp.style.display = "block";
    signIn.style.display = "none";
}

function showSignIn(rel){
    var signUp = document.getElementsByClassName('signUpbox')[0];
    var signIn = document.getElementsByClassName('loginbox')[0];
    signUp.style.display = "none";
    signIn.style.display = "block";
}

function login(rel){
    var logEmail = document.getElementById('logEmail').value;
    var logpassWord = document.getElementById('logpassWord').value;
//    alert(logEmail);
    if(logEmail == "" || logpassWord == ""){
       alert("type email or password");
    }else{
//        alert("scjka");
        localStorage.setItem("auth", "true");
        history.go(-1);
//        var url = window.location.href.split("view")[0];
//        alert(url + "index.html");
//        window.location.link = url + "index.html";
        
    }
}

function signUp(rel){
    var userName = document.getElementById('userName');
    var passWord = document.getElementById('passWord');
    var email = document.getElementById('email');
    var profilePic = document.getElementById('profilepic');
    if(userName == ""|| passWord == "" || email == "" || profilePic == ""){
       alert("type username or password ");
    }else{
        
    }
    
//    alert(userName,passWord,email,profilePic);
}