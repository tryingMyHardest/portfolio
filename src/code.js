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