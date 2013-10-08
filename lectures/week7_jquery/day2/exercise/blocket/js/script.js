/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var names = [],
    prices = [],
    totalPrice = 0;
$(function () {
    "use strict";
    $(".item_link").each(function () {
        names.push($(this).text());
    });
    $(".list_price").each(function () {
        totalPrice = totalPrice + Number($(this).text().trim().replace(":-", "").replace(/\s/g, ""));
    });
});