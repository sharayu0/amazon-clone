let select = document.querySelector(".search-select");

function changeWidth() {
    let text = select.options[select.selectedIndex].text;

    let temp = document.createElement('span');
    temp.innerHTML = text;
    temp.style.visibility = "hidden";
    temp.style.position = "absolute";
    temp.style.fontSize = "14px";

    document.body.appendChild(temp);
    select.style.width = temp.offsetWidth + 15 + "px";
    document.body.removeChild(temp);
}

select.addEventListener("change", changeWidth);
window.onload = changeWidth;