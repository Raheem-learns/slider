const btnPrev = document.querySelector('.slide__btn-prev'),
btnNext = document.querySelector('.slide__btn-next'),
slides = document.querySelectorAll('.slide'),
dots = document.querySelectorAll('.dot'),
dotsContainer = document.querySelector('.dot__wrapper');
let index = 0;

function activeSlide (i){
    for(slide of slides){
        slide.classList.remove('slide-active')
    }
    slides[i].classList.add('slide-active')
}

function activeDots (){
    for(dot of dots){
        dot.classList.remove('dot-active')
    }
    dots[index].classList.add('dot-active')
}

function nextSlide(){
    if(index==slides.length-1){
        index=0
        activeSlide(index)
        
    }else{
        index++
        activeSlide(index)
    }
}

function prevSlide(){
    if(index==0){
        index=slides.length-1
        activeSlide(index)
    }else{
        index--
        activeSlide(index)
    }
}

btnNext.addEventListener('click',()=>{
    nextSlide(index)
    activeDots()
})
btnPrev.addEventListener('click',()=>{
    prevSlide(index)
    activeDots()
})

dots.forEach((item,indexDot)=>{
    item.addEventListener('click',()=>{
        index = indexDot
        activeSlide(index)
    })
})

