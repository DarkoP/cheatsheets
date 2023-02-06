let info = document.querySelector('.screen-info');
    
let showWidth = (elem) => {
  elem.innerHTML = document.body.clientWidth;
}

window.addEventListener("load", () => {
  showWidth(info);
});

window.addEventListener("resize", () => {
  showWidth(info);
})