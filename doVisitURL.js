function doVisitURL(){
    //Content-Disposition -> Inline
    var downloadurl = url;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", downloadurl);

    xhr.setRequestHeader("X-Auth-Token", token);
    xhr.setRequestHeader("Content-Disposition", "inline");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

    xhr.send();
    window.open(url);

};