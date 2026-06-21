let select = document.querySelector(".search-select");

function changeWidth() {
    let text = select.options[select.selectedIndex].text;
    select.style.width = `${text.length + 1}ch`;
}

select.addEventListener("change", changeWidth);
window.onload = changeWidth;
