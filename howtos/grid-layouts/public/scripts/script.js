let info = document.querySelector('.screen');
    
let showWidth = (elem) => {
  elem.innerHTML = document.body.clientWidth;
}

// random gradiant color
let generateGradiant = (element) => {

  const hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
  let populate = (a) => {
    for ( var i = 0; i < 6; i++ ) {
      let x = Math.round( Math.random() * 14 );
      let y = hexValues[x];
      a += y;
    }
    return a;
  }
  
  const newColor1 = populate('#');
  const newColor2 = populate('#');
  const angle = Math.round( Math.random() * 360 );

  const gradient = `linear-gradient(${angle}deg, ${newColor1}20, ${newColor2}20)`;
  
  element.style.background = gradient;  
}

let gradiantAllElements = () => {
  const elements = document.querySelectorAll('.accent');

  for (const element of elements) {
    generateGradiant(element);
  }
}

window.addEventListener("load", () => {
  showWidth(info);
  gradiantAllElements();
});

window.addEventListener("resize", () => {
  showWidth(info);
  if (document.body.clientWidth % 10 === 0)
    gradiantAllElements();
})