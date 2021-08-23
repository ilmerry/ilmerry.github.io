const startButton = document.querySelector(".js-start"),
    shareButton = document.querySelector(".js-share");

//미완성
function handleShareClick(){
    const tmp = document.createElement('textarea');
    tmp.value = window.location.href;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

function handleStartClick(event){
    event.preventDefault();

    const link = '/questions.html';
    location.href = link;
}

function init(){
    startButton.addEventListener("click", handleStartClick);
    shareButton.addEventListener("click", handleShareClick);
}

init();