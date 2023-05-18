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

const reveal = (button, project) => {
  let p = document.querySelector('#'+project);

  if(p.classList.contains('clamp')){
    p.classList.remove('clamp');
    button.value = 'read less';
  }else{
    p.classList.add('clamp');
    button.value = 'read more';
  }
}