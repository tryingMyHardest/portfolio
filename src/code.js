var title = document.querySelector(".title");

window.onscroll = function () {handleScroll()};

const handleScroll = () => {
   if (document.body.scrollTop > visualViewport.height || document.documentElement.scrollTop > visualViewport.height) {
     title.classList.add("display");
   } else {
    title.classList.remove("display");
   }
 }




const callback = (entries, observer) => {
  entries.forEach(entry => {
    const circles = document.querySelector(".circles");
    if(entry.isIntersecting){
      let i = 1;
      for(const child of circles.children){
        if(i%2 == 0){
          child.classList.add("bubbleEven");
        }else{
          child.classList.add("bubbleOdd");
        }
        i+=1;
      }
    }else{
      let i = 1;
      for(const child of circles.children){
        if(i%2 == 0){
          child.classList.remove("bubbleEven");
        }else{
          child.classList.remove("bubbleOdd");
        }
        i+=1;
      }
    }
  })
}

let observer = new IntersectionObserver(callback);

observer.observe(document.querySelector('header'));


const change = (button) => {
  let file = button.value;
  let iframe = document.querySelector(".github-iframe");

  switch(file){
    case 'Horizontal Scroll': iframe.setAttribute('src', 'projects/horizontal-scroll/index.html');
      break;
    case 'Text Animations': iframe.setAttribute('src', 'projects/text-animations/index.html');
      break;
    case 'Details Animations': iframe.setAttribute('src', 'projects/animate-details/index.html');
  }
}

var list = document.getElementsByClassName("code-list");


for(let i = 0; i < list.length; i++){
  console.log(list[i]);
  setTimeout(function() {
    list[i].classList.add("color-change");
  }, 250*i);
}

const menu = () => {
  let menu = document.querySelector(".menu");
  let burger = document.querySelector(".burger");

  menu.classList.toggle("menu-display");
  burger.classList.toggle("open");
}