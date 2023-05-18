const change = () => {
    let details = document.querySelector('details');

    if(details.classList.contains('grow')){
        details.classList.remove('grow');
        details.classList.add("shrink");
    }else{
        details.classList.add('grow');
        details.classList.remove('shrink');
    }
}