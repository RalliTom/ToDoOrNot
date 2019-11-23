// upon startup create database
$(document).on("ready", function () {
    databaseHandler.createDatabase();
    taskDbHandler.createDatabase();
});

// Adds user when they click register button
function addUser() {
    var email = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    // Alerts if email is missing else its adds user and closes register menu
    if (!email) {
        alert("Username is required");
    } else {
        var r = confirm("Register?" + "\n" + "Email: " + email + "\n" + "Password: ")
        if (r == true) {
            userHandler.addUser(email, password);
            $("txtEmail").val("");
            $("txtPassword").val("");
        }
        closeMenu('registerMenu')
    }
}

// When user clicks login button 
function login() {
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    var userid = "" + email + password;

    // call getUser in userHandler
    userHandler.getUser(userid);
}

// Remove credentials from localStorage and open login page
function logout() {
    window.localStorage.removeItem("user");
    location.reload('index');
}
