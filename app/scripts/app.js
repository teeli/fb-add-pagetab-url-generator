/*global define */
define([], function () {
    'use strict';

    var updateURL = function () {
        var appId = $('input.appid').val();
        var uri = $('input.uri').val() || 'http://www.facebook.com/';
        var url = 'https://www.facebook.com/dialog/pagetab?' +
            'app_id=' + appId + '&' +
            'redirect_uri=' + encodeURIComponent(uri);
        $('#pagetab_uri').html('<p><a href="' + url + '" target="_blank">' + url + '</a></p>');
    };

    $('input').keyup(updateURL);
    updateURL();
});