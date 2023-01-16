const panels=document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
    
}

function toggleActive(e){
    console.log(e.propertyName);//Gives two flex-grow and font-size we check if their is anything with flex in it .ie, it has growed ten we apply the open-active
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
}
panels.forEach(panel=>panel.addEventListener('click',toggleOpen));
panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive));