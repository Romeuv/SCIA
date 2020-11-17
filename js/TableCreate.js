"use strict";
var script_url = "https://script.google.com/macros/s/AKfycbyw_XM9GruqPOsffYAxBlY185z-lSvYqvqrCk1UeImoqRwwmX5_/exec";

function getValuesFromGoogleSheet(callback, val) {
    var email_ke = sessionStorage.getItem('email');
    switch (val) {
        case "1":
            var url = script_url + "?user=" + email_ke + "&action=read";
            break;
        case "2":
            var url = script_url + "?user=" + email_ke + "&action=pavilhao_read";
            break;
        case "3":
            var url = script_url + "?user=" + email_ke + "&action=controlo_read";
            break;
        case "4":
            var url = script_url + "?user=" + email_ke + "&action=dasboard";
            break;
        default:
    }


    var results = {
        message: "",
        data: null
    };

    $.getJSON(url, function(response) {
        results.message = 'success';
        results.data = response;
    }).fail(function() {
        results.message = 'error occurs when get values from google sheets';
    }).always(function() {
        callback(results);
    })
}

function drawTableRows(dtRows) {
    var html = '';
    if (dtRows == null || dtRows == 'undefined' || dtRows.length == 0) {
        console.log("sem dados para renderizar")
    } else {
        var html = "";
        for (var j = 0; j < dtRows.length; j++) {
            html += '<tr>';
            //var n = dtRows[j].Data;
            html += '<td>' + dtRows[j].Data + '</td>';
            html += '<td>' + dtRows[j].Time + '</td>';
            html += '<td>' + dtRows[j]['Temperature'] + '</td>';
            html += '<td>' + dtRows[j]['Humidity'] + '</td>';
            html += '<td>' + dtRows[j]['Co2'] + '</td>';
            html += '<td ><i  class="far fa-edit" ></i></td>';
            html += '<td><i class="fas fa-trash-alt"></i></td>';
            html += '<tr>'
        }
    }
    return html;
}