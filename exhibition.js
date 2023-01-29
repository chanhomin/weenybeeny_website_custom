
var nowWidth = screen.width;
var nowHeight = screen.height;

function display_image() {
    var disImg = document.createElement("img");
    disImg.src = 'images/exhibition-background.jpg';
    disImg.width = nowWidth;
    disImg.height = nowHeight;
    disImg.alt = 'JavaScriptImage';
    var src = document.getElementById("exhibition-shop-background");
    src.appendChild(disImg);
}
function display_jelly_1_image() {
    var disImg = document.createElement("img");
    disImg.src = 'images/exhibition-background.jpg';
    disImg.width = nowWidth/7;
    disImg.height = nowHeight/7;
    disImg.alt = 'JavaScriptImage';
    var src = document.getElementById("Jelly-1");
    src.appendChild(disImg);
}
display_jelly_1_image();

function checkMenu() {
    if (yOffset > 44) {
        document.body.classList.add('local-nav-sticky');
    } else {
        document.body.classList.remove('local-nav-sticky');
    }
}
checkMenu();
function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
        if (sceneInfo[i].type === 'sticky') {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        } else if (sceneInfo[i].type === 'normal')  {
            sceneInfo[i].scrollHeight = sceneInfo[i].objs.content.offsetHeight + window.innerHeight * 0.5;
        }
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
        totalScrollHeight += sceneInfo[i].scrollHeight;
        if (totalScrollHeight >= yOffset) {
            currentScene = i;
            break;
        }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);

    const heightRatio = window.innerHeight / 1080;
    sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
    sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
}
setLayout();