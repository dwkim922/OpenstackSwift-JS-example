function doDownload(){

   var pubURL = document.getElementById("userURL").value;
   var token = document.getElementById("userToken").value;
    //Content-Disposition -> Attatchment
    var downloadurl = url;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", downloadurl);

    xhr.setRequestHeader("X-Auth-Token", token);
    xhr.setRequestHeader("Content-Disposition", "attachment");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

    xhr.send();
    window.open(url);

};
