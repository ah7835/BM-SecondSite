$(document).ready(function() {
    
    toggleNavigation();
    
});

function toggleNavigation(){
    
    var hamburger = $(".hamburger");
    var navigation = $(".header-nav-hid");
    
    hamburger.on("click", function(){
        
        $(this).toggleClass("open");
        
        navigation.toggleClass("open");
        
    });
}
