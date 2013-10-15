/*global define */
define([], function () {
    'use strict';

    $('input').keyup(function () {
        var url = 'https://www.facebook.com/dialog/pagetab?' +
            'app_id=' + $('input.appid').val() + '&' +
            'redirect_uri=' + encodeURIComponent($('input.uri').val());
        $('#pagetab_uri').html('<p><a href="' + url + '" target="_blank">' + url + '</a></p>');
    });
});