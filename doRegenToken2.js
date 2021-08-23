//SWIFT method
function doRegenToken2(){
    var url = "<zios-address>:5000/v3/auth/tokens";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {

        if(this.readyState == this.HEADERS_RECEIVED) {
            var contentType = xhr.getResponseHeader("Content-Type");
            console.log(contentType);
        };
    }
    var data = '{ "auth": { "identity": { "methods": ["password"], "password": { "user": {"name": "<username>", "domain": { "id": "default" }, "password": "<password>" }} }, "scope": { "project": { "name": "<account>", "domain": { "id": "default" } } } } }';

    xhr.send(data);
}