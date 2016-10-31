/**
 * Created by VST on 31-10-2016.
 */

var leftmenus = [".device-listing", ".device-monitoring", ".device-location", ".management-device", ".management-controlpanel",
    ".management-monitoring", ".management-alarms", ".management-firmware", ".integration-listing", ".edit-device", ".one-device",
    ".one-device-info", ".one-device-child", ".one-device-healthcheck", ".one-device-monitor"];

$(document).ready(function(){
    $('.button-collapse').sideNav({
            menuWidth: 240 // Default is 240
        }
    );
    $('.collapsible').collapsible();

    hideAll(leftmenus);

    leftmenus.forEach(function(entry) {
        $(entry).click(function() {
            hideAll(leftmenus);
            var viewname = entry + "-view";
            $(viewname).show();
        });
    });
});

function hideAll(menus) {
    menus.forEach(function(entry) {
        var viewname = entry + "-view";
        $(viewname).hide();
    });
}

