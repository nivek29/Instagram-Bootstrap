$(document).ready(function(){
    
    $("#bleft").on('click', function() {
        $("#left").show();
        $("#right").hide();
        return false;
    });
    $("#bright").on('click', function() {
        $("#left").hide();
        $("#right").show();
        return false;
    });
});
