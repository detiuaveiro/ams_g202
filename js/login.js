// Checks whether the user is logged in or not
if(typeof(Storage) !== "undefined"){
    if (localStorage.getItem('ecomarket_session')){
        // Let the user pass and get session data from the storage item
        var ecomarket_user = JSON.parse(localStorage.getItem('ecomarket_session'));
    } else{
        // Send the user to the login page
        window.location.replace("/ams_g202/marketplace/login");
    }
} else{
    // Browser does not support web storage
    window.location.replace("/ams_g202/marketplace/error");
}
