let elements = document.getElementsByTagName('style');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    let text = element.innerHTML;
    element.innerHTML = text.replace(/\.e([a-f0-9]{5})\{.*?\}/gi, '.e$1{background: no-repeat url(https://www.gstatic.com/chat/emoji/7h/emoji_u$1.png);height: 28px;background-size: auto 100%;width: 28px;}');

}


