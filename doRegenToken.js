// ZIOS_API method
function doRegenToken(){
    var url = "https://vsa-00000004-kt-object-01.zadarazios.com:8443/api/users/reset_token.json";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

       var data = '{"user":"<username>","password":"<password>","account":"<account>"}';

    xhr.send(data);
}