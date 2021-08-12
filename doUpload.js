//pubURL 및 token값 기입 부탁드립니다
var pubURL = ""
var token = ""

//이미지 업로드 [PUT] 
function doUpload() {
    
    
    //파일명 확인
    var targetFile = document.getElementById("file").files[0];
    var fileName = targetFile.name;
    console.log("var fileName: " + fileName);
    
    //Public URL + 컨테이너/버킷 + 파일명
    url = pubURL + fileName;
    
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    
    // Content-Type을 통해서 동영상/이미지/텍스트 파일을 지정 해주시면 됩니다.
    // xhr.setRequestHeader("Content-Type", "text/html; charset=UTF-8"); - 텍스트일 경우
    xhr.setRequestHeader("Content-Type", "image/jpeg")
    
    // 토큰 인증
    xhr.setRequestHeader("X-Auth-Token", token);

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

    var data = targetFile;
    xhr.send(data);

    console.log("URL: " + url); 
    setTimeout(() => {  changeImg(url); }, 3000);
    
};

//이미지 표시
function changeImg(url) {

    var image = document.getElementById("displayImage");
    image.src = url;

    var downloadBtn = document.getElementById("downloadButton");
    downloadBtn.disabled = false;
    var visitURLBtn = document.getElementById("visitURLButton");
    visitURLBtn.disabled = false;
}

