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
var leftmenus = [".device-listing", ".device-monitoring", ".device-location", ".management-device", ".management-controlpanel",
    ".management-monitoring", ".management-alarms", ".management-firmware", ".integration-listing"];

$(document).ready(function(){
    leftmenus.forEach(function(entry) {
        var viewname = entry + "-view";
        $(viewname).hide();
    });
});

$(document).ready(function(){
    leftmenus.forEach(function(entry) {
        $(entry).click(function() {
            var viewname = entry + "-view";
            showOnlyThisDiv(viewname);
        });
    });
});

function showOnlyThisDiv(divname) {
    leftmenus.forEach(function(entry) {
        var viewname = entry + "-view";

        if (viewname != divname) {
            $(viewname).hide();
        }
    });
    $(divname).show();
}

