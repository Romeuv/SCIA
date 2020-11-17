var script_url = "https://script.google.com/macros/s/AKfycbyw_XM9GruqPOsffYAxBlY185z-lSvYqvqrCk1UeImoqRwwmX5_/exec";


function creat_array(creat_arr, type) {
    var type_array = new Array();
    if (creat_arr == null || creat_arr == 'undefined' || creat_arr.length == 0) {
        console.log("sem dados")
    } else {
        var html = "";
        for (var j = 0; j < creat_arr.length; j++) {
            type_array[j] = creat_arr[j][type];
        }
        return type_array;
    }
}