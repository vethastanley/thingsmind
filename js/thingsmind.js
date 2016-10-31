/**
 * Created by VST on 31-10-2016.
 */
$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
);
$('.collapsible').collapsible();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$(document).ready(function(){
    $('ul.tabs').tabs();
    $(".deviceview").hide();
    $(".managementview").hide();
    $(".locationview").hide();
    $(".integrationview").hide();
});


$("#device").click(function() {
    $(".locationview").hide();
    $(".integrationview").hide();
    $(".managementview").hide();
    $(".deviceview").show();
});
$("#type").click(function() {
    $(".deviceview").hide();
    $(".locationview").hide();
    $(".integrationview").hide();
    $(".managementview").show();
});
$("#location").click(function() {
    $(".deviceview").hide();
    $(".integrationview").hide();
    $(".managementview").hide();
    $(".locationview").show();
});
$("#service").click(function() {
    $(".deviceview").hide();
    $(".managementview").hide();
    $(".locationview").hide();
    $(".integrationview").show();
});