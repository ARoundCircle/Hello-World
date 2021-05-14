
function screenChange(changeTo) {
    for (let x=0; x<screenList.length; x++) {
            hideClass(screenList[x]);
    }
    showClass(changeTo);
}

function hideClass(c) {
    var x = document.getElementsByClassName(c);
    for (var i = 0; i < x.length; i ++) {
        x[i].style.display = 'none';
    }
}

function showClass(c) {
    var x = document.getElementsByClassName(c);
    for (var i = 0; i < x.length; i ++) {
        x[i].style.display = 'initial';
    }
}