let info = document.querySelector('.screen');
    
let showWidth = (elem) => {
  elem.innerHTML = document.body.clientWidth;
}

window.addEventListener("load", () => {
  showWidth(info);
});

window.addEventListener("resize", () => {
  showWidth(info);
})